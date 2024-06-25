import {
  defineNamespace,
  defineProjections,
  Model as ЛапаЕжикаMixin
} from '../mixins/regenerated/models/i-i-s-proekt-scenariya-лапа-ежика';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЛапаЕжикаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
