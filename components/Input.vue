<template>
    <form>
        <input type="email" class="input" placeholder="nom@exemple.com" />
        <button class="btn">Je m'inscris</button>
    </form>
</template>

<script setup>

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