<template>
  <div class="tasks-list">
    <h1>Все задания</h1>
    <div class="task-card" v-for="task in tasks" :key="task.id">
      <span :class="`task-type ${task.type}`">{{ taskTypeLabel(task.type) }}</span>
      <div class="task-details">
        <h3 class="task-title">{{ task.title }}</h3>
        <p class="task-description" v-html="task.description"></p>
      </div>
      <div class="task-info">
        <div class="task-date">
          <span class="task-price">{{ task.price }}</span>
          <span class="task-deadline">{{ task.deadline }}</span>
        </div>
        <button class="task-button" @click="openPopup">Взять задачу</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { usePopupStore } from '@/stores/popupStore';

const tasks = ref([]);
const popupStore = usePopupStore();

onMounted(async () => {
  console.log('Компонент Task.vue монтируется');
  // Закомментируем вызов API
  /*
  try {
    const response = await axios.get('/api/tasks');
    console.log('Полученные задачи:', response.data);
    if (Array.isArray(response.data)) {
      tasks.value = response.data;
      console.log('Задачи установлены:', tasks.value);
    } else {
      console.error('Полученные данные не являются массивом:', response.data);
    }
  } catch (error) {
    console.error('Не удалось загрузить данные о задачах:', error);
  }
  */
  // Пример данных, которые должны отображаться
  tasks.value = [
    {
      id: 1,
      title: "Сделать креативы для ВК",
      description:
        "Сделать креативы в ВК, дешево, под арбитражную тематику<br> Портфолио - обязательно <br>Описание<br> Описание<br> Описание<br> Описание",
      price: "500 руб.",
      deadline: "5 дней",
      type: "design",
    },
    {
      id: 2,
      title: "Разработать лендинг",
      description: "Разработать одностраничный лендинг для продукта...",
      price: "10 000 руб.",
      deadline: "10 дней",
      type: "development",
    },
    {
      id: 3,
      title: "Тестирование веб-приложения",
      description: "Провести тестирование веб-приложения перед релизом...",
      price: "8 000 руб.",
      deadline: "7 дней",
      type: "testing",
    },
  ];
});

const openPopup = () => {
  popupStore.isOpen = true; // Открыть попап
};

// Возвращаем человекочитаемое название типа задачи
const taskTypeLabel = (type) => {
  switch (type) {
    case 'design':
      return 'Дизайн';
    case 'development':
      return 'Разработка';
    case 'testing':
      return 'Тестирование';
    default:
      return 'Неизвестный тип';
  }
};
</script>

<style scoped>
.tasks-list {
  margin-left: 20px;
}

.task-card {
  background: white;
  width: 660px;
  height: 314px;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.task-type {
	font-size: 14px;

	height: 17px;
	border-radius: 4px;
	padding: 4px 8px;
	display: inline-block;
	margin-bottom: 16px;
	text-align: left;
}

.task-type.design {
  /* background-color: #86B836; */
  color: #86B836;
}

.task-type.development {
  /* background-color: #367FB8; */
  color: #86B836;
}

.task-type.testing {
  /* background-color: #B83636; */
  color: #86B836;
}

.task-details {
  flex-grow: 1; /* Занимает оставшееся пространство */
  margin-bottom: 16px;
}

.task-title {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.task-description {
  	margin-bottom: 20px;
   white-space: pre-line;
}

.task-date {
	width: 176px;
	height: 24px;
	display: flex;
	justify-content: space-between;
	font-size: 20px;
	font-weight: 600;
	line-height: 24px;
	text-align: left;

}

.task-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 612px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
}

.task-price, .task-deadline {
  font-size: 16px;
  font-weight: 800;
}

.task-button {
  background: #F3D147;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #06162E;
  font-size: 16px;
  font-weight: 600;
}

.task-button:hover {
  background: #ddb347;
}
@media (max-width: 780px) {
	.task-card {
		display: flex;
		flex-direction: column;
		width: 696px;
		height: 314px;
		padding: 15px;
		border-radius: 12px;
		top: 370px;
		left: 42px;
}

	.task-title {
		font-size: 1.2em;
	}

	.task-description {
		font-size: 14px;
	}

	.task-button {
		font-size: 14px;
		padding: 8px 16px;
	}
}
@media (max-width: 360px) {
	.task-card {
		display: flex;
		flex-direction: column;
		width: 330px;
		height: 309px;
		padding: 10px;
		border-radius: 12px;
		top: 370px;
		left: 42px;
}
	.task-info {
		width: 298px;
		padding: 5px;
	}
	.task-title {
		font-size: 20px;
	}
	.task-date {
		width: 100px;
		height: 48px;
		display: flex;
		flex-direction: column;
	}
	.task-description {
		font-size: 14px;
	}

	.task-button {
		font-size: 14px;
		padding: 8px 16px;
	}
	.tasks-list {
		margin: 0;
	}
}
</style>
