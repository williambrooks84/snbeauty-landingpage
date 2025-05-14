<template>
    <div class="container">
        <Menu/>
        <Counter />
        <Content />
        <Input />
    </div>
</template>

<script setup>
import Counter from '~/components/Counter.vue';
import Content from '~/components/Content.vue';
import Menu from '../components/Apropos.vue'

import Input from '~/components/Input.vue';
</script>

<style scoped lang="scss">

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;
    background-color: $background-light;
}
</style>