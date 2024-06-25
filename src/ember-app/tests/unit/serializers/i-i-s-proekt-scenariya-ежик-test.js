import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proekt-scenariya-ежик', 'Unit | Serializer | i-i-s-proekt-scenariya-ежик', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proekt-scenariya-ежик',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-proekt-scenariya-ежик',
    'model:i-i-s-proekt-scenariya-лапа-ежика',
    'model:i-i-s-proekt-scenariya-нора-ежика',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
