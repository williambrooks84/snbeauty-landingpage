<template>
    <div class="container">
        <Logo />
        <Counter />
        <Content />
        <Input />
        <ButtonGroup />
    </div>
</template>

<script setup>
import Logo from '~/components/Logo.vue';
import Counter from '~/components/Counter.vue';
import Content from '~/components/Content.vue';
import Input from '~/components/Input.vue';
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