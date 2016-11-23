nforce-actions
===============

An [nforce](https://github.com/kevinohara80/nforce) plugin that facilitates working with actions

## Installation

First, install nforce-actions with npm

```bash
$ npm install nforce-actions
```

Load the plugin

```js
var nforce = require('nforce');

// load the nforce-actions plugin
require('nforce-actions')(nforce);

var org = nforce.createConnection({
  clientId: '<client_id>',
  clientSecret: '<client_secret>',
  redirectUri: '<redirect_uri>',
  username: process.env.SFUSER,
  password: process.env.SFPASS,
  plugins: ['customActions'] // loads the plugin in this connection
});
```
