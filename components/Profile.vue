<template>
  <div class="profile-card" v-if="profile">
    <img :src="profile.picture" alt="Profile Picture" class="profile-picture" />
	 <div class="media-scrin">
    <h2 class="profile-name">{{ profile.name }}</h2>
    <p class="profile-user"> 
		<div class="profile-username">
        <font-awesome-icon icon="user" class="user-icon" />
        {{ profile.username }}
      </div></p>
    <div class="separator"></div> <!-- Черточка под логином -->
    <div class="social-links">
      <a v-for="(link, index) in profile.socialLinks" :key="index" :href="link.url" class="social-icon">
        <font-awesome-icon :icon="['fab', link.icon]" />
      </a>
    </div>
	 </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Загружаем профиль
const profile = ref(null);

onMounted(async () => {
  // Закомментируем временно вызов API
  /*
  try {
    const response = await axios.get('/api/profile');
    profile.value = response.data;
  } catch (error) {
    console.error('Не удалось загрузить данные профиля:', error);
  }
  */
  // Пример данных, которые должны отображаться
	profile.value = {
	name: "Титова Елена Николаевна",
	username: "username",
	picture: "default_picture.png", // Обратите внимание на путь
	socialLinks: [
		{ url: "https://instagram.com/username", icon: "instagram" },
		{ url: "https://vk.com/username", icon: "vk" },
		{ url: "https://facebook.com/username", icon: "facebook" },
		{ url: "https://twitter.com/username", icon: "twitter" },
	],
  };
});
</script>

<style scoped>
.profile-card {
	background: white;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	text-align: center;
	width: 320px;
	height: 482px;
	padding: 20px 20px 24px 20px;
}

.profile-picture {
	width: 250px;
	height: 250px;
	margin-bottom: 20px;
}

.profile-name {
	font-size: 1.2em;
	margin-bottom: 10px;
}
.media-scrin {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}
.profile-username {
	width: 101px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #000;
	display: flex;
	margin-bottom: 10px; /* Уменьшил отступ под логином */
}

.separator {
	background: #4C3536;
	width: 280px;
	height: 1px;
	gap: 0px;
	opacity: 0.12;
	margin: 0 auto 20px auto; /* Центрирование и отступ снизу */
}

.social-links .social-icon {
	display: flex;
	width: 24px;
	height: 24px;
	margin: 0 5px;
	color: #333;
	transition: transform 0.3s ease, color 0.3s ease;
}

.social-icon svg {
	width: 24px;
	height: 24px;
	gap: 0px;
	opacity: 0px;

}

.social-links {
	display: flex;
}

.social-links .social-icon:hover {
  transform: scale(1.3);
  color: #000;
}
@media (max-width: 780px) {
	.profile-card {
	width: 696px;
	height: 162px;
	display: flex;
	align-items: center;
}

.profile-picture {
	width: 104px;
	height: 104px;
	
}
.media-scrin {
	width: 520px;
	height: auto;
	margin-left: 32px;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: flex-start;
}

.profile-name {
	
}

.profile-username {
	
}

.separator {
	width: 520px;
	
}

.social-links .social-icon {
	
}

.social-icon svg {

}

.social-links {
	
}

}

@media (max-width: 360px) {
	.profile-card {
		width: 330px;
		height: 279px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 10px;
	}

	.profile-picture {
		width: 112px;
		height: 112px;
		margin-left: 30px;
		align-items: flex-start;
		
	}
	.media-scrin {
		width: 298px;
		height: auto;
		margin-left: 32px;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: flex-start;
	}
	
	.profile-name {
		font-size: 16px;
	}

	.profile-username {
		
	}

	.separator {
		width: 298px;
		
	}

	.social-links .social-icon {
		
	}

	.social-icon svg {

	}

	.social-links {
		
	}

}
</style>
