//плавна поява
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  {
    threshold: 0.2
  }
);

document.querySelectorAll('.fade-up').forEach(el => {
  observer.observe(el);
});


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
document.querySelector('.home').addEventListener('click', () => {
  const target = document.querySelector('header');
  const headerHeight = 100

  const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

  document.documentElement.scrollTop = document.body.scrollTop = top;
});
document.querySelector('.services').addEventListener('click', () => {
  const target = document.querySelector('.servises');
  const headerHeight = 80

  const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

  document.documentElement.scrollTop = document.body.scrollTop = top;
});
document.querySelector('.about').addEventListener('click', () => {
  const target = document.querySelector('.abouts');
  const headerHeight = 100

  const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

  document.documentElement.scrollTop = document.body.scrollTop = top;
});
document.querySelector('.blog').addEventListener('click', () => {
  const target = document.querySelector('.blogs');
  const headerHeight = 250

  const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

  document.documentElement.scrollTop = document.body.scrollTop = top;
});
document.querySelector('.clients').addEventListener('click', () => {
  const target = document.querySelector('.google');
  const headerHeight = 100

  const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

  document.documentElement.scrollTop = document.body.scrollTop = top;
});
document.querySelector('.contact').addEventListener('click', () => {
  const target = document.querySelector('.get');
  const headerHeight = 100

  const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

  document.documentElement.scrollTop = document.body.scrollTop = top;
});
document.querySelector('.scroll').addEventListener('click', () => {
  const target = document.querySelector('.get');
  const headerHeight = 150

  const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

  document.documentElement.scrollTop = document.body.scrollTop = top;
});


//бургер меню
const dark = document.querySelector(".dark-bgc"),
  burger = document.querySelector(".burger"),
  menu = document.querySelector(".menu")
  fixed = document.querySelector(".fixed")

burger.addEventListener("click", function() {
  menu.style.left = "0";
  dark.style.display = "block"
})
function cancelBurger() {
  menu.style.left = "-100%";
  dark.style.display = "none"
}
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

const submit = document.querySelector('.submit');
const name = document.querySelector('.name');
const none = document.querySelector('.none');
const h1 = document.querySelector('.h1');
const not = document.querySelector('.not');
submit.addEventListener("click", e => {
  e.preventDefault();
  none.style.display = 'flex'
  h1.style.display = 'none'
  const value = document.querySelector('.yourname').value;
  name.textContent = value
  if (document.querySelector('.yourname').value.trim() === '') {
    not.style.display = 'none'
    name.textContent = 'you are not authorized'
  }
})


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

const filters = document.querySelectorAll('ul li');
const images = document.querySelectorAll('.workplaces img');
const allLi = document.querySelector('ul li.all');

allLi.classList.add('active');
images.forEach(img => img.style.display = 'block');

filters.forEach(li => {
  li.addEventListener('click', () => {

    filters.forEach(item => item.classList.remove('active'));

    li.classList.add('active');

    if (li.classList.contains('all')) {
      images.forEach(img => img.style.display = 'block');
      return;
    }

    const category = li.classList[1];

    images.forEach(img => {
      img.style.display = img.classList.contains(category)
        ? 'block'
        : 'none';
    });
  });
});



//read more
document.querySelectorAll('.toggle-block').forEach(block => {
  const btn = block.querySelector('.toggle-btn');
  const text = block.querySelector('.toggle-text');

  btn.addEventListener('click', () => {
    const isOpen = text.classList.toggle('is-open');

    btn.textContent = isOpen
      ? 'Hide'
      : 'Read more';
  });

});


// слайдер

const wrapper = document.querySelector('.slider-wrapper');
const track = document.querySelector('.slider-track');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let slidesPerView = 4;
let index = slidesPerView;
let slideWidth;
let autoInterval;

for (let i = 0; i < slidesPerView; i++) {
  const firstClone = slides[i].cloneNode(true);
  const lastClone = slides[slides.length - 1 - i].cloneNode(true);

  slider.appendChild(firstClone);
  slider.insertBefore(lastClone, slider.firstChild);
}

const allSlides = document.querySelectorAll('.slide');

function updateSliderPosition() {
  slideWidth = allSlides[0].offsetWidth;
  track.style.transition = 'none';
  track.style.transform = `translateX(-${slideWidth * index}px)`;
}

updateSliderPosition();
window.addEventListener('resize', updateSliderPosition);

function moveNext() {
  index++;
  track.style.transition = 'transform 0.6s ease';
  track.style.transform = `translateX(-${slideWidth * index}px)`;
}

function movePrev() {
  index--;
  track.style.transition = 'transform 0.6s ease';
  track.style.transform = `translateX(-${slideWidth * index}px)`;
}

track.addEventListener('transitionend', () => {

  if (index >= allSlides.length - slidesPerView) {
    track.style.transition = 'none';
    index = slidesPerView;
    track.style.transform = `translateX(-${slideWidth * index}px)`;
  }

  if (index < slidesPerView) {
    track.style.transition = 'none';
    index = allSlides.length - slidesPerView * 2;
    track.style.transform = `translateX(-${slideWidth * index}px)`;
  }

});

nextBtn.addEventListener('click', () => {
  stopAuto();
  moveNext();
  startAuto();
});

prevBtn.addEventListener('click', () => {
  stopAuto();
  movePrev();
  startAuto();
});

function startAuto() {
  autoInterval = setInterval(moveNext, 5000);
}

function stopAuto() {
  clearInterval(autoInterval);
}

wrapper.addEventListener('mouseenter', stopAuto);
wrapper.addEventListener('mouseleave', startAuto);

startAuto();





//кошик
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

    // const price = 500 * `${item.quantity}`;

    li.insertAdjacentElement("beforeend", img);
    li.insertAdjacentElement("beforeend", text);
    li.insertAdjacentElement("beforeend", remove);
    // li.insertAdjacentElement("beforeend", price);

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


//підтвердження правильності вводу даних
const form = document.getElementById('contactForm');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popupText');
const cancelBtn = document.getElementById('cancel');
const acceptBtn = document.getElementById('accept');

let formData = {};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  formData = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    subject: form.subject.value.trim(),
    company: form.company.value.trim(),
    message: form.message.value.trim(),
  };

  popupText.innerHTML = `
    Name: ${formData.name}<br>
    Email: ${formData.email}<br>
    Subject: ${formData.subject}<br>
    Company: ${formData.company}<br>
    Message: ${formData.message}
  `;
  popupText.style.fontSize = '16rem'
  popupText.style.color = '#555555'

  popup.classList.remove('hidden');
});

cancelBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
});

acceptBtn.addEventListener('click', () => {
  localStorage.setItem('contactForm', JSON.stringify(formData));
  popup.classList.add('hidden');
  form.reset();
});

const savedData = localStorage.getItem('contactForm');

if (savedData) {
  const data = JSON.parse(savedData);

  form.name.value = data.name || '';
  form.email.value = data.email || '';
  form.subject.value = data.subject || '';
  form.company.value = data.company || '';
  form.message.value = data.message || '';
}


//слайдер з цитатами
const quotesSlider = document.getElementById('quotes-slider');
const quotes = document.querySelectorAll('.quote');
const radios = document.querySelectorAll('.controls input');

let current = 0;
let timerId = null;
let isPaused = false;
const delay = 4000;

// показ слайда
function showSlide(index) {
  if (index === current) return;

  const currentSlide = quotes[current];
  const nextSlide = quotes[index];

  currentSlide.classList.remove('active');
  currentSlide.classList.add('exit-left');

  nextSlide.classList.add('active');

  radios.forEach(r => r.checked = false);
  radios[index].checked = true;

  setTimeout(() => {
    currentSlide.classList.remove('exit-left');
  }, 600);

  current = index;
}

// автопрокрутка 
function autoSlide() {
  if (isPaused) return;

  const next = (current + 1) % quotes.length;
  showSlide(next);

  timerId = setTimeout(autoSlide, delay);
}

// пауза
function pause() {
  isPaused = true;
  clearTimeout(timerId);
}

function resume() {
  if (!isPaused) return;
  isPaused = false;
  autoSlide();
}

// radio-кнопки
radios.forEach((radio, index) => {
  radio.addEventListener('change', () => {
    pause();
    showSlide(index);
    resume();
  });
});

// hover
quotesSlider.addEventListener('mouseenter', pause);
quotesSlider.addEventListener('mouseleave', resume);

autoSlide();
