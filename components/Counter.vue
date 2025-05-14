<template>
  <div class="countdown">
    <div class="countdown-item">
      <span class="countdown-time">{{ days }}</span>
      <span class="countdown-label">jours</span>
    </div>
    <div class="countdown-item">
      <span class="countdown-time">{{ hours }}</span>
      <span class="countdown-label">heures</span>
    </div>
    <div class="countdown-item">
      <span class="countdown-time">{{ minutes }}</span>
      <span class="countdown-label">minutes</span>
    </div>
    <div class="countdown-item">
      <span class="countdown-time">{{ seconds }}</span>
      <span class="countdown-label">secondes</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

//Variables
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

//Fonction de mise à jour du compteur
function updateCountdown() {
  const targetDate = new Date('June 6, 2025 00:00:00').getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
}

let intervalId;

onMounted(() => {
  updateCountdown();
  intervalId = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped lang="scss">

//Conteneur du compteur
.countdown {
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 20px;
}

//Item du compteur
.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
}

//Nombres
.countdown-time {
  font-size: 5.125rem;
  font-weight: 600;
}

//Etiquettes
.countdown-label {
  font-size: 1.25rem;
  font-weight: 300;
  color: var(--text-color);
  text-transform: uppercase;
}

</style>