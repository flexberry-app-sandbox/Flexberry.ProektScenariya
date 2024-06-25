import {
  defineNamespace,
  defineProjections,
  Model as ЕжикMixin
} from '../mixins/regenerated/models/i-i-s-proekt-scenariya-ежик';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЕжикMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
