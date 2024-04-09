export type openIdConfig = {
  authRequired: Boolean,
  auth0Logout: Boolean,
  secret: String,
  baseURL: String,
  clientID: String,
  issuerBaseURL: String,
}

export * from './App';
export * from './Router';