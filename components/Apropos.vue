<template>
  <div>
    <button ref="menuButton" @click="toggleMenu" class="menu-toggle">
      <div class="icon-container">
        <svg v-if="!isMenuOpen" width="48" height="48" viewBox="0 0 48 48" fill="none"
          xmlns="http://www.w3.org/2000/svg" class="stroke-icon">
          <path
            d="M24.6439 28.6588C25.6148 28.6588 26.1002 27.9587 26.2447 26.8299C26.3602 25.2722 26.8168 24.4526 28.692 23.1545C30.6366 21.769 31.7231 19.9751 31.7231 17.3615C31.7231 13.4965 29.0648 10.8654 25.1871 10.8654C22.2399 10.8654 20.0092 12.3006 19.1193 14.6283C18.8488 15.2638 18.7129 15.9493 18.7205 16.641C18.7205 17.7873 19.3071 18.5078 20.2953 18.5078C21.0812 18.5078 21.61 18.079 21.9249 17.0202C22.3815 15.2933 23.4419 14.3512 25.0282 14.3512C26.7908 14.3512 28.0044 15.6521 28.0044 17.5131C28.0044 19.1554 27.4033 20.0947 25.6292 21.3781C23.8406 22.6411 22.9536 24.0442 22.9536 26.1619V26.4857C22.9536 27.7341 23.5546 28.6588 24.6439 28.6588Z"
            fill="white" />
          <path class="stroke"
            d="M30.8068 7.90752L28.1278 5.16159L30.2076 3.13123L32.0169 4.98415L34.6058 4.95215C35.7264 4.93889 36.8383 5.14983 37.8763 5.57257C38.9142 5.99531 39.8571 6.62132 40.6495 7.41378C41.442 8.20623 42.068 9.14915 42.4908 10.1871C42.9135 11.225 43.1244 12.3369 43.1112 13.4576L43.0821 16.0464L44.9321 17.8557C45.7334 18.6387 46.37 19.5739 46.8047 20.6064C47.2394 21.639 47.4633 22.748 47.4633 23.8683C47.4633 24.9886 47.2394 26.0976 46.8047 27.1301C46.37 28.1626 45.7334 29.0979 44.9321 29.8808L43.0792 31.6901L43.1112 34.279C43.1244 35.3996 42.9135 36.5116 42.4908 37.5495C42.068 38.5874 41.442 39.5303 40.6495 40.3228C39.8571 41.1152 38.9142 41.7412 37.8763 42.164C36.8383 42.5867 35.7264 42.7977 34.6058 42.7844L32.0169 42.7553L30.2076 44.6053C29.4246 45.4066 28.4894 46.0433 27.4569 46.478C26.4243 46.9126 25.3153 47.1366 24.1951 47.1366C23.0748 47.1366 21.9658 46.9126 20.9332 46.478C19.9007 46.0433 18.9655 45.4066 18.1825 44.6053L16.3732 42.7524L13.7844 42.7844C12.6637 42.7977 11.5518 42.5867 10.5138 42.164C9.47593 41.7412 8.53302 41.1152 7.74056 40.3228C6.9481 39.5303 6.32209 38.5874 5.89935 37.5495C5.47661 36.5116 5.26567 35.3996 5.27893 34.279L5.30802 31.6901L3.45801 29.8808C2.65674 29.0979 2.02006 28.1626 1.58537 27.1301C1.15068 26.0976 0.926758 24.9886 0.926758 23.8683C0.926758 22.748 1.15068 21.639 1.58537 20.6064C2.02006 19.5739 2.65674 18.6387 3.45801 17.8557L5.31093 16.0464L5.27893 13.4576C5.26567 12.3369 5.47661 11.225 5.89935 10.1871C6.32209 9.14915 6.9481 8.20623 7.74056 7.41378C8.53302 6.62132 9.47593 5.99531 10.5138 5.57257C11.5518 5.14983 12.6637 4.93889 13.7844 4.95215L16.3732 4.98124L18.1825 3.13123C18.9655 2.32996 19.9007 1.69328 20.9332 1.25859C21.9658 0.823899 23.0748 0.599976 24.1951 0.599976C25.3153 0.599976 26.4243 0.823899 27.4569 1.25859C28.4894 1.69328 29.4246 2.32996 30.2076 3.13123L28.1278 5.16159C27.6157 4.63738 27.004 4.22083 26.3286 3.93643C25.6533 3.65204 24.9279 3.50553 24.1951 3.50553C23.4622 3.50553 22.7368 3.65204 22.0615 3.93643C21.3861 4.22083 20.7744 4.63738 20.2623 5.16159L17.5862 7.90752L13.7465 7.86098C13.014 7.85279 12.2873 7.99108 11.609 8.26772C10.9306 8.54435 10.3145 8.95376 9.79661 9.47189C9.27875 9.99002 8.86966 10.6064 8.59338 11.2849C8.3171 11.9633 8.17919 12.6902 8.18776 13.4227L8.23431 17.2565L5.48837 19.9355C4.96416 20.4476 4.54761 21.0593 4.26322 21.7347C3.97882 22.41 3.83232 23.1355 3.83232 23.8683C3.83232 24.6011 3.97882 25.3265 4.26322 26.0019C4.54761 26.6772 4.96416 27.2889 5.48837 27.801L8.23431 30.4771L8.18776 34.3168C8.17957 35.0493 8.31786 35.7761 8.5945 36.4544C8.87114 37.1327 9.28054 37.7489 9.79867 38.2667C10.3168 38.7846 10.9332 39.1937 11.6117 39.4699C12.2901 39.7462 13.0169 39.8841 13.7494 39.8756L17.5833 39.829L20.2623 42.575C20.7744 43.0992 21.3861 43.5157 22.0615 43.8001C22.7368 44.0845 23.4622 44.231 24.1951 44.231C24.9279 44.231 25.6533 44.0845 26.3286 43.8001C27.004 43.5157 27.6157 43.0992 28.1278 42.575L30.8039 39.829L34.6436 39.8756C35.3761 39.8837 36.1028 39.7455 36.7811 39.4688C37.4595 39.1922 38.0756 38.7828 38.5935 38.2647C39.1114 37.7465 39.5204 37.1301 39.7967 36.4517C40.073 35.7732 40.2109 35.0464 40.2023 34.3139L40.1558 30.48L42.9017 27.801C43.4259 27.2889 43.8425 26.6772 44.1269 26.0019C44.4113 25.3265 44.5578 24.6011 44.5578 23.8683C44.5578 23.1355 44.4113 22.41 44.1269 21.7347C43.8425 21.0593 43.4259 20.4476 42.9017 19.9355L40.1558 17.2594L40.2023 13.4198C40.2105 12.6872 40.0722 11.9605 39.7956 11.2822C39.519 10.6039 39.1096 9.98768 38.5914 9.46982C38.0733 8.95197 37.4569 8.54288 36.7785 8.2666C36.1 7.99031 35.3732 7.85241 34.6407 7.86098L30.8068 7.90752Z"
            fill="white" />
          <path
            d="M21.458 32.765C21.458 32.039 21.7464 31.3427 22.2598 30.8293C22.7732 30.3159 23.4694 30.0275 24.1955 30.0275C24.9215 30.0275 25.6177 30.3159 26.1311 30.8293C26.6445 31.3427 26.9329 32.039 26.9329 32.765C26.9329 33.491 26.6445 34.1873 26.1311 34.7006C25.6177 35.214 24.9215 35.5024 24.1955 35.5024C23.4694 35.5024 22.7732 35.214 22.2598 34.7006C21.7464 34.1873 21.458 33.491 21.458 32.765Z"
            fill="white" />
        </svg>
        <svg v-else width="48" height="48" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M33.5002 53.0416L13.9585 33.5M13.9585 33.5L33.5002 13.9583M13.9585 33.5H53.0418" stroke="white"
            stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </button>

    <div class="overlay" :class="{ open: isMenuOpen }">
      <div class="about-content">
        <section class="content">
          <h2 class="title">Pensée pour celles et ceux qu’on oublie</h2>
          <p class="description">
            SN Beauty Cosmetics est une nouvelle gamme de soins bio conçue pour les peaux marquées,
            métissées, oubliées trop souvent par l'industrie cosmétique.
          </p>
          <p class="description">
            Tâches pigmentaires, imperfections persistantes, teint irrégulier : notre formule douce et
            éclaircissante respecte votre peau, la révèle, et vous redonne confiance. ✨
          </p>
          <p class="description">
            Oui, elle est pensée pour les peaux mates, métissées ou foncées… Mais elle convient aussi à
            toutes les carnations.
          </p>
          <p class="description highlight">
            Le lancement approche. Envie d’en savoir plus ?
          </p>

          <p class="info">Rejoignez la liste pour recevoir les infos en avant-première</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
const isClosing = ref(false);
const clipPathAttributes = ref({
  cx: "0",
  cy: "50px",
  r: 0,
});

const toggleMenu = () => {
  if (isMenuOpen.value) {
    closeMenu();
  } else {
    openMenu();
  }
};

const openMenu = () => {
  isMenuOpen.value = true;
  document.body.classList.add('no-scroll');

  // Animation for opening the menu
  const interval = setInterval(() => {
    if (clipPathAttributes.value.r >= 1500) {
      clearInterval(interval);
      return;
    }
    clipPathAttributes.value.r += 50;
  }, 10);
};

const closeMenu = () => {
  isClosing.value = true;

  // Animation for closing the menu
  const interval = setInterval(() => {
    if (clipPathAttributes.value.r <= 0) {
      clearInterval(interval);
      isMenuOpen.value = false;
      isClosing.value = false;
      document.body.classList.remove('no-scroll');
      return;
    }
    clipPathAttributes.value.r -= 50;
  }, 10);
};
</script>

<style scoped lang="scss">
.menu-toggle {
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1001;
  background: var(--overlay-btn);
  border-radius: 100%;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    width: 2rem;
    height: 2rem;
    transition: transform 0.3s ease;
  }

  &:focus, &:hover {
    outline: none;
    box-shadow: 0 0 0 5px var(--overlay-bg), 0 0 0 8px var(--overlay-bg);
    transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.icon-container {
  position: relative;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--overlay-bg);
  color: var(--text-color);
  z-index: 1000;
  clip-path: circle(0% at 50px 50px);
  transition: clip-path 0.7s ease-in-out;
  pointer-events: none;

  &.open {
    clip-path: circle(150% at 50px 50px);
    pointer-events: auto;
  }

  .about-content {
    max-width: 600px;
    margin: 10vh auto;
    padding: 2rem;
    text-align: center;

    .title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .description {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }

    .highlight {
      font-weight: 500;
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin: 1rem auto;
      max-width: 400px;
    }

    .info {
      font-size: 0.9rem;
      margin-top: 0.5rem;
    }
  }
}

.stroke {
  transform-origin: center center;
  animation: rotation linear 25s infinite;
}

@keyframes rotation {
  to {
    transform: rotate(360deg);
  }
}
</style>
