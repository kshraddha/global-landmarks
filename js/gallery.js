var loading = true;
var a = 1;

function load() {
  var wrap = $('#wrap');
  for (var i = a; i < a + 1; i++) {
    wrap.append('<img class="img_45 left_float" src="img/' + i + '.jpg">');
    wrap.append('<img class="img_55 right_float" src="img/' + (i + 1) + '.jpg">');
    wrap.append('<img class="img_65 left_float" src="img/' + (i + 2) + '.jpg">');
    wrap.append('<img class="img_35 left_float" src="img/' + (i + 3) + '.jpg">');
    wrap.append('<img class="img_100 right_float" src="img/' + (i + 4) + '.jpg">');
    wrap.append('<img class="img_20 left_float" src="img/' + (i + 5) + '.jpg">');
    wrap.append('<img class="img_45 img_50tab left_float" src="img/' + (i + 6) + '.jpg">');
    wrap.append('<img class="img_35 img_50tab left_float" src="img/' + (i + 7) + '.jpg">');
  }
  a = a + 8;
}
window.onload = load;

function dynamicScroll() {
  var wrap = $('#wrap');
  for (var i = a; i < a + 1; i++) {
    wrap.append('<img class="img_45 left_float" src="img/' + i + '.jpg">');
    wrap.append('<img class="img_55 right_float" src="img/' + (i + 1) + '.jpg">');
    wrap.append('<img class="img_65 left_float" src="img/' + (i + 2) + '.jpg">');
    wrap.append('<img class="img_35 left_float" src="img/' + (i + 3) + '.jpg">');
    wrap.append('<img class="img_100 right_float" src="img/' + (i + 4) + '.jpg">');
    wrap.append('<img class="img_20 left_float" src="img/' + (i + 5) + '.jpg">');
    wrap.append('<img class="img_45 img_50tab left_float" src="img/' + (i + 6) + '.jpg">');
    wrap.append('<img class="img_35 img_50tab left_float" src="img/' + (i + 7) + '.jpg">');
    $('.loading').remove();
    loading = true;
  }
  a = a + 8;
}

function delay() {
  if (a < 48) {
    var wrap = $('#wrap');
    var header = $('header');
    var contentHeight = wrap.height() + header.height();
    var yOffset = $(window).scrollTop();
    var y = yOffset + $(window).innerHeight();
    if (y >= contentHeight && loading == true) {

      $('#wrap').append('<div class="loading">Loading...</div>');
      loading = false;
      setTimeout(dynamicScroll, 1000);
    }
  }
}

$(document).on('scroll', function () {
  delay();
});