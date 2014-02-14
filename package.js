Package.describe({
	summary: 'MailChimp Campaigns - the Meteor way'
});

Package.on_use(function ( api, where ) {

	api.use( ['templating'/*, 'handlebars'*/], 'client' );

	api.add_files( 'lib/server/campaigns.js', 'server' );

	api.add_files( 'lib/client/views/campaigns/campaign_item.html', 'client' );
	api.add_files( 'lib/client/views/campaigns/campaigns.html', 'client' );
	api.add_files( 'lib/client/views/campaigns/refresh.html', 'client' );
	api.add_files( 'lib/client/loader.html', 'client' );

	api.add_files( 'lib/client/views/campaigns/campaigns.js', 'client' );
	api.add_files( 'lib/client/campaigns.js', 'client' );

	if ( api.export ) {
		api.export( 'MailChimpCampaigns', ['server', 'client'] );
	}
});
