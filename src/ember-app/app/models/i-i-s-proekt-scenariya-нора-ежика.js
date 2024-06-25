import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as НораЕжикаMixin
} from '../mixins/regenerated/models/i-i-s-proekt-scenariya-нора-ежика';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(НораЕжикаMixin, Validations, {
});

defineProjections(Model);

export default Model;
