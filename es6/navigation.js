"use strict";

//source for parts of js solution: https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c#.uwfs3la8l
//http://jsfiddle.net/mariusc23/s6mLJ/31/
const Navigation = {
  config: {
    didScroll: false,
    delta: 5,
    lastScrollTop: 0,
    lastScrollUp: false,
    lastScrollDown: false,
    scrollDirectionChanged: false,
    tl: new TimelineLite()
  },
  dom: {
      nav: document.getElementById('js-nav'),
      navHeight: parseFloat(getComputedStyle(document.getElementById('js-nav', null)).height.split('px')[0]),
      boxShadow: parseFloat(getComputedStyle(document.getElementById('js-nav', null)).boxShadow[27]),
      navOpen: document.getElementById('js-nav-open'),
      navClose: document.getElementById('js-nav-close')
    },
  callbackSetInterval: function(){
    if (this.config.didScroll) {
      this.config.didScroll = false;
      this.hasScrolled();

      // console.log(`didScroll(callBackSetInterval): ${this.config.didScroll}`);
    }
  },
  addSetInterval: function(){
    setInterval(this.callbackSetInterval.bind(this), 250)
  },
  scrollUp: function(){
    console.log('scrollUp');
    // const tl = new TimelineLite();
    this.config.tl.to(this.dom.nav, 0.5, {boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.6)", y: 0})


  },
  scrollDown: function(height){
    console.log('scrollDown');
    this.config.tl.to(this.dom.nav, 0.5, {boxShadow: "0px 0px 8px rgba(0, 0, 0, 0)", y: -height});
  },
  hasScrolled: function(){
    //fn config
    let wScroll           = window.scrollY,
        scrollNotEnough   = Math.abs(this.config.lastScrollTop - wScroll) <= this.config.delta,
        height            = this.dom.navHeight + this.dom.boxShadow,
        scrollUp          = wScroll < this.config.lastScrollTop,
        scrollDown        = wScroll > this.config.lastScrollTop,  // && wScroll > this.dom.navHeight;  //???!!!
        directionHasChanged  = this.config.lastScrollUp !== scrollUp || this.config.lastScrollDown !== scrollDown;
    //scroll more then delta
    if (scrollNotEnough) {
      return;
    }

    //first condition detecting scroll-down
    if(directionHasChanged && scrollDown){
      this.scrollDown(height);
    }
    //scroll-up
    if(directionHasChanged && scrollUp){
      this.scrollUp();
    }

    this.config.lastScrollTop = wScroll;
    this.config.lastScrollUp  = scrollUp;
    this.config.lastScrollDown  = scrollDown;
    console.log(`scrollUp: ${scrollUp}, scrollDown: ${scrollDown}, directionChanged: ${directionHasChanged}`);


    // console.log(`WINDOW has scrolled: ${wScroll}px`);
  },
  scrollHandler: function(){
    this.config.didScroll = true;

    // console.log(`didScroll(scrollHandler): ${this.config.didScroll}`);
  },
  attachListener: function(el, handler, ev='click') {
        el.addEventListener(ev, handler, false);
      },
  init: function(){
    if (this.dom.nav === null) {
      return;
    }
    this.attachListener(window, this.scrollHandler.bind(this), 'scroll');
    this.attachListener(this.dom.nav, ()=>console.log("something happens"));
    this.addSetInterval();
    // console.log(this.config.tl);
  }
};

Navigation.init();

// menu.attachListener(window, 'scroll', menu.scrollHandler);
// menu.attachListener(menu.dom.header, 'click', () => console.log('click'));
// menu.check();
// menu.addSetInterval();
