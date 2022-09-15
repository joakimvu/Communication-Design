window.onscroll = function () {
  onScroll();
};
// calculate max scroll top position

const onScroll = () => {
  // console.log(firstDiv.clientHeight - h1Text.clientHeight);
  const firstDiv = document.querySelector(".bkg");
  const firstText = document.getElementById("first-text");
  const divHeight = firstDiv.clientHeight;
  const bodyHeight = document.body.clientHeight;
  const scrollHeight = document.documentElement.scrollTop;
  const heightDiff = bodyHeight - divHeight;
  console.log(scrollHeight, heightDiff, firstText.clientHeight);
  // console.log(
  //   scrollHeight,
  //   heightDiff + firstText.clientHeight - divHeight / 2
  // );
  //   console.log(document.documentElement.scrollTop, height);

  if (scrollHeight > heightDiff - 0.5 * divHeight) {
    firstText.className = "black-text";
    // secondText.className = "white-text";
  } else {
    firstText.className = "white-text";
    // secondText.className = "hidden";
  }
};

// window.addEventListener("scroll", (event) => {
//   console.log("Scrolling...");
// });
