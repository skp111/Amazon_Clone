// // Scroll-lock manager
// const openModals = new Set();

// function lockScroll(id) {
//   openModals.add(id);
//   document.documentElement.style.overflow = 'hidden';
//   document.body.style.overflow = 'hidden';
// }

// function unlockScroll(id) {
//   openModals.delete(id);
//   if (openModals.size === 0) {
//     document.documentElement.style.overflow = '';
//     document.body.style.overflow = '';
//   }
// }


let overlay = document.querySelector('.overlay')
let overlay2 = document.querySelector('.overlay2')
let two = document.querySelector('.nav1 .two')
let address = document.querySelector('.address')
let select = document.querySelector('.nav1 .three Select')
let offcanvas = document.querySelector('.offcanvas')
let nav2One = document.querySelector('.nav2 .one')
let closeAddress = document.querySelector('#close-address')
two.addEventListener('click', () => {
  closeAddress.style.border = '2px solid gray'
  overlay2.style.display = overlay2.style.display === 'block' ? 'none' : 'block'
  address.style.display = address.style.display === 'block' ? 'none' : 'block'
  document.body.style.overflow = overlay2.style.display === 'block' ? 'hidden' : 'auto';
})

closeAddress.addEventListener('click', () => {
  overlay2.style.display = 'none'
  address.style.display = 'none'
  document.body.style.overflow = 'auto';
})
address.addEventListener('click', (event) => {
  if (!closeAddress.contains(event.target))
    closeAddress.style.border = 'none'
})
document.addEventListener('click', (event) => {
  if (!two.contains(event.target) && !address.contains(event.target) && !select.contains(event.target) && !nav2One.contains(event.target) && !offcanvas.contains(event.target)) {
    overlay.style.display = 'none'
    address.style.display = 'none'
    overlay2.style.display = 'none'
    closeAddress.style.display = 'none'
    offcanvas.style.transform = 'translateX(-100%)'
    closeOffcanvas.style.transform = 'translateX(-105%)';
    document.body.style.overflow = 'auto';
  }
})


let three = document.querySelector('.nav1 .three')
let input = document.querySelector('#input')
input.addEventListener('focus', () => {
  three.style.border = '3px solid rgb(207, 121, 71)'
})
input.addEventListener('blur', () => {
  three.style.border = 'none'
})

const resizeSelect = () => {
  select.style.width = `${(select.value.length + 4)}ch`
  overlay.style.display = 'block'
  input.focus()
}
select.addEventListener('change', resizeSelect)

let four = document.querySelector('.nav1 .four')
let language = document.querySelector('.language')

// Function to show panel
function showLanguage() {
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
  language.style.display = 'block';
}

// Function to hide panel
function hideLanguage() {
  overlay.style.display = 'none';
  document.body.style.overflow = 'auto';
  language.style.display = 'none';
}

// Show when hovering four OR language
four.addEventListener('mouseenter', showLanguage);
language.addEventListener('mouseenter', showLanguage);

// Hide only when mouse leaves BOTH
four.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!four.matches(':hover') && !language.matches(':hover')) {
      hideLanguage();
    }
  }, 100);
});

language.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!four.matches(':hover') && !language.matches(':hover')) {
      hideLanguage();
    }
  }, 100);
});


let accountList = document.querySelector('.account-list')
let five = document.querySelector('.nav1 .five')
function showAccountList() {
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
  accountList.style.display = 'block';
}

// Function to hide panel
function hideAccountList() {
  overlay.style.display = 'none';
  document.body.style.overflow = 'auto';
  accountList.style.display = 'none';
}

// Show when hovering five OR accountList
five.addEventListener('mouseenter', showAccountList);
accountList.addEventListener('mouseenter', showAccountList);

// Hide only when mouse leaves BOTH
five.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!five.matches(':hover') && !accountList.matches(':hover')) {
      hideAccountList();
    }
  }, 100);
});

accountList.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!five.matches(':hover') && !accountList.matches(':hover')) {
      hideAccountList();
    }
  }, 100);
});

let closeOffcanvas = document.querySelector('#close-offcanvas')
nav2One.addEventListener('click', () => {
  offcanvas.style.transform = 'translateX(0)'
  overlay2.style.display = 'block'
  document.body.style.overflow = 'hidden'
  closeOffcanvas.style.transform = 'translateX(33.5vw)'
  closeOffcanvas.style.border = '2px solid black';
  closeOffcanvas.style.outline = '2px solid white';
})

offcanvas.addEventListener('click', () => {
  closeOffcanvas.style.border = 'none'
  closeOffcanvas.style.outline = 'none'
})

closeOffcanvas.addEventListener('click', () => {
  offcanvas.style.transform = 'translateX(-100%)'
  closeOffcanvas.style.transform = 'translateX(-105%)'
  document.body.style.overflow = 'auto'
})

let seeShop = document.querySelector('.see-shop')
let seeText = document.querySelector('.see-shop span')
let shop = document.querySelector('.shop')
let seeIcon = document.querySelector('.see-shop i')
seeShop.addEventListener('click', () => {
  shop.classList.toggle('open')
  if (shop.classList.contains('open')) {
    seeText.innerText = 'see less';
    seeIcon.className = 'bx bx-chevron-up';
  } else {
    seeText.innerText = 'see all';
    seeIcon.className = 'bx bx-chevron-down';
  }
})

let seeProgram = document.querySelector('.see-program')
let seetext = document.querySelector('.see-program span')
let program = document.querySelector('.program')
let seeicon = document.querySelector('.see-program i')
seeProgram.addEventListener('click', () => {
  program.classList.toggle('open')
  if (program.classList.contains('open')) {
    seetext.innerText = 'see less';
    seeicon.className = 'bx bx-chevron-up';
  } else {
    seetext.innerText = 'see all';
    seeicon.className = 'bx bx-chevron-down';
  }
})

let fresh = document.querySelector('.fresh')
function showFresh() {
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
  fresh.style.display = 'block';
}

// Function to hide panel
function hideFresh() {
  overlay.style.display = 'none';
  document.body.style.overflow = 'auto';
  fresh.style.display = 'none';
}
let nav2Two = document.querySelector('.nav2 .two');
nav2Two.addEventListener('mouseenter', showFresh);
fresh.addEventListener('mouseenter', showFresh);

// Hide only when mouse leaves BOTH
nav2Two.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!nav2Two.matches(':hover') && !fresh.matches(':hover')) {
      hideFresh();
    }
  }, 100);
});

fresh.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!nav2Two.matches(':hover') && !fresh.matches(':hover')) {
      hideFresh();
    }
  }, 100);
});

let prime = document.querySelector('.prime')
function showPrime() {
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
  prime.style.display = 'block';
}

// Function to hide panel
function hidePrime() {
  overlay.style.display = 'none';
  document.body.style.overflow = 'auto';
  prime.style.display = 'none';
}
let nav2Eight = document.querySelector('.nav2 .eight');
nav2Eight.addEventListener('mouseenter', showPrime);
prime.addEventListener('mouseenter', showPrime);

// Hide only when mouse leaves BOTH
nav2Eight.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!nav2Eight.matches(':hover') && !prime.matches(':hover')) {
      hidePrime();
    }
  }, 100);
});

prime.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!nav2Eight.matches(':hover') && !prime.matches(':hover')) {
      hidePrime();
    }
  }, 100);
});


const carousel = document.querySelector('.carousel')
const slidesContainer = document.querySelector('.slides')
const slides = document.querySelectorAll('.slide')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

let currentIndex = 0


// Move to slide
function updateSlider() {
  const slideWidth = carousel.clientWidth
  slidesContainer.style.transition = currentIndex === 0 ? 'none' : 'transform 0.5s ease-in-out'
  slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`
}

const goToNextSlide = () => {
  currentIndex = (currentIndex + 1) % slides.length;  //0,1,2,3,0,1,...
  updateSlider();
}

const goToPrevSlide = () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; //3,2,1,0,3,2,...
  updateSlider();
}
// Add click events
next.addEventListener('click', goToNextSlide)
prev.addEventListener('click', goToPrevSlide)

// Auto Slide
let autoSlide = setInterval(goToNextSlide, 4000); // Change slide every 4 seconds

// Pause on hover
carousel.addEventListener('mouseover', () => {
  clearInterval(autoSlide);
});

//continue when not in hover
carousel.addEventListener('mouseout', () => {
  autoSlide = setInterval(goToNextSlide, 4000);
});

// Handle resizing
window.addEventListener('resize', updateSlider);

let sponsMid = document.querySelector('.spons-mid')
let sponsore = document.querySelector('.sponsore')
let sponsored = document.querySelector('.sponsored')
let closeSponsore = document.querySelector('#close-sponsore')
sponsore.addEventListener('click', () => {
  closeSponsore.style.border = '2px solid rgb(136, 133, 133)'
  sponsMid.style.display = 'block';
  document.documentElement.style.overflow = 'hidden';
})


sponsMid.addEventListener('click', (e) => {
  if (e.target === sponsMid) {
    sponsMid.style.display = 'none';
    document.documentElement.style.overflow = 'auto';
  }
})
closeSponsore.addEventListener('click', () => {
  sponsMid.style.display = 'none';
  document.documentElement.style.overflow = 'auto';
})

sponsored.addEventListener('click', () => {
  closeSponsore.style.border = 'none'
})

let cancelSponsore = document.querySelector('#cancel-sponsore')
cancelSponsore.addEventListener('click', (event) => {
  event.preventDefault();
  sponsMid.style.display = 'none';
  document.documentElement.style.overflow = 'auto';
})

const messageSponsore = document.querySelector('#message-sponsore'); // textarea/input
const charSponsore    = document.querySelector('#char-sponsore');
const submitSponsore  = document.querySelector('#submit-sponsore');
const tellUs = document.querySelector('#tell-us');

const AllCheckboxes = Array.from(document.querySelectorAll('.checkbox'));
const other = document.querySelector('#other');    // the "Other" checkbox
// non-other checkboxes: exclude the other1 element
const NonOtherCheckboxes = AllCheckboxes.filter(cb => cb !== other);

// config
const Max_Chars = 5000;

// helper: decide whether submit should be enabled
function UpdateSubmitState() {
  const otherChecked = other.checked;
  // at least one non-other checked?
  const anyNonOtherChecked = NonOtherCheckboxes.some(cb => cb.checked);
  const messageHasText = messageSponsore.value.trim().length > 0;

  // Rule:
  // if other is checked => message must be present
  // if other is NOT checked => at least one non-other checkbox must be checked
  const enabled = otherChecked ? messageHasText : anyNonOtherChecked;

  submitSponsore.disabled = !enabled;
}

// char counter + enforce max length
function UpdateCharCounterAndTrim() {
  if (messageSponsore.value.length > Max_Chars) {
    messageSponsore.value = messageSponsore.value.slice(0, Max_Chars);
  }
  const remaining = Max_Chars - messageSponsore.value.length;
  charSponsore.textContent = `${remaining} characters left`;
}

// --- event listeners ---

// 1) non-other checkboxes: they enable submit only when other is not checked
NonOtherCheckboxes.forEach(cb => {
  cb.addEventListener('change', UpdateSubmitState);
});

// 2) other checkbox: toggles required text and affects submit rule
other.addEventListener('change', () => {
  if (other.checked) {
    tellUs.textContent = 'Please tell us why (required)';
    messageSponsore.required = true;
  } else {
    tellUs.textContent = 'Please tell us why (optional)';
    messageSponsore.required = false;
  }
  // always re-evaluate submit state when other toggles
  UpdateSubmitState();
});

// 3) message input: update counter and re-evaluate submit
messageSponsore.addEventListener('input', () => {
  UpdateCharCounterAndTrim();
  UpdateSubmitState();
});

// 4) safe submit click handler (demo)
// prevents submission if logic says disabled (double-check)
submitSponsore.addEventListener('click', (e) => {
  
  // demo behaviour: prevent real submit and clear form
  e.preventDefault();
  alert('Form Submitted');
  // clear form or reload as you need:
  // document.querySelector('form#yourFormId').reset();
  location.reload();
});

// initialize UI on load
UpdateCharCounterAndTrim();
UpdateSubmitState();


const slider2 = document.querySelector('.carousel-2-slider');
const carousel2Box = document.querySelector('.carousel-2-box'); // carousel-2-box
const prevBtn2 = document.querySelector('.prev-2');
const nextBtn2 = document.querySelector('.next-2');
const scrollBar2 = document.querySelector('.carousel-2-scrollbar');
const thumb2 = document.querySelector('.carousel-2-scrollbar-thumb');
const maxIndex2 = 4; // total pages

for(let i=1;i<=25;i++){
    let img = document.createElement('img');
    img.src = `assets/carousel-2/img-${i}.png`;
    img.alt = `img-${i}`;
    slider2.appendChild(img);
}


let index2 = 0; // start from 0
function updateThumb2() {
  // thumb should move proportionally to index
  let movePercent = index2 * 100; 
  thumb2.style.transform = `translateX(${movePercent}%)`;
}

const scrollAmount2 = slider2.clientWidth;  // one full "page" width

// update buttons state
function updateButtons2() {
  prevBtn2.disabled = index2 === 0;
  nextBtn2.disabled = index2 === maxIndex2;

  prevBtn2.style.opacity = prevBtn2.disabled ? '0.5' : '1';
  nextBtn2.style.opacity = nextBtn2.disabled ? '0.5' : '1';

  scrollBar2.style.opacity = '1';

  updateThumb2();

}

nextBtn2.addEventListener('click', () => {
  if (index2 < maxIndex2) {
    index2++;
    slider2.style.transform = `translateX(-${index2 * scrollAmount2}px)`;
    updateButtons2();
  }
});

prevBtn2.addEventListener('click', () => {
  if (index2 > 0) {
    index2--;
    slider2.style.transform = `translateX(-${index2 * scrollAmount2}px)`;
    updateButtons2();
  }
});

// initialize
carousel2Box.addEventListener('mouseover', () => {
  updateButtons2();
})
carousel2Box.addEventListener('mouseout', () => {
  prevBtn2.style.opacity = '0';
  nextBtn2.style.opacity = '0';
  scrollBar2.style.opacity = '0';
})


const slider3 = document.querySelector('.carousel-3-slider');
const carousel3Box = document.querySelector('.carousel-3-box'); // carousel-4-box
const prevBtn3 = document.querySelector('.prev-3');
const nextBtn3 = document.querySelector('.next-3');
const scrollBar3 = document.querySelector('.carousel-3-scrollbar');
const thumb3 = document.querySelector('.carousel-3-scrollbar-thumb');
const maxIndex3 = 4; // total pages

for(let i=1;i<=25;i++){
    let img = document.createElement('img');
    img.src = `assets/carousel-3/img-${i}.png`;
    img.alt = `img-${i}`;
    slider3.appendChild(img);
}


let index3 = 0; // start from 0
function updateThumb3() {
  // thumb should move proportionally to index
  let movePercent = index3 * 100; 
  thumb3.style.transform = `translateX(${movePercent}%)`;
}

const scrollAmount3 = slider3.clientWidth;  // one full "page" width

// update buttons state
function updateButtons3() {
  prevBtn3.disabled = index3 === 0;
  nextBtn3.disabled = index3 === maxIndex3;

  prevBtn3.style.opacity = prevBtn3.disabled ? '0.5' : '1';
  nextBtn3.style.opacity = nextBtn3.disabled ? '0.5' : '1';

  scrollBar3.style.opacity = '1';

  updateThumb3();

}

nextBtn3.addEventListener('click', () => {
  if (index3 < maxIndex3) {
    index3++;
    slider3.style.transform = `translateX(-${index3 * scrollAmount3}px)`;
    updateButtons3();
  }
});

prevBtn3.addEventListener('click', () => {
  if (index3 > 0) {
    index3--;
    slider3.style.transform = `translateX(-${index3 * scrollAmount3}px)`;
    updateButtons3();
  }
});

// initialize
carousel3Box.addEventListener('mouseover', () => {
  updateButtons3();
})
carousel3Box.addEventListener('mouseout', () => {
  prevBtn3.style.opacity = '0';
  nextBtn3.style.opacity = '0';
  scrollBar3.style.opacity = '0';
})


const slider4 = document.querySelector('.carousel-4-slider');
const carousel4Box = document.querySelector('.carousel-4-box'); // carousel-4-box
const prevBtn4 = document.querySelector('.prev-4');
const nextBtn4 = document.querySelector('.next-4');
const scrollBar4 = document.querySelector('.carousel-4-scrollbar');
const thumb4 = document.querySelector('.carousel-4-scrollbar-thumb');
const maxIndex4 = 3; // total pages

for(let i=1;i<=20;i++){
    let img = document.createElement('img');
    img.src = `assets/carousel-4/img-${i}.png`;
    img.alt = `img-${i}`;
    slider4.appendChild(img);
}


let index4 = 0; // start from 0
function updateThumb4() {
  // thumb should move proportionally to index
  let movePercent = index4 * 100; 
  thumb4.style.transform = `translateX(${movePercent}%)`;
}

const scrollAmount4 = slider4.clientWidth;  // one full "page" width

// update buttons state
function updateButtons4() {
  prevBtn4.disabled = index4 === 0;
  nextBtn4.disabled = index4 === maxIndex4;

  prevBtn4.style.opacity = prevBtn4.disabled ? '0.5' : '1';
  nextBtn4.style.opacity = nextBtn4.disabled ? '0.5' : '1';

  scrollBar4.style.opacity = '1';

  updateThumb4();

}

nextBtn4.addEventListener('click', () => {
  if (index4 < maxIndex4) {
    index4++;
    slider4.style.transform = `translateX(-${index4 * scrollAmount4}px)`;
    updateButtons4();
  }
});

prevBtn4.addEventListener('click', () => {
  if (index4 > 0) {
    index4--;
    slider4.style.transform = `translateX(-${index4 * scrollAmount4}px)`;
    updateButtons4();
  }
});

// initialize
carousel4Box.addEventListener('mouseover', () => {
  updateButtons4();
})
carousel4Box.addEventListener('mouseout', () => {
  prevBtn4.style.opacity = '0';
  nextBtn4.style.opacity = '0';
  scrollBar4.style.opacity = '0';
})


const slider5 = document.querySelector('.carousel-5-slider');
const carousel5Box = document.querySelector('.carousel-5-box'); // carousel-4-box
const prevBtn5 = document.querySelector('.prev-5');
const nextBtn5 = document.querySelector('.next-5');
const scrollBar5 = document.querySelector('.carousel-5-scrollbar');
const thumb5 = document.querySelector('.carousel-5-scrollbar-thumb');
const maxIndex5 = 6; // total pages

for(let i=1;i<=27;i++){
    let img = document.createElement('img');
    img.src = `assets/carousel-5/img-${i}.png`;
    img.alt = `img-${i}`;
    slider5.appendChild(img);
}


let index5 = 0; // start from 0
function updateThumb5() {
  // thumb should move proportionally to index
  let movePercent = index5 * 100; 
  thumb5.style.transform = `translateX(${movePercent}%)`;
}

const scrollAmount5 = slider5.clientWidth;  // one full "page" width

// update buttons state
function updateButtons5() {
  prevBtn5.disabled = index5 === 0;
  nextBtn5.disabled = index5 === maxIndex5;

  prevBtn5.style.opacity = prevBtn5.disabled ? '0.5' : '1';
  nextBtn5.style.opacity = nextBtn5.disabled ? '0.5' : '1';

  scrollBar5.style.opacity = '1';

  updateThumb5();

}

nextBtn5.addEventListener('click', () => {
  if (index5 < maxIndex5) {
    index5++;
    slider5.style.transform = `translateX(-${index5 * scrollAmount5}px)`;
    updateButtons5();
  }
});

prevBtn5.addEventListener('click', () => {
  if (index5 > 0) {
    index5--;
    slider5.style.transform = `translateX(-${index5 * scrollAmount5}px)`;
    updateButtons5();
  }
});

// initialize
carousel5Box.addEventListener('mouseover', () => {
  updateButtons5();
})
carousel5Box.addEventListener('mouseout', () => {
  prevBtn5.style.opacity = '0';
  nextBtn5.style.opacity = '0';
  scrollBar5.style.opacity = '0';
})


let sponsMid1 = document.querySelector('.spons-mid1')
let sponsore1 = document.querySelector('.sponsore1')
let sponsored1 = document.querySelector('.sponsored1')
let closeSponsore1 = document.querySelector('#close-sponsore1')
sponsore1.addEventListener('click', () => {
  closeSponsore1.style.border = '2px solid rgb(136, 133, 133)'
  sponsMid1.style.display = 'block';
  document.documentElement.style.overflow = 'hidden';
})


sponsMid1.addEventListener('click', (e) => {
  if (e.target === sponsMid1) {
    sponsMid1.style.display = 'none';
    document.documentElement.style.overflow = 'auto';
  }
})
closeSponsore1.addEventListener('click', () => {
  sponsMid1.style.display = 'none';
  document.documentElement.style.overflow = 'auto';
})

sponsored1.addEventListener('click', () => {
  closeSponsore1.style.border = 'none'
})

let cancelSponsore1 = document.querySelector('#cancel-sponsore1')
cancelSponsore1.addEventListener('click', (event) => {
  event.preventDefault();
  sponsMid1.style.display = 'none';
  document.documentElement.style.overflow = 'auto';
})

// elements
const messageSponsore1 = document.querySelector('#message-sponsore1'); // textarea/input
const charSponsore1    = document.querySelector('#char-sponsore1');
const submitSponsore1  = document.querySelector('#submit-sponsore1');
const tellUs1 = document.querySelector('#tell-us1');

const allCheckboxes = Array.from(document.querySelectorAll('.checkbox1'));
const other1 = document.querySelector('#other1');    // the "Other" checkbox
// non-other checkboxes: exclude the other1 element
const nonOtherCheckboxes = allCheckboxes.filter(cb => cb !== other1);

// config
const MAX_CHARS = 5000;

// helper: decide whether submit should be enabled
function updateSubmitState() {
  const otherChecked = other1.checked;
  // at least one non-other checked?
  const anyNonOtherChecked = nonOtherCheckboxes.some(cb => cb.checked);
  const messageHasText = messageSponsore1.value.trim().length > 0;

  // Rule:
  // if other is checked => message must be present
  // if other is NOT checked => at least one non-other checkbox must be checked
  const enabled = otherChecked ? messageHasText : anyNonOtherChecked;

  submitSponsore1.disabled = !enabled;
}

// char counter + enforce max length
function updateCharCounterAndTrim() {
  if (messageSponsore1.value.length > MAX_CHARS) {
    messageSponsore1.value = messageSponsore1.value.slice(0, MAX_CHARS);
  }
  const remaining = MAX_CHARS - messageSponsore1.value.length;
  charSponsore1.textContent = `${remaining} characters left`;
}

// --- event listeners ---

// 1) non-other checkboxes: they enable submit only when other is not checked
nonOtherCheckboxes.forEach(cb => {
  cb.addEventListener('change', updateSubmitState);
});

// 2) other checkbox: toggles required text and affects submit rule
other1.addEventListener('change', () => {
  if (other1.checked) {
    tellUs1.textContent = 'Please tell us why (required)';
    messageSponsore1.required = true;
  } else {
    tellUs1.textContent = 'Please tell us why (optional)';
    messageSponsore1.required = false;
  }
  // always re-evaluate submit state when other toggles
  updateSubmitState();
});

// 3) message input: update counter and re-evaluate submit
messageSponsore1.addEventListener('input', () => {
  updateCharCounterAndTrim();
  updateSubmitState();
});

// 4) safe submit click handler (demo)
// prevents submission if logic says disabled (double-check)
submitSponsore1.addEventListener('click', (e) => {
  
  // demo behaviour: prevent real submit and clear form
  e.preventDefault();
  alert('Form Submitted');
  // clear form or reload as you need:
  // document.querySelector('form#yourFormId').reset();
  location.reload();
});

// initialize UI on load
updateCharCounterAndTrim();
updateSubmitState();


const slider6 = document.querySelector('.carousel-6-slider');
const carousel6Box = document.querySelector('.carousel-6-box'); // carousel-4-box
const prevBtn6 = document.querySelector('.prev-6');
const nextBtn6 = document.querySelector('.next-6');
const scrollBar6 = document.querySelector('.carousel-6-scrollbar');
const thumb6 = document.querySelector('.carousel-6-scrollbar-thumb');
const maxIndex6 = 4; // total pages

for(let i=1;i<=25;i++){
    let img = document.createElement('img');
    img.src = `assets/carousel-6/img-${i}.png`;
    img.alt = `img-${i}`;
    slider6.appendChild(img);
}


let index6 = 0; // start from 0
function updateThumb6() {
  // thumb should move proportionally to index
  let movePercent = index6 * 100; 
  thumb6.style.transform = `translateX(${movePercent}%)`;
}

const scrollAmount6 = slider6.clientWidth;  // one full "page" width

// update buttons state
function updateButtons6() {
  prevBtn6.disabled = index6 === 0;
  nextBtn6.disabled = index6 === maxIndex6;

  prevBtn6.style.opacity = prevBtn6.disabled ? '0.5' : '1';
  nextBtn6.style.opacity = nextBtn6.disabled ? '0.5' : '1';

  scrollBar6.style.opacity = '1';

  updateThumb6();

}

nextBtn6.addEventListener('click', () => {
  if (index6 < maxIndex6) {
    index6++;
    slider6.style.transform = `translateX(-${index6 * scrollAmount6}px)`;
    updateButtons6();
  }
});

prevBtn6.addEventListener('click', () => {
  if (index6 > 0) {
    index6--;
    slider6.style.transform = `translateX(-${index6 * scrollAmount6}px)`;
    updateButtons6();
  }
});

// initialize
carousel6Box.addEventListener('mouseover', () => {
  updateButtons6();
})
carousel6Box.addEventListener('mouseout', () => {
  prevBtn6.style.opacity = '0';
  nextBtn6.style.opacity = '0';
  scrollBar6.style.opacity = '0';
})


const carouselInGrid = document.querySelector('.carousel-in-grid');
const prevBtnCg1 = document.querySelector('.prev-cg1');
const nextBtnCg1 = document.querySelector('.next-cg1');
let value = 0
let scroll = carouselInGrid.clientWidth

// Scroll right
nextBtnCg1.addEventListener('click', () => {
  value = (value + 1) % 6
  carouselInGrid.style.transform = `translateX(-${value * scroll}px)`
});

// Scroll left
prevBtnCg1.addEventListener('click', () => {
  value = (value - 1 + 6) % 6
  carouselInGrid.style.transform = `translateX(-${value * scroll}px)`
});


const carouselInGrid2 = document.querySelector('.carousel-in-grid2');
const prevBtnCg2 = document.querySelector('.prev-cg2');
const nextBtnCg2 = document.querySelector('.next-cg2');
let value2 = 0
let scroll2 = carouselInGrid2.clientWidth

// Scroll right
nextBtnCg2.addEventListener('click', () => {
  value2 = (value2 + 1) % 5
  carouselInGrid2.style.transform = `translateX(-${value2 * scroll2}px)`
});

// Scroll left
prevBtnCg2.addEventListener('click', () => {
  value2 = (value2 - 1 + 5) % 5
  carouselInGrid2.style.transform = `translateX(-${value2 * scroll2}px)`
});


const carouselInGrid3 = document.querySelector('.carousel-in-grid3');
const prevBtnCg3 = document.querySelector('.prev-cg3');
const nextBtnCg3 = document.querySelector('.next-cg3');
let value3 = 0
let scroll3 = carouselInGrid3.clientWidth

// Scroll right
nextBtnCg3.addEventListener('click', () => {
  value3 = (value3 + 1) % 6
  carouselInGrid3.style.transform = `translateX(-${value3 * scroll3}px)`
});

// Scroll left
prevBtnCg3.addEventListener('click', () => {
  value3 = (value3 - 1 + 6) % 6
  carouselInGrid3.style.transform = `translateX(-${value3 * scroll3}px)`
});

let lastCarouselContainer = document.querySelector('.last-carousel-container');
let lastCarouselSlide = document.querySelector('.last-carousel-slide');
let slidingPage = document.querySelector('.sliding-page');
let prevLC = document.querySelector('.prev-lc');
let nextLC = document.querySelector('.next-lc');
let startOver  = document.querySelector('#start-over');
let pageNumber = document.querySelector('#page-no');

let indexLC = 0;

// A function to always calculate scroll distance dynamically
function getScrollLC() {
  // Get left padding from .last-carousel-slide
  const styles = window.getComputedStyle(lastCarouselContainer);
  const paddingLeft = parseFloat(styles.paddingLeft); // in px
  // Return page width + left padding
  return slidingPage.clientWidth + paddingLeft;
}

function updateCarousel(indexLC) {
  // Move the slide
  const scrollLC = getScrollLC();
  lastCarouselSlide.style.transform = `translateX(-${indexLC * scrollLC}px)`;
  // Toggle startOver button
  startOver.style.display = indexLC === 0 ? 'none' : 'inline-block';
  pageNumber.textContent = `Page ${indexLC + 1} of 9`;
}

nextLC.addEventListener('click', () => {
  indexLC = (indexLC + 1) % 9;
  updateCarousel(indexLC);
});

prevLC.addEventListener('click', () => {
  indexLC = (indexLC - 1 + 9) % 9;
  updateCarousel(indexLC);
});

startOver.addEventListener('click', () => {
  indexLC = 0;
  updateCarousel(indexLC);
});

window.addEventListener('resize', () => {
  updateCarousel(indexLC);
});

