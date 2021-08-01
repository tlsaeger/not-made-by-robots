const Twitter = require('twitter')
const fs = require('fs-extra')
const dotenv = require('dotenv')
dotenv.config()

const client = Twitter({
	consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
})

const endpoint = 'statuses/home_timeline'
const params = {
    // screen_name: 'runwayml' ,
    include_rts: false,
    exclude_replies: true,
    tweet_mode:'extended',
    count: 200
}
const callback = (error, tweets, response) => {
	if (!error) fs.outputJSON('./tweets/tweets.json', tweets.slice(0,50), {spaces: 4})
}

export default function NuxtTwitter(config) {
	this.nuxt.hook('build:before', generator => {
		client.get(endpoint, params, callback)
	})
}