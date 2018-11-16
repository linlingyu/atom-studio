'use babel';

import AtomPluginView from './atom-plugin-view';
import { CompositeDisposable } from 'atom';

export default {
  atomPluginView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    atom.workspace.addOpener(uri => {
      if (uri !== 'atom://ali-studio/about') {return;}
      return this.atomPluginView = new AtomPluginView();
    })

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-plugin:toggle': () => this.toggle()
    }));
  },

  serialize() {
    return this.atomPluginView && this.atomPluginView.serialize();
  },

  deserializeMyObject({data}) {
      debugger;
      console.log(data);
  },

  toggle() {
    console.log('AtomPlugin was toggled!');
    atom.workspace.open('atom://ali-studio/about');
  }

};
