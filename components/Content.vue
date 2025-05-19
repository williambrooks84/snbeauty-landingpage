<template>
    <div class="container-content">
        <h1 class="title">Site en construction</h1>
        <p class="label">
            Soyez les premiers avertis de la sortie :
        </p>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">

//Conteneur principal
.container-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 1rem;
    margin-bottom: clamp(2rem, 5vw, 4rem);
}

//Titre
.title{
    font-size: clamp(1.35rem, 5vw, 2.75rem);
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    color: var(--primary-color);
}

//Etiquette
.label{
    font-size: 1rem;
    text-align: center;
}

</style>