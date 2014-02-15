var mailChimpCampaigns;

Template.MailChimpCampaigns.created = function () {
	mailChimpCampaigns = new MailChimpCampaigns();
}

Template.MailChimpCampaigns.helpers({
	campaigns: function() {
		return mailChimpCampaigns.campaigns();
	},
});
