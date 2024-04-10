# Node-Auth

Authentication server configured with auth0 and openID Connect.

## Usage

1. Create a `Regular Web Application` using Auth0.
1. Navigate to your dashboard > settings
1. Set environments variables for the following:

```.env
CLIENT_ID=<AUTH0-CLIENT-ID>
BASE_URL=<URL-FOR-THIS-APP>
ISSUER_BASE_URL=<AUTH0-DOMAIN-URL>
SECRET=<SECRET-STRING-FOR-THIS-APP>
APP_URL=<URL-TO-REDIRECT-AFTER-SIGNIN>
```

### Build

Runs the Typescript compiler:

```bash
npm run build
```

### Run

Command for starting a production build:

```bash
npm start
```

Command for running server in development mode:

```bash
npm run dev
```

### Test

Tests that your environment variables are set and can redirect to an application after log in:

```bash
npm test
```

> Tests use playwright to navigate Auth0 login screens, you may have an error if playwright browsers are not installed.  Follow any instructions from playwright to install necessary Browser dependencies.
