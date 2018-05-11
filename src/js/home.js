/* constants */
var app = 'this is the home.js';

$(function() {
  new Glide('.glide', {
  //
    type: 'carousel',
    autoplay: 4000,
    perView: 5,
    breakpoints: {
      992: {
        perView: 3
      },
      768: {
        perView: 2
      }
    }
  }).mount()

});
