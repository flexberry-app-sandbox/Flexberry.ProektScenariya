import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proekt-scenariya-ежик', 'Unit | Model | i-i-s-proekt-scenariya-ежик', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proekt-scenariya-ежик',
    'model:i-i-s-proekt-scenariya-лапа-ежика',
    'model:i-i-s-proekt-scenariya-нора-ежика',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
