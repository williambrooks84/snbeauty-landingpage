<template>
    <div>
        <img class="logo" :src="logoSrc" alt="">
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const theme = ref('light')

const logoSrc = computed(() =>
    theme.value === 'dark'
        ? '/assets/img/logo-dark.svg'
        : '/assets/img/logo-light.svg'
)

function updateTheme() {
    const htmlClass = document.documentElement.classList
    theme.value = htmlClass.contains('dark') ? 'dark' : 'light'
}

onMounted(() => {
    updateTheme()
    // Listen for class changes on <html>
    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})
</script>

<style scoped lang="scss">
.logo{
    width: clamp(9rem, 20vw, 180px);
    height: auto;
    display: block;
    margin: 55px auto 28px auto;
}
</style>
