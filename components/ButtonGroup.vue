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
import { useColorMode } from '#imports';

const emit = defineEmits(['openMentions']);

const colorMode = useColorMode();

function toggleTheme() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
}
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
