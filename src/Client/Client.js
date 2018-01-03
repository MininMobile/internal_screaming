const d = require("discord.js");

/**
 * Bot Client for Interacting with Discord
 */
class Client {
	constructor() {
		this.client = new d.Client();
	}

	on(event, handler) {
		switch (event) {
			case "screaming":
				this.client.on("message", handler);
				break;
		}
	}

	login(token) {
		return this.client.login(token);
	}
}

module.exports = exports = Client;