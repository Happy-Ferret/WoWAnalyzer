import React from 'react';

import { Gebuz, joshinator, Yajinni } from 'CONTRIBUTORS';
import Wrapper from 'common/Wrapper';
import ItemLink from 'common/ItemLink';
import ITEMS from 'common/ITEMS';
import SPELLS from 'common/SPELLS';
import SpellLink from 'common/SpellLink';

export default [
  {
    date: new Date('2018-03-24'),
    changes: <Wrapper>Check for bad casts during <SpellLink id={SPELLS.DANCING_RUNE_WEAPON.id} /> and intital <SpellLink id={SPELLS.MARROWREND.id} /> cast without <SpellLink id={SPELLS.DANCING_RUNE_WEAPON.id} />.</Wrapper>,
    contributors: [joshinator],
  },
  {
    date: new Date('2018-03-22'),
    changes: <Wrapper>Added <SpellLink id={SPELLS.BONESTORM_TALENT.id} />-Module to track bad casts</Wrapper>,
    contributors: [joshinator],
  },
  {
    date: new Date('2018-03-17'),
    changes: <Wrapper>Updated the <SpellLink id={SPELLS.BONE_SHIELD.id} />-Module.</Wrapper>,
    contributors: [joshinator],
  },
  {
    date: new Date('2018-03-15'),
    changes: <Wrapper>Added Relic-Module.</Wrapper>,
    contributors: [joshinator],
  },
  {
    date: new Date('2018-03-14'),
    changes: <Wrapper>Added <SpellLink id={SPELLS.SOULDRINKER_TRAIT.id} />-Module to track the average HP-bonus.</Wrapper>,
    contributors: [joshinator],
  },
  {
    date: new Date('2018-03-11'),
    changes: <Wrapper>Added <SpellLink id={SPELLS.MARROWREND.id} />-Module to track bad casts</Wrapper>,
    contributors: [joshinator],
  },
  {
    date: new Date('2018-03-10'),
    changes: <Wrapper>Made <SpellLink id={SPELLS.OSSUARY_TALENT.id} />-Module more detailed by adding a RP counter</Wrapper>,
    contributors: [joshinator],
  },
  {
    date: new Date('2018-03-10'),
    changes: <Wrapper>Added <SpellLink id={SPELLS.DEATH_STRIKE.id} /> Timing plot</Wrapper>,
    contributors: [joshinator],
  },
  {
    date: new Date('2018-03-04'),
    changes: 'Added Tier 21 bonuses.',
    contributors: [Gebuz],
  },
  {
    date: new Date('2018-02-17'),
    changes: <Wrapper>Added cooldown reduction from <SpellLink id={SPELLS.RED_THIRST_TALENT.id} />.</Wrapper>,
    contributors: [Gebuz],
  },
  {
    date: new Date('2018-02-14'),
    changes: <Wrapper>Updated the checklist and added Rune efficiency, <SpellLink id={SPELLS.DEATH_AND_DECAY.id} /> and <SpellLink id={SPELLS.BLOOD_TAP_TALENT.id} /> to it.</Wrapper>,
    contributors: [Gebuz],
  },
  {
    date: new Date('2018-01-27'),
    changes: 'Added overcapped Runes.',
    contributors: [Gebuz],
  },
  {
    date: new Date('2018-01-22'),
    changes: <Wrapper>Large rework of listing abilities. Updated thier GCD/CD status. Most abilities now show in the time line and cast efficiency tabs. Updated the checklist.</Wrapper>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-01-22'),
    changes: <Wrapper>Implemented <ItemLink id={ITEMS.SHACKLES_OF_BRYNDAOR.id} /> Blood wrist legendary.</Wrapper>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-01-21'),
    changes: <Wrapper>Updates to Downtime/ABC ratios.</Wrapper>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-01-21'),
    changes: <Wrapper>Implemented <ItemLink id={ITEMS.SKULLFLOWERS_HAEMOSTASIS.id} /> Blood shoulder legendary.</Wrapper>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-01-21'),
    changes: <Wrapper>Reworked the <SpellLink id={SPELLS.UNENDING_THIRST.id} /> Module.</Wrapper>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-01-20'),
    changes: <Wrapper>Implemented <ItemLink id={ITEMS.AGGRAMARS_CONVICTION.id} /> Pantheon Tank trinket.</Wrapper>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2017-12-26'),
    changes: <Wrapper>Implemented the new Checklist format.</Wrapper>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2017-11-19'),
    changes: <Wrapper>Added tracking for <SpellLink id={SPELLS.UNENDING_THIRST.id} /> / Empowered Death Strikes.</Wrapper>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2017-10-23'),
    changes: <Wrapper>Filtered some unnecessary spells from the Cooldown Tab.</Wrapper>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2017-10-03'),
    changes: <Wrapper>Updated cast efficency ratios and text. Added <SpellLink id={SPELLS.VAMPIRIC_BLOOD.id} /> and <SpellLink id={SPELLS.DANCING_RUNE_WEAPON.id} /> to the Cooldown Tab for further analysis.</Wrapper>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2017-09-14'),
    changes: <Wrapper>Added runic power graphs/table.</Wrapper>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2017-09-12'),
    changes: <Wrapper>Added Tier 20 2pc and 4pc tracking. Talent checking/filtering.</Wrapper>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2017-09-09'),
    changes: <Wrapper>Added <SpellLink id={SPELLS.BLOODDRINKER_TALENT.id} />r tracking.</Wrapper>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2017-09-07'),
    changes: <Wrapper>Updated haste calculates for spells. Added <SpellLink id={SPELLS.BONE_SHIELD.id} /> haste buff.</Wrapper>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2017-09-04'),
    changes: <Wrapper>Initial Blood Death Knight.</Wrapper>,
    contributors: [Yajinni],
  },
];
