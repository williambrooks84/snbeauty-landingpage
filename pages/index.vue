<template>
    <div class="container">
        <Menu/>
        <Logo />
        <div id="flex-reverse">
            <Counter />
            <InputContainer />
            <Content />
        </div>
        <ButtonGroup />
    </div>
</template>

<script setup>
import Menu from '../components/Apropos.vue';
import Logo from '~/components/Logo.vue';
import Counter from '~/components/Counter.vue';
import InputContainer from '~/components/InputContainer.vue';
import ButtonGroup from '~/components/ButtonGroup.vue';
</script>

<style scoped lang="scss">
#flex-reverse {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

@media screen and (max-width: 767.98px){
    #flex-reverse {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }
}
</style>