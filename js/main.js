$(document).ready(function(){


$('.four_sl').slick({
        infinite: false,
        swipe: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 773,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
          {
          breakpoint: 661,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  });



jQuery(function($) {
  //play video btn
  $(".position-relative video").removeAttr("controls"); //hide controls by default
  //on clicking play button
  $(".video-section").each(function() {
    $(".play-btn").click(function() {
      var video = $(this)
        .closest(".position-relative")
        .find("video")
        .get(0);
      video.play();
      video.controls = true;
      $(this).css("visibility", "hidden");
      return false;
    });

    //when video is paused
    $(this)
      .find("video")
      .click(function() {
        var video = $(this).get(0);
        video.pause();
        video.controls = false;
        $(this)
          .siblings(".play-btn")
          .css("visibility", "visible");
        return false;
      });

    //when video has ended
    $(this)
      .find("video")
      .on("ended", function() {
        $(this).get(0).controls = false;
        $(this)
          .siblings(".play-btn")
          .css("visibility", "visible");
        $(this)
          .get(0)
          .load();
      });
  });
 });



});


const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});



class dpkCursor {
  constructor(option = {}) {
    this.option = {
      ease: option.ease || 0.25
    };
    this.animationFrame = null;
    this.mousePos = { x: 0, y: 0 };
    this.cursorPos = { x: 0, y: 0 };
    this.init();
  }

  // Create div Element 🔳

  createCursor() {
    this.cursor = document.createElement("div");
    this.cursor.classList.add("dpkCursor");
    document.body.appendChild(this.cursor);
  }

  // Mouse move Listener on window 🔳

  getPosition() {
    window.addEventListener("mousemove", (e) => {
      this.mousePos.x = e.x;
      this.mousePos.y = e.y;
    });
  }

  //Follow The Cursor 💨

  setPosition() {
    this.cursorPos.x += (this.mousePos.x - this.cursorPos.x) * this.option.ease;
    this.cursorPos.y += (this.mousePos.y - this.cursorPos.y) * this.option.ease;
    this.cursor.style.transform = `translate3d(calc(${this.cursorPos.x}px - 50%) ,calc(${this.cursorPos.y}px - 50%), 0)`;
    this.animationFrame = requestAnimationFrame(this.setPosition.bind(this));
  }

  // Reset the Cursor 🏓

  reset() {
    this.cursor.innerHTML = "";
    this.cursor.style.background = "";
    this.cursor.className = "dpkCursor";
  }

  // Hover Cursor Effects  ✨

  setHover(el) {
    let hoverText = el.getAttribute("data-hover-text");
    let hoverImg = el.getAttribute("data-hover-img");
    let hoverClass = el.getAttribute("data-hover-class");
    let hoverBg = el.getAttribute("data-hover-bg");

    if (hoverText) this.cursor.innerHTML = hoverText;

    if (hoverClass) this.cursor.classList.add(hoverClass);
    else this.cursor.classList.add("hover-active");

    if (hoverBg) {
      this.cursor.style.backgroundColor = hoverBg;
      this.cursor.classList.add("hover-bg");
    }

    if (hoverImg) {
      this.cursor.style.backgroundImage = `url(${hoverImg})`;
      this.cursor.classList.add("hover-img");
    }
  }

  // Listners 🤙

  effect() {
    const dataHover = document.querySelectorAll(".dpk-hover");
    dataHover.forEach((target) => {
      target.addEventListener("mouseenter", () => this.setHover(target));
      target.addEventListener("mouseleave", () => this.reset());
      target.addEventListener("click", () => this.reset());
    });
  }

  // Init the Cursor 💡

  init() {
    this.createCursor();
    this.getPosition();
    this.setPosition();
    this.effect();
  }

  // Destroy the Cursor  🚮

  destroy() {
    cancelAnimationFrame(this.animationFrame);
    document.body.removeChild(this.cursor);
  }
}

const customCursor = new dpkCursor({
  ease: 0.15
});