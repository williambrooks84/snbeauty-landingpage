<template>
    <form @submit.prevent="handleSubmit" >
        <input type="email" class="input" placeholder="nom@exemple.com" />
        <button class="btn" type="submit">Je m'inscris</button>
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