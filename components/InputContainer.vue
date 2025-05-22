<template>
    <div class="input-container">
        <div class="container-content">
            <h1 class="title">Site en construction</h1>
            <p class="lead">
                Soyez les premiers avertis de la sortie :
            </p>
        </div>
        <form @submit.prevent="handleSubmit" id="form">
            <label for="email" class="label">Email :</label>
            <div class="input-button-wrapper">
                <div class="input-wrapper">
                    <input type="email" id="email"
                        :class="['input', verifyEmail(email) ? 'border-green' : 'border-primary']"
                        placeholder="nom@exemple.com" required v-model="email" />
                    <Icon v-if="verifyEmail(email)" name="material-symbols:check-circle" class="email-icon" />
                </div>
                <button class="btn"
                    type="submit"
                    :class="{ animated: verifyEmail(email), 'blocked-hover': !verifyEmail(email) && email }"
                    :disabled="!verifyEmail(email)">
                    Je m'inscris
                    <span v-if="!verifyEmail(email) && email" class="block-icon">
                        <Icon name="heroicons-outline:ban" />
                    </span>
                </button>
            </div>
            <small class="error-message">{{ emailError }}</small>
            <small class="legals-link">
                Vous pouvez lire notre
                <a href="#" @click.prevent="$emit('openMentions')">Politique de Confidentialité</a>
            </small>
        </form>
        <Teleport to="body">
            <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
                <div class="modal">
                    <h2>Merci pour votre inscription <span style="font-size: 1.65rem">🤩</span></h2>
                    <small>Encore plein de surprises vous atendent...</small>
                    <img src="/assets/img/happy.png" alt="Personnes heureuses" />
                    <button class="btn-bgless" @click="closeModal">Fermer</button>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script setup>
import confetti from 'canvas-confetti';
import { ref, computed } from 'vue';

const emit = defineEmits(['openMentions']);

const email = ref('');
const emailError = computed(() => {
    if (email.value && !verifyEmail(email.value)) {
        return "Veuillez saisir une adresse email valide 😔";
    }
    return "";
});

const verifyEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const showModal = ref(false)

const handleSubmit = () => {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
    showModal.value = true;
}

const closeModal = () => {
    showModal.value = false;
    document.body.classList.add('with-texture');
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    } else {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    }
}
</script>

<style scoped lang="scss">
//Conteneur principal
.input-container {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    gap: 0.75rem;
    margin-top: 1.35rem;
}

h1.title {
    font-size: clamp(1.35rem, 5vw, 2.45rem);
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    color: var(--primary-color);
}

//Texte
.text {
    color: var(--text-color);
    font-size: 0.875rem;

    //Lien
    a {
        color: var(--text-color);
        text-decoration: underline;
    }
}

.container-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 1rem;
}

//Titre
.title{
    font-size: clamp(1.35rem, 5vw, 5rem);
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    margin-top: 18px;
    color: var(--primary-color);
}

.lead {
    font-size: clamp(1rem, 2vw, 26px);
    font-weight: 400;
    text-align: center;
    color: var(--text-color);
    margin-bottom: 28px;
}

//Etiquette
.label {
    font-size: clamp(1rem, 2vw, 20px);
    font-weight: 600;
    text-align: left;
    padding-bottom: 8px !important;
    display: block;
}

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
    border-radius: 0.5rem;
    width: 100%;

    &:focus.border-primary {
        border: 1px solid var(--primary-color) !important;
        box-shadow: 0px 0px 4px 0px var(--primary-color) !important;
    }

    &:focus.border-green {
        border: 1px solid #4CAF50 !important;
        box-shadow: 0px 0px 4px 0px #4CAF50 !important;
    }
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
    cursor: not-allowed;
    margin-top: 8px;
    border-radius: 0.5rem;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: box-shadow 0.3s;
}

.btn.animated {
    cursor: pointer !important;
    animation: lightning 2.4s infinite;
    box-shadow: 0 0 10px 2px var(--primary-color, #B11025);
}

// Icône de blocage au hover si email invalide
.btn.blocked-hover:hover .block-icon {
    display: inline-flex;
    margin-left: 0.5em;
    color: var(--background-color);
    font-size: 1.2em;
}

.block-icon {
    display: none;
    align-items: center;
}

.legals-link {
    font-size: 0.75rem;
    color: var(--text-color);
    margin-top: 0.5rem;
    display: block;
    font-weight: 400;

    a {
        color: var(--text-color);
        text-decoration: underline;
    }
}

.error-message {
    color: rgb(213, 61, 61);
    display: block;
    font-size: 0.75rem;
    padding-top: 5px;
}

.dark .error-message {
    color: rgb(235, 176, 176);
}

@media screen and (min-width: 768px) {
    .input {
        max-width: 500px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }

    .btn {
        display: inline-flex;
        width: auto;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        position: relative;
        transform: translateX(-4px);
        border: var(--primary-color) 1px solid;
    }

    #form {
        display: block;
        max-width: 700px;
        margin: 0 auto;
    }

    a {
        text-decoration: underline;
    }
}

.dark {
    .input {
        border: 1px solid #ccc;

        &:focus {
            border: 1px solid var(--primary-color);
            box-shadow: 0px 0px 4px 0px var(--primary-color)
        }
    }
}

.light {
    .input {
        border: 1px solid #ccc;

        &:focus {
            border: 1px solid var(--primary-color);
            box-shadow: 0px 0px 3px 1px rgba(#B11025, 0.25)
        }
    }
}

.input-button-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
}

.input-wrapper {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
}

.email-icon {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: rgb(53, 173, 53);
    pointer-events: none;
}

@media screen and (min-width: 768px) {
    .input-button-wrapper {
        flex-direction: row;
        gap: 0;
        width: 500px;
        justify-content: space-between;
    }

    .input-wrapper {
        flex: 1;
    }

    .btn {
        margin-top: 0;
    }
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba($gray, 0.8);
}

.modal {
    background: var(--background);
    padding: 2rem;
    margin-top: -150px;
    border: 5px solid rgab($gray, 0.85);
    border-radius: 1rem;
    text-align: center;
    max-width: 400px;
    width: 90%;
    color: var(--text-color);
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    h2 {
        font-size: 1.25rem;
        margin-bottom: 1rem;
    }

    img {
        width: 100%;
        height: auto;
        margin: 1.85rem 8px;
        border-radius: 0.5rem;
    }

    button {
        margin-top: 1rem;
    }
}

.btn-bgless {
    background: none;
    padding: 0 1.5rem;
    height: 3rem;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 0.5rem;
    transition: color ease 0.15s 0.012, background-color ease 0.2s 0.013;

    &:hover,
    &:focus {
        background: rgba($gray, 0.8);
        opacity: 0.65;
        color: white;
    }
}

.btn:hover {
    cursor: not-allowed;
}

@keyframes lightning {
    0%, 50%, 100% {
        box-shadow: 0 0 2px var(--primary-color, #B11025);
    }

    25%, 75% {
        box-shadow: 0 0 4px var(--primary-color, #B11025),
                   0 0 6px var(--primary-color, #B11025);
    }
}
</style>