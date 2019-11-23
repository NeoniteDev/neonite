(function () {
	'use strict';

	String.prototype.format = function () {
		var args = arguments[0] instanceof Array ? arguments[0] : arguments;
		return this.replace(/{(\d+)}/g, function (match, number) {
			return typeof args[number] != 'undefined' ? args[number] : match;
		});
	};

	const REPLACE_ACC_IDS_WITH_TEST = false;
	const express = require('express');
	const app = express();
	const port = 80;
	var version = "1.0.1"
	var bodyParser = require("body-parser");
	var fs = require('fs');
	var path = require('path');
	var Profile = require("./profile");
	var configFile = path.join(__dirname, '/config/config.json');
	var config = require(configFile);

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.set('etag', false);

	//platform
	app.post('/fortnite/api/game/v2/tryPlayOnPlatform/account/:accountId', function (req, res) {
		res.set('Content-Type', 'text/plain');
		res.json(true);
		res.status(200).end();
	});
	// >:(
	app.get('/fortnite/api/matchmaking/session/findPlayer/:accountId', function (req, res) {
		res.status(200).end();
	});
	//privacy
	app.get('/fortnite/api/game/v2/privacy/account/:accountId', function (req, res) {
		res.json({
			"accountId": req.params.accountId,
			"optOutOfPublicLeaderboards": false
		}).status(200).end();
	});
	//waiting room
	app.get('/waitingroom/api/waitingroom', function (req, res) {
		res.status(204).end();
	});
	//grant access
	app.post('/fortnite/api/game/v2/grant_access/:accountId', function (req, res) {
		res.status(204).end();
	});
	//enabled features
	app.get('/fortnite/api/game/v2/enabled_features', function (req, res) {
		res.json([]).status(200).end();
	});
	//light switch
	app.get('/lightswitch/api/service/bulk/status', function (req, res) {
		res.json([{
			"serviceInstanceId": "fortnite",
			"status": "UP",
			"message": "OY BRUV U CANT PLAY YET",
			"maintenanceUri": null,
			"overrideCatalogIds": ["a7f138b2e51945ffbfdacc1af0541053"],
			"allowedActions": ["PLAY", "DOWNLOAD"],
			"banned": false,
			"launcherInfoDTO": {
				"appName": "Fortnite",
				"catalogItemId": "4fe75bbc5a674f4f9b356b5c90567da5",
				"namespace": "fn"
			}
		}]);
		res.status(200).end();
	});
	//hmmmm :shrug:
	app.get('/account/api/public/account', function (req, res) {
		res.json([
			{
				id: 'aabbccddeeff11223344556677889900',
				displayName: config.name,
				externalAuths: {}
			}
		])
		res.status(200).end();
	});
	//account info
	app.get('/account/api/public/account/:accountId', function (req, res) {
		res.json({
			id: req.params.accountId,
			displayName: config.name,
			name: 'John',
			lastName: 'Doe',
			email: 'Jonsey@downloadmoreram.com',
			failedLoginAttempts: 0,
			lastLogin: new Date().toISOString(),
			numberOfDisplayNameChanges: 0,
			ageGroup: 'UNKNOWN',
			headless: false,
			country: 'US',
			preferredLanguage: 'en',
			tfaEnabled: false
		}).status(200).end();
	});
	//verison check work around
	app.get('/fortnite/api/v2/versioncheck/:version', function (req, res) {
		res.status(204).end();
	});
	//external auth
	app.get('/account/api/public/account/:accountId/externalAuths', function (req, res) {
		res.json([]).status(200).end();
	});
	//verify
	app.get('/account/api/oauth/verify', function (req, res) {
		res.json({
			token: 'eg1~eyJraWQiOiJ0RkMyVUloRnBUTV9FYTNxY09kX01xUVQxY0JCbTlrRkxTRGZlSmhzUkc4IiwiYWxnIjoiUFMyNTYifQ.eyJhcHAiOiJmb3J0bml0ZSIsInN1YiI6IjMxZWU3NmFiMzFlNzQ5NzhhMDExYzRlYWRjMDlkYjRiIiwiZHZpZCI6IjVkY2FiNWRiZTg2YTczNDRiMDYxYmE1N2NkYjMzYzRmIiwibXZlciI6ZmFsc2UsImNsaWQiOiJlYzY4NGI4YzY4N2Y0NzlmYWRlYTNjYjJhZDgzZjVjNiIsImFtIjoiZXhjaGFuZ2VfY29kZSIsInAiOiJlTnF0VnR0dTRqQVFcL1IrRXF0Sm1hV3VKQjlTV1ZTVlczVjMyWWRcL1FZRStDRjhlT2JJZlN2OStKU1NDVVMwTHBVeTYyNTNMbXpCbkh4bm90UFRLdVRDNmNOeFlTWk83ZGVVelpDTUhuRnNXTFU2QkZkQ1hEYzlEcmQzT0hkaXlkWjNGMVwvcmFIZU5lSEdUM3Zvb2U3ZTdqdTlYaUVJUGoxZzVoRnM4Rk5kN00zc3lhV3F2a002d3g2MzdyQXVjbTFaMWsrVTVLejZyTkRGakZYNEMzd2hkUkp0UzZreXhTOFEySVJVNlNOTFNMTDBEcWpnVG4wbmt5NWpaUEdzeFJmZkFKQ3NuMGtmRng1dEJyVU1QZHp0MnNHRkdvQnRzaFBlK2xWU0tObXlac0ZhbWI4SE8wRW5aTkd1NUd4d1wvWHFvNUxGN3Z1dHZaVDJRRklnOVBsc01vdVwvVVNFNG5JUzhSbFErVjVUVWtqZmhXbGwyaGt0UUxBUHIzNHZ2OHpuRU9xY1lRZUdzMGl5aklnWk1hSE56VkJ0VEJxZ09SVkdtNGVVTkUwaVJXWkJxV3RxYmVza1g2QWZSRVlpS2ROb3d1dFlIMWN2VUdsVllDNVdqXC9BaHRoNW9qRzVVYm5sZisxN0Fzd0I5MHZrMHhtUUxuWDdXU0d1cytVXC9COG5rTG9tQzFTXC80elViZUM2SlBVMU15ZGxpXC8yZG1kV3J4aXNIeXgzYVdTeTZ0emxpcVplME9IZzRweXNtYUplU1k3MDUxdTRZTGd2byt5ZDcrWU1jOW1weStIV3dcL0FCZVFlTFcwVXJ0UEJBWjZwQmM3T2JsZGJLSGZIUEt0NGRTUGxpZUx3MzI1eVRhQzVZdzhhN3VKZndJampOTHFLRW14YU9cL2M2RG9tWWxqY2hzV2prd042cmlNR05OaWp0MXVwa1hKUEhlZXJxNERYWUMwcHNYSmFNUHYxdDVJOEQwSThIQ0dQcTkxOVRPS3ZKTmIrMUh6NGVBaDdqMmhrQnc4aXFKdDBYNG5RYjZTV241dHY0Mmx6bGNWdTQ2TWFtWE1JczgyRVwvdEZYTVp1T2syaXZIQXMxblZEYjhZcWNWRDl4M0o1cWVwZmpOTlFDMnVrMk92RFE5M2ZhTHJVN3B2cVN1QVJVc2QwUUtUXC9zYjFLK0xlN0UydnlMR3l2QUhyQzVaaUk0bllVXC9FQmt0VHRVTmVcLzVISFNDZjRyWjhXZ0U3dVRXOXBwNkxwT2ZnemJ0Y2JrNGhMRTE0U1p6MGw1bkM4WU1kRVhYYzI3Z0ZcL09oSWtMRjVEYmVQeEZ5dnp0VGhpK0NLRFdYZ2E1bXVhS1NxWER2TDMzd1VOWnp4dHpOZHN6OUI1MHlqKzQ9IiwiaWFpIjoiMzFlZTc2YWIzMWU3NDk3OGEwMTFjNGVhZGMwOWRiNGIiLCJjbHN2YyI6ImZvcnRuaXRlIiwidCI6InMiLCJpYyI6dHJ1ZSwiZXhwIjoxNTcyMjM2MTc4LCJpYXQiOjE1NzIyMDczNzgsImp0aSI6IjFlMmNlOWMyMDk1YTRmYzg4MmExOTA0NzU3ODdhYjFhIn0.AXL4NHObBicgMkRdeTDrAtrZx2PKoXJRkiXUV8DPIPrzZBsepEet7hfIDuahXiEPkk92SfMGv9e49WSx9s-8e1h5',
			session_id: '1e2ce9c2095a4fc882a190475787ab1a',
			token_type: 'bearer',
			client_id: 'ec684b8c687f479fadea3cb2ad83f5c6',
			internal_client: true,
			client_service: 'fortnite',
			account_id: 'aabbccddeeff11223344556677889900',
			expires_in: 28739,
			expires_at: '2019-10-28T04:16:17.845Z',
			app: 'fortnite',
			in_app_id: 'aabbccddeeff11223344556677889900',
			device_id: '5dcab5dbe86a7344b061ba57cdb33c4f'
		})
		res.status(200).end();
	});
	//kill token
	app.delete('/account/api/oauth/sessions/kill', function (req, res) {
		res.status(204).end();
	});
	//kill token
	app.delete('/account/api/oauth/sessions/kill/:accessToken', function (req, res) {
		res.status(204).end();
	});
	//token
	app.post('/account/api/oauth/token', function (req, res) {
		res.set("Content-Type", "application/json");
		res.json({
			access_token: 'eg1~eyJraWQiOiJ0RkMyVUloRnBUTV9FYTNxY09kX01xUVQxY0JCbTlrRkxTRGZlSmhzUkc4IiwiYWxnIjoiUFMyNTYifQ.eyJwIjoiZU5xVlVzbHVBakVNXC9SK0VrS0RMd2RKY3VsRDEzQTlBbm93eldHU2NVZXhBK2Z0bUVGQ0VXTVFwanRmM25xM1JNUVl3d2s1QkZMeFVyMk1ma3drYmdRc3hOMm94WVV1Z1d6WHFZRTVvT1ZIenJRR2xlWjd3N3EybUQ1VTluWlE1TkF5eEJWMWlpVVAwbnBKV3MzR2RPVFFzUHNMTzZsRFlreHBnMzhOOFArbzlpcEhZMjVDZ0VMQ21BS05TR3pDTFcxS0NKbTRrUkd4Z2RMbW01S0p6TVl0Qm4rdkFEdmJmYW5xYnp3YzFYSkJUODBOcFRlbFRXaGFhc1BCQUNiM253Q1Y2Ykhwd25NeUxtRzBKOUd1TG5iR2hGanVDaEJ3V1Nxb2NaV0hzVm1UVnkyMG9BK0ZiQ1NWTU9hQWxkQ3VXbzlERlUrVEVOaEYxUlk4N1RjNEpmeFd3Qjdwbkc3eThnTUJydWd2MTdFeW1KMmVpWlN3N1lpbVl4ZEVWVW9tMGo2SzA1S0h4OWtyV2tYUzlMVlFHcVJcL0ROZnZIOVFkWW96NEUiLCJjbHN2YyI6ImZvcnRuaXRlIiwidCI6InMiLCJtdmVyIjpmYWxzZSwiY2xpZCI6ImVjNjg0YjhjNjg3ZjQ3OWZhZGVhM2NiMmFkODNmNWM2IiwiaWMiOnRydWUsImV4cCI6MTU3MjIyMTc2MSwiYW0iOiJjbGllbnRfY3JlZGVudGlhbHMiLCJpYXQiOjE1NzIyMDczNjEsImp0aSI6IjlmZTE0YjFjZTMzNDQ2MTJhOTg4MzZhM2YxNzc1M2FhIn0.AZ7sn3F4pz1W5RaQgD4AM1prxGzwCRy-nULiegjxBjYGSCJQxphrnvNbFXyT1Izyf2nx_139PhRezevf855bu71B',
			expires_in: 28800,
			expires_at: '9999-12-31T23:59:59.999Z',
			token_type: 'bearer',
			refresh_token: 'aabbccddeeff11223344556677889900',
			refresh_expires: 28800,
			refresh_expires_at: '9999-12-31T23:59:59.999Z',
			account_id: 'aabbccddeeff11223344556677889900',
			client_id: 'ec684b8c687f479fadea3cb2ad83f5c6',
			internal_client: true,
			client_service: 'fortnite',
			app: 'fortnite',
			in_app_id: 'aabbccddeeff11223344556677889900'
		})
		res.status(200).end();
	});
	//receipts
	app.get('/fortnite/api/receipts/v1/account/:accountId/receipts', function (req, res) {
		res.json([]).status(200).end();
	});
	//blocklist
	app.get('/friends/api/public/blocklist/:accountId', function (req, res) {
		res.json({
			"blockedUsers": []
		}).status(200).end();
	});
	//friends setting
	app.get('/friends/api/v1/:accountId/settings', function (req, res) {
		res.json({
			"acceptInvites": "public"
		}).status(200).end();
	});
	//recent players
	app.get('/friends/api/public/list/fortnite/:accountId/recentPlayers', function (req, res) {
		res.json([]).status(200).end();
	});
	//friends list
	app.get('/friends/api/public/friends/:accountId', function (req, res) {
		res.json([
			{
				accountId: 'aabbccddeeff11223344556677889900',
				status: 'ACCEPTED',
				direction: 'INBOUND',
				created: '2018-12-06T04:46:01.296Z',
				favorite: false
			},
			{
				accountId: 'f926db2a84ac4c8887b26a14016c803d',
				status: 'PENDING',
				direction: 'INBOUND',
				created: '2019-07-26T19:55:15.471Z',
				favorite: false
			}
		]).status(200).end();
	});
	//datarouter
	app.post('/datarouter/api/v1/public/*', async function (req, res) {
		res.status(204).end();
	});
	//cloudstorage
	//yup empty cloudstorage (no matchmaking support at all)
	app.get('/fortnite/api/cloudstorage/system', function (req, res) {
		res.json([]).status(200).end();
	});
	app.get('/fortnite/api/cloudstorage/user/:accountId', function (req, res) {
		res.json([]).status(200).end();
	});
	app.get('/fortnite/api/cloudstorage/user/:accountId/:fileName', function (req, res) {
		res.set('Content-Type', 'application/octet-stream').json([]).status(200).end();
	});
	app.put('/fortnite/api/cloudstorage/user/:accountId/:fileName', function (req, res) {
		res.status(204).end();
	});
	//keychain
	app.get('/fortnite/api/storefront/v2/keychain', function (req, res) {
		//idk why i added that key :3
		res.json(["A93064DA8BDA456CADD2CD316BE64EE5:nziBPQTfuEl4IRK6pOaovQpqQC6nsMQZFTx+DEg62q4=:EID_FUCK_U_KID"]);
	});
	//content
	app.get('/content/api/pages/fortnite-game', function (req, res) {
		res.json(require(path.join(__dirname, '/news.js'))).status(200).end();
	});
	//timline
	app.get('/fortnite/api/calendar/v1/timeline', function (req, res) {
		res.json(require(path.join(__dirname, '/timeline.js'))).status(200).end();
	});
	//SHOP
	app.get('/fortnite/api/storefront/v2/catalog', function (req, res) {
		res.json(require(path.join(__dirname, '/shop.js'))).status(200).end();
	});
	//party
	app.get('/party/api/v1/Fortnite/user/:accountId', function (req, res) {
		res.json({
			current: [],
			pending: [],
			invites: [],
			pings: []
		}).status(200).end();
	});
	//affiliate slug
	app.get('/affiliate/api/public/affiliates/slug/:affiliateName', function (req, res) {
		res.json({
			"id": "aabbccddeeff11223344556677889900",
			"slug": req.params.affiliateName,
			"displayName": req.params.affiliateName,
			"status": "ACTIVE",
			"verified": true,
		}).status(200).end();
	});
	//profile manager (thx for armisto for adding rvn/making errs systems)
	app.post('/fortnite/api/game/v2/profile/:accountId/client/:command', function (req, res) {
		res.set("Content-Type", "application/json");
		var accountId = req.params.accountId;

		if (REPLACE_ACC_IDS_WITH_TEST) {
			accountId = "test";
		}

		var command = req.params.command;
		var profileId = req.query.profileId || "common_core";
		var profileData = Profile.readProfile(accountId, profileId);

		if (!profileData) {
			profileData = Profile.readProfileTemplate(profileId);

			if (!profileData) {
				makeError(res, "errors.com.epicgames.modules.profiles.operation_forbidden", "Unable to find template configuration for profile {0}", [profileId], 12813, 403, "fortnite", "prod-live").end();
				return;
			}

			profileData.created = profileData.updated = new Date().toISOString();
			profileData.accountId = accountId;

			//creating profile if it doesn't exist
			try {
				fs.mkdirSync(`./config/${accountId}/profiles`, { recursive: true });
				Profile.saveProfile(accountId, profileId, profileData);
			} catch (e) {
				console.log("Failed creating profile", e);
			}
		}

		var response = {
			"profileRevision": profileData.rvn,
			"profileId": profileId,
			"profileChangesBaseRevision": profileData.rvn,
			"profileChanges": [],
			"profileCommandRevision": profileData.commandRevision,
			"serverTime": new Date().toISOString(),
			"responseVersion": 1
		};

		//profile commands
		switch (command) {
			case "ClientQuestLogin":
				break;
			case "EquipBattleRoyaleCustomization":
				if (!checkValidProfileID(res, command, profileId, "athena")) {
					return;
				}

				var statName, statValue;

				switch (req.body.slotName) {
					case "Character":
						statName = "favorite_character"
						statValue = req.body.itemToSlot;
						break;
					case "Backpack":
						statName = "favorite_backpack"
						statValue = req.body.itemToSlot;
						break;
					case "Pickaxe":
						statName = "favorite_pickaxe"
						statValue = req.body.itemToSlot;
						break;
					case "Glider":
						statName = "favorite_glider"
						statValue = req.body.itemToSlot;
						break;
					case "SkyDiveContrail":
						statName = "favorite_skydivecontrail"
						statValue = req.body.itemToSlot;
						break;
					case "MusicPack":
						statName = "favorite_musicpack"
						statValue = req.body.itemToSlot;
						break;
					case "LoadingScreen":
						statName = "favorite_loadingscreen"
						statValue = req.body.itemToSlot;
						break;
					case "Dance":
					case "ItemWrap":
						var bIsDance = req.body.slotName == "Dance";
						statName = bIsDance ? "favorite_dance" : "favorite_itemwraps";
						var arr = profileData.stats.attributes[statName] || [];
						if (req.body.indexWithinSlot == -1) {
							// handle wrap "Apply To All"
							arr = [];

							for (var i = 0; i < (bIsDance ? 6 : 7); ++i) {
								arr[i] = req.body.itemToSlot;
							}
						} else {
							arr[req.body.indexWithinSlot || 0] = req.body.itemToSlot;
						}

						for (var i = 0; i < arr.length; ++i) {
							if (arr[i] == null) {
								arr[i] = "";
							}
						}

						statValue = arr;
						break;
				}

				if (statName != null && statValue != null) {
					Profile.modifyStat(profileData, statName, statValue, response.profileChanges);
				}

				//#I_AM_LAZY 3000
				//if (!Array.isArray(req.body.variantUpdates)) {
				//	Profile.changeItemAttribute(profileData, req.body.itemToSlot, "variants", req.body.variantUpdates, response.profileChanges);
				//}

				break;
			case "MarkItemSeen":
				req.body.itemIds.forEach(s => Profile.changeItemAttribute(profileData, s, "item_seen", true, response.profileChanges));
				break;
			case "PopulatePrerolledOffers":
				break;
			case "QueryProfile":
				break;
			case "RefreshExpeditions":
				break;
			case "RemoveGiftBox":
				Profile.removeItem(profileData, req.body.giftBoxItemId, response.profileChanges);
				break;
			case "SetAffiliateName":
				if (!checkValidProfileID(res, command, profileId, "common_core")) {
					return;
				}

				Profile.modifyStat(profileData, "mtx_affiliate", req.body.affiliateName, response.profileChanges);
				break;
			case "SetItemFavoriteStatus":
				Profile.changeItemAttribute(profileData, req.body.targetItemId, "favorite", req.body.bFavorite, response.profileChanges);
				break;
			case "SetItemFavoriteStatusBatch":
				req.body.itemIds.forEach((s, i) => Profile.changeItemAttribute(profileData, s, "favorite", req.body.itemFavStatus[i]), response.profileChanges);
				break;
			case "SetMtxPlatform":
				if (!checkValidProfileID(res, command, profileId, "common_core")) {
					return;
				}

				Profile.modifyStat(profileData, "current_mtx_platform", req.body.newPlatform, response.profileChanges);
				break;
			case "SetReceiveGiftsEnabled":
				if (!checkValidProfileID(res, command, profileId, "common_core")) {
					return;
				}

				Profile.modifyStat(profileData, "allowed_to_receive_gifts", req.body.newPlatform, response.profileChanges);
				break;
			default:
				makeError(res, "errors.com.epicgames.fortnite.operation_not_found", "Operation {0} not valid", [req.params.command], 16035, 404, "fortnite", "prod-live").end();
				return;
		}

		if (response.profileChanges.length > 0) {
			Profile.bumpRvn(profileData);
			response.profileRevision = profileData.rvn;
			response.profileCommandRevision = profileData.commandRevision;
			Profile.saveProfile(accountId, profileId, profileData);
		}

		var rvn = req.query.rvn || -1;

		if (rvn != response.profileChangesBaseRevision) {
			response.profileChanges = [{
				"changeType": "fullProfileUpdate",
				"profile": profileData
			}];
		}

		res.json(response).status(200).end();
	});

	app.listen(port, () => {
		console.log(`Thanos is listening on port ${port}!`)
		console.log(`TTTTTTT hh                                  `)
		console.log(`  TTT   hh        aa aa nn nnn   oooo   sss `)
		console.log(`  TTT   hhhhhh   aa aaa nnn  nn oo  oo s    `)
		console.log(`  TTT   hh   hh aa  aaa nn   nn oo  oo  sss `)
		console.log(`  TTT   hh   hh  aaa aa nn   nn  oooo      s`)
		console.log(`                                        sss `)
		console.log(`Current UserName: ${config.name}`)
		console.log(`Current Server Announcement: ${config.announcement}`)
	});


	function checkValidProfileID(res, command, sentProfileId) {
		if (res && command && sentProfileId && arguments.length >= 4) {
			if ([...arguments].indexOf(sentProfileId, 3) == -1) {
				makeError(res, "errors.com.epicgames.modules.profiles.invalid_command", "{0} is not valid on {1} profiles ({2})", [command, `player:profile_${sentProfileId}`, sentProfileId], 12801, 400, "fortnite", "prod-live").end();
				return false;
			}

			return true;
		}

		return true;
	}
 
	function makeError(res, errorCode, errorMessage, formatArgs, numericErrorCode, httpStatusCode, originatingService, intent) {
		return res
			.status(httpStatusCode)
			.set("X-Epic-Error-Code", numericErrorCode)
			.set("X-Epic-Error-Name", errorCode)
			.json({
				"errorCode": errorCode,
				"errorMessage": errorMessage.format(formatArgs),
				"messageVars": formatArgs,
				"numericErrorCode": numericErrorCode,
				"originatingService": originatingService,
				"intent": intent
			});
	}

	module.exports = app;
}());
