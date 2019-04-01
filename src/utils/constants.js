let constants = {}

constants.organization = 'makerdao'
constants.repoName = 'poa-chain-spec'
constants.addressesSourceFile = 'contracts.json'
constants.ABIsSources = {
  KeysManager: 'KeysManager.abi.json'
}
constants.userDeniedTransactionPattern = 'User denied transaction'
constants.baseURL = '/poa-dapps-keys-generation'

constants.NETWORKS = {
  '176': {
    NAME: 'Maker',
    BRANCH: 'maker',
    TESTNET: true
  }
}

module.exports = {
  constants
}
