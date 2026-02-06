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
        item.style.color = "#c0301c";
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


// // слайдер
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
  const secondSlide = slider.children[1]
//   const lastSlide = slider.lastElementChild;
  slider.style.transition = 'transform 1s ease';
  slider.style.transform = 'translateX(-300px)';

  setTimeout(() => {
    slider.style.transition = 'none';
    slider.style.transform = 'translateX(0)';
    slider.appendChild(firstSlide); // переносимо фото в кінець
    // slider.insertAdjacentElement(beforeend,secondSlide); // переносимо фото в кінець
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
// const prevBtn = document.querySelector('.nav.prev');
// const nextBtn = document.querySelector('.nav.next');

// const slideWidth = slides[0].offsetWidth + 24; // gap
// let index = 1;
// let isAnimating = false;

// // --- клонуємо крайні ---
// const firstClone = slides[0].cloneNode(true);
// const lastClone = slides[slides.length - 1].cloneNode(true);

// slider.appendChild(firstClone);
// slider.insertBefore(lastClone, slides[0]);

// slider.style.transform = `translateX(${-slideWidth * index}px)`;

// // --- рух ---
// function moveToIndex() {
//   isAnimating = true;
//   slider.style.transition = 'transform 0.8s ease';
//   slider.style.transform = `translateX(${-slideWidth * index}px)`;
// }

// nextBtn.addEventListener('click', () => {
//   if (isAnimating) return;
//   index++;
//   moveToIndex();
// });

// prevBtn.addEventListener('click', () => {
//   if (isAnimating) return;
//   index--;
//   moveToIndex();
// });

// // --- loop без ривка ---
// slider.addEventListener('transitionend', () => {
//   slider.style.transition = 'none';

//   if (index === slides.length + 1) {
//     index = 1;
//   }

//   if (index === 0) {
//     index = slides.length;
//   }

//   slider.style.transform = `translateX(${-slideWidth * index}px)`;
//   isAnimating = false;
// });




// const slides = document.querySelectorAll('.slide');
// const nextBtn = document.querySelector('.next');
// const prevBtn = document.querySelector('.prev');

// let current = 0;

// function updateSlides() {
//   slides.forEach(slide => {
//     slide.classList.remove('active', 'prevs', 'nexts');
//   });

//   slides[current].classList.add('active');
//   slides[(current - 1 + slides.length) % slides.length].classList.add('prevs');
//   slides[(current + 1) % slides.length].classList.add('nexts');
// }

// function nextSlide() {
//   current = (current + 1) % slides.length;
//   updateSlides();
// }

// function prevSlide() {
//   current = (current - 1 + slides.length) % slides.length;
//   updateSlides();
// }

// nextBtn.addEventListener('click', nextSlide);
// prevBtn.addEventListener('click', prevSlide);

// // автопрокрутка
// setInterval(nextSlide, 4000);

// updateSlides();





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


// const cartList = document.getElementById("cart");

// // отримати кошик
// function getCart() {
//   return JSON.parse(localStorage.getItem("cart")) || [];
// }

// // зберегти кошик
// function saveCart(cart) {
//   localStorage.setItem("cart", JSON.stringify(cart));
// }

// // додати товар
// function addToCart(product) {
//   const cart = getCart();
//   const item = cart.find(el => el.id === product.id);

//   if (item) {
//     item.quantity++;
//   } else {
//     cart.push({ ...product, quantity: 1 });
//   }

//   saveCart(cart);
//   renderCart();
// }

// // відмалювати кошик
// function renderCart() {
//   cartList.innerHTML = "";

//   const cart = getCart();

//   cart.forEach(item => {
//     const li = document.createElement("li");
//     li.textContent = `${item.name} — ${item.quantity} шт. (${item.price * item.quantity} грн)`;

//     // 🔥 тут використовується insertAdjacentElement
//     cartList.insertAdjacentElement("beforeend", li);
//   });
// }

// // обробка кліків
// document.addEventListener("click", e => {
//   if (e.target.tagName === "a" && e.target.dataset.id) {
//     addToCart({
//       id: Number(e.target.dataset.id),
//       name: e.target.dataset.name,
//       price: Number(e.target.dataset.price)
//     });
//   }
// });

// // відновлення кошика
// renderCart();


// const cartEl = document.getElementById("cart");

// // --- localStorage ---
// function getCart() {
//   return JSON.parse(localStorage.getItem("cart")) || [];
// }

// function saveCart(cart) {
//   localStorage.setItem("cart", JSON.stringify(cart));
// }

// // --- додавання ---
// function addToCart(product) {
//   const cart = getCart();
//   const item = cart.find(el => el.id === product.id);

//   if (item) {
//     item.quantity++;
//   } else {
//     cart.push({ ...product, quantity: 1 });
//   }

//   saveCart(cart);
//   renderCart();
// }

// // --- рендер кошика ---
// function renderCart() {
//   cartEl.innerHTML = "";

//   const cart = getCart();

//   cart.forEach(item => {
//     const li = document.createElement("li");
//     li.classList.add("cart-item");

//     // 🖼 фото
//     const img = document.createElement("img");
//     img.src = item.img;
//     img.alt = item.name;
//     img.classList.add("cart-img");

//     // 📄 текст
//     const info = document.createElement("div");
//     info.classList.add("cart-info");
//     info.textContent = `${item.name} × ${item.quantity} — ${item.price * item.quantity} грн`;

//     li.insertAdjacentElement("beforeend", img);
//     li.insertAdjacentElement("beforeend", info);

//     cartEl.insertAdjacentElement("beforeend", li);
//   });
// }

// // --- обробка кліку ---
// document.addEventListener("click", e => {
//   if (e.target.tagName === "A" && e.target.dataset.id) {
//     e.preventDefault();

//     const card = e.target.closest(".hover");
//     const imgSrc = card.querySelector("img").src;

//     addToCart({
//       id: Number(e.target.dataset.id),
//       name: e.target.dataset.name,
//       price: Number(e.target.dataset.price),
//       img: imgSrc
//     });
//   }
// });

// // --- відновлення ---
// renderCart();



const cartModal = document.getElementById("cart-modal");
const cartEl = document.getElementById("cart");

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product) {
  const cart = getCart();
  const item = cart.find(el => el.id === product.id);

  if (item) {
    item.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  renderCart();
}

function removeItem(id) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== id);
  saveCart(cart);
  renderCart();
}

function clearCart() {
  localStorage.removeItem("cart");
  renderCart();
}

function renderCart() {
  cartEl.innerHTML = "";
  const cart = getCart();

  if (!cart.length) {
    cartEl.textContent = "Кошик порожній";
    cartEl.style.fontSize = '15px'
    return;
  }

  cart.forEach(item => {
    const li = document.createElement("li");
    li.classList.add("cart-item");

    const img = document.createElement("img");
    img.src = item.img;
    img.className = "cart-img";

    const text = document.createElement("span");
    text.textContent = `${item.name} × ${item.quantity}`;
    text.style.fontSize = '10px'

    const remove = document.createElement("span");
    remove.textContent = "X";
    remove.className = "cart-remove";
    remove.style.fontSize = '10px'
    remove.onclick = () => removeItem(item.id);

    li.insertAdjacentElement("beforeend", img);
    li.insertAdjacentElement("beforeend", text);
    li.insertAdjacentElement("beforeend", remove);

    cartEl.insertAdjacentElement("beforeend", li);
  });
}

document.getElementById("cart-button").onclick = () => {
  cartModal.classList.remove("hidden");
  renderCart();
};

document.getElementById("close-cart").onclick = () => {
  cartModal.classList.add("hidden");
};

document.getElementById("clear-cart").onclick = clearCart;

document.addEventListener("click", e => {
  if (e.target.tagName === "A" && e.target.dataset.id) {
    e.preventDefault();

    const card = e.target.closest(".hover");
    const img = card.querySelector("img").src;

    addToCart({
      id: Number(e.target.dataset.id),
      name: e.target.dataset.name,
      price: Number(e.target.dataset.price),
      img
    });
  }
});

renderCart();
