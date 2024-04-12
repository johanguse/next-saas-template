/**
 * Find all errors here : https://authjs.dev/reference/core/errors
 * It's UX friendly message for each error.
 */
export const AUTH_ERRORS: Record<string, string> = {
  AccountNotLinked:
    'Your email is already used with another account. Please sign in with the account originally linked to this email.',
  AdapterError:
    'A technical issue occurred while processing your request. Please try again later.',
  AuthError:
    'A general authentication error occurred. Please try again or contact support if the issue persists.',
  AuthorizedCallbackError:
    "We couldn't log you in. Please check your login details and try again.",
  CallbackRouteError:
    'Login failed due to a technical issue. Please try again or contact support for assistance.',
  CredentialsSignin:
    'Invalid login details. Please check your information and try again.',
  DuplicateConditionalUI:
    'A configuration error occurred. Please contact support for assistance.',
  EmailSignInError:
    'There was an issue starting the login process with your email. Please check your email and try again.',
  ErrorPageLoop:
    'A configuration error prevented the error page from displaying correctly. Please contact support.',
  EventError:
    'A technical issue occurred while processing your request. Please try again later.',
  ExperimentalFeatureNotEnabled:
    'This feature is not available. Please contact support for more information.',
  InvalidCallbackUrl:
    'The provided URL is invalid. Please try again with a valid URL.',
  InvalidCheck:
    'A security check failed. Please try again or contact support if the issue persists.',
  InvalidEndpoints:
    'A technical configuration error occurred. Please contact support for assistance.',
  InvalidProvider:
    'The selected login method is not supported. Please choose a different method or contact support.',
  JWTSessionError: 'A session error occurred. Please sign in again.',
  MissingAdapter:
    'A technical configuration is missing. Please contact support for assistance.',
  MissingAdapterMethods:
    'A part of the configuration is missing. Please contact support for further assistance.',
  MissingAuthorize:
    'The login method is incorrectly configured. Please contact support for assistance.',
  MissingCSRF:
    'A security error occurred. Please refresh the page and try again.',
  MissingSecret:
    'A server configuration error occurred. Please contact support.',
  MissingWebAuthnAutocomplete:
    'A configuration error occurred with WebAuthn. Please contact support.',
  OAuthAccountNotLinked:
    'Your email is linked to another account. Please use the account originally linked to this email.',
  OAuthCallbackError:
    'Login with the external service failed. Please try again or choose another login method.',
  OAuthProfileParseError:
    "We couldn't retrieve your profile from the external service. Please try again or contact support.",
  OAuthSignInError:
    'There was an issue starting the login process. Please try again or contact support.',
  SessionTokenError:
    "We couldn't retrieve your session information. Please sign in again.",
  SignOutError: 'There was an issue signing you out. Please try again.',
  UnknownAction:
    'This action is not supported. Please check your request and try again.',
  UnsupportedStrategy:
    'This login method is not supported. Please choose a different method.',
  UntrustedHost:
    'The connection attempt came from an untrusted source. Please ensure you are accessing the site from a safe location.',
  Verification:
    'Verification failed. Please check your email and token, and try again.',
  WebAuthnVerificationError:
    'Verification with WebAuthn failed. Please try again or use another authentication method.',
}

export const getError = (errorCode: unknown) => {
  if (errorCode === undefined || errorCode === null) {
    return {
      error: undefined,
      errorMessage: undefined,
    }
  }

  const error = typeof errorCode === 'string' ? errorCode : 'AuthError'

  const errorMessage =
    AUTH_ERRORS[error] || 'An unknown error occurred. Please try again later.'

  return {
    error,
    errorMessage,
  }
}
