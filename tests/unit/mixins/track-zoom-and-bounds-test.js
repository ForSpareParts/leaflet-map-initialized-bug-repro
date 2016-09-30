import Ember from 'ember';
import TrackZoomAndBoundsMixin from 'leaflet-bug-repro/mixins/track-zoom-and-bounds';
import { module, test } from 'qunit';

module('Unit | Mixin | track zoom and bounds');

// Replace this with your real tests.
test('it works', function(assert) {
  let TrackZoomAndBoundsObject = Ember.Object.extend(TrackZoomAndBoundsMixin);
  let subject = TrackZoomAndBoundsObject.create();
  assert.ok(subject);
});
