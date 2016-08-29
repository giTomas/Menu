"use strict";

var mainMenu = {
  config: {
    log: "Element exist!",
    didScroll: false,
    delta: 5,
    lastScrollTop: 0,
    counter: 0
  },
  dom: {
    header: document.getElementById('js-header')
    //navbarHeight: document.getElementById('js-nav')
  },
  callbackSetInterval: function callbackSetInterval() {
    this.config.counter += 1;
    // console.log(this.config.counter);
    if (this.config.didScroll) {
      this.config.didScroll = false;
      this.hasScrolled();
      console.log(this.config.didScroll);
    }
  },
  addSetInterval: function addSetInterval() {
    setInterval(this.callbackSetInterval.bind(this), 250);
  },
  hasScrolled: function hasScrolled() {
    var wScroll = window.scrollY;
    console.log(wScroll);
  },
  scrollHandler: function scrollHandler() {
    this.config.didScroll = true;
    console.log(this.config.didScroll);
  },
  attachListener: function attachListener(el, fn) {
    var ev = arguments.length <= 2 || arguments[2] === undefined ? 'click' : arguments[2];

    el.addEventListener(ev, fn, false);
  },
  check: function check() {
    if (this.dom.header !== null) {
      console.log(this.config.log);
    }
  },
  init: function init() {
    if (this.dom.header === null) {
      return;
    }
    this.attachListener(window, this.scrollHandler.bind(this), 'scroll');
    this.attachListener(this.dom.header, function () {
      return console.log("something happens");
    });
    // this.check();
    this.addSetInterval();
  }
};

mainMenu.init();

// menu.attachListener(window, 'scroll', menu.scrollHandler);
// menu.attachListener(menu.dom.header, 'click', () => console.log('click'));
// menu.check();
// menu.addSetInterval();