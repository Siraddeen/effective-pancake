// Modules

// 1)  CommonJS , every file is module (by default)      2) Modules -  encapsulated code   (only share minimum )

const namess = require("./4-names");
const hi = require("./5-utils");
const data = require("./6-alternative-flavour");

require("./7-mind-grenade");

hi(namess.ks);
hi(namess.la);
hi("nort");
