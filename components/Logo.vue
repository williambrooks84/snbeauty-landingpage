<template>
    <div>
        <img class="logo" :src="logoSrc" alt="">
    </div>
</template>

<script setup>

import { ref, computed, onMounted } from 'vue'


//Changer le logo selon le thème choisi
const theme = ref('light')

const logoSrc = computed(() =>
    theme.value === 'dark'
        ? '/assets/img/logo-dark.svg'
        : '/assets/img/logo-light.svg'
)

function updateTheme(e) {
    theme.value = e.matches ? 'dark' : 'light'
}

onMounted(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    theme.value = media.matches ? 'dark' : 'light'
    media.addEventListener('change', updateTheme)
})

</script>

<style scoped lang="scss">

.logo{
    width: 264px;
    height: auto;
}

</style>