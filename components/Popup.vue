<template>
  <transition name="fade">
    <div class="popup" v-if="isOpen" @click.self="closePopup">
      <div class="popup-content">
        <button class="close-button" @click="closePopup">×</button>
        <h2>Информация по отклику</h2>
        <form @submit.prevent="submitForm">
          <textarea placeholder="Комментарий" v-model="comment"></textarea>
          <input type="text" placeholder="Телефон" v-model="phone" />
          <input type="email" placeholder="E-mail*" v-model="email" required />
          <input type="text" placeholder="Телеграм*" v-model="telegram" required />
          <label>
            <input type="checkbox" v-model="noCall" />
            Прошу не звонить и написать мне в мессенджер
          </label>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed, ref } from 'vue';
import { usePopupStore } from '@/stores/popupStore';

const popupStore = usePopupStore();

const comment = ref('');
const phone = ref('');
const email = ref('');
const telegram = ref('');
const noCall = ref(false);

const isOpen = computed(() => popupStore.isOpen);

const resetForm = () => {
  comment.value = '';
  phone.value = '';
  email.value = '';
  telegram.value = '';
  noCall.value = false;
};

const closePopup = () => {
  resetForm();
  popupStore.isOpen = false;
};

const submitForm = () => {
  const formData = {
    comment: comment.value,
    phone: phone.value,
    email: email.value,
    telegram: telegram.value,
    noCall: noCall.value,
  };
  console.log('Отправка данных:', formData);

  resetForm();
  closePopup();
};
</script>

<style scoped>
/* Анимация для плавного открытия и закрытия */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-content {
  background: white;
  padding: 36px 28px;
  border-radius: 10px;
  width: 490px;
  max-height: 90%; /* Ограничение максимальной высоты */
  text-align: left;
  position: relative;
  overflow-y: auto; /* Скролл, если контент превышает высоту */
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

h2 {
  font-size: 20px;
  margin-bottom: 20px;
}

form textarea {
  width: 434px;
  min-height: 84px;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  resize: vertical; /* Пользователь может изменять размер по вертикали */
}

form input[type="text"],
form input[type="email"] {
  width: 434px;
  height: 40px;
  padding: 10px 12px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

form input[type="email"]::placeholder {
  color: red; /* Красная звездочка */
}

form label {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

form label input[type="checkbox"] {
  margin-right: 10px;
}

button[type="submit"] {
  background: #f3d147;
  padding: 10px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: black;
  font-weight: 700;
  width: 137px;
}

button[type="submit"]:hover {
  background: #e1c03b;
}
@media (max-width: 780px) { 
  .popup-content {
  background: white;
  padding: 35px 28px;
  border-radius: 10px;
  width: 456px;
  height: 470px;
  text-align: left;
  position: relative;
  overflow-y: auto; /* Скролл, если контент превышает высоту */
}
form textarea {
  width: 400px;
  min-height: 50px;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  resize: vertical; /* Пользователь может изменять размер по вертикали */
}
form input[type="text"],
form input[type="email"] {
  width: 400px;
  height: 40px;
  padding: 10px 12px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

}
@media (max-width: 360px) { 
  .popup-content {
  background: white;
  padding: 35px 28px;
  border-radius: 10px;
  width: 330px;
  height: 470px;
  text-align: left;
  position: relative;
  overflow-y: auto; /* Скролл, если контент превышает высоту */
}
  form textarea {
    width: 298px;
    min-height: 50px;
    border-radius: 8px;
    margin-bottom: 16px;
    padding: 10px;
    border: 1px solid #ccc;
    resize: vertical; /* Пользователь может изменять размер по вертикали */
  }
  form input[type="text"],
  form input[type="email"] {
    width: 298px;
    height: 40px;
    padding: 10px 12px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
}
</style>
