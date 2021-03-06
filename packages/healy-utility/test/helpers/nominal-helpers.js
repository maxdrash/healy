const path = require('path');

module.exports = function (nodecg) {
	return {
		healyOptions: {
			googleApplicationCredentialsPath: path.resolve(__dirname, '../../../../google-application-credentials.json'),
			replicantMappings: {
				teams: nodecg.Replicant('teams'),
				players: nodecg.Replicant('players'),
				sponsors_rotation: nodecg.Replicant('ingameSponsors'), // eslint-disable-line camelcase
				brackets: nodecg.Replicant('brackets')
			},
			casts: {
				integer: [
					'deaths',
					'game_loss',
					'game_win',
					'kills',
					'kda',
					'map_loss',
					'map_win',
					'match',
					'match_loss',
					'match_win',
					'order',
					'round',
					'seed',
					'team1_score',
					'team2_score'
				],
				float: [
					'time'
				]
			},
			imageProcessingJobs: [{
				folder: 'teams.logo',
				sheetName: 'teams',
				metadataField: 'logo_meta'
			}, {
				folder: 'teams.school_image',
				sheetName: 'teams',
				metadataField: 'school_image_meta'
			}, {
				folder: 'teams.image',
				sheetName: 'teams',
				metadataField: 'image_meta'
			}, {
				folder: 'sponsors.image',
				sheetName: 'sponsors_rotation',
				metadataField: 'image_meta'
			}, {
				folder: 'players.image',
				sheetName: 'players',
				metadataField: 'image_meta'
			}]
		}
	};
};
