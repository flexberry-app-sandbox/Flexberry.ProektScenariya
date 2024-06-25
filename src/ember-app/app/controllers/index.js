import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.proekt-scenariya.caption'),
          title: i18n.t('forms.application.sitemap.proekt-scenariya.title'),
          children: [{
            link: 'i-i-s-proekt-scenariya-ежик-l',
            caption: i18n.t('forms.application.sitemap.proekt-scenariya.i-i-s-proekt-scenariya-ежик-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt-scenariya.i-i-s-proekt-scenariya-ежик-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-proekt-scenariya-нора-ежика-l',
            caption: i18n.t('forms.application.sitemap.proekt-scenariya.i-i-s-proekt-scenariya-нора-ежика-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt-scenariya.i-i-s-proekt-scenariya-нора-ежика-l.title'),
            children: null
          }]
        }
      ]
    };
  }),
})