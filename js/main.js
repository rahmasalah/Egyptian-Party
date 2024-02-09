/// <reference types="../@types/jquery/"/>

$("aside a").on("click", function (e) {
  let sectionHeight = e.target.getAttribute("href");
  let sectionOffset = $(sectionHeight).offset().top;
  $("html").animate({ scrollTop: sectionOffset - 80 }, 2000);
  $("#innerSide").animate({ width: "toggle" }, 1000);
});

$("i").on("click", function () {
  $("#innerSide").animate({ width: "toggle" }, 1000);
});

let singer = document.querySelectorAll(".singerNum");
let paragraph = document.querySelectorAll(".paraNum");

$(singer).on("click", function () {
  $(paragraph).not($(this).siblings()).slideUp(500);
  $(this).siblings().slideToggle(500);
});

countDown("24 may 2024 9:56:00");

function countDown(nums) {
  let newDate = new Date(nums);

  let now = new Date();

  timeDifference = newDate.getTime() / 1000 - now.getTime() / 1000;

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $("#days").html(`${days} D`);
  $("#hours").html(`${hours} h`);
  $("#mins").html(`${mins} m`);
  $("#sec").html(`${secs} s`);

  setInterval(function () {
    countDown(nums);
  }, 1000);
}

$("textarea").on("keyup", function () {
  let maxLength = 100;
  let length = $(this).val().length;
  let amount = maxLength - length;

  if (amount <= 0) {
    $(".counted").html("You finished your remaining characters");
  } else {
    $(".counted").html(`${amount} Remaining`);
  }
});
