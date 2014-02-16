// Requires MailChimp Smart Package!

MailChimpCampaigns = function( apiKey, options ) {
	this._deps		= new Deps.Dependency;
	this._listId	= undefined;
	this._campaigns	= null;
	this._options	= function(){
		return {
			apiKey: ( apiKey ) ? apiKey : Session.get( 'MailChimpOptions.apiKey' ),
			options: options
		}
	}
}

/*
 | API methods
*/
MailChimpCampaigns.prototype.call = function( section, method, options, callback ) {
	Meteor.call( 'MailChimp', this._options(), section, method, options, function ( error, result ) {
		callback( error, result );
	});
}

MailChimpCampaigns.prototype.list = function( options, callback ) {
	Meteor.call( 'MailChimp', this._options(), 'campaigns', 'list', options, function( error, result ) {
		callback( error, result );
	});
}

MailChimpCampaigns.prototype.create = function( options, callback ) {
	Meteor.call( 'MailChimp', this._options(), 'campaigns', 'create', options, function( error, result ) {
		callback( error, result );
	});
}

MailChimpCampaigns.prototype.update = function( options, callback ) {
	Meteor.call( 'MailChimp', this._options(), 'campaigns', 'update', options, function( error, result ) {
		callback( error, result );
	});
}

MailChimpCampaigns.prototype.schedule = function( options, callback ) {
	Meteor.call( 'MailChimp', this._options(), 'campaigns', 'schedule', options, function( error, result ) {
		callback( error, result );
	});
}

MailChimpCampaigns.prototype.ready = function( options, callback ) {
	Meteor.call( 'MailChimp', this._options(), 'campaigns', 'ready', options, function( error, result ) {
		callback( error, result );
	});
}

MailChimpCampaigns.prototype.sendTest = function( options, callback ) {
	Meteor.call( 'MailChimp', this._options(), 'campaigns', 'sendTest', options, function( error, result ) {
		callback( error, result );
	});
}

MailChimpCampaigns.prototype.send = function( options, callback ) {
	Meteor.call( 'MailChimp', this._options(), 'campaigns', 'send', options, function( error, result ) {
		callback( error, result );
	});
}

MailChimpCampaigns.prototype.unschedule = function( options, callback ) {
	Meteor.call( 'MailChimp', this._options(), 'campaigns', 'unschedule', options, function( error, result ) {
		callback( error, result );
	});
}

/*
 | Utility methods
 |
 | Reactive list of campaigns - automatically reloads template
 | when Session variable 'MailChimpOptions.listId' changes
*/
MailChimpCampaigns.prototype.campaigns = function() {
	var self = this;

	this._deps.depend();

	Deps.autorun(function () {
		if ( !Session.equals( 'MailChimpOptions.listId', self._listId ) ) {
			var listId = Session.get( 'MailChimpOptions.listId' );
			if ( listId !== '-1' ) {	// Refresh the list?
				// Nope, load new list...
				self._listId = Session.get( 'MailChimpOptions.listId' );
			}

			self._setCampaigns( null );

			self.list(
				{
					filters: { list_id: self._listId } /*,
					start: 0,
					limit: 100,
					sort_field: '',
					sort_dir: '' */
				},
				function ( error, result ) {
					if ( error ) {
						console.log( '[MailChimpCampaigns/campaigns] Error: ' + error.code + ' - ' + error.message );
					} else {
						console.log( JSON.stringify( result ) );
						self._setCampaigns( result );
					}
					if ( listId === '-1' ) {	// Was it only refresh?
						// Yap - clean up.
						Session.set( 'MailChimpOptions.listId', self._listId );
					}
				}
			);
		}
	});

	return this._campaigns;
}

/*
 | Internal methods
 */
MailChimpCampaigns.prototype._setCampaigns = function( value ) {
	if ( value === this._campaigns ) {
		return;
	}
	this._campaigns = value;
	return this._deps.changed();
}
