<template>
    <div class="btn-group">
        <div class="btn-container">
            <button type="button" class="btn" @click="toggleOverlay">
                <img src="/assets/svg/scale.svg" alt="Scale">
            </button>
            <button type="button" class="btn" @click="toggleTheme">
                <img src="/assets/svg/sun.svg" alt="Sun">
            </button>
        </div>
    </div>
    <div class="overlay" :class="{ open: isOpen }">
        <div class="mentions-content">
            <Mentionslegales />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Mentionslegales from '~/components/Mentionslegales.vue';

const isDark = ref(false);
const isOpen = ref(false);

function toggleTheme() {
    isDark.value = !isDark.value;
    if (isDark.value) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
    } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
    }
}

function toggleOverlay() {
    isOpen.value = !isOpen.value;
}

onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        isDark.value = true;
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
    } else {
        isDark.value = false;
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
    }
});

// Persist theme to localStorage when toggled
watch(isDark, (val) => {
    localStorage.setItem('theme', val ? 'dark' : 'light');
});
</script>

<style scoped lang="scss">
.btn-group {
    position: fixed;
    right: 4rem;
    bottom: 2rem;
    z-index: 2000;
}

.btn,
img {
    width: 24px;
    height: 24px;
}

.btn-container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--background);
    z-index: 1000;
    opacity: 0;
    transform: translateY(-100%);
    transition: all 0.5s ease-in-out;
    pointer-events: none;

    &.open {
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
    }

    .mentions-content {
        max-width: 75%;
        margin: auto;
        padding: 2rem;
    }
}
</style>
