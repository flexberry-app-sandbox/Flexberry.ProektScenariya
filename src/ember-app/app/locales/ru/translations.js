import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProekt_scenariyaЕжикLForm from './forms/i-i-s-proekt-scenariya-ежик-l';
import IISProekt_scenariyaНораЕжикаLForm from './forms/i-i-s-proekt-scenariya-нора-ежика-l';
import IISProekt_scenariyaЕжикEForm from './forms/i-i-s-proekt-scenariya-ежик-e';
import IISProekt_scenariyaНораЕжикаEForm from './forms/i-i-s-proekt-scenariya-нора-ежика-e';
import IISProekt_scenariyaЕжикModel from './models/i-i-s-proekt-scenariya-ежик';
import IISProekt_scenariyaЛапаЕжикаModel from './models/i-i-s-proekt-scenariya-лапа-ежика';
import IISProekt_scenariyaНораЕжикаModel from './models/i-i-s-proekt-scenariya-нора-ежика';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proekt-scenariya-ежик': IISProekt_scenariyaЕжикModel,
    'i-i-s-proekt-scenariya-лапа-ежика': IISProekt_scenariyaЛапаЕжикаModel,
    'i-i-s-proekt-scenariya-нора-ежика': IISProekt_scenariyaНораЕжикаModel
  },

  'application-name': 'Proekt_scenariya',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proekt_scenariya',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proekt_scenariya',
          title: 'Proekt_scenariya'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'proekt-scenariya': {
          caption: 'Proekt_scenariya',
          title: 'Proekt_scenariya',
          'i-i-s-proekt-scenariya-ежик-l': {
            caption: 'Ежик',
            title: ''
          },
          'i-i-s-proekt-scenariya-нора-ежика-l': {
            caption: 'Нора ежика',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-proekt-scenariya-ежик-l': IISProekt_scenariyaЕжикLForm,
    'i-i-s-proekt-scenariya-нора-ежика-l': IISProekt_scenariyaНораЕжикаLForm,
    'i-i-s-proekt-scenariya-ежик-e': IISProekt_scenariyaЕжикEForm,
    'i-i-s-proekt-scenariya-нора-ежика-e': IISProekt_scenariyaНораЕжикаEForm
  },

});

export default translations;
