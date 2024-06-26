const Sentry = {
  config: () => ({ install: jest.fn() }),
  setTagsContext: jest.fn(),
  captureException: jest.fn(),
  captureMessage: jest.fn(),
  ReactNavigationInstrumentation: jest.fn().mockImplementation(() => ({})),
  Severity: {
    Error: 'error',
  },
  startTransaction: jest.fn(),
}

module.exports = Sentry
