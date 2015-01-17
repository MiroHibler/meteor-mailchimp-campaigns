var mailChimpCampaigns;

Template.MailChimpCampaigns.created = function () {
	mailChimpCampaigns = new MailChimpCampaigns();
	mailChimpCampaigns.refresh();
};

Template.MailChimpCampaigns.helpers({
	campaigns: function () {
		return mailChimpCampaigns.campaigns();
	}
});

Template.MailChimpCampaignsItem.helpers({
	itemClass: function () {
		return Session.equals( 'MailChimp.campaigns.campaignId', $( this ).attr( 'id' ) ) ? 'active' : '';
	}
});

Template.MailChimpCampaignsItem.events({
	'click': function () {
		Session.set( 'MailChimp.campaigns.campaignId', $( this ).attr( 'id' ) );
	}
});

Template.MailChimpCampaignsRefresh.events({
	'click .refresh': function () {
		mailChimpCampaigns.refresh();
	}
});
