import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proekt_scenariya',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proekt_scenariya',
          title: 'Proekt_scenariya'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proekt-scenariya-ежик-l': IISProekt_scenariyaЕжикLForm,
    'i-i-s-proekt-scenariya-нора-ежика-l': IISProekt_scenariyaНораЕжикаLForm,
    'i-i-s-proekt-scenariya-ежик-e': IISProekt_scenariyaЕжикEForm,
    'i-i-s-proekt-scenariya-нора-ежика-e': IISProekt_scenariyaНораЕжикаEForm
  },

});

export default translations;
