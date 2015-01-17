Package.describe({
	name    : 'miro:mailchimp-campaigns',
	version : '1.0.0',
	summary : 'MailChimp Campaigns - the Meteor way',
	homepage: "https://github.com/MiroHibler/meteor-mailchimp-campaigns",
	author  : "Miroslav Hibler (http://miro.hibler.me)",
	git     : 'https://github.com/MiroHibler/meteor-mailchimp-campaigns.git'
});

Package.on_use(function ( api, where ) {

	api.versionsFrom('METEOR@0.9.2');

	api.use('miro:mailchimp@1.0.4');

	api.use( ['templating'], 'client' );

	api.add_files( 'lib/server/campaigns.js', 'server' );

	api.add_files([
		'lib/client/views/campaigns/campaigns.html',
		'lib/client/views/campaigns/campaigns.js',

		'lib/client/campaigns.js'
	], 'client' );

	if ( api.export ) {
		api.export( 'MailChimpCampaigns', ['server', 'client'] );
	}
});
