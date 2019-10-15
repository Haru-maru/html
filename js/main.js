// jsを記述する際はここに記載していく
(function() {
  const txts = $(".text1");
  let txtIndex = -1;

  txts.hide();
  function showNextTxt() {
    txtIndex++;
    txts
      .eq(txtIndex % txts.length)
      .fadeIn(2000)
      .delay(5000)
      .fadeOut(2000, showNextTxt);
  }
  showNextTxt();
})();

$(function() {
  var pageTop = $("#mame");
  pageTop.hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
  pageTop.click(function() {
    $("body, html").animate({ scrollTop: 0 }, 500, "swing");
    return false;
  });
});

var cursor = $(".cursor"),
  cWidth = 20, //カーソルの大きさ
  mouseX = 0, //マウスのX座標
  mouseY = 0; //マウスのY座標

$(document).on("mousemove", function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
  cursor.css({
    //カーソルの真ん中に座標軸が来るよう、
    //カーソルの大きさの半分を引きます
    left: mouseX - cWidth / 2,
    top: mouseY - cWidth / 2
  });
});
