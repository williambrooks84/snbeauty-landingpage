<template>
    <div class="container">
        <Menu />
        <Logo />
        <div id="flex-reverse">
            <Counter />
            <InputContainer @openMentions="openMentions" />
        </div>
        <ButtonGroup @openMentions="openMentions" />
        <transition name="slide-down">
            <section v-if="showMentions" class="mentions-section">
                <button class="close-btn" @click="closeMentions" aria-label="Fermer">&times;</button>
                <div class="mentions-content">
                    <Mentionslegales />
                </div>
                <button class="close-btn-bottom" @click="closeMentions">Fermer</button>
            </section>
        </transition>
    </div>
</template>

<script setup>
import Menu from '../components/Apropos.vue';
import Logo from '~/components/Logo.vue';
import Counter from '~/components/Counter.vue';
import InputContainer from '~/components/InputContainer.vue'
import ButtonGroup from '~/components/ButtonGroup.vue'
import Mentionslegales from '~/components/Mentionslegales.vue'
import { ref } from 'vue'

const showMentions = ref(false)

function openMentions() {
    showMentions.value = true
}
function closeMentions() {
    showMentions.value = false
}
</script>

<style scoped lang="scss">
#flex-reverse {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.mentions-section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 40vh;
    max-height: 93vh;
    overflow-y: auto;
    background: var(--background);
    z-index: 3000;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    padding: 2rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
}

.close-btn {
    position: absolute;
    top: 1.2rem;
    right: 2rem;
    background: none;
    border: none;
    font-size: 2rem;
    color: var(--text-color);
    cursor: pointer;
    z-index: 10;
}

.close-btn-bottom {
    margin: 2rem auto 2rem auto;
    padding: 0.7rem 2.5rem;
    font-size: 1.1rem;
    background: var(--primary-color);
    color: var(--button-text);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: background 0.2s;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
    display: block;
}

.close-btn-bottom:hover {
    background: color-mix(in srgb, var(--primary-color), black 8%);
}

/* Transition slide-down */
.slide-down-enter-active,
.slide-down-leave-active {
    transition: transform 0.5s cubic-bezier(.77, 0, .18, 1), opacity 0.5s;
}

.slide-down-enter-from,
.slide-down-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}

.slide-down-enter-to,
.slide-down-leave-from {
    transform: translateY(0);
    opacity: 1;
}

@media screen and (max-width: 767.98px) {
    #flex-reverse {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }
}
</style>