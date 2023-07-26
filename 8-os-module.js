const os = require("os"); // where 'os' is built in function  so we do not usw ./ infront of them

// info about current user
const user = os.userInfo();
console.log(user);

// method  returns  system running time in seconds

console.log(`The system uptime is ${os.uptime} seconds`);

// for viewing multiple info @ same time

const ao = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freememory: os.freemem(),
};
console.log(ao);
