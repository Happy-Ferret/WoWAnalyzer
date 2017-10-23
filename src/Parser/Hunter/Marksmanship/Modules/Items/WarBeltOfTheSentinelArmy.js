import React from 'react';

import ITEMS from 'common/ITEMS';
import SPELLS from 'common/SPELLS';

import Module from 'Parser/Core/Module';
import Combatants from 'Parser/Core/Modules/Combatants';
import { formatNumber, formatPercentage } from 'common/format';
import SpellLink from 'common/SpellLink';
import getDamageBonus from "Parser/Hunter/Shared/Core/getDamageBonus";


const MAX_STACKS = 20;
const WARBELT_OF_THE_SENTINEL_ARMY_DAMAGE_BONUS = 0.1;

class WarBeltOfTheSentinelArmy extends Module {
  static dependencies = {
    combatants: Combatants,
  };

  _currentStacks = 0;
  usedBeltStacks = 0;
  unCappedBeltStacks = 0;
  cappedBeltStacks = 0;
  totalBeltStacks = 0;
  bonusDmg = 0;

  on_initialized() {
    this.active = this.combatants.selected.hasWaist(ITEMS.WAR_BELT_OF_THE_SENTINEL_ARMY.id);
  }

  on_byPlayer_applybuff(event) {
    const buffId = event.ability.guid;
    if (buffId !== SPELLS.SENTINELS_SIGHT.id) {
      return;
    }
    this._currentStacks += 1;
    this.unCappedBeltStacks += 1;
    this.totalBeltStacks += 1;
  }

  on_byPlayer_applybuffstack(event) {
    const buffId = event.ability.guid;
    if (buffId !== SPELLS.SENTINELS_SIGHT.id) {
      return;
    }
    this._currentStacks += 1;
    this.unCappedBeltStacks += 1;
    this.totalBeltStacks += 1;

  }

  on_byPlayer_damage(event) {
    const spellId = event.ability.guid;
    const beltModifier = WARBELT_OF_THE_SENTINEL_ARMY_DAMAGE_BONUS * this._currentStacks;
    if (!this.combatants.selected.hasBuff(SPELLS.SENTINELS_SIGHT.id, event.timestamp)) {
      return;
    }
    if (spellId === SPELLS.AIMED_SHOT.id) {
      this.bonusDmg += getDamageBonus(event, beltModifier);
      this.usedBeltStacks += this._currentStacks;
      this._currentStacks = 0;
    }

    if (spellId === SPELLS.MULTISHOT.id && this._currentStacks === MAX_STACKS) {
      this.cappedBeltStacks += 1;
      this.totalBeltStacks += 1;
    }

  }

  suggestions(when) {
    const percentCappedStacks = formatPercentage(this.cappedBeltStacks / this.totalBeltStacks);
    const percentUnusedStacks = (this.totalBeltStacks - this.usedBeltStacks) / this.totalBeltStacks;
    when(percentCappedStacks).isGreaterThan(0)
      .addSuggestion((suggest, actual, recommended) => {
        return suggest(<span>You lost out on {this.cappedBeltStacks} (or {percentCappedStacks}% of total stacks) belt stacks because you were capped. You should try and avoid this by shooting off an <SpellLink id={SPELLS.AIMED_SHOT.id} /> when you're at, or close to, 20 stacks.</span>)
          .icon(ITEMS.WAR_BELT_OF_THE_SENTINEL_ARMY.icon)
          .actual(`${this.cappedBeltStacks} or ${percentCappedStacks}% of total stacks were wasted due to overcapping`)
          .recommended(`${recommended}% wasted stacks is recommended, unless it's heavy AoE`)
          .regular(2)
          .major(5);
      });
    when(percentUnusedStacks).isGreaterThan(0)
      .addSuggestion((suggest, actual, recommended) => {
        return suggest(<span>You finished the encounter with {this.totalBeltStacks - this.usedBeltStacks} stacks unused, try and utilise all of your stacks to get the most out of your hardest hitting ability, <SpellLink id={SPELLS.AIMED_SHOT.id} /> and to maximise the potency of this legendary.</span>)
          .icon(ITEMS.WAR_BELT_OF_THE_SENTINEL_ARMY.icon)
          .actual(`${formatPercentage(percentUnusedStacks)}% of total stacks were unused`)
          .recommended(`${formatPercentage(recommended, 0)}% unused stacks is recommended`)
          .regular(recommended - 0.02)
          .major(recommended - 0.05);
      });
  }

  item() {
    return {
      item: ITEMS.WAR_BELT_OF_THE_SENTINEL_ARMY,
      result: (
        <dfn data-tip={`You gained ${this.unCappedBeltStacks} stacks and wasted ${this.cappedBeltStacks} through capping. <br /> Try and avoid this if you can, as each stack buffs Aimed Shot damage by 10%, leading you to effectively having lost out on damage equivalent to ${this.cappedBeltStacks / 10} Aimed Shots. <br />You used ${formatPercentage(this.usedBeltStacks / this.totalBeltStacks)}% of gained stacks. Try and utilise all of your gained belt stacks, so as to not let the buff expire or let the fight end before you can gain the damage benefit.`}>
          {formatNumber(this.bonusDmg)} - {this.owner.formatItemDamageDone(this.bonusDmg)}
        </dfn>
      ),
    };
  }
}

export default WarBeltOfTheSentinelArmy;