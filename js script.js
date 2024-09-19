const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the No button is clicked
noBtn.addEventListener("click", () => {
    question.innerHTML = "Y'a interêt 😘";
    gif.src = "https://i.giphy.com/media/S5h4gvxxc1qlG/giphy.gif";
  });
  
  // Make the Yes button move randomly on hover
  yesBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const yesBtnRect = noBtn.getBoundingClientRect();
  
    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - yesBtnRect.width;
    const maxY = wrapperRect.height - yesBtnRect.height;
  
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
  
    yesBtn.style.left = randomX + "px";
    yesBtn.style.top = randomY + "px";
  });