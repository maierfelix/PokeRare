"use strict";

const fs = require("fs");

let data = require("./data.js");

/**
 * @param {Number} value
 * @param {Number} from
 * @param {Number} to
 * @return {Boolean}
 */
function between(value, from, to) {
  return (
    value >= from && value <= to
  );
}

/**
 * @param {Number} index
 * @return {Object}
 */
function getRarity(index) {

  index = index || 0;
  index <<= 0;

  let ii = 0;
  let length = data.length;

  let pkmn = null;

  for (; ii < length; ++ii) {
    pkmn = data[ii];
    if (pkmn.id === index) return (pkmn);
  };

  return (null);

};

/**
 * @param {Number} from
 * @param {Number} to
 * @return {Array}
 */
function getPkmnByRarity(from, to) {

  let ii = 0;
  let length = data.length;

  let out = [];
  let pkmn = null;

  for (; ii < length; ++ii) {
    pkmn = data[ii];
    if (!between(pkmn.rarity, from, to)) continue;
    out.push(pkmn);
  };

  return (out);

};

module.exports = {
  getRarity: getRarity,
  getPkmnByRarity: getPkmnByRarity
};