import Component from '@ember/component';
import layout from '../templates/components/custom-link';

export default Component.extend({
  layout,
  tagName: "" // Needed to prevent Ember component from automatically add a 'div'
});
