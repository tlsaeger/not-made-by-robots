<template>
  <div class="the-overlay" @click="$emit('closeTheAbout')">
    <div class="the-imprint-wrapper" @click="$emit('closeTheAbout')">
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
  </div>
</template>
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
