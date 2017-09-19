import Ember from 'ember';

export default Ember.Route.extend({
  ts: [],
  actions: {
    update() {
      const was = this.currentModel;
      this.get('ts').pushObject(was);
      this.refresh();
    },
    remove(time) {
      this.get('ts').removeObject(time);
    }
  },
  model() {
    return new Date();
  },
  setupController(controller, model) {
    controller.set('model', model);
    controller.set('ts', this.get('ts'));
  }
});
