<template>
  <div class="the-overlay" @click="$emit('closeTheImprint')">
    <div
      v-if="this.selectedLang == 'de'"
      class="the-imprint-wrapper"
      @click="$emit('closeTheImprint')"
    >
      <div class="title-imprint">
        <h2>Impressum</h2>
        <p class="cross">X</p>
      </div>
      <h3>
        Angaben gemäß § 5 TMG
      </h3>
      <p>
        Tom-Lucas Säger <br />
        Erika-Mann-Bogen 9 <br />
        22081 Hamburg
      </p>
      <h3>Kontakt</h3>
      <p>
        E-Mail: mail@tlsaeger.de <br />
        Webseite: <a href="https://tlsaeger.de">tlsager.de</a>
      </p>

      <h3>Haftung für Inhalte</h3>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
        bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder
        nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
        entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
        entfernen.
      </p>
      <h3>Haftung für Links</h3>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
        waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
        inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
        von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>
      <h3>Urheberrecht</h3>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
        sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
        werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
        Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen. Quelle: eRecht24
      </p>
    </div>
    <div
      v-if="this.selectedLang == 'en'"
      class="the-imprint-wrapper"
      @click="$emit('closeTheImprint')"
    >
      <div class="title-imprint">
        <h2>Legal notice</h2>
        <p class="cross">X</p>
      </div>
      <h3>
        Information according to § 5 TMG
      </h3>
      <p>
        Tom-Lucas Säger <br />
        Erika-Mann-Bogen 9 <br />
        22081 Hamburg
      </p>
      <h3>Contact</h3>
      <p>
        E-Mail: mail@tlsaeger.de <br />
        Website: <a href="https://tlsaeger.de">tlsager.de</a>
      </p>

      <h3>Liability for contents</h3>
      <p>
        As a service provider, we are responsible for our own content on these
        pages under on these pages according to the general laws. According to
        §§ 8 to 10 TMG, however, we are not obligated as a service provider, to
        monitor transmitted or stored third-party information or to investigate
        or to investigate circumstances that indicate illegal activity.
        Obligations to remove or block the use of information according to the
        general laws remain unaffected. However, any liability in this respect
        is only possible from the time knowledge of a concrete infringement. If
        we become aware of infringements, we will remove this content
        immediately.
      </p>
      <h3>Liability for links</h3>
      <p>
        Our website contains links to external websites of third parties. on
        whose contents we have no influence. Therefore, we cannot assume any
        liability for these external contents. The respective provider or
        operator of th pages is responsible for the responsible. The linked
        pages were checked for possible checked for possible legal violations at
        the time of linking. Illegal contents were not recognisable at the time
        of linking. A permanent control of the linked pages is not reasonable
        without concrete of a violation of the law is not reasonable. If we
        become aware of infringements become known, we will remove such links
        immediately.
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
@media (prefers-color-scheme: light) {
  .the-imprint-wrapper {
    background-color: rgb(245, 245, 245);
    border: solid 1px rgb(10, 10, 10);
  }
}
</style>
