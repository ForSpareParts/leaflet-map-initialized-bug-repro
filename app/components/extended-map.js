import Ember from 'ember';
import LeafletMap from 'ember-leaflet/components/leaflet-map';

export default LeafletMap.extend({
  didCreateLayer() {
    this._super(...arguments);

    console.log('map setup here');

    Ember.run(() => {
      this.set('value', 42);
    });
  }
});
