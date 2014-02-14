// Requires MailChimp Smart Package!

MailChimpCampaigns = function( apiKey, options ) {
	this.asyncAPI = new MailChimp(
		( apiKey )	? apiKey	: MailChimpOptions.apiKey,
		( options )	? options	: MailChimpOptions.options
	);
}

MailChimpCampaigns.prototype.call = function( method, options, callback ) {
	this.asyncAPI.call( 'campaigns', method, options, function( error, result ) {
		if ( error ) {
			console.log( '[MailChimpCampaigns] Error: ' + error.code + ' - ' + error.message );
		}
		callback( error, result );
	});
}

MailChimpCampaigns.prototype.list = function( options, callback ) {
	this.asyncAPI.call( 'campaigns', 'list', options, function( error, result ) {
		if ( error ) {
			console.log( '[MailChimpCampaigns/list] Error: ' + error.code + ' - ' + error.message );
		}
		callback( error, result );
	});
}

MailChimpCampaigns.prototype.create = function( options, callback ) {
	this.asyncAPI.call( 'campaigns', 'create', options, function( error, result ) {
		if ( error ) {
			console.log( '[MailChimpCampaigns/create] Error: ' + error.code + ' - ' + error.message );
		}
		callback( error, result );
	});
}

MailChimpCampaigns.prototype.update = function( options, callback ) {
	this.asyncAPI.call( 'campaigns', 'update', options, function( error, result ) {
		if ( error ) {
			console.log( '[MailChimpCampaigns/update] Error: ' + error.code + ' - ' + error.message );
		}
		callback( error, result );
	});
}

MailChimpCampaigns.prototype.schedule = function( options, callback ) {
	this.asyncAPI.call( 'campaigns', 'schedule', options, function( error, result ) {
		if ( error ) {
			console.log( '[MailChimpCampaigns/schedule] Error: ' + error.code + ' - ' + error.message );
		}
		callback( error, result );
	});
}

MailChimpCampaigns.prototype.ready = function( options, callback ) {
	this.asyncAPI.call( 'campaigns', 'ready', options, function( error, result ) {
		if ( error ) {
			console.log( '[MailChimpCampaigns/ready] Error: ' + error.code + ' - ' + error.message );
		}
		callback( error, result );
	});
}

MailChimpCampaigns.prototype.sendTest = function( options, callback ) {
	this.asyncAPI.call( 'campaigns', 'send-test', options, function( error, result ) {
		if ( error ) {
			console.log( '[MailChimpCampaigns/send-test] Error: ' + error.code + ' - ' + error.message );
		}
		callback( error, result );
	});
}

MailChimpCampaigns.prototype.send = function( options, callback ) {
	this.asyncAPI.call( 'campaigns', 'send', options, function( error, result ) {
		if ( error ) {
			console.log( '[MailChimpCampaigns/send] Error: ' + error.code + ' - ' + error.message );
		}
		callback( error, result );
	});
}

MailChimpCampaigns.prototype.unschedule = function( options, callback ) {
	this.asyncAPI.call( 'campaigns', 'unschedule', options, function( error, result ) {
		if ( error ) {
			console.log( '[MailChimpCampaigns/unschedule] Error: ' + error.code + ' - ' + error.message );
		}
		callback( error, result );
	});
}
