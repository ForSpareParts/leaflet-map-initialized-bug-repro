import Ember from 'ember';
import LeafletMap from 'ember-leaflet/components/leaflet-map';

import TrackZoomAndBoundsMixin from 'leaflet-bug-repro/mixins/track-zoom-and-bounds';

export default LeafletMap.extend(TrackZoomAndBoundsMixin, {
  didCreateLayer() {
    this._super(...arguments);

    console.log('map setup here');

    Ember.run(() => {
      this.set('value', 42);
    });
  }
});
