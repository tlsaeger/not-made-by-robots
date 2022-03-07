<template>
  <div class="the-overlay" @click="$emit('closeTheAbout')">
    <div
      v-if="this.selectedLang == 'de'"
      class="the-imprint-wrapper"
      @click="$emit('closeTheAbout')"
    >
      <div class="title-imprint">
        <h2>About</h2>
        <p class="cross">X</p>
      </div>
      <p>
        Not Made by Robots ist eine Sammlung die es sich zur Aufgabe macht, dass
        Thema der künstlichen Intelligenz an so viele Künstler:innen und
        Designschaffende wie möglich heranzutragen. Diese Sammlung gibt dabei
        einen Einblick in das Thema und sorgt mit einem »Hands-On-Approach«
        dafür, dass sich jede:r auf einfach Weise die Hände schmutzig machen
        kann.
      </p>
      <br />
      Die Sammlung bietet vier Kategorien an:
      <h3>Tutorials</h3>
      <p>
        Hier kannst du »künstliche Intelligenz« ausprobiern. Dir wird ein
        einfacher Einstieg gegeben außerdem lernst du auch ein bisschen coden.
        Aber bloß keine Angst!
      </p>
      <h3>News</h3>
      <p>
        Was ist los in der Welt von zwischen Design und KI, ein Twitter-Bot
        versorgt dich täglich mit den Nachrichten der wichtigsten Personen und
        Institutionen aus dem Bereich AI & Design.
      </p>
      <h3>Wissen</h3>
      <p>
        Hier findest du Hintergrundwissen rund um das Thema, was ist nochmal
        Supervised Learning, wie funktioniert ein GAN? Bald bist du schlauer!
      </p>
      <h3>Ressourcen</h3>
      <p>
        Das Thema hat dich gecatcht und du willst loslaufen in die freie Welt
        der KI, dann findest du hier ein paar gute Startpunkte, von denen du
        deine Reise beginnen kannst.
        <br />
        Not Made by Robots ist eine Master-Arbeit von
        <a href="https://tlsaeger.de" target="_blank">Tom-Lucas Säger</a>↗︎,
        entstanden am Department Design der Hochschule für angewandte
        Wissenschaften Hamburg. Betreut von Prof. Dr. Michaela Diener und Prof.
        Peter Kabel. In Zusammenarbeit mit dem Forschungsprojekt
        <a href="https://aixdesign.space" target="_blank">aiXdesign</a>↗︎.
        <br />
        Hamburg 2022
      </p>
    </div>
    <div
      v-else-if="this.selectedLang == 'en'"
      class="the-imprint-wrapper"
      @click="$emit('closeTheAbout')"
    >
      <div class="title-imprint">
        <h2>About</h2>
        <p class="cross">X</p>
      </div>
      <p>
        Not Made by Robots is a collection that aims to bring the theme of
        artificial artificial intelligence to as many artists and designers as
        possible. artists and designers as possible. This collection provides an
        insight into the subject and, with a "hands-on approach", makes sure
        that everyone hands-on approach, so that everyone can get their hands
        dirty in a simple way. can get their hands dirty.
      </p>
      <br />
      The collection offers four categories:
      <h3>Tutorials</h3>
      <p>
        Here you can try out "artificial intelligence". You will be given a you
        will also learn how to code a little. But don't be afraid!
      </p>
      <h3>News</h3>
      <p>
        What's going on in the world of between design and AI? provides you
        daily with the news of the most important people and institutions from
        the field of AI & Design.
      </p>
      <h3>Theory</h3>
      <p>
        Here you will find background knowledge on the topic, what is supervised
        learning again? Supervised Learning, how does a GAN work? Soon you will
        be smarter!
      </p>
      <h3>Ressources</h3>
      <p>
        The topic has hooked you and you want to run off into the free world of
        AI. of AI, then you'll find a few good starting points here from which
        you can start your journey.
        <br />
        Not Made by Robots is a master's thesis by
        <a href="https://tlsaeger.de" target="_blank">Tom-Lucas Säger</a>↗︎, it
        was created at the Department of Design at the University of Sciences
        Hamburg. Supervised by Prof. Dr. Michaela Diener and Prof. Peter Kabel.
        In collaboration with the research project
        <a href="https://aixdesign.space" target="_blank">aiXdesign</a>↗︎.
        <br />
        Hamburg 2022
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedLang: "en"
    };
  },
  beforeMount() {
    if (navigator.language == "de") {
      this.selectedLang = "de";
    }
  }
};
</script>
<style scoped>
.the-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
}
.the-imprint-wrapper {
  background-color: rgb(10, 10, 10);
  position: fixed;
  top: 5%;
  z-index: 999;
  left: 5%;
  right: 5%;
  overflow: scroll;
  height: 90%;
  padding: 2em;
  border: solid 1px rgb(200, 200, 200);
  border-radius: 0.5em;
}
.title-imprint {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.cross {
  font-size: 3em;
}
h2 {
  font-size: 3em;
}
h3 {
  font-size: 2em;
  margin: 0.3em 0 0.1em 0;
}
p {
  font-size: 1em;
}
a {
  font-style: italic;
}
@media (prefers-color-scheme: light) {
  .the-imprint-wrapper {
    background-color: rgb(245, 245, 245);
    border: solid 1px rgb(10, 10, 10);
  }
}
</style>
