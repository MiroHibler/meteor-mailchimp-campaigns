# miro:mailchimp-campaigns

MailChimp Campaigns - the Meteor way.

See also these wrappers:

 * [A Meteor wrapper for the MailChimp API](https://github.com/MiroHibler/meteor-mailchimp)
 * [MailChimp Lists](https://github.com/MiroHibler/meteor-mailchimp-lists)


## Dependencies

 * [miro:mailchimp](https://github.com/MiroHibler/meteor-mailchimp) - A Meteor wrapper for the MailChimp API


## TL;DR;

_miro:mailchimp-campaigns_ helps you to manage mailing campaigns.

Further information on the MailChimp API and its features is available at
[https://github.com/gomfunkel/node-mailchimp](https://github.com/gomfunkel/node-mailchimp).


## Templates

Use in your template (**will use Session variable 'MailChimp.lists.listId' for default list**):

_miro:mailchimp-campaigns_ also exposes one template you can use out of the box:
`{{> MailChimpCampaigns}}`, which will render all mailing campaign for a given
mailing list.


## Installation

Install using Meteor:

```sh
meteor add miro:mailchimp-campaigns // It will add miro:mailchimp package
									// if not not already installed
```

## Quick Start

Use in your template:

```html
<div id="mailChimpCampaings">
	<!-- There's also another utility template
	     you can use to refresh the list -->
	{{> MailChimpCampaingsRefresh}}
	{{> MailChimpCampaings}}
</div>
```

Put in your server's settings.json:

```javascript
{
	"private": {
		"MailChimp": {
			"apiKey": "<Your MailChimp API Key>",
			"listId": "<ID of your default mailing list>"
		}
	}
}
```

and start your server with:

```sh
meteor --settings settings.json
```

## API

_MailChimpCampaigns_ at the moment exposes the following methods **both on the server and the client**:

### `list( params, callback )`
**Get the list of campaigns and their details matching the specified filters**

 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters.
The first one being an error object which is null when no error occured, the
second one an object with all information retrieved as long as no error occured.

### `create( params, callback )`
**Create a new draft campaign to send**

 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters.
The first one being an error object which is null when no error occured, the
second one an object with all information retrieved as long as no error occured.

### `update( params, callback )`
**Update a mailing campaign**

 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters.
The first one being an error object which is null when no error occured, the
second one an object with all information retrieved as long as no error occured.

### `schedule( params, callback )`
**Schedule a campaign to be sent in the future**

 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters.
The first one being an error object which is null when no error occured, the
second one an object with all information retrieved as long as no error occured.

### `ready( params, callback )`
**Returns information on whether a campaign is ready to send**

 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters.
The first one being an error object which is null when no error occured, the
second one an object with all information retrieved as long as no error occured.

### `sendTest( params, callback )`
**Send a test of this campaign to the provided email addresses**

 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters.
The first one being an error object which is null when no error occured, the
second one an object with all information retrieved as long as no error occured.

### `send( params, callback )`
**Send a given campaign immediately**

 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters.
The first one being an error object which is null when no error occured, the
second one an object with all information retrieved as long as no error occured.

### `unschedule( params, callback )`
**Unschedule a campaign that is scheduled to be sent in the future**

 * `params` Parameters to pass to the API method.
 * `callback` Callback function for returned data or errors with two parameters.
The first one being an error object which is null when no error occured, the
second one an object with all information retrieved as long as no error occured.


#### For convenience, there's also a general method call:

### `call( method, params, callback )`

 * `method` The method to call in the given section.
 * `params` Parameters to pass to the API method.
 * `callback` (_optional server-side, required client-side_) Callback function for
returned data or errors with two parameters. The first one being an error object
which is null when no error occured, the second one an object with all
information retrieved as long as no error occured.

#### Also for convenience, there is a utility method (**client-side only!**):

### `campaigns()`
**List all campaigns for a given list**

 * **NEW** - will refresh the list if session variable `MailChimp.lists.listId` set to `-1`
 * **REACTIVE** - will re-render the template if session variable `MailChimp.lists.listId` changes

## Examples

### Callback, server-side/client-side

```javascript
// You can as well pass different parameters on each call
var mailingCampaigns = new MailChimpCampaigns( /* apiKey, { version : '2.0' } */ );

mailingCampaigns.campaigns(
	{ /*
		filters: {
			list_id: '<some_mailing_list_id>'
		},
		start: 0,
		limit: 100,
		sort_field: '',
		sort_dir: '' */
	},
	// Callback beauty in action
	function ( error, result ) {
		if ( error ) {
			console.error( '[MailChimpCampaigns][Campaigns] Error: %o', error );
		} else {
			// Do something with your data!
			console.info( '[MailChimpCampaigns][Campaigns]: %o', result );
		}
	}
);
```

### wrapAsync, server-side ONLY

```javascript
// You can as well pass different parameters on each call
var mailingCampaigns = new MailChimpCampaigns( /* apiKey, { version : '2.0' } */ );

var result = mailingCampaigns.campaigns(
	{ /*
		filters: {
			list_id: '<some_mailing_list_id>'
		},
		start: 0,
		limit: 100,
		sort_field: '',
		sort_dir: '' */
	}
);

// Do something with your data!
console.info( '[MailChimpCampaigns][Campaigns]:\n', JSON.stringify( result ) );
```

## Changelog

### v1.0.0
 * Update to Meteor v1.0
 * On client, MailChimpCampaigns.call() now reads API Key from session variable
'MailChimp.apiKey'
 * Cleanup

### v0.3.0
 * Added `refresh` functionality to the list of campaigns - set session variable
`MailChimpOptions.listId` to `-1` to initiate refresh of the same list, or new
list ID for a new list

### v0.2.1
 * Fixed bug: in campaigns() method, `MailChimpOptions.apiKey` was compared to
`null` instead of `undefined`

### v0.2.0
 * On client, MailChimpCampaigns methods now read API Key from session variable
`MailChimpOptions.apiKey` as well
 * On client, MailChimpCampaigns methods now read list ID from session variable
`MailChimpOptions.listId` as well
 * Added reactive list of all campaigns for a given mailing list - will re-render
the template if session variable 'MailChimpOptions.listId' changes

### v0.1.0
 * Initial release

## Copyright and license

Copyright © 2014-2015 [Miroslav Hibler](http://miro.hibler.me)

_miro:mailchimp-campaigns_ is licensed under the [**MIT**](http://miro.mit-license.org) license.
