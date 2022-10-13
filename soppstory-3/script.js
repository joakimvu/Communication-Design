$(document).ready(function () {
  //by Pixels
  let imgSpace = 300;
  !imgSpace && imgSpace++;

  $(window).resize(function () {
    $("body").css(
      "height",
      $(window).height() + imgSpace * ($(".image").length - 1) + "px"
    );
  });

  $(window).trigger("resize");

  $("#c1").fadeIn(0);

  $(".image").click(function () {
    let NxtIMG = Math.trunc($(document).scrollTop() / imgSpace) + 1;
    NxtIMG >= $(".image").length && (NxtIMG = 0);
    $(window).scrollTop(NxtIMG * imgSpace);
  });

  $(window).scroll(function () {
    var pos = $(document).scrollTop();
    console.log(pos);
    hideAll("c" + (Math.trunc(pos / imgSpace) + 1));
    $("#c" + (Math.trunc(pos / imgSpace) + 1)).fadeIn(1000);
  });

  function hideAll(exceptMe) {
    $(".image").each(function (i) {
      if ($(this).attr("id") == exceptMe) return;
      $(this).fadeOut(1000);
    });
  }
});
