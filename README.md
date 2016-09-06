# PokeRare <a href="https://www.npmjs.com/package/pokerare"><img src="https://img.shields.io/npm/v/pokerare.svg?style=flat-square" alt="NPM Version" /></a>

Get rarity levels of Gen I pokemons.

## Install

```
$ npm install --save pokerare
```

## Usage
````js
const rare = require("pokerare");

rare.getRarity(150); // pkmn object with id and rarity level
rare.getPkmnByRarity(255, 255); // array of most common pkmn
````

## API

### .getRarity(id: number) => object

Get rarity of a pokemon by its national dex id.

````js
rare.getRarity(150);
````
#### Result:
````js
{
  id: 150,
  rarity: 3
}
````

### .getPkmnByRarity(from: number, to: number) => array

Get pokemon from rarity range.

````js
rare.getPkmnByRarity(255, 255);
````
#### Result:
````js
[
  { id: 10, rarity: 255 },
  { id: 13, rarity: 255 },
  { id: 16, rarity: 255 },
  ...
]
````
