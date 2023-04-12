# Mongo Discord Bot URL Generator

A Discord bot built with Node.js and MongoDB that generates unique URLs for a given base URL. This bot is designed to be used in a server that needs to generate URLs frequently and wants to ensure that each URL is unique. 

## Installation

To use this bot, you will need to have [Node.js](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/) installed on your system. Once you have these dependencies installed, follow these steps to install and configure the bot:

1. Clone the repository using `git clone https://github.com/Combo-Miner/Mongo-Gen`
2. Navigate to the project directory and run `npm install`
3. Create a new Discord bot account and obtain a bot token. You can follow the instructions [here](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)
4. Update the `config.json` file with your bot token and other required configuration parameters. You can see this video down below for more details.



5. Start the bot by running `node index.js` but before you do that,make sure you have installed the dependencies with `npm install`

## Usage

Once the bot is running, you can use it in your Discord server by typing the command `+genurl <base_url>`. The bot will generate a unique URL using the provided base URL and store it in the MongoDB database. The bot will then send the generated URL back to the user who issued the command.

## Video Demo

Check out this video to see the bot in action: [Link to Video Demo](https://youtu.be/C8oM8xlcv7s)

## Whitelist Your IP
To get acces to the mongo API you will have to whitelist your IP address.
![GIF](https://imgur.com/82PRKGC.gif)

## Contributors

There is only !"Unkown#6666 who contributed this project and worked hard so please don't steal this project and give him credits if you use this project and dont forget to star this project.
