import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  },
  afterModel() {
    $(document).attr(title, "Portfolio | Rachel Bronstein")
  }
});
