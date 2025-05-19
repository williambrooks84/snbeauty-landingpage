<template>
    <div class="container">
        <Menu/>
        <Logo />
        <Counter />
        <Content />
        <InputContainer />
        <ButtonGroup />
    </div>
</template>

<script setup>
import Menu from '../components/Apropos.vue';
import Logo from '~/components/Logo.vue';
import Counter from '~/components/Counter.vue';
import Content from '~/components/Content.vue';
import InputContainer from '~/components/InputContainer.vue';
import ButtonGroup from '~/components/ButtonGroup.vue';
</script>

<style scoped lang="scss">

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: fit-content;
    margin: 0 auto;
    gap: 3rem;
    background-color: var(--background-color);
}
</style>