<template>
  <div class="input-container">
    <!-- <h3>Un Gagnant sera tiré sort parmi les 25 premiers inscrits et gagne une <NuxtLink to="/a-propos">récompense exclusive !</NuxtLink></h3> -->
    <form @submit.prevent="handleSubmit" v-if="!submitted" novalidate>
      <label for="email" class="label">E-mail :</label>
      <div class="input-group">
        <input
          id="email"
          type="email"
          class="input"
          placeholder="nom@exemple.com"
          v-model="email"
          :aria-invalid="emailError ? 'true' : 'false'"
          :disabled="loading"
          required
        />
        <button class="btn" type="submit" :disabled="loading">
          <span v-if="loading" class="loader" aria-label="Chargement..."></span>
          <span v-else>Je m'inscris</span>
        </button>
      </div>
      <p v-if="emailError" class="error" role="alert">{{ emailError }}</p>
      <p class="text">
        Vous pouvez lire notre
        <a href="/politique-de-confidentialite" target="_blank" rel="noopener">Politique de Confidentialité</a>
      </p>
    </form>
    <ThankYouMessage v-else />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ThankYouMessage from './ThankYouMessage.vue'

const email = ref('')
const loading = ref(false)
const submitted = ref(false)
const emailError = ref('')

function validateEmail(value) {
  // Validation simple
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

async function handleSubmit() {
  emailError.value = ''
  if (!validateEmail(email.value)) {
    emailError.value = "Veuillez entrer une adresse e-mail valide."
    return
  }
  loading.value = true
  // Simuler un appel API
  await new Promise(resolve => setTimeout(resolve, 1500))
  loading.value = false
  submitted.value = true
}
</script>

<style scoped lang="scss">
//Conteneur principal
.input-container{
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.75rem;
    background-color: rgba(0, 0, 0, 0.75);
    padding: 26px;
    max-width: 600px;
    margin: 0 auto;
}

// Groupe input + bouton
@media screen and (min-width: 768px){
    .input-container {
        padding-left: 80px;
        padding-right: 80px;
    }
    .input-group {
        display: flex;
        align-items: stretch;
    }
    .input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
}

.input-group {
    flex-direction: column;
    gap: 0.5rem;
}
.input {
    border-radius: 0.375rem;
}

//Champ de saisie
.input {
    height: 3rem;
    box-sizing: border-box;
    padding: 0.75rem 10rem 0.75rem 1rem;
    font-size: 1rem;
    font-weight: 400;
    color: $gray;
    background: $white;
    border: 1px solid $gray;
    border-radius: 4px;
    flex: 1 1 auto;
    max-width: 100%;
    font-family: inherit;
}

.label {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-color);
    padding-bottom: 8px;
    display: block;
    font-family: inherit;
}

//Bouton
.btn {
    height: 3rem;
    box-sizing: border-box;
    padding: 0 1.5rem;
    color: var(--button-text);
    background: var(--primary-color);
    border: none;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    border-radius: 4px; 
    display: block;
    width: 100%;
    margin-top: 4px;
    font-family: inherit;
}

// Loader simple
.loader {
    border: 2px solid #fff;
    border-top: 2px solid var(--primary-color);
    border-radius: 50%;
    width: 1em;
    height: 1em;
    animation: spin 1s linear infinite;
    display: inline-block;
    margin-right: 0.5em;
}
@keyframes spin {
    0% { transform: rotate(0deg);}
    100% { transform: rotate(360deg);}
}

//Erreur
.error {
    color: #d32f2f;
    font-size: 0.9rem;
    margin-top: 0.25rem;
}

//Texte
.text {
    color: $text-color-light;
    font-size: 0.875rem;
    font-weight: 500;

    //Lien
    a {
        color: $text-color-light;
        text-decoration: underline;
    }
}
</style>