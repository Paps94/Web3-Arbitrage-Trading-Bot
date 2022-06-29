require('babel-register');
require('babel-polyfill');

/**
 * This is to talk to our Ganache local enviroment (which is a snippet of the mainnet)
 */
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }
  },

  compilers: {
    solc: {
      version: '0.8.9',
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};