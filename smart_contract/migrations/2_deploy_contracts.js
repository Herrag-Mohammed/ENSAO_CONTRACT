var AntProver = artifacts.require("./AntProver.sol");

module.exports = function(deployer) {
  deployer.deploy(AntProver);
};