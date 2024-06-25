import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количествоВходов: DS.attr('number'),
  расположение: DS.attr('string'),
  ежик: DS.belongsTo('i-i-s-proekt-scenariya-ежик', { inverse: null, async: false })
});

export let ValidationRules = {
  количествоВходов: {
    descriptionKey: 'models.i-i-s-proekt-scenariya-нора-ежика.validations.количествоВходов.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  расположение: {
    descriptionKey: 'models.i-i-s-proekt-scenariya-нора-ежика.validations.расположение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ежик: {
    descriptionKey: 'models.i-i-s-proekt-scenariya-нора-ежика.validations.ежик.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НораЕжикаE', 'i-i-s-proekt-scenariya-нора-ежика', {
    расположение: attr('Расположение', { index: 0 }),
    количествоВходов: attr('Количество входов', { index: 1 }),
    ежик: belongsTo('i-i-s-proekt-scenariya-ежик', 'Ежик', {
      имя: attr('Имя', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'имя' })
  });

  modelClass.defineProjection('НораЕжикаL', 'i-i-s-proekt-scenariya-нора-ежика', {
    расположение: attr('Расположение', { index: 0 }),
    количествоВходов: attr('Количество входов', { index: 1 }),
    ежик: belongsTo('i-i-s-proekt-scenariya-ежик', 'Имя', {
      имя: attr('Имя', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
