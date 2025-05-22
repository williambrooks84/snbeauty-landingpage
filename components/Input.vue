<template>
    <form @submit.prevent="handleSubmit" id="form">
        <label for="email" class="label">Email :</label>

        <!-- Combined input + icon + button wrapper -->
        <div class="input-button-wrapper">
            <div class="input-wrapper">
                <input type="email" id="email" class="input" placeholder="nom@exemple.com" required v-model="email" />
                <Icon v-if="verifyEmail(email)" name="material-symbols:check-circle" class="email-icon" />
            </div>

            <button class="btn" type="submit">Je m'inscris</button>
        </div>

        <small class="text">
            Vous pouvez lire notre
            <a href="/confidentialite" target="_blank" rel="noopener">Politique de Confidentialité</a>
        </small>
    </form>
    <Teleport to="body">
        <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
            <div class="modal">
                <h2>Merci pour votre inscription !</h2>
                <img src="/assets/img/happy.png" alt="Personnes heureuses" />
                <button class="btn-bgless" @click="closeModal">Fermer</button>
            </div>
        </div>
    </Teleport>
</template>


<script setup>

import confetti from 'canvas-confetti';

const email = ref('');

const verifyEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const showModal = ref(false)

const handleSubmit = () => {
    // Fire confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });

    showModal.value = true;
}

const closeModal = () => {
    showModal.value = false;
}

</script>

<style scoped lang="scss">
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
    margin-top: 8px;
    border-radius: 0.5rem;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
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
        max-width: 650px;
        margin: 0 auto;
    }
}

small {
    padding-top: 12px;
    font-size: 0.75rem;

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
    color: green;
    pointer-events: none;
}

@media screen and (min-width: 768px) {
    .input-button-wrapper {
        flex-direction: row;
        gap: 0;
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
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal {
    background: var(--background);
    padding: 2rem;
    border-radius: 1rem;
    text-align: center;
    max-width: 400px;
    width: 90%;
    color: var(--text-color);

    h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    img {
        width: 100%;
        height: auto;
        margin: 1rem 0;
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

    &:hover,
    &:focus {
        background: var(--primary-color);
    }
}

.btn:hover,
.btn:focus {
    animation: lightning 1.5s infinite;
    box-shadow: 0 0 20px var(--primary-color);
}

@keyframes lightning {
    0% {
        box-shadow: 0 0 5px var(--primary-color);
    }

    25% {
        box-shadow: 0 0 15px var(--primary-color), 0 0 25px var(--primary-color);
    }

    50% {
        box-shadow: 0 0 5px var(--primary-color);
    }

    75% {
        box-shadow: 0 0 15px var(--primary-color), 0 0 25px var(--primary-color), 0 0 50px var(--primary-color);
    }

    100% {
        box-shadow: 0 0 5px var(--primary-color);
    }
}

</style>