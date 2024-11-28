
document.querySelector('.img').addEventListener('click', function () {
    const menu = document.querySelector('.dropdown-menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block'; 
    } else {
      menu.style.display = 'none';
    }
  });
   


const track = document.querySelector('.carousel-track');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const images = document.querySelectorAll('.carousel-image');

let currentIndex = 0;

function updateCarousel() {
    const width = images[0].clientWidth;
    track.style.transform = `translateX(-${currentIndex * width}px)`;
}


nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; 
    updateCarousel();
});


prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
    updateCarousel();
});


window.addEventListener('resize', updateCarousel);

// jqwwd
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.querySelector('.close');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
const closeButton = document.querySelector('.btn-item'); 
const formContainer = document.querySelector('.modal'); 

closeButton.addEventListener('click', () => {
  formContainer.style.display = 'none';
});


const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');


menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    menuButton.innerHTML = mobileMenu.classList.contains('open') ? '✖' : '☰';
});

const searchIcon = document.querySelector('#searchButton');
const inputSearch = document.querySelector('#inputSearch')
searchIcon.addEventListener('click', () => {
    inputSearch.classList.toggle('get');
    searchIcon.innerHTML = inputSearch.classList.contains('get') ? '✖' : '<img src="./img/search.svg" alt="">';
});

   const rf = document.createElement('div')
   rf.innerHTML = `
   <div class='w-[345px] h-[45px] m-auto flex'>
    <input type="search" placeholder='Начните писать' class='[345px] h-[45px] bg-[#F0F0F0] m-auto pl-[18px] pr-[75px] border-none rounded-l-[5px] outline-none'>
    <button class='w-[57px] h-[45px] bg-[#F7D05E] flex justify-center items-center m-auto rounded-r-[5px]'>
    <img src='./img/df.svg'>
    </button>
    </div>
   `;
   inputSearch.appendChild(rf)

const data = [
    {
        info1: 'Главная',
        info2: 'Как купить',
        info3: 'Доставка',
        info4: 'О компании',
        info5: 'Мы в instagram',
        info6: 'Акции',
        img: './img/Vector (15).svg',
        img1: './img/Vector (16).svg',
        info7: 'г. Москва, Электролитный проезд 3Б стр 6',
        info8: '+7 916 361-30-00',
    }
]

data.forEach((item) => {
    const div = document.createElement('div')
    div.innerHTML = `
    <div class='w-[375px] m-auto text-center leading-[30px] text-[#33394F6B]'>
    <a href=''><h1 class='hover:text-[black] text-[22px] font-normal font-sans cursor-pointer'>${item.info1}</h1></a>
    <a href='./pages/как купит/kakKupit.html'><h1 class='hover:text-[black] text-[22px] font-normal font-sans cursor-pointer'>${item.info2}</h1></a>
    <a href='./pages/Доставка/dostavka.html'><h1 class='hover:text-[black] text-[22px] font-normal font-sans cursor-pointer'>${item.info3}</h1></a>
    <h1 class='hover:text-[black] text-[22px] font-normal font-sans cursor-pointer'>${item.info4}</h1>
    <h1 class='hover:text-[black] text-[22px] font-normal font-sans cursor-pointer'>${item.info5}</h1>
    <h1 class='hover:text-[black] text-[22px] font-normal font-sans cursor-pointer'>${item.info6}</h1>
    <div class='flex w-[260px] justify-center items-center m-auto mt-[30px] text-[black] text-[18px] font-normal font-sans gap-[10px]'>
    <img src='${item.img}'>
    <h1 class='cursor-pointer'>${item.info7}</h1>
    </div>
     <div class='flex w-[200px] justify-center items-center m-auto mt-[10px] gap-[10px] text-[black] text-[18px] font-normal font-sans cursor-pointer'>
    <img src='${item.img1}'>
    <h1>${item.info8}</h1>
    </div>
    </div>
    `
mobileMenu.appendChild(div)
})

const div2 = document.querySelector('.div2')

const infoBlock = [
  {
    img: './img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
    img2: './img/vnalichi.svg',
    text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
    text2: '349 ₽/шт',
    text3: 'купить в 1 клик',
  },
  {
    img: './img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
    img2: './img/vnalichi.svg',
    text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
    text2: '349 ₽/шт',
    text3: 'купить в 1 клик',
  },
  {
    img: './img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
    img2: './img/vnalichi.svg',
    text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
    text2: '349 ₽/шт',
    text3: 'купить в 1 клик',
  },
  {
    img: './img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
    img2: './img/vnalichi.svg',
    text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
    text2: '349 ₽/шт',
    text3: 'купить в 1 клик',
  }
]

infoBlock.forEach((info) => {
  const element = document.createElement('div')
  element.innerHTML = `
  <div class='w-[171px] h-[310px] m-auto mt-[25px]'>
  <img src='${info.img}'>
  <img src='${info.img2}' class='m-auto mt-[-10px]'>
  <h1 class='font-bold text-[13px] text-center  mt-[10px] w-[156px]'>${info.text1}</h1>
  <h1 class='font-bold text-[16px] text-center mt-[10px]'>${info.text2}</h1>
  <button class=' mt-[15px] w-[140px] h-[34px] ml-[17px] bg-[#F7D05E] rounded-[94px] text-white'>${info.text3}</button>
  </div>
  `;
  div2.appendChild(element)
})