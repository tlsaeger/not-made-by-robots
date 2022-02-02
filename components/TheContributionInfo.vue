<template>
  <div @click="$emit('closePanel')" class="overlay">
    <div class="contribution-info">
      <p>
        Mit einem Klick auf »Seite bearbeiten kannst du die Seite bearbeiten.
        Dafür wirst du auf GitHub weitergeleitet, dort liegt der Code der Seite.
        Über einen Klick auf das Stift Icon kannst du die Inhalte dieser Seite
        anpassen und verbessern. Dafür musst du dich einmal bei GitHub anmelden.
        Wenn die Änderung von uns genehmigt wirst, hast du so deine aller Erste
        »Contribution« in der Open Source Welt geleistet. Danke für Deine
        Mithilfe
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
  right: 0;
  bottom: 3rem;
  background-color: black;
  border: solid 1px white;
  border-radius: 12px;
  width: 15%;
  font-size: 0.8em;
  z-index: 99;
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
