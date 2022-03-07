<template>
  <div @click="$emit('closePanel')" class="overlay">
    <div class="contribution-info">
      <p v-if="this.selectedLang == 'de'">
        Mit einem Klick auf »Seite bearbeiten kannst du die Seite bearbeiten.
        Dafür wirst du auf GitHub weitergeleitet, dort liegt der Code der Seite.
        Über einen Klick auf das Stift Icon kannst du die Inhalte dieser Seite
        anpassen und verbessern. Über »Add File« fügst du einen neuen Eintrag
        hinzu. Dafür musst du dich einmal bei GitHub anmelden. Über »Commit New
        File« sendest du uns die die Änderung, wenn diese von uns genehmigt
        wird, hast du so deine aller Erste »Contribution« in der Open Source
        Welt geleistet. Danke für Deine Mithilfe! Weitere Infos findest du
        <a
          href="https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github"
          >hier ↗︎</a
        >
      </p>

      <p v-else-if="this.selectedLang == 'en'">
        Click on "Edit page" to edit the page. You will be redirected to GitHub,
        where the code for the page is located. By clicking on the pencil icon,
        you can adapt and improve the content of this page. and improve it.
        Click on "Add File" to add a new entry. new entry. To do this, you have
        to log in to GitHub once. Via "Commit New File" you send us the change,
        if it is approved by us, you have your you have made your very first
        "contribution" in the open source world. world. Thank you for your help!
        You can find more information
        <a
          href="https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github"
          >here ↗︎</a
        >
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

<style>
.contribution-info {
  position: fixed;
  right: 0.3em;
  bottom: 2.6rem;
  background-color: black;
  border: solid 1px white;
  border-radius: 12px;
  width: 35%;
  font-size: 0.8em;
  z-index: 99;
  padding: 0.3em;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.342);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 98;
}
</style>
