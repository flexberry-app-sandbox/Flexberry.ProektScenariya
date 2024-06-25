import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЕжикMixin
} from '../mixins/regenerated/models/i-i-s-proekt-scenariya-ежик';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЕжикMixin, Validations, {
});

defineProjections(Model);

export default Model;
