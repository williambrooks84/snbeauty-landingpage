<template>
    <div class="input-container">
        <!-- <h3>Un Gagnant sera tiré sort parmi les 25 premiers inscrits et gagne une <NuxtLink to="/a-propos">récompense exclusive !</NuxtLink></h3> -->
        <form @submit.prevent="handleSubmit" v-if="!submitted" novalidateid="form">
            <label for="email" class="label">Email :</label>

            <!-- Combined input + icon + button wrapper -->
            <div class="input-button-wrapper">
                <div class="input-wrapper">
                    <label for="email" class="label">E-mail :</label>
                    <div class="input-group">
                        <input id="email" type="email" class="input" placeholder="nom@exemple.com" required
                            v-model="email" :aria-invalid="emailError ? 'true' : 'false'" :disabled="loading" />
                        <Icon v-if="verifyEmail(email)" name="material-symbols:check-circle" class="email-icon" />
                    </div>

                    <button class="btn" type="submit" :disabled="loading">
                        <span v-if="loading" class="loader" aria-label="Chargement..."></span>
                        <span v-else>Je m'inscris</span>
                    </button>
                </div>
                <small v-if="emailError" class="error" role="alert">{{ emailError }}</small>
                <small class="text">
                    Vous pouvez lire notre
                    <a href="/confidentialite" target="_blank" rel="noopener">Politique de Confidentialité</a>
                </small>
            </div>
        </form>
    </div>   
</template>


<script setup>
import { ref } from 'vue'
import ThankYouMessage from './ThankYouMessage.vue'

const email = ref('');

const handleSubmit = () => {
    // Your form submission logic here
    console.log('Form submitted with email:', email.value);
    // Fire confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}   
</script>

<style scoped lang="scss">
//Champ de saisie
.input {
    height: 3rem;
    box-sizing: border-box;
    padding: 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    color: $gray;
    background: $white;
    border: 1px solid $gray;
    border-top-left-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
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
}
</style>