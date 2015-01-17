// Requires MailChimp Smart Package!

MailChimpCampaigns = function ( apiKey, options ) {
	this._asyncAPI = new MailChimp( apiKey, options );
};

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
	this.call( 'send-test', options, callback );
};

MailChimpCampaigns.prototype.send = function ( options, callback ) {
	this.call( 'send', options, callback );
};

MailChimpCampaigns.prototype.unschedule = function ( options, callback ) {
	this.call( 'unschedule', options, callback );
};
