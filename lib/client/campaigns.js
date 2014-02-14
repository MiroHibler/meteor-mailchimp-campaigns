// Requires MailChimp Smart Package!

MailChimpCampaigns = function( apiKey, options ) {
	this._deps		= new Deps.Dependency;
	this._campaigns	= undefined;
	this._options	= {
		apiKey	: ( apiKey )	? apiKey 	: Session.get( 'MailChimpOptions.apiKey' ),
		options	: ( options )	? options	: Session.get( 'MailChimpOptions.options' )
	};
}

MailChimpCampaigns.prototype.call = function( section, method, options, callback ) {
	Meteor.call( 'MailChimp', this._options, section, method, options, function ( error, result ) {
		callback( error, result );
	});
}

MailChimpCampaigns.prototype.list = function( options, callback ) {
	Meteor.call( 'MailChimp', this._options, 'campaigns', 'list', options, function( error, result ) {
		callback( error, result );
	});
}

MailChimpCampaigns.prototype.create = function( options, callback ) {
	Meteor.call( 'MailChimp', this._options, 'campaigns', 'create', options, function( error, result ) {
		callback( error, result );
	});
}

MailChimpCampaigns.prototype.update = function( options, callback ) {
	Meteor.call( 'MailChimp', this._options, 'campaigns', 'update', options, function( error, result ) {
		callback( error, result );
	});
}

MailChimpCampaigns.prototype.schedule = function( options, callback ) {
	Meteor.call( 'MailChimp', this._options, 'campaigns', 'schedule', options, function( error, result ) {
		callback( error, result );
	});
}

MailChimpCampaigns.prototype.ready = function( options, callback ) {
	Meteor.call( 'MailChimp', this._options, 'campaigns', 'ready', options, function( error, result ) {
		callback( error, result );
	});
}

MailChimpCampaigns.prototype.sendTest = function( options, callback ) {
	Meteor.call( 'MailChimp', this._options, 'campaigns', 'sendTest', options, function( error, result ) {
		callback( error, result );
	});
}

MailChimpCampaigns.prototype.send = function( options, callback ) {
	Meteor.call( 'MailChimp', this._options, 'campaigns', 'send', options, function( error, result ) {
		callback( error, result );
	});
}

MailChimpCampaigns.prototype.unschedule = function( options, callback ) {
	Meteor.call( 'MailChimp', this._options, 'campaigns', 'unschedule', options, function( error, result ) {
		callback( error, result );
	});
}

// Internal stuff
MailChimpCampaigns.prototype._setCampaigns = function( value ) {
	if ( value === this._campaigns ) {
		return;
	}
	this._campaigns = value;
	return this._deps.changed();
}

MailChimpCampaigns.prototype._getCampaigns = function() {
	this._deps.depend();
	return this._campaigns;
}
