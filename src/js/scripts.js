// let imgs = document.querySelectorAll('.img')
// let svgs = document.querySelector('.svgs')

// svgs.forEach(element => {
//     imgs.addEventListener('mouseenter', e => {
//         e.preventDefault();
//         svgs.style.display = 'block';
//     });
// });
// document.querySelector('.img').addEventListener('mouseleave', e => {
    //     e.preventDefault();
    //     document.querySelector('.svgs').style.display = 'none';
    // });
    


//паралакс
const header = document.querySelector('header');

header.addEventListener('mousemove', (e) => {
  const rect = header.getBoundingClientRect();

  const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
  const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

  header.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});

header.addEventListener('mouseleave', () => {
  header.style.backgroundPosition = '50% 50%';
});
//
const doyou = document.querySelector('.doyou');

doyou.addEventListener('mousemove', (e) => {
  const rect = doyou.getBoundingClientRect();

  const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
  const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

  doyou.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});

doyou.addEventListener('mouseleave', () => {
  doyou.style.backgroundPosition = '50% 50%';
});

//скрол

// function scrollToSection(buttonSelector, sectionSelector) {
//     const button = document.querySelector(buttonSelector);
//     const section = document.querySelector(sectionSelector);

//     if (!button || !section) return;

//     button.addEventListener('click', () => {
//         window.scrollTo({
//         top: section.offsetTop,
//         behavior: 'smooth'
//         });
//     });
// }

// scrollToSection('.home', 'header');
// scrollToSection('.servise', '.servises');
// scrollToSection('.about', '.abouts');
// scrollToSection('.blog', '.blogs');
// scrollToSection('.clients', '.client');
// scrollToSection('.contact', '.contacts');

//бургер меню
const dark = document.querySelector(".dark-bgc"),
  burger = document.querySelector(".burger"),
  menu = document.querySelector(".menu")
  fixed = document.querySelector(".fixed")
  //   cancel = document.querySelector(".cancel")

burger.addEventListener("click", function() {
  menu.style.left = "0";
  dark.style.display = "block"
  // fixed.style.backgroundColor = "rgba(192, 48, 28, 0)"
})
function cancelBurger() {
  menu.style.left = "-100%";
  dark.style.display = "none"
  // fixed.style.backgroundColor = "rgba(192, 48, 28, 0.3)"
}
// cancel.addEventListener("click", cancelBurger)
dark.addEventListener("click", cancelBurger)

//попап
const openBtn = document.querySelector('.getstarted');
const popap = document.querySelector('.popap');
const closeBtn = document.querySelector('.x');

if (openBtn && popap && closeBtn) {
    openBtn.addEventListener('click', e => {
        e.preventDefault();
        popap.style.display = 'block';
    });

    closeBtn.addEventListener('click', e => {
        e.preventDefault();
        popap.style.display = 'none';
    });
}

//заміна заголовків
const second = document.querySelectorAll(".second");
const rock = document.querySelector(".rock svg");
const names = document.querySelectorAll(".names");

rock.addEventListener("dblclick", e => {
  e.preventDefault();
  rock.addEventListener("click", e => {
    e.preventDefault();   
    second.forEach(item => {
        item.style.display = "block";
    })
    names.forEach(item => {
        item.style.display = "none";
    })
  })
})

//сортування
const li = document.querySelectorAll(".li");
const all = document.querySelector(".all");

li.forEach(item => {
    item.addEventListener("click", () => {

        if (item === all) {
            let isRed = all.style.color === "rgb(192, 48, 28)" || all.style.color === "#c0301c";

            li.forEach(el => {
                el.style.color = isRed ? "" : "#c0301c";
            });

            return;
        }

        item.style.color =
            item.style.color === "rgb(192, 48, 28)" || item.style.color === "#c0301c"
                ? ""
                : "#c0301c";
    });
});

const filters = document.querySelectorAll('ul li');
const images = document.querySelectorAll('.workplaces img');

const allLi = document.querySelector('ul li.all');

filters.forEach(li => {
    li.addEventListener('click', () => {

        if (li.classList.contains('all')) {
            const isActive = li.classList.contains('active');

            filters.forEach(item => item.classList.remove('active'));

            if (!isActive) {
                li.classList.add('active');
                images.forEach(img => img.style.display = 'block');
            } else {
                images.forEach(img => img.style.display = 'none');
            }

            return;
        }

        li.classList.toggle('active');

        allLi.classList.remove('active');

        const activeFilters = Array.from(filters)
            .filter(item =>
                item.classList.contains('active') &&
                !item.classList.contains('all')
            )
            .map(item => item.classList[1]);

        images.forEach(img => {
            if (activeFilters.length === 0) {
                img.style.display = 'none';
                return;
            }

            const show = activeFilters.some(filter =>
                img.classList.contains(filter)
            );

            img.style.display = show ? 'block' : 'none';
        });
    });
});

//read more
let read = document.querySelectorAll(".read")
read.forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.recent');
        const items = parent.querySelectorAll('.more');
        items.forEach(li => {
            li.style.display = 'block'
        })
        button.style.display = 'none'
    })
})


//слайдер
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const track = document.querySelector('.slider-track');

let autoSlideInterval = null;
    
// const slideWidth = slider[0].offsetWidth + 30; // ширина + gap
// let isAnimating = false;
// track.insertBefore(slider[slider.length - 1].cloneNode(true), track.firstChild);
// track.appendChild(slider[0].cloneNode(true));
// let position = -slideWidth;
// track.style.transform = `translateX(${position}px)`;

//--------------зміна кольору кнопок

function moveNext() {
  const firstSlide = slider.firstElementChild;
//   const lastSlide = slider.lastElementChild;
  slider.style.transition = 'transform 1s ease';
  slider.style.transform = 'translateX(-300px)';

  setTimeout(() => {
    slider.style.transition = 'none';
    slider.style.transform = 'translateX(0)';
    slider.appendChild(firstSlide); // переносимо фото в кінець
  }, 500);
}

function movePrev() {
  const lastSlide = slider.lastElementChild;
  slider.insertBefore(lastSlide, slider.firstElementChild);
  slider.style.transition = 'none';
  slider.style.transform = 'translateX(-300px)';

  setTimeout(() => {
    slider.style.transition = 'transform 1s ease';
    slider.style.transform = 'translateX(0)';
  }, 10);
}

nextBtn.addEventListener('click', () => {
  stopAutoSlide();
  moveNext();
  startAutoSlide();
});

prevBtn.addEventListener('click', () => {
  stopAutoSlide();
  movePrev();
  startAutoSlide();
});

function startAutoSlide() {
  autoSlideInterval = setInterval(moveNext, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

startAutoSlide();



// const slider = document.querySelector('.slider');
// const slides = document.querySelectorAll('.slide');
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');

// const slideWidth = 280; // 250 + gap
// let index = 1;
// let interval;

// // КЛОНУЄМО
// const firstClone = slides[0].cloneNode(true);
// const lastClone = slides[slides.length - 1].cloneNode(true);

// firstClone.classList.add('clone');
// lastClone.classList.add('clone');

// slider.appendChild(firstClone);
// slider.insertBefore(lastClone, slides[0]);

// // стартова позиція (щоб був слайд зліва і справа)
// slider.style.transform = `translateX(-${slideWidth * index}px)`;

// // NEXT
// function moveNext() {
//   if (index >= slider.children.length - 1) return;
//   index++;
//   slider.style.transition = 'transform 0.5s ease';
//   slider.style.transform = `translateX(-${slideWidth * index}px)`;
// }

// // PREV
// function movePrev() {
//   if (index <= 0) return;
//   index--;
//   slider.style.transition = 'transform 0.5s ease';
//   slider.style.transform = `translateX(-${slideWidth * index}px)`;
// }

// // Після анімації — тихо повертаємось
// slider.addEventListener('transitionend', () => {
//   const slides = document.querySelectorAll('.slide');

//   if (slides[index].classList.contains('clone')) {
//     slider.style.transition = 'none';

//     if (index === slides.length - 1) {
//       index = 1;
//     } else if (index === 0) {
//       index = slides.length - 2;
//     }

//     slider.style.transform = `translateX(-${slideWidth * index}px)`;
//   }
// });

// // кнопки
// nextBtn.addEventListener('click', () => {
//   stopAuto();
//   moveNext();
//   startAuto();
// });

// prevBtn.addEventListener('click', () => {
//   stopAuto();
//   movePrev();
//   startAuto();
// });

// // ⏱ Автоскрол
// function startAuto() {
//   interval = setInterval(moveNext, 3000);
// }

// function stopAuto() {
//   clearInterval(interval);
// }

// startAuto();






// const track = document.querySelector('.slider-track');
// const slides = document.querySelectorAll('.slide');
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');

// const slideWidth = slides[0].offsetWidth + 30; // ширина + gap
// let isAnimating = false;

// /* Додаємо по одному слайду з кожного боку */
// track.insertBefore(slides[slides.length - 1].cloneNode(true), track.firstChild);
// track.appendChild(slides[0].cloneNode(true));

// let position = -slideWidth;
// track.style.transform = `translateX(${position}px)`;

// /* NEXT */
// function moveNext() {
//   if (isAnimating) return;
//   isAnimating = true;

//   position -= slideWidth;
//   track.style.transition = 'transform 0.5s ease';
//   track.style.transform = `translateX(${position}px)`;

//   setTimeout(() => {
//     track.style.transition = 'none';
//     track.appendChild(track.firstElementChild);
//     position += slideWidth;
//     track.style.transform = `translateX(${position}px)`;
//     isAnimating = false;
//   }, 500);
// }

// /* PREV */
// function movePrev() {
//   if (isAnimating) return;
//   isAnimating = true;

//   position += slideWidth;
//   track.style.transition = 'transform 0.5s ease';
//   track.style.transform = `translateX(${position}px)`;

//   setTimeout(() => {
//     track.style.transition = 'none';
//     track.insertBefore(track.lastElementChild, track.firstElementChild);
//     position -= slideWidth;
//     track.style.transform = `translateX(${position}px)`;
//     isAnimating = false;
//   }, 500);
// }

// nextBtn.addEventListener('click', moveNext);
// prevBtn.addEventListener('click', movePrev);

// /* Автопрокрутка */
// setInterval(moveNext, 3000);
