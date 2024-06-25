import {
  defineNamespace,
  defineProjections,
  Model as НораЕжикаMixin
} from '../mixins/regenerated/models/i-i-s-proekt-scenariya-нора-ежика';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(НораЕжикаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
