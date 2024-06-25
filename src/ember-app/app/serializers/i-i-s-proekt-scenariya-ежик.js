import { Serializer as ЕжикSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt-scenariya-ежик';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЕжикSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
