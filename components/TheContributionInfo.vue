<template>
  <div @click="$emit('closePanel')" class="overlay">
    <div class="contribution-info">
      <p>
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
    </div>
  </div>
</template>

<script>
export default {};
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
