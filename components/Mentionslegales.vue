<template>
  <div class="privacy-policy-container">
    <div class="privacy-policy">
      <h1 class="privacy-title">Politique de confidentialité</h1>

      <p class="privacy-update">Dernière mise à jour : 13 mai 2025</p>

      <h2 class="privacy-subtitle">1. Responsable du traitement</h2>
      <p>Le site <strong>snbeautycosmetics.com</strong> est édité par SN Beauty Cosmetics.</p>
      <p>Contact : <a href="mailto:webmaster@snbeautycosmetics.com">webmaster@snbeautycosmetics.com</a></p>

      <h2 class="privacy-subtitle">2. Données collectées</h2>
      <p class="privacy-text">
        Nous collectons uniquement les adresses e-mail via le formulaire d'inscription à notre newsletter
        disponible sur la page d’accueil.
      </p>

      <h2 class="privacy-subtitle">3. Finalité du traitement</h2>
      <p class="privacy-text">
        Les adresses e-mail sont utilisées exclusivement pour l’envoi d’informations liées au lancement de notre
        marque, des actualités ou des offres spéciales.
      </p>

      <h2 class="privacy-subtitle">4. Base légale</h2>
      <p class="privacy-text">
        Le traitement est fondé sur votre consentement, que vous pouvez retirer à tout moment en nous
        contactant à l'adresse ci-dessus.
      </p>

      <h2 class="privacy-subtitle">5. Durée de conservation</h2>
      <p class="privacy-text">
        Les adresses e-mail sont conservées pour une durée maximale de 3 ans à compter de votre inscription ou
        du dernier contact.
      </p>

      <h2 class="privacy-subtitle">6. Destinataires</h2>
      <p class="privacy-text">
        Les données ne sont jamais vendues ni partagées à des tiers. Elles sont hébergées de manière sécurisée
        chez notre prestataire de services de collecte (ex. FormSubmit, Mailchimp).
      </p>

      <h2 class="privacy-subtitle">7. Vos droits</h2>
      <p class="privacy-text">
        Conformément au Règlement Général sur la Protection des Données (RGPD), vous pouvez exercer vos droits
        d’accès, de rectification, d’opposition, de suppression et de portabilité en nous écrivant à
        <a href="mailto:webmaster@snbeautycosmetics.com">webmaster@snbeautycosmetics.com</a>.
      </p>

      <h2 class="privacy-subtitle">8. Cookies</h2>
      <p class="privacy-text">
        Le site ne dépose pas de cookies de suivi pour le moment. Si des outils d’analyse comme Google
        Analytics sont utilisés ultérieurement, une bannière de consentement sera mise en place.
      </p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.privacy-policy-container {
  max-width: 1000px;
  overflow-y: scroll;
  margin: 0 auto;
}
 .privacy-policy {
   padding: 1.5rem;
   padding-bottom: 3rem; // Extra space at bottom

   .privacy-title {
     font-size: 2rem;
     margin-bottom: 0.5rem;
     color: var(--text-color);
     text-align: center;
   }

  .privacy-update {
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
    color: var(--text-color);
    text-align: center;
  }

  .privacy-text {
    margin-bottom: 1rem;
    line-height: 1.6;
    color: var(--text-color);

    strong {
      font-weight: bold;
      color: var(--text-color);
    }
  }

  .privacy-subtitle {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    color: var(--text-color);
  }

  a {
    color: var(--text-color);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>