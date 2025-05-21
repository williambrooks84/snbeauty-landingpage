<template>
    <div>
        <!-- <header id="top-header">
            <small>Un grand gagnant sera tiré au sort ✨ parmi les participants inscrits avant le lancement !</small>
        </header> -->
        <div class="container">
            <Logo />
            <Counter />
            <Content />
        </div>
        <Input />
         <footer id="main-footer">
            <UColorModeButton />
         </footer>
    </div>
</template>

<script setup>
import Menu from '../components/Apropos.vue';
import Logo from '~/components/Logo.vue';
import Counter from '~/components/Counter.vue';
import Content from '~/components/Content.vue';
import Input from '~/components/Input.vue';
// import ButtonGroup from '~/components/ButtonGroup.vue';
</script>

<style scoped lang="scss">
// header#top-header {
//     width: 100%;
//     background-color: var(--button-text);
//     color: var(--text-color);
//     padding: 1rem 0;
//     margin-bottom: 2rem;
//     position: sticky;
//     top: 0;
//     left: 0;
//     display: flex;
//     justify-content: center;
//     small {
//         text-align: center;
//     }
// }
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
    margin: 0 auto;
    margin-top: clamp(55px, 6vw, 150px);
    gap: 3rem;
    max-width: 100%;
    background-color: var(--background-color);
}

footer#main-footer {
    width: 100%;
    background-color: var(--primary-color);
    color: var(--text-color);
    padding: 1rem 0;
    margin-top: 2rem;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
}
</style>