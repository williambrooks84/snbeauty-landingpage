<template>
    <div class="input-container">
        <p class="label">E-mail :</p>
        <div>
            <input type="email" class="input" placeholder="nom@exemple.com" />
            <button class="btn">Je m'inscris</button>
        </div>
        <p>
        Vous pouvez lire notre
        <a href="/politique-de-confidentialite" target="_blank" rel="noopener">Politique de Confidentialité</a>
        </p>
    </div>    
</template>

<script setup>

</script>

<style scoped lang="scss">
.input-container{
    text-align: left;
    width: 100%;
}

.input{
    height: 3rem;
    box-sizing: border-box;
    padding: 0.75rem 10rem 0.75rem 1rem;
    font-size: 1rem;
    font-weight: 400;
    color: $gray;
    border: 1px solid $gray;
    border-top-left-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.btn{
    height: 3rem;
    box-sizing: border-box;
    padding: 0 1.5rem;
    color: $text-color-dark;
    background: $primary-light;
    border: none;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
}

</style>