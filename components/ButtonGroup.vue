<template>
    <div class="btn-group">
        <div class="btn-container">
            <button type="button" class="btn" @click="$emit('openMentions')">
                <img src="/assets/svg/scale.svg" alt="Scale">
            </button>
            <button type="button" class="btn" @click="toggleTheme">
                <img src="/assets/svg/sun.svg" alt="Sun">
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const emit = defineEmits(['openMentions']);

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

watch(isDark, (val) => {
    localStorage.setItem('theme', val ? 'dark' : 'light');
});
</script>

<style scoped lang="scss">
.btn-group {
    position: fixed;
    right: 5%;
    bottom: 38px;
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
</style>
