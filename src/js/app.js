const btns         = document.querySelectorAll(".slider-section__btn"),
      quote        = document.querySelector(".testimonial-section__quote"),
      clientName   = document.querySelector(".testimonial-section__name"),
      imageWrapper = document.querySelector(".slider-section__img-wrapper");

import tanyaImg from "../assets/images/image-tanya.jpg";
import johnImg from "../assets/images/image-john.jpg";

const users = [
  {
    name: "Tanya Sinclair",
    occupation: "UX Engineer",
    quote:
      "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    image: tanyaImg,
  },
  {
    name: "John Tarkpor",
    occupation: "Junior Front-end Developer",
    quote:
      "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    image: johnImg,
  },
];

let slide = 0;

const navigation = () => {
  if (slide > users.length - 1) {
    slide = 0;
  }
  imageWrapper.innerHTML = `<img src="${users[slide].image}" width="100%" alt="client picture" />`;

  quote.innerText = `${users[slide].quote}`;
  clientName.innerHTML = `${users[slide].name}<br /><span class="testimonial-section__occupation">${users[slide].occupation}</span>`;

  slide++;
};
navigation();

btns.forEach( btn => {
  btn.addEventListener("click", navigation)
})
// img has a hash so no match
