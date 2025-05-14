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
}

//Titre
.title{
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    color: var(--primary-color);
}

//Etiquette
.label{
    font-size: 1.5rem;
    text-align: left;
}
</style>