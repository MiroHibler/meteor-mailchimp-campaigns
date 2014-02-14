# meteor-mailchimp-campaigns

MailChimp Campaigns - the Meteor way.


## Dependencies

 * [meteor-mailchimp](https://github.com/MiroHibler/meteor-mailchimp) - A Meteor wrapper for the MailChimp API


## TL;DR;

_meteor-mailchimp-campaigns_ helps you to manage mailing campaigns.

Further information on the MailChimp API and its features is available at [https://github.com/gomfunkel/node-mailchimp](https://github.com/gomfunkel/node-mailchimp).


## Templates

_meteor-mailchimp-campaigns_ also exposes one template you can use out of the box: `MailChimpCampaigns`, which will render all mailing campaigns for a given mailing list.


## Installation

Install using [Meteorite](https://github.com/oortcloud/meteorite) - Installer & smart package manager for Meteor:

```sh
$ mrt add mailchimp-campaigns // It will install meteor-mailchimp package if it's not already installed
```

Use in your template (**will use Session variable 'MailChimpOptions.listId' for default list**):

```html
<div id="mailChimpCampaigns">
	{{> MailChimpCampaigns}}
</div>
```

Put in your server's Meteor.startup():

```javascript
MailChimpOptions.apiKey = '<Your MailChimp API Key>';
MailChimpOptions.listId = '<ID of your default mailing list>';
```

or in your client's Meteor.startup():

```javascript
Session.setDefault( 'MailChimpOptions.apiKey', '<Your MailChimp API Key>' );
Session.setDefault( 'MailChimpOptions.listId', '<ID of your default mailing list>' );
```

This way you don't have to pass these parameters on each call.


## API

_MailChimpCampaigns_ at the moment exposes the following methods **both on the server and the client**:

### `list( params, callback )`
**Get the list of campaigns and their details matching the specified filters**

 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters. The first one being an error object which is null when no error occured, the second one an object with all information retrieved as long as no error occured.

### `create( params, callback )`
**Create a new draft campaign to send**

 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters. The first one being an error object which is null when no error occured, the second one an object with all information retrieved as long as no error occured.

### `update( params, callback )`
**Update a mailing campaign**

 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters. The first one being an error object which is null when no error occured, the second one an object with all information retrieved as long as no error occured.

### `schedule( params, callback )`
**Schedule a campaign to be sent in the future**

 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters. The first one being an error object which is null when no error occured, the second one an object with all information retrieved as long as no error occured.

### `ready( params, callback )`
**Returns information on whether a campaign is ready to send**

 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters. The first one being an error object which is null when no error occured, the second one an object with all information retrieved as long as no error occured.

### `sendTest( params, callback )`
**Send a test of this campaign to the provided email addresses**

 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters. The first one being an error object which is null when no error occured, the second one an object with all information retrieved as long as no error occured.

### `send( params, callback )`
**Send a given campaign immediately**

 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters. The first one being an error object which is null when no error occured, the second one an object with all information retrieved as long as no error occured.

### `unschedule( params, callback )`
**Unschedule a campaign that is scheduled to be sent in the future**

 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters. The first one being an error object which is null when no error occured, the second one an object with all information retrieved as long as no error occured.
For convenience, there's also a general call (a shortcut to MailChimp.call()):

### `call( section, method, params, callback )`

 * `section` The section of the API method to call (e.g. 'campaigns').
 * `method` The method to call in the given section.
 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters. The first one being an error object which is null when no error occured, the second one an object with all information retrieved as long as no error occured.

## Example

```javascript
if ( Meteor.isServer ) {
	// Set it once and reuse many times
	MailChimpOptions.apiKey = "<Your MailChimp API Key>";
	MailChimpOptions.listId = "<ID of your default mailing list>";
}

try {
	// You can as well pass different parameters on each call
	var mailingCampaigns = new MailChimpCampaigns( /* apiKey, { version : '2.0' } */ );
} catch ( error ) {
	console.log( error.message );
}

mailingCampaigns.list(
	{ /*
		filters: { list_id: '<some_list_id>' },
		start: 0,
		limit: 100,
		sort_field: '',
		sort_dir: '' */
	},
	function ( error, result ) {
		if ( error ) {
			console.log( error.message );
		} else {
			console.log( JSON.stringify( result ) );
		}
	}
);
```

## Changelog

### v0.1.0
 * Initial release

## Copyright and license

Copyright © 2014 [Miroslav Hibler](http://miro.hibler.me)

_meteor-mailchimp-campaigns_ is licensed under the [**MIT**](http://miro.mit-license.org) license.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/MiroHibler/meteor-mailchimp-campaigns/trend.png)](https://bitdeli.com/free "Bitdeli Badge")