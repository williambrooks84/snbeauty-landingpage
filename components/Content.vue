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
.container-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
}

.title{
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    color: $primary-light;
}

.label{
    font-size: 1.5rem;
    text-align: left;
    color: $text-color-light;
}
</style>