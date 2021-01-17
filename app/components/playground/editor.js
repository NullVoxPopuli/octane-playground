/* eslint-disable ember/new-module-imports */
import Component from '@glimmer/component';
import Ember from 'ember';
import { action } from '@ember/object';
import hbs2 from 'htmlbars-inline-precompile';

export default class Editor extends Component {
  @action
  update(event) {
    let text = event.target.value;

    let compiled = hbs2([ text ]);
    console.log(text, compiled);
  }

}
