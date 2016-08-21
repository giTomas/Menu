var menu = {
  config: {
    log: "Element exist!",
    didScroll: false,
    counter: 0
  },
  dom: {
      header: document.getElementById('js-header')
    },
  callback: function(){
    this.config.counter += 1

    if (this.config.didScroll){
      this.config.didScroll = false;
      console.log(this.config.didScroll);
    }
  },
  addSetInterval: function(){
    setInterval(this.callback.bind(this), 250)},
  hasScrolled: function(){
    },
  scrollHandler: function(){
    this.config.didScroll = true;
    console.log(this.config.didScroll);
  },
  attachListener: function(el, evt, fn=()=>console.log('scroll')) {
        el.addEventListener(evt, fn, false);
      },
  check: function(){
    if(this.header !== null) {
      console.log(this.config.log);
    },
  init: function(){
    this.attachListener(window, 'scroll', this.scrollHandler, false);
    this.attachListener(menu.dom.header, 'click', () => console.log('click'));
    this.check();
    this.addSetInterval();
  }
};

menu.init();

// menu.attachListener(window, 'scroll', menu.scrollHandler);
// menu.attachListener(menu.dom.header, 'click', () => console.log('click'));
// menu.check();
// menu.addSetInterval();
