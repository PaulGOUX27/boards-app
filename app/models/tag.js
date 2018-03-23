import DS from 'ember-data';
import {computed} from '@ember/object';

export default DS.Model.extend({
  title: DS.attr('string'),
  color: DS.attr('string'),
  label: computed('title','color',function(){
      return
  })
});
