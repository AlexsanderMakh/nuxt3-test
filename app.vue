<template>
  <div class="app-container">
    <!-- Профиль пользователя -->
    <Profile/>

    <!-- Список задач -->
    <Task @task-click="openPopup" />

    <!-- Попап для отправки заявки -->
    <Popup />
  </div>
</template>

<script setup>
import Profile from './components/Profile.vue';
import Task from './components/Task.vue';
import Popup from './components/Popup.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faVk, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const isOpen = ref(false);

// Функция для открытия попапа
function openPopup() {
  isOpen.value = true;
}
// Добавление иконок в библиотеку FontAwesome
library.add(faInstagram, faVk, faFacebook, faTwitter);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

.app-container {
  display: flex;
  font-family: "Inter", sans-serif;
  padding: 20px;
  max-width: 1400px;
  background: #F3F5F8;
  margin: 0 auto;
  box-sizing: border-box;
}

@media (max-width: 780px) {
  .app-container {
    flex-direction: column;
  }
}
@media (max-width: 360px) {
  .app-container{
  padding: 0;
  }
}
</style>
