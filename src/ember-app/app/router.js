import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proekt-scenariya-ежик-l');
  this.route('i-i-s-proekt-scenariya-ежик-e',
  { path: 'i-i-s-proekt-scenariya-ежик-e/:id' });
  this.route('i-i-s-proekt-scenariya-ежик-e.new',
  { path: 'i-i-s-proekt-scenariya-ежик-e/new' });
  this.route('i-i-s-proekt-scenariya-нора-ежика-l');
  this.route('i-i-s-proekt-scenariya-нора-ежика-e',
  { path: 'i-i-s-proekt-scenariya-нора-ежика-e/:id' });
  this.route('i-i-s-proekt-scenariya-нора-ежика-e.new',
  { path: 'i-i-s-proekt-scenariya-нора-ежика-e/new' });
});

export default Router;
