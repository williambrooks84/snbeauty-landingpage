<template>
    <div class="input-container">
        <div class="container-content">
        <h1 class="title">Site en construction</h1>
        <p class="lead">
            Soyez les premiers avertis de la sortie :
        </p>
        </div>

        <div id="form-container">
            <Input />
        </div>
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
    color: var(--primary-color);
}

.lead {
    font-size: clamp(1rem, 2vw, 2rem);
    font-weight: 400;
    text-align: center;
    color: var(--text-color);
    margin-bottom: 28px;
}

</style>