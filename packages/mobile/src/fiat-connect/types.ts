interface Quote {
  fiatType: FiatType
  cryptoType: string
  fiatAmount?: number
  cryptoAmount?: number
  region: string
}

enum FiatType {
  USD = 'USD',
  EUR = 'EUR',
}

enum CryptoType {
  cUSD = 'cUSD',
  cEUR = 'cEUR',
  CELO = 'CELO',
}

enum KycSchema {}
// TODO

enum FeeType {
  KYCFee = 'KYCFee',
  PlatformFee = 'PlatformFee',
}

enum FeeFrequency {
  OneTime = 'OneTime',
  Recurring = 'Recurring',
}

enum FiatAccountType {
  CheckingAccount = 'CheckingAccount',
  DebitCard = 'DebitCard',
  CreditCard = 'CreditCard',
}

enum FiatAccountSchema {}
// TODO

enum TransferType {
  TransferIn = 'TransferIn',
  TransferOut = 'TransferOut',
}

enum TransferStatus {
  TransferStarted = 'TransferStarted',
  TransferPending = 'TransferPending',
  TransferComplete = 'TransferComplete',
  TransferFailed = 'TransferFailed',
}

enum WebhookEventType {
  // NOTE: if we use these we should update the spec (which has 'webhook' prefix for all of these)
  KYCStatusEvent = 'KYCStatusEvent',
  TransferInStatusEvent = 'TransferInStatusEvent',
  TransferOutStatusEvent = 'TransferOutStatusEvent',
}

enum FCError {
  GeoNotSupported = 'GeoNotSupported',
  CryptoAmountTooLow = 'CryptoAmountTooLow',
  CryptoAmountTooHigh = 'CryptoAmountTooHigh',
  FiatAmountTooLow = 'FiatAmountTooLow',
  FiatAmountTooHigh = 'FiatAmountTooHigh',
  CryptoNotSupported = 'CryptoNotSupported',
  FiatNotSupported = 'FiatNotSupported',
  UnsupportedSchema = 'UnsupportedSchema',
  InvalidSchema = 'InvalidSchema',
  ResourceExists = 'ResourceExists',
  ResourceNotFound = 'ResourceNotFound',
  TransferNotAllowed = 'TransferNotAllowed',
  KYCExpired = 'KYCExpired',
}
