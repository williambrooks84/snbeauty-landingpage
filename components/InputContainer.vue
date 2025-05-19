<template>
    <div class="input-container">
        <p class="label">E-mail :</p>
        <Input />
        <p class="text">
            Vous pouvez lire notre
            <a href="/politique-de-confidentialite" target="_blank" rel="noopener">Politique de Confidentialité</a>
        </p>
    </div>
</template>

<script setup>

import Input from "/components/Input.vue";

</script>

<style scoped lang="scss">
//Conteneur principal
.input-container {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    gap: 0.75rem;
}

//Texte
.text {
    color: var(--text-color);
    font-size: 0.875rem;
    font-weight: 500;

    //Lien
    a {
        color: var(--text-color);
        text-decoration: underline;
    }
}
</style>