import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЛапаЕжикаMixin
} from '../mixins/regenerated/models/i-i-s-proekt-scenariya-лапа-ежика';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЛапаЕжикаMixin, Validations, {
});

defineProjections(Model);

export default Model;
