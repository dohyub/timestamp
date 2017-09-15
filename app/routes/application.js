import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.arr=[];
    return this.arr;
  },
  actions: {
    push: function() {
      this.arr.pushObject(new Date());
      this.setupController();
    }
  },
  setupController(controller, model) {
    this._super(controller, model);
    this.controller.set('time', new Date());
  }
});
