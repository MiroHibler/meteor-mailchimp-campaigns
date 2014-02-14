var listId,
	mailChimpCampaigns,
	mailChimpCampaignsRefresh = function () {
		mailChimpCampaigns._setCampaigns( null );

		mailChimpCampaigns.list(
			{
				filters: { list_id: listId } /*,
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
					mailChimpCampaigns._setCampaigns( result );
				}
			}
		);
	};

Template.MailChimpCampaigns.created = function () {
	listId = Session.get( 'MailChimpOptions.listId' );
	mailChimpCampaigns = new MailChimpCampaigns();

	mailChimpCampaignsRefresh();
}

Template.MailChimpCampaigns.helpers({
	campaigns: function() {
		if ( !Session.equals( 'MailChimpOptions.listId', listId ) ) {
			listId = Session.get( 'MailChimpOptions.listId' );
			mailChimpCampaignsRefresh();
		}
		return mailChimpCampaigns._getCampaigns();
	},
});

Template.MailChimpCampaignsRefresh.events({
	"click .refresh": function () {
		mailChimpCampaignsRefresh();
	}
});
