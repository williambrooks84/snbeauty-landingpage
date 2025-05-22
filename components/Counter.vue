<template>
  <div class="countdown">
    <div class="countdown-item">
      <span class="countdown-time">{{ days }}</span>
      <span class="countdown-label">
        {{ days <= 1 ? 'jour' : 'jours' }}
      </span>
    </div>
    <div class="countdown-item">
      <span class="countdown-time">{{ hours }}</span>
      <span class="countdown-label">
        {{ hours <= 1 ? 'heure' : 'heures' }}
      </span>
    </div>
    <div class="countdown-item">
      <span class="countdown-time">{{ minutes }}</span>
      <span class="countdown-label">
        {{ minutes <= 1 ? 'minute' : 'minutes' }}
      </span>
    </div>
    <div class="countdown-item">
      <span class="countdown-time">{{ seconds }}</span>
      <span class="countdown-label">
        {{ seconds <= 1 ? 'seconde' : 'secondes' }}
      </span>
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
  max-width: 600px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

@media screen and (max-width: 767.98px){
  .countdown {
    width: 200px;
  }

}

//Item du compteur
.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

//Nombres
.countdown-time {
  font-size: 4rem;
  font-size: clamp(1rem, 5vw, 4rem);
  font-weight: 600;
}

//Etiquettes
.countdown-label {
  font-size: clamp(0.75rem, 2vw, 1rem);
  font-size: clamp(.65rem, 2vw, 25px);
  font-weight: 300;
  color: var(--text-color);
  text-transform: uppercase;
}

@media screen and (max-width: 767.98px) {
  .countdown {
    margin-top: 2rem;
  }
  .countdown-item {
    width: 80px;
  }
}

</style>