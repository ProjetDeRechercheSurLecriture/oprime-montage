/**
 * @module ui/participants-select.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var Confidential = require("fielddb/api/confidentiality_encryption/Confidential").Confidential;
var Participant = require("fielddb/api/user/Participant").Participant;

/**
 * @class ParticipantsSelect
 * @extends Component
 */
exports.ParticipantsSelect = Component.specialize( /** @lends ParticipantsSelect# */ {
	constructor: {
		value: function ParticipantsSelect() {
			var dbResults = [{
				"_id": "THIC665310KE",
				"_rev": "1-0b10c90baa311a071b535f0e47a4af66",
				"type": "Participant",
				"fields": [{
					"type": "",
					"_id": "anonymousCode",
					"labelNonLinguists": "Anonymous Code",
					"labelTranslators": "Anonymous Code",
					"shouldBeEncrypted": false,
					"showToUserTypes": "all",
					"defaultfield": true,
					"help": "A field to anonymously identify language speakers/participants.",
					"helpLinguists": "A field to anonymously identify language consultants/informants/experiment participants (by default it can be a timestamp, or a combination of experimenter initials, speaker/participant initials etc).",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "Code Permanent",
					"encryptedValue": "thic665310ke",
					"mask": "thic665310ke",
					"value": "thic665310ke",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}, {
					"type": "",
					"_id": "courseNumber",
					"labelExperimenter": "Course/Class/Section Number",
					"shouldBeEncrypted": true,
					"encrypted": true,
					"showToUserTypes": "all",
					"defaultfield": true,
					"help": "Optional course or section number, if used by the participants result reports or experimental conditions.",
					"helpLinguists": "Optional course or section number, if used by the participants result reports or experimental conditions.",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "N° section",
					"encryptedValue": "confidential:VTJGc2RHVmtYMSt1OE1XUnlVWklkOTRHNVFXZ2VES0RKRGtaeUlzNjNzST0=",
					"mask": "xxx",
					"value": "xxx",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}, {
					"type": "",
					"_id": "firstname",
					"shouldBeEncrypted": true,
					"encrypted": true,
					"showToUserTypes": "all",
					"defaultfield": true,
					"help": "The first name of the speaker/participant (optional, encrypted if speaker is anonymous)",
					"helpLinguists": "The first name of the speaker/participant (optional, should be encrypted if speaker should remain anonymous)",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "Prénom",
					"encryptedValue": "confidential:VTJGc2RHVmtYMStsRnVaaHd6Wlh6V0MrdTNQcXdMSmJyTFlDNlYwaG5SUT0=",
					"mask": "xxxxxx",
					"value": "xxxxxx",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}, {
					"type": "",
					"_id": "lastname",
					"shouldBeEncrypted": true,
					"encrypted": true,
					"showToUserTypes": "all",
					"defaultfield": true,
					"help": "The last name of the speaker/participant (encrypted)",
					"helpLinguists": "The last name of the speaker/participant (optional, encrypted if speaker should remain anonymous)",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "Nom de famille",
					"encryptedValue": "confidential:VTJGc2RHVmtYMTh0a3NxQk1MeTl2TWc5VjNMVmpwRGZWRGF1SjBPQUVjWT0=",
					"mask": "xxxxxxxx",
					"value": "xxxxxxxx",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}, {
					"type": "date",
					"_id": "dateOfBirth",
					"shouldBeEncrypted": true,
					"encrypted": true,
					"showToUserTypes": "all",
					"defaultfield": true,
					"json": {
						"timestamp": {
							"start": null,
							"end": null,
							"accuracy": null
						}
					},
					"help": "Optional date of birth of the speaker/participant, if used by the experimental analysis (ie speaker/participants of 20 months performed differently from speaker/participants of 22 months).",
					"helpLinguists": "Optional date of birth of the speaker/participant, if used by the experimental analysis (ie speaker/participants of 20 months performed differently from speaker/participants of 22 months).",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "Date de naissance",
					"encryptedValue": "confidential:VTJGc2RHVmtYMTl3b1VMaVJYSk91VkgzbXJXajJISW1lRjkwYU9jZ3NROD0=",
					"mask": "xxxx-xx-xx",
					"value": "xxxx-xx-xx",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}],
				"dateCreated": 1408146480447,
				"url": "https://corpusdev.lingsync.org/devgina-phophlo",
				"version": "v2.0.1",
				"dateModified": 1408146493856,
				"modifiedByUsers": [{
					"browserVersion": "5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36"
				}],
				"api": "participants",
				"_deleted_conflicts": ["2-5665550a8a6a4b96c26d8e7edb21a3cf", "2-1322739fd8643fd9a71241af735c4750"]
			}, {
				"_id": "SICA761209OM",
				"_rev": "1-a8cb9ddf6cbded1117735342cf87134f",
				"type": "Participant",
				"fields": [{
					"type": "",
					"_id": "anonymousCode",
					"labelNonLinguists": "Anonymous Code",
					"labelTranslators": "Anonymous Code",
					"shouldBeEncrypted": false,
					"showToUserTypes": "all",
					"defaultfield": true,
					"help": "A field to anonymously identify language speakers/participants.",
					"helpLinguists": "A field to anonymously identify language consultants/informants/experiment participants (by default it can be a timestamp, or a combination of experimenter initials, speaker/participant initials etc).",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "Code Permanent",
					"encryptedValue": "sica761209om",
					"mask": "sica761209om",
					"value": "sica761209om",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}, {
					"type": "",
					"_id": "courseNumber",
					"labelExperimenter": "Course/Class/Section Number",
					"shouldBeEncrypted": true,
					"encrypted": true,
					"showToUserTypes": "all",
					"defaultfield": true,
					"help": "Optional course or section number, if used by the participants result reports or experimental conditions.",
					"helpLinguists": "Optional course or section number, if used by the participants result reports or experimental conditions.",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "N° section",
					"encryptedValue": "confidential:VTJGc2RHVmtYMSszSzNGSW9KVHdPdWZ4TnNWR0pjZ3RYbEpzV2k2R1J0az0=",
					"mask": "xxx",
					"value": "xxx",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}, {
					"type": "",
					"_id": "firstname",
					"shouldBeEncrypted": true,
					"encrypted": true,
					"showToUserTypes": "all",
					"defaultfield": true,
					"help": "The first name of the speaker/participant (optional, encrypted if speaker is anonymous)",
					"helpLinguists": "The first name of the speaker/participant (optional, should be encrypted if speaker should remain anonymous)",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "Prénom",
					"encryptedValue": "confidential:VTJGc2RHVmtYMTlvcVg0KzBCSmk5T0lDOUcrTUJWaEJSVEFBc2FFT09vQT0=",
					"mask": "xxxxxxx",
					"value": "xxxxxxx",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}, {
					"type": "",
					"_id": "lastname",
					"shouldBeEncrypted": true,
					"encrypted": true,
					"showToUserTypes": "all",
					"defaultfield": true,
					"help": "The last name of the speaker/participant (encrypted)",
					"helpLinguists": "The last name of the speaker/participant (optional, encrypted if speaker should remain anonymous)",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "Nom de famille",
					"encryptedValue": "confidential:VTJGc2RHVmtYMTg3aFhjcVo5Y00yb3kzMXVmYzlmZWlSYXI4WlVydTJZND0=",
					"mask": "xxxxxx",
					"value": "xxxxxx",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}, {
					"type": "date",
					"_id": "dateOfBirth",
					"shouldBeEncrypted": true,
					"encrypted": true,
					"showToUserTypes": "all",
					"defaultfield": true,
					"json": {
						"timestamp": {
							"start": null,
							"end": null,
							"accuracy": null
						}
					},
					"help": "Optional date of birth of the speaker/participant, if used by the experimental analysis (ie speaker/participants of 20 months performed differently from speaker/participants of 22 months).",
					"helpLinguists": "Optional date of birth of the speaker/participant, if used by the experimental analysis (ie speaker/participants of 20 months performed differently from speaker/participants of 22 months).",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "Date de naissance",
					"encryptedValue": "confidential:VTJGc2RHVmtYMTlMTWxhak5mc0RDNEt2L3M5aWc0ZC9tOS9sZ0hlSE91UT0=",
					"mask": "xxxx-xx-xx",
					"value": "xxxx-xx-xx",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}],
				"dateCreated": 1408146480444,
				"url": "https://corpusdev.lingsync.org/devgina-phophlo",
				"version": "v2.0.1",
				"dateModified": 1408146492527,
				"modifiedByUsers": [{
					"browserVersion": "5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36"
				}],
				"api": "participants",
				"_deleted_conflicts": ["2-7316ca27e61e4caf52147287c57d87d0", "2-1483baa3c9c070275164fa0809f46458"]
			}, {
				"_id": "REGA665319IS",
				"_rev": "1-a48229f5093e68ef38ad354228ee82ad",
				"type": "Participant",
				"fields": [{
					"type": "",
					"_id": "anonymousCode",
					"labelNonLinguists": "Anonymous Code",
					"labelTranslators": "Anonymous Code",
					"shouldBeEncrypted": false,
					"showToUserTypes": "all",
					"defaultfield": true,
					"help": "A field to anonymously identify language speakers/participants.",
					"helpLinguists": "A field to anonymously identify language consultants/informants/experiment participants (by default it can be a timestamp, or a combination of experimenter initials, speaker/participant initials etc).",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "Code Permanent",
					"encryptedValue": "rega665319is",
					"mask": "rega665319is",
					"value": "rega665319is",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}, {
					"type": "",
					"_id": "courseNumber",
					"labelExperimenter": "Course/Class/Section Number",
					"shouldBeEncrypted": true,
					"encrypted": true,
					"showToUserTypes": "all",
					"defaultfield": true,
					"help": "Optional course or section number, if used by the participants result reports or experimental conditions.",
					"helpLinguists": "Optional course or section number, if used by the participants result reports or experimental conditions.",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "N° section",
					"encryptedValue": "confidential:VTJGc2RHVmtYMSs4OG9DbFB3cWJrdFg1ZUVmcmZjZDcvTE1vSHNOM3pPcz0=",
					"mask": "xxx",
					"value": "xxx",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}, {
					"type": "",
					"_id": "firstname",
					"shouldBeEncrypted": true,
					"encrypted": true,
					"showToUserTypes": "all",
					"defaultfield": true,
					"help": "The first name of the speaker/participant (optional, encrypted if speaker is anonymous)",
					"helpLinguists": "The first name of the speaker/participant (optional, should be encrypted if speaker should remain anonymous)",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "Prénom",
					"encryptedValue": "confidential:VTJGc2RHVmtYMTh6dkl6WVROMDFZQmp4cFpHSnkyMzQ2eEJNV1FJWDZmND0=",
					"mask": "xxxxxx",
					"value": "xxxxxx",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}, {
					"type": "",
					"_id": "lastname",
					"shouldBeEncrypted": true,
					"encrypted": true,
					"showToUserTypes": "all",
					"defaultfield": true,
					"help": "The last name of the speaker/participant (encrypted)",
					"helpLinguists": "The last name of the speaker/participant (optional, encrypted if speaker should remain anonymous)",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "Nom de famille",
					"encryptedValue": "confidential:VTJGc2RHVmtYMTg1MFdsMVhGZFp1ZVMzQVNnMFZCZ0JtaGZMQXZWNDRnMD0=",
					"mask": "xxxxxxxx",
					"value": "xxxxxxxx",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}, {
					"type": "date",
					"_id": "dateOfBirth",
					"shouldBeEncrypted": true,
					"encrypted": true,
					"showToUserTypes": "all",
					"defaultfield": true,
					"json": {
						"timestamp": {
							"start": null,
							"end": null,
							"accuracy": null
						}
					},
					"help": "Optional date of birth of the speaker/participant, if used by the experimental analysis (ie speaker/participants of 20 months performed differently from speaker/participants of 22 months).",
					"helpLinguists": "Optional date of birth of the speaker/participant, if used by the experimental analysis (ie speaker/participants of 20 months performed differently from speaker/participants of 22 months).",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "Date de naissance",
					"encryptedValue": "confidential:VTJGc2RHVmtYMTlzMUNuRldqYlN6SEVGVy9zNWk5dzRUU0IzMG5rYkJ5Yz0=",
					"mask": "xxxx-xx-xx",
					"value": "xxxx-xx-xx",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}],
				"dateCreated": 1408146480440,
				"url": "https://corpusdev.lingsync.org/devgina-phophlo",
				"version": "v2.0.1",
				"dateModified": 1408146491729,
				"modifiedByUsers": [{
					"browserVersion": "5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36"
				}],
				"api": "participants",
				"_deleted_conflicts": ["2-2dcbde4286a2bf9d6b833a2900c189d3", "2-1af4290c8bf78f46fe7d1472783c2fe8"]
			}, {
				"_id": "MIGM740610EA",
				"_rev": "1-38d9ad20eec632d4af64a4b417ea12c1",
				"type": "Participant",
				"fields": [{
					"type": "",
					"_id": "anonymousCode",
					"labelNonLinguists": "Anonymous Code",
					"labelTranslators": "Anonymous Code",
					"shouldBeEncrypted": false,
					"showToUserTypes": "all",
					"defaultfield": true,
					"help": "A field to anonymously identify language speakers/participants.",
					"helpLinguists": "A field to anonymously identify language consultants/informants/experiment participants (by default it can be a timestamp, or a combination of experimenter initials, speaker/participant initials etc).",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "Code Permanent",
					"encryptedValue": "migm740610ea",
					"mask": "migm740610ea",
					"value": "migm740610ea",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}, {
					"type": "",
					"_id": "courseNumber",
					"labelExperimenter": "Course/Class/Section Number",
					"shouldBeEncrypted": true,
					"encrypted": true,
					"showToUserTypes": "all",
					"defaultfield": true,
					"help": "Optional course or section number, if used by the participants result reports or experimental conditions.",
					"helpLinguists": "Optional course or section number, if used by the participants result reports or experimental conditions.",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "N° section",
					"encryptedValue": "confidential:VTJGc2RHVmtYMTlFTkZtQmJneTVoTEhUM3VmbXZoWFI0cytkYTg0ZzU0OD0=",
					"mask": "xxx",
					"value": "xxx",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}, {
					"type": "",
					"_id": "firstname",
					"shouldBeEncrypted": true,
					"encrypted": true,
					"showToUserTypes": "all",
					"defaultfield": true,
					"help": "The first name of the speaker/participant (optional, encrypted if speaker is anonymous)",
					"helpLinguists": "The first name of the speaker/participant (optional, should be encrypted if speaker should remain anonymous)",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "Prénom",
					"encryptedValue": "confidential:VTJGc2RHVmtYMTlMeHUwK2FzQXFzcEdVRmxmcWlpQTRFS0NySUJXcTg4cz0=",
					"mask": "xxxxxx",
					"value": "xxxxxx",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}, {
					"type": "",
					"_id": "lastname",
					"shouldBeEncrypted": true,
					"encrypted": true,
					"showToUserTypes": "all",
					"defaultfield": true,
					"help": "The last name of the speaker/participant (encrypted)",
					"helpLinguists": "The last name of the speaker/participant (optional, encrypted if speaker should remain anonymous)",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "Nom de famille",
					"encryptedValue": "confidential:VTJGc2RHVmtYMSt3Vmd0L284VFYwNGJ1UHFMMTJ2YXo3T2hpbFVKWjJGMD0=",
					"mask": "xxxxxx",
					"value": "xxxxxx",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}, {
					"type": "date",
					"_id": "dateOfBirth",
					"shouldBeEncrypted": true,
					"encrypted": true,
					"showToUserTypes": "all",
					"defaultfield": true,
					"json": {
						"timestamp": {
							"start": null,
							"end": null,
							"accuracy": null
						}
					},
					"help": "Optional date of birth of the speaker/participant, if used by the experimental analysis (ie speaker/participants of 20 months performed differently from speaker/participants of 22 months).",
					"helpLinguists": "Optional date of birth of the speaker/participant, if used by the experimental analysis (ie speaker/participants of 20 months performed differently from speaker/participants of 22 months).",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "Date de naissance",
					"encryptedValue": "confidential:VTJGc2RHVmtYMTlFQlMxdTBnWGlNd1FQQjl5MDZSNDlJYktKenZwMm5jaz0=",
					"mask": "xxxx-xx-xx",
					"value": "xxxx-xx-xx",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}],
				"dateCreated": 1408146480435,
				"url": "https://corpusdev.lingsync.org/devgina-phophlo",
				"version": "v2.0.1",
				"dateModified": 1408146490924,
				"modifiedByUsers": [{
					"browserVersion": "5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36"
				}],
				"api": "participants",
				"_deleted_conflicts": ["2-7e200a8fdd3e844a1709daabb0d3ae1d", "2-4a2c63dbd2c00c1aa507ecc6c6b9e34e"]
			}, {
				"_id": "CODE PERMANENT",
				"_rev": "1-1585c06f2adc8788dc667226b995de30",
				"type": "Participant",
				"fields": [{
					"type": "",
					"_id": "anonymousCode",
					"labelNonLinguists": "Anonymous Code",
					"labelTranslators": "Anonymous Code",
					"shouldBeEncrypted": false,
					"showToUserTypes": "all",
					"defaultfield": true,
					"help": "A field to anonymously identify language speakers/participants.",
					"helpLinguists": "A field to anonymously identify language consultants/informants/experiment participants (by default it can be a timestamp, or a combination of experimenter initials, speaker/participant initials etc).",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "Code Permanent",
					"encryptedValue": "Code Permanent",
					"mask": "Code Permanent",
					"value": "Code Permanent",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}, {
					"type": "",
					"_id": "courseNumber",
					"labelExperimenter": "Course/Class/Section Number",
					"shouldBeEncrypted": true,
					"encrypted": true,
					"showToUserTypes": "all",
					"defaultfield": true,
					"help": "Optional course or section number, if used by the participants result reports or experimental conditions.",
					"helpLinguists": "Optional course or section number, if used by the participants result reports or experimental conditions.",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "N° section",
					"encryptedValue": "confidential:VTJGc2RHVmtYMStSQ3pNYm05bzRyMWxzVzFuUDhKUWZhcEc4QVpmMzdHVT0=",
					"mask": "xx xxxxxxx",
					"value": "xx xxxxxxx",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}, {
					"type": "",
					"_id": "firstname",
					"shouldBeEncrypted": true,
					"encrypted": true,
					"showToUserTypes": "all",
					"defaultfield": true,
					"help": "The first name of the speaker/participant (optional, encrypted if speaker is anonymous)",
					"helpLinguists": "The first name of the speaker/participant (optional, should be encrypted if speaker should remain anonymous)",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "Prénom",
					"encryptedValue": "confidential:VTJGc2RHVmtYMStsaUU4RWFaUVE5TXRldVVIanJSNlpodFRzMFVrNzc1ND0=",
					"mask": "xxxxxx",
					"value": "xxxxxx",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}, {
					"type": "",
					"_id": "lastname",
					"shouldBeEncrypted": true,
					"encrypted": true,
					"showToUserTypes": "all",
					"defaultfield": true,
					"help": "The last name of the speaker/participant (encrypted)",
					"helpLinguists": "The last name of the speaker/participant (optional, encrypted if speaker should remain anonymous)",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "Nom de famille",
					"encryptedValue": "confidential:VTJGc2RHVmtYMStSNHZxd1lHRER6UktBRitPL2xXMWRSWTBiL0dWeTc4OD0=",
					"mask": "xxx xx xxxxxxx",
					"value": "xxx xx xxxxxxx",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}, {
					"type": "date",
					"_id": "dateOfBirth",
					"shouldBeEncrypted": true,
					"encrypted": true,
					"showToUserTypes": "all",
					"defaultfield": true,
					"json": {
						"timestamp": {
							"start": null,
							"end": null,
							"accuracy": null
						}
					},
					"help": "Optional date of birth of the speaker/participant, if used by the experimental analysis (ie speaker/participants of 20 months performed differently from speaker/participants of 22 months).",
					"helpLinguists": "Optional date of birth of the speaker/participant, if used by the experimental analysis (ie speaker/participants of 20 months performed differently from speaker/participants of 22 months).",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "Date de naissance",
					"encryptedValue": "confidential:VTJGc2RHVmtYMSs3alhNYndHTDhCajhkRjRaVE5uRkhvYXBTSmVxcFI3VjVsRm45RDVaTDNCd1Vwd2hTY21LZg==",
					"mask": "xxxx xx xxxxxxxxx",
					"value": "xxxx xx xxxxxxxxx",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}],
				"dateCreated": 1408146480424,
				"url": "https://corpusdev.lingsync.org/devgina-phophlo",
				"version": "v2.0.1",
				"dateModified": 1408146483122,
				"modifiedByUsers": [{
					"browserVersion": "5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36"
				}],
				"api": "participants",
				"_deleted_conflicts": ["2-ea55e1f2630481947f973fc3eff765a6"]
			}, {
				"_id": "VOIA685310KS",
				"_rev": "1-fa3a6901c2dcb710405012e16d6eb06b",
				"type": "Participant",
				"fields": [{
					"type": "",
					"_id": "anonymousCode",
					"labelNonLinguists": "Anonymous Code",
					"labelTranslators": "Anonymous Code",
					"shouldBeEncrypted": false,
					"showToUserTypes": "all",
					"defaultfield": true,
					"help": "A field to anonymously identify language speakers/participants.",
					"helpLinguists": "A field to anonymously identify language consultants/informants/experiment participants (by default it can be a timestamp, or a combination of experimenter initials, speaker/participant initials etc).",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "Code Permanent",
					"encryptedValue": "voia685310ks",
					"mask": "voia685310ks",
					"value": "voia685310ks",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}, {
					"type": "",
					"_id": "courseNumber",
					"labelExperimenter": "Course/Class/Section Number",
					"shouldBeEncrypted": true,
					"encrypted": true,
					"showToUserTypes": "all",
					"defaultfield": true,
					"help": "Optional course or section number, if used by the participants result reports or experimental conditions.",
					"helpLinguists": "Optional course or section number, if used by the participants result reports or experimental conditions.",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "N° section",
					"encryptedValue": "confidential:VTJGc2RHVmtYMSt4MkwyTVNPL0xtdjlzdEtUTkpkV3dkdTNzQytzd3ZUTT0=",
					"mask": "xxx",
					"value": "xxx",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}, {
					"type": "",
					"_id": "firstname",
					"shouldBeEncrypted": true,
					"encrypted": true,
					"showToUserTypes": "all",
					"defaultfield": true,
					"help": "The first name of the speaker/participant (optional, encrypted if speaker is anonymous)",
					"helpLinguists": "The first name of the speaker/participant (optional, should be encrypted if speaker should remain anonymous)",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "Prénom",
					"encryptedValue": "confidential:VTJGc2RHVmtYMSs2WVVXdHR6bU51ckQ2N1B5bkRCMUh6SDdpMWx4a2ZWQT0=",
					"mask": "xxxxxxxxx",
					"value": "xxxxxxxxx",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}, {
					"type": "",
					"_id": "lastname",
					"shouldBeEncrypted": true,
					"encrypted": true,
					"showToUserTypes": "all",
					"defaultfield": true,
					"help": "The last name of the speaker/participant (encrypted)",
					"helpLinguists": "The last name of the speaker/participant (optional, encrypted if speaker should remain anonymous)",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "Nom de famille",
					"encryptedValue": "confidential:VTJGc2RHVmtYMSttcjgwWXErM0hPMC80cWkxM3ZwV2liU3RPdERCNkh3Zz0=",
					"mask": "xxxxxx",
					"value": "xxxxxx",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}, {
					"type": "date",
					"_id": "dateOfBirth",
					"shouldBeEncrypted": true,
					"encrypted": true,
					"showToUserTypes": "all",
					"defaultfield": true,
					"json": {
						"timestamp": {
							"start": null,
							"end": null,
							"accuracy": null
						}
					},
					"help": "Optional date of birth of the speaker/participant, if used by the experimental analysis (ie speaker/participants of 20 months performed differently from speaker/participants of 22 months).",
					"helpLinguists": "Optional date of birth of the speaker/participant, if used by the experimental analysis (ie speaker/participants of 20 months performed differently from speaker/participants of 22 months).",
					"version": "v2.0.1",
					"comments": [],
					"labelExperimenters": "Date de naissance",
					"encryptedValue": "confidential:VTJGc2RHVmtYMTh1S1NoWnN2VEl2S0tPQ1ozbnFmNUZWelJtdGxmSkJDMD0=",
					"mask": "xxxx-xx-xx",
					"value": "xxxx-xx-xx",
					"dbname": "",
					"dateCreated": 0,
					"dateModified": 0
				}],
				"dateCreated": 1408146337304,
				"url": "https://corpusdev.lingsync.org/devgina-phophlo",
				"version": "v2.0.1",
				"dateModified": 1408146406876,
				"modifiedByUsers": [{
					"browserVersion": "5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36"
				}],
				"api": "participants",
				"_deleted_conflicts": ["2-8af3309a4d38427505d98888192ca79d", "2-653577b1f888058c0f9553782f3a97a4"]
			}];
			this.content = [{
				"firstname": "Child2",
				"text": "Child",
				"_id": "Participant",
				"key": "participant",
				"gamifiedKey": "child",
				"selected": true
			}, {
				"firstname": "Teacher",
				"text": "Teacher",
				"_id": "Administrator",
				"key": "experimentAdministrator"
			}, {
				"firstname": "Parent",
				"text": "Parent",
				"_id": "Parent",
				"key": "parent"
			}, {
				"firstname": "SLP",
				"text": "SLP",
				"_id": "Administrator",
				"key": "experimentAdministratorSpecialist"
			}, {
				"firstname": "School Records",
				"text": "School Records",
				"_id": "Report",
				"key": "resultReport",
				"gamifiedKey": "school_records"
			}, {
				"firstname": "Debug",
				"text": "Debug",
				"_id": "Debug",
				"key": "debug"
			}, {
				"firstname": "Default",
				"text": "Default",
				"_id": "Default",
				"key": "default"
			}];
			this.confidential = new Confidential({
				secretkey: "8ead93f2-0b65-42e9-88b0-449e1c88d24f"
			});
			var self = this;
			this.content = dbResults.map(function(rawParticipant) {
				rawParticipant.confidential = self.confidential;
				rawParticipant = new Participant(rawParticipant);
				// rawParticipant.decryptedMode = true;
				return rawParticipant;
			});
		}
	},

	enterDocument: {
		value: function(firstTime) {
			this.super(firstTime);

			if (firstTime) {
				var rangeController = this.templateObjects.rangeController;
				//Observe the selection for changes

				// rangeController.content = this.content;
				var self = this;
				if (this.content) {
					this.content.map(function(audience) {
						if (audience.selected) {
							self.templateObjects.select.value = audience;
							self.handleChange();
						}
					});
				}
			}
			this.element.addEventListener("change", this, false);
		}
	},

	handleChange: {
		value: function() {
			// console.log("handleChange", this.templateObjects.select.value);
			if (this._currentAudience !== this.templateObjects.select.value) {
				this._currentAudience = this.templateObjects.select.value;
				this.application.currentAudience = this._currentAudience;
				var changeAudienceEvent = document.createEvent("CustomEvent");
				changeAudienceEvent.initCustomEvent("changeCurrentAudience", true, true, null);
				this.dispatchEvent(changeAudienceEvent);
			}
			console.log("ParticipantsSelect handleChange", this._currentAudience);
		}
	},

	_currentAudience: {
		value: null
	}
});
