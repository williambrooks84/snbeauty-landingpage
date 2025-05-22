<template>
    <form @submit.prevent="handleSubmit" id="form">
        <label for="email" class="label">Email :</label>
        <input type="email" class="input" placeholder="nom@exemple.com" />
        <button class="btn" type="submit">Je m'inscris</button>
        <small class="text">
                Vous pouvez lire notre
                <a href="/politique-de-confidentialite" target="_blank" rel="noopener">Politique de Confidentialité</a>
        </small>
    </form>
</template>

<script setup>

import confetti from 'canvas-confetti';

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
//Etiquette
.label{
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
</style>