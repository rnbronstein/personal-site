import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('portfolio');
  this.route('resume');
  this.route('blog');
  this.route('home');
  this.route('music');
  this.route('projects');
});

export default Router;
