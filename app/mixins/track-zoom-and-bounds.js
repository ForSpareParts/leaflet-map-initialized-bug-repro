import Ember from 'ember';

/**
 * Causes map to record:
 *
 * - the current map zoom as `lastSeenZoom`
 * - the current map bounds as `lastSeenBounds`
 *
 * ember-leaflet's `zoom` and `bounds` are write-only, this lets us read as
 * well.
 */
export default Ember.Mixin.create({
  didCreateLayer() {
    this._super(...arguments);

    console.log('mixin setup here');
  },

  _setZoomFromMap() {
    const zoomLevel = this._layer.getZoom();
    Ember.run(() => this.set('lastSeenZoom', zoomLevel));
  },

  _setBoundsFromMap() {
    const latLngBounds = this._layer.getBounds();
    const sw = latLngBounds.getSouthWest();
    const ne = latLngBounds.getNorthEast();
    Ember.run(() => this.set(
      'lastSeenBounds',
      [
        [sw.lat, sw.lng],
        [ne.lat, ne.lng]
      ]));
  },

  _zoomend() {
    this._setZoomFromMap();
    this._setBoundsFromMap();
  },

  _moveend() {
    this._setBoundsFromMap();
  }
});
