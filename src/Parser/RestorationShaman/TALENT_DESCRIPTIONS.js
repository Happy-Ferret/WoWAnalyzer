import React from 'react';

import SPELLS from 'common/SPELLS';
// import SpellLink from 'common/SpellLink';

export default {
  descriptions: {
    [SPELLS.UNDULATION_TALENT.id]: <span>Undulation is decent choice if you will be casting a lot of <a href="http://www.wowhead.com/spell=77472" target="_blank" rel="noopener noreferrer">Healing Waves</a> or <a href="http://www.wowhead.com/spell=188070" target="_blank" rel="noopener noreferrer">Healing Surges</a>.</span>,
    [SPELLS.UNLEASH_LIFE_TALENT.id]: <span>Unleash Life works well with <a href="http://www.wowhead.com/spell=1064" target="_blank" rel="noopener noreferrer">Chain Heal</a>, and in particular has good synergy with <a href="http://www.wowhead.com/item=137051" target="_blank" rel="noopener noreferrer">Focuser of Jonat, the Elder</a>.</span>,
    [SPELLS.TORRENT_TALENT.id]: <span>The default choice in this tier. Increases the initial heal from <a href="http://www.wowhead.com/spell=61295" target="_blank" rel="noopener noreferrer">Riptide</a>, which you will typically be casting a lot.</span>,
    [SPELLS.GUST_OF_WIND_TALENT.id]: <span>Can be useful in specific situations, but the typically not worth giving up <a href="http://www.wowhead.com/spell=192088" target="_blank" rel="noopener noreferrer">Graceful Spirit</a> for.</span>,
    [SPELLS.GRACEFUL_SPIRIT_TALENT.id]: <span>The default choice in this tier, especially potent with the <a href="http://www.wowhead.com/spell=238071" target="_blank" rel="noopener noreferrer">Tidewalker</a> artifact trait.</span>,
    [SPELLS.WIND_RUSH_TOTEM_TALENT.id]: <span>Can be useful on specific encounters to give your entire raid movement speed.</span>,
    [SPELLS.LIGHTNING_SURGE_TOTEM_TALENT.id]: <span>The default choice in this tier, given that most enemies in raids are immune to roots and hex.</span>,
    [SPELLS.EARTHGRAB_TOTEM_TALENT.id]: <span>Not recommended for raids, as most enemies will be immune.</span>,
    [SPELLS.VOODOO_TOTEM_TALENT.id]: <span>Not recommended for raids, as most enemies will be immune.</span>,
    [SPELLS.CRASHING_WAVES_TALENT.id]: <span>Not recommended in raids. Between <a href="http://www.wowhead.com/spell=61295" target="_blank" rel="noopener noreferrer">Riptide</a> and <a href="http://www.wowhead.com/spell=1064" target="_blank" rel="noopener noreferrer">Chain Heal</a> you'll be generating plenty of <a href="http://www.wowhead.com/spell=53390" target="_blank" rel="noopener noreferrer">Tidal Waves</a> charges, and it can be hard to spend all of them. Additionally, <a href="http://www.wowhead.com/spell=108281" target="_blank" rel="noopener noreferrer">Ancestral Guidance</a> is in most cases just too strong to give up.</span>,
    [SPELLS.ANCESTRAL_GUIDANCE_TALENT.id]: <span>The default choice in this tier. Can generate incredible throughput, especially when combined with <a href="http://www.wowhead.com/spell=157153" target="_blank" rel="noopener noreferrer">Cloudburst Totem</a> and/or <a href="http://www.wowhead.com/spell=114052" target="_blank" rel="noopener noreferrer">Ascendance</a>.</span>,
    [SPELLS.DELUGE_TALENT.id]: <span>Can be decent in fights where the entire raid will be stacked in your <a href="http://www.wowhead.com/spell=73920" target="_blank" rel="noopener noreferrer">Healing Rain</a> most of the time, but usually <a href="http://www.wowhead.com/spell=108281" target="_blank" rel="noopener noreferrer">Ancestral Guidance</a> will pull ahead.</span>,
    [SPELLS.ANCESTRAL_PROTECTION_TOTEM_TALENT.id]: <span>Useful on certain fights where you can cheese mechanics with the resurection, or on fights where you need the 10% additional health to survive a mechanic.</span>,
    [SPELLS.EARTHEN_SHIELD_TOTEM_TALENT.id]: <span>Provides decent throughput, and is very efficient. It's unlikely to actually save people from lethal damage, though.</span>,
    [SPELLS.ANCESTRAL_VIGOR_TALENT.id]: <span>A solid choice. Doesn't provide any throughput, but the 10% additional health could end up saving someone.</span>,
    [SPELLS.BOTTOMLESS_DEPTHS_TALENT.id]: <span>Not recommended. The mana return it provides isn't significant enough to pick it.</span>,
    [SPELLS.CLOUDBURST_TOTEM_TALENT.id]: <span>Cloudburst Totem will in almost all encounters provide the most throughput when used correctly (see the <a href="https://chainheal.com/resto-shaman-guide-on-how-to-maximize-cloudburst-totem-cbt/">cloudburst totem guide</a> on <a href="http://chainheal.com">ChainHeal.com</a>). Extremely strong synergy with <a href="http://www.wowhead.com/spell=108281" target="_blank" rel="noopener noreferrer">Ancestral Guidance</a> and <a href="http://www.wowhead.com/spell=114052" target="_blank" rel="noopener noreferrer">Ascendance</a>.</span>,
    [SPELLS.ECHO_OF_THE_ELEMENTS_TALENT.id]: <span>Can be strong for certain damage patterns and easier to play than <a href="http://www.wowhead.com/spell=157153" target="_blank" rel="noopener noreferrer">Cloudburst Totem</a>, though will usually give less throughput. In particular this will help your single-target healing a fair bit. Also has good synergy with the T19 4P bonus.</span>,
    [SPELLS.ASCENDANCE_TALENT.id]: <span>Should almost always be combined with <a href="http://www.wowhead.com/spell=157153" target="_blank" rel="noopener noreferrer">Cloudburst Totem</a>. Provides you with an additional healing cooldown, or when combined with <a href="http://www.wowhead.com/spell=108281" target="_blank" rel="noopener noreferrer">Ancestral Guidance</a> makes for what is probably the strongest healing cooldown in the game. Does require proper planning to get value.</span>,
    [SPELLS.WELLSPRING_TALENT.id]: <span>Currently not recommended. Heals too little for too much mana.</span>,
    [SPELLS.HIGH_TIDE_TALENT.id]: <span>The default choice in this tier. Greatly increases the throughput from <a href="http://www.wowhead.com/spell=1064" target="_blank" rel="noopener noreferrer">Chain Heal</a>, which you should be casting a lot if you run this talent.</span>,
  },
  // attribution: <span>Parts of the descriptions for talents came from the <a href="http://www.wowhead.com/holy-paladin-talent-guide" target="_blank" rel="noopener noreferrer">Holy Paladin Wowhead guide</a> by Pelinal.</span>,
};