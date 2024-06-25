import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  возраст: DS.attr('number'),
  имя: DS.attr('string'),
  лапаЕжика: DS.hasMany('i-i-s-proekt-scenariya-лапа-ежика', { inverse: 'ежик', async: false })
});

export let ValidationRules = {
  возраст: {
    descriptionKey: 'models.i-i-s-proekt-scenariya-ежик.validations.возраст.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-proekt-scenariya-ежик.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  лапаЕжика: {
    descriptionKey: 'models.i-i-s-proekt-scenariya-ежик.validations.лапаЕжика.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЕжикE', 'i-i-s-proekt-scenariya-ежик', {
    имя: attr('Имя', { index: 0 }),
    возраст: attr('Возраст', { index: 1 }),
    лапаЕжика: hasMany('i-i-s-proekt-scenariya-лапа-ежика', 'Лапа ежика', {
      расположение: attr('Расположение', { index: 0 }),
      целостность: attr('Целостность', { index: 1 })
    })
  });

  modelClass.defineProjection('ЕжикL', 'i-i-s-proekt-scenariya-ежик', {
    имя: attr('Имя', { index: 0 }),
    возраст: attr('Возраст', { index: 1 })
  });
};
