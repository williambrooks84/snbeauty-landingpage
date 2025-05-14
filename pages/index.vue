<template>
    <div class="container">
        <Counter />
        <Content />
        <Input />
    </div>
</template>

<script setup>
import Counter from '~/components/Counter.vue';
import Content from '~/components/Content.vue';
import Input from '~/components/Input.vue';
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
    background-color: $background-light;
}
</style>