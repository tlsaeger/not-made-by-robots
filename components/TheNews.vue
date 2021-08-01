<template>
  <section class="fifth_section section">
    <div class="text-block-wrapper text-block-wrapper-mini">
      <transition v-for="tweet in tweets" :key="tweet.id" name="fade">
        <a
          :href="
            `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`
          "
          target="_blank"
          class="card card-mini shadow shadow-hover news-card"
        >
        <!-- <video class="preview-image preview-image-mini" v-if="'media' in tweet.entities && 'video_info' in tweet.extended_entities.media[0]" :src="tweet.extended_entities.media[0].video_info.variants[2].url" :type="tweet.extended_entities.media[0].video_info.variants[2].content_type" autoplay muted loop >  </video> -->
          <img
            class="preview-image preview-image-mini"
            v-if="'media' in tweet.entities"
            :src="tweet.entities.media[0].media_url_https"
            alt=""
          />
          <div class="desc-text-wrapper">
            <p>{{ tweetText(tweet.full_text) }}</p>
            <div class="tweet-details">
              <p class="user">
                By @{{ tweet.user.name }} {{ convertDate(tweet.created_at) }}
              </p>
              <p class="date"></p>
            </div>
          </div>
        </a>
      </transition>
    </div>
  </section>
</template>
<script>
import tweets from "@/tweets/tweets";
export default {
  data() {
    return {
      tweets
    };
  },
  methods: {
      tweetText: function(text) {
      let urlRegex = /(https?:\/\/[^\s]+)/g;
      return text.replace(urlRegex, "");
    },
    convertDate(tdate) {
      let systemDate = new Date(Date.parse(tdate));
      systemDate = Date.parse(tdate.replace(/( \+)/, " UTC$1"));
      let userDate = new Date().getTime();
      let diff = Math.floor((userDate - systemDate) / 1000);
      if (diff <= 1) {
        return "just now";
      }
      if (diff < 20) {
        return diff + " seconds ago";
      }
      if (diff < 40) {
        return "half a minute ago";
      }
      if (diff < 60) {
        return "less than a minute ago";
      }
      if (diff <= 90) {
        return "one minute ago";
      }
      if (diff <= 3540) {
        return Math.round(diff / 60) + " minutes ago";
      }
      if (diff <= 5400) {
        return "1 hour ago";
      }
      if (diff <= 86400) {
        return Math.round(diff / 3600) + " hours ago";
      }
      if (diff <= 129600) {
        return "1 day ago";
      }
      if (diff < 604800) {
        return Math.round(diff / 86400) + " days ago";
      }
      if (diff <= 777600) {
        return "1 week ago";
      }
      systemDate = new Date(systemDate);
      let day = systemDate.getDate();
      let month = systemDate.getMonth();
      let hours = systemDate.getHours();
      let minutes =
        (systemDate.getMinutes() < 10 ? "0" : "") + systemDate.getMinutes();
      return `on ${day}.${month}. ${hours}:${minutes}`;
    }
  }
};
</script>
<style scoped>
.tweet-details {
  font-size: 0.7em;
}
</style>