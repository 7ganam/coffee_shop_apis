/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: "http://127.0.0.1:5000", // the running FLASK api server url
  auth0: {
    url: "coffee3.us", // the auth0 domain prefix
    audience: "drink", // the audience set for the auth0 app
    clientId: "qEmXJGaYfcVW2iUm9e6nTNU1mdg5yW21", // the client id generated for the auth0 app
    callbackURL: "http://localhost:8100", // the base url of the running ionic application.
  },
};

// https://coffee3.us.auth0.com/authorize?audience=drink&response_type=token&client_id=qEmXJGaYfcVW2iUm9e6nTNU1mdg5yW21&redirect_uri=http://localhost:8100/drinks
// https://coffee3.us.auth0.com/authorize?audience=drink&response_type=token&client_id=qEmXJGaYfcVW2iUm9e6nTNU1mdg5yW21&redirect_uri=http://localhost:8100/drinks/tabs/user-page

// https://coffee3.us.auth0.com/authorize?audience=drink&response_type=token&client_id=qEmXJGaYfcVW2iUm9e6nTNU1mdg5yW21&redirect_uri=http://localhost:8100/drinks/tabs/user-page
// https://coffee3.us.auth0.com/authorize?audience=drink&response_type=token&client_id=qEmXJGaYfcVW2iUm9e6nTNU1mdg5yW21&redirect_uri=http://localhost:8100/drinks/tabs/user-page

//https://coffee3.us.auth0.com.auth0.com/authorize?audience=drink&response_type=token&client_id=qEmXJGaYfcVW2iUm9e6nTNU1mdg5yW21&redirect_uri=http://localhost:8100/drinks/tabs/user-page
