const codes = {
  // No Error
  SUCCESS: '00000000',
  INVALID_INPUT: '01000000',

  // Condition Error 02000000 - 02009999
  USER_OCCUPATION: '02000000',
  USER_NOT_FOUND: '02000001',
  ACCOUNT_TOKEN_EXIST: '02000002',

  // Authorization Error 03000000 - 03009999
  INVALID_ACCESS_TOKEN: '03000000',
  EXPIRED_ACCESS_TOKEN: '03000001',
  INVALID_ACCESS_TOKEN_SECRET: '03000002',
  EXPIRED_ACCESS_TOKEN_SECRET: '03000003',
  INVALID_SIGNATURE: '03000004',

  // Resource Not Found Error 04000000 - 04009999
  BLOCKCHAIN_ID_NOT_FOUND: '04000000',
  CURRENCY_ID_NOT_FOUND: '04000001',
  BLOCKCHAIN_HAS_NOT_TOKEN: '04000002',
  TOKEN_ID_NOT_FOUND: '04000003',
  ACCOUNT_NOT_FOUND: '04000004',
  TX_NOT_FOUND: '04000005',
  CONTRACT_CONT_FOUND: '04000005',
  BLOCKCHAIN_NOT_SUPPORT: '04000006',
  BLOCK_NOT_FOUND: '04000007',
  ADDRESS_NOT_FOUND: '04000008',

  // Processing Error (Caught Exception) 05000000 - 05009999
  DB_ERROR: '05000000',
  PUBLISH_TX_ERROR: '05000001',
  RPC_ERROR: '05000002',

  // Uncaught Exception or Unknown Error 09000000
  UNKNOWN_ERROR: '09000000',
};

module.exports = codes;