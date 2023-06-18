export type PokemonType =
  | 'Normal'
  | 'Fire'
  | 'Water'
  | 'Grass'
  | 'Electric'
  | 'Ice'
  | 'Fighting'
  | 'Poison'
  | 'Ground'
  | 'Flying'
  | 'Psychic'
  | 'Bug'
  | 'Rock'
  | 'Ghost'
  | 'Dark'
  | 'Dragon'
  | 'Steel'
  | 'Fairy';

export interface PokemonTypeDetail {
  superEffective: PokemonType[];
  notVeryEffective: PokemonType[];
  ineffective: PokemonType[];
}

export type TypeEffect =
  | 'Super effective'
  | 'Not very effective'
  | 'Ineffective'
  | 'Effective'
  | 'Weak'
  | 'Resists'
  | 'Immune';

export type DamageMultiplier = '(x2)' | '(x0.5)' | '(x0)';

export type DetailType = 'Offense' | 'Defense';

export type ResistanceDetail = {
  weak: PokemonType[];
  resists: PokemonType[];
  immune: PokemonType[];
};

export type PokemonName =
  | 'Bulbasaur'
  | 'Ivysaur'
  | 'Venusaur'
  | 'Charmander'
  | 'Charmeleon'
  | 'Charizard'
  | 'Squirtle'
  | 'Wartortle'
  | 'Blastoise'
  | 'Caterpie'
  | 'Metapod'
  | 'Butterfree'
  | 'Weedle'
  | 'Kakuna'
  | 'Beedrill'
  | 'Pidgey'
  | 'Pidgeotto'
  | 'Pidgeot'
  | 'Rattata'
  | 'Raticate'
  | 'Spearow'
  | 'Fearow'
  | 'Ekans'
  | 'Arbok'
  | 'Pikachu'
  | 'Raichu'
  | 'Sandshrew'
  | 'Sandslash'
  | 'Nidoran♀'
  | 'Nidorina'
  | 'Nidoqueen'
  | 'Nidoran♂'
  | 'Nidorino'
  | 'Nidoking'
  | 'Clefairy'
  | 'Clefable'
  | 'Vulpix'
  | 'Ninetales'
  | 'Jigglypuff'
  | 'Wigglytuff'
  | 'Zubat'
  | 'Golbat'
  | 'Oddish'
  | 'Gloom'
  | 'Vileplume'
  | 'Paras'
  | 'Parasect'
  | 'Venonat'
  | 'Venomoth'
  | 'Diglett'
  | 'Dugtrio'
  | 'Meowth'
  | 'Persian'
  | 'Psyduck'
  | 'Golduck'
  | 'Mankey'
  | 'Primeape'
  | 'Growlithe'
  | 'Arcanine'
  | 'Poliwag'
  | 'Poliwhirl'
  | 'Poliwrath'
  | 'Abra'
  | 'Kadabra'
  | 'Alakazam'
  | 'Machop'
  | 'Machoke'
  | 'Machamp'
  | 'Bellsprout'
  | 'Weepinbell'
  | 'Victreebel'
  | 'Tentacool'
  | 'Tentacruel'
  | 'Geodude'
  | 'Graveler'
  | 'Golem'
  | 'Ponyta'
  | 'Rapidash'
  | 'Slowpoke'
  | 'Slowbro'
  | 'Magnemite'
  | 'Magneton'
  | 'Farfetch'
  | 'Doduo'
  | 'Dodrio'
  | 'Seel'
  | 'Dewgong'
  | 'Grimer'
  | 'Muk'
  | 'Shellder'
  | 'Cloyster'
  | 'Gastly'
  | 'Haunter'
  | 'Gengar'
  | 'Onix'
  | 'Drowzee'
  | 'Hypno'
  | 'Krabby'
  | 'Kingler'
  | 'Voltorb'
  | 'Electrode'
  | 'Exeggcute'
  | 'Exeggutor'
  | 'Cubone'
  | 'Marowak'
  | 'Hitmonlee'
  | 'Hitmonchan'
  | 'Lickitung'
  | 'Koffing'
  | 'Weezing'
  | 'Rhyhorn'
  | 'Rhydon'
  | 'Chansey'
  | 'Tangela'
  | 'Kangaskhan'
  | 'Horsea'
  | 'Seadra'
  | 'Goldeen'
  | 'Seaking'
  | 'Staryu'
  | 'Starmie'
  | 'Mr. Mime'
  | 'Scyther'
  | 'Jynx'
  | 'Electabuzz'
  | 'Magmar'
  | 'Pinsir'
  | 'Tauros'
  | 'Magikarp'
  | 'Gyarados'
  | 'Lapras'
  | 'Ditto'
  | 'Eevee'
  | 'Vaporeon'
  | 'Jolteon'
  | 'Flareon'
  | 'Porygon'
  | 'Omanyte'
  | 'Omastar'
  | 'Kabuto'
  | 'Kabutops'
  | 'Aerodactyl'
  | 'Snorlax'
  | 'Articuno'
  | 'Zapdos'
  | 'Moltres'
  | 'Dratini'
  | 'Dragonair'
  | 'Dragonite'
  | 'Mewtwo'
  | 'Mew';

export type PokemonDetail = {
  name: PokemonName;
  typeOne: PokemonType;
  typeTwo: PokemonType | null;
};
