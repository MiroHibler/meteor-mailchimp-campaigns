// Requires MailChimp Smart Package!

MailChimpCampaigns = function ( apiKey, options ) {
	this._deps      = new Tracker.Dependency;
	this._listId    = undefined;
	this._campaigns = null;

	this._asyncAPI  = new MailChimp( apiKey, options );
};

/*
 | Internal methods
 */
MailChimpCampaigns.prototype._setCampaigns = function ( value ) {
	if ( value === this._campaigns ) return;

	this._campaigns = value;

	return this._deps.changed();
};

/*
 | API methods
*/
MailChimpCampaigns.prototype.call = function ( method, options, callback ) {
	this._asyncAPI.call( 'campaigns', method, options, callback );
};

MailChimpCampaigns.prototype.list = function ( options, callback ) {
	this.call( 'list', options, callback );
};

MailChimpCampaigns.prototype.create = function ( options, callback ) {
	this.call( 'create', options, callback );
};

MailChimpCampaigns.prototype.update = function ( options, callback ) {
	this.call( 'update', options, callback );
};

MailChimpCampaigns.prototype.schedule = function ( options, callback ) {
	this.call( 'schedule', options, callback );
};

MailChimpCampaigns.prototype.ready = function ( options, callback ) {
	this.call( 'ready', options, callback );
};

MailChimpCampaigns.prototype.sendTest = function ( options, callback ) {
	this.call( 'sendTest', options, callback );
};

MailChimpCampaigns.prototype.send = function ( options, callback ) {
	this.call( 'send', options, callback );
};

MailChimpCampaigns.prototype.unschedule = function ( options, callback ) {
	this.call( 'unschedule', options, callback );
};

/*
 | Utility methods
 |
 | Reactive list of campaigns - automatically reloads template
 | when Session variable 'MailChimp.lists.listId' changes
*/
MailChimpCampaigns.prototype.campaigns = function () {
	this._deps.depend();

	return this._campaigns;
};

MailChimpCampaigns.prototype.refresh = function () {

	var self = this;

	self._deps.depend();

	Tracker.autorun( function () {
		if ( !Session.equals( 'MailChimp.lists.listId', self._listId ) ) {
			var listId = Session.get( 'MailChimp.lists.listId' );

			if ( listId !== -1 ) {	// Refresh the list?
				// Nope, load new list...
				self._listId = Session.get( 'MailChimp.lists.listId' );
			}

			self._setCampaigns( null );

			self.list(
				{
					filters: {
						list_id: self._listId
					} /*,
					start: 0,
					limit: 100,
					sort_field: '',
					sort_dir: '' */
				},

				function ( error, result ) {
					if ( error ) {

						console.error( '[MailChimpCampaigns/campaigns] Error: ' + error.code + ' - ' + error.message );

					} else {

						console.info( '[MailChimpCampaigns/campaigns] %o', result );

						self._setCampaigns( result );
					}
					// Was it only refresh?
					if ( listId === -1 ) {
						// Yap - clean up.
						Session.set( 'MailChimp.lists.listId', self._listId );
					}
				}
			);
		}
	});

	return this._campaigns;
};
