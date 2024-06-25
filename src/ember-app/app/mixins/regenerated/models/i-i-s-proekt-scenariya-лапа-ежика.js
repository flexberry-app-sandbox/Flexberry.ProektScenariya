import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  расположение: DS.attr('string'),
  целостность: DS.attr('boolean'),
  ежик: DS.belongsTo('i-i-s-proekt-scenariya-ежик', { inverse: 'лапаЕжика', async: false })
});

export let ValidationRules = {
  расположение: {
    descriptionKey: 'models.i-i-s-proekt-scenariya-лапа-ежика.validations.расположение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  целостность: {
    descriptionKey: 'models.i-i-s-proekt-scenariya-лапа-ежика.validations.целостность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ежик: {
    descriptionKey: 'models.i-i-s-proekt-scenariya-лапа-ежика.validations.ежик.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЛапаЕжикаE', 'i-i-s-proekt-scenariya-лапа-ежика', {
    расположение: attr('Расположение', { index: 0 }),
    целостность: attr('Целостность', { index: 1 })
  });
};
