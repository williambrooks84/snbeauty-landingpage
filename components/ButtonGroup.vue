<template>
    <div class="btn-group">
        <div class="btn-container">
            <button type="button" class="btn">
                <img src="/assets/svg/scale.svg" alt="Scale">
            </button>
            <button type="button" class="btn" @click="toggleTheme">
                <img src="/assets/svg/sun.svg" alt="Sun">
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isDark = ref(false);

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

onMounted(() => {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark.value) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
    } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
    }
});
</script>

<style scoped lang="scss">
.btn-group {
    position: fixed;
    right: 4rem;
    bottom: 2rem;
    z-index: 1000;
}

.btn, img {
    width: 24px;
    height: 24px;
}

.btn-container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}
</style>