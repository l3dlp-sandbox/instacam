'use strict';

import {defaults} from './defaults.js';

export class Instacam {

  // class constructor
  constructor(viewport, options) {

    // checks the viewport element
    if (typeof viewport === 'undefined' || viewport === null || viewport.nodeName.toLowerCase() !== 'canvas') {
      throw new Error('Invalid viewport, you need to pass a valid HTML5 canvas element');
    }

    // assigns custom user options to defaults
    this.options = Object.assign(defaults, options);

    // initializes the viewport
    this.viewport = viewport;
    this.viewport.width = this.options.width;
    this.viewport.height = this.options.height;
  }

  // captures the media stream to the viewport through getUserMedia API
  capture() {}

  // applies a custom filter to the viewport
  filter() {}

  // snaps the viewport and returns the image data
  snap() {}

  // saves the viewport to a specific image file format : png and high quality by default
  save() {}
}
