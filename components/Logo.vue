<template>
    <div>
        <img class="logo" :src="logoSrc" alt="">
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

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

let observer

onMounted(() => {
    updateTheme()
    observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})

onUnmounted(() => {
    if (observer) observer.disconnect()
})
</script>

<style scoped lang="scss">
.logo{
    width: clamp(9rem, 20vw, 180px);
    height: auto;
    display: block;
    margin: 0 auto 28px auto;
    padding-top: 55px;
}
</style>
