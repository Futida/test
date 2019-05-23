import VueI18n from 'vue-i18n';
import Vue from 'vue';

Vue.use(VueI18n);

const messages = {
  'en': {
    nav: {
      createUser: 'Create user',
      listUsers: 'List users',
    },
    greeting:"Vue.js is awesome",
    addGreeting: "Training project",
    user: {
      enterEmail: 'Enter e-mail:',
      enterName: 'Enter name:',
      enterLastName: 'Enter last name:',
      create: 'Create',
      reset: 'Reset fields',
      emailIncorrect: 'Incorrect email',
      edit: 'Edit',
      delete: 'Delete'
    },
    pagination: {
      prev: 'Previous',
      next: 'Next'
    }
  },
  'ru': {
    nav: {
      createUser: 'Создать пользователя',
      listUsers: 'Список пользователей',
    },
    greeting:"Vue.js - это здорово",
    addGreeting: "Тренировочный проект",
    user: {
      enterEmail: 'Введите e-mail:',
      enterName: 'Ввведите имя:',
      enterLastName: 'Введите фамилию:',
      create: 'Cоздать',
      reset: 'Очистить поля',
      emailIncorrect: 'Неверный email',
      edit: 'Редактировать',
      delete: 'Удалить'
    },
    pagination: {
      prev: 'Предыдущая',
      next: 'Следующая'
    }
  }
};

export const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});
