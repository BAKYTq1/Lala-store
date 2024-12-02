
document.querySelector('.img').addEventListener('click', function () {
  const menu = document.querySelector('.input');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block'; 
  } else {
    menu.style.display = 'none';
  }
});
document.querySelector('.img2').addEventListener('click', function () {
  const menu = document.querySelector('.input2');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block'; 
  } else {
    menu.style.display = 'none';
  }
});
document.querySelector('.img3').addEventListener('click', function () {
  const menu = document.querySelector('.input3');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block'; 
  } else {
    menu.style.display = 'none';
  }
});

document.querySelector('.img4').addEventListener('click', function () {
  const menu = document.querySelector('.input4');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block'; 
  } else {
    menu.style.display = 'none';
  }

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

const input = document.querySelector(".input")
const shmotki = [
  {
    text: "Начните писать",
    text2: "",
  }
]
shmotki.forEach((item) => {

document.querySelector('.img5').addEventListener('click', function () {
  const menu = document.querySelector('.input5');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block'; 
  } else {
    menu.style.display = 'none';
  }
});
 
   const rf = document.createElement('div')
   rf.innerHTML = `
   <div class='w-[345px] h-[45px] m-auto flex '>
    <input type="search" placeholder='${item.text}' class='[345px] h-[45px] bg-[#F0F0F0] m-auto pl-[18px] pr-[75px] border-none rounded-l-[5px] outline-none'>
    <button class='w-[57px] h-[45px] bg-[#F7D05E] flex justify-center items-center m-auto rounded-r-[5px]'>
    <img src='./img/df.svg'>
    </button>
    </div>
    <div>
    </div>
   `;
   input.appendChild(rf)
  })
  const inputItem = document.querySelector('#input-item') 
   const inputBlock = [
    {
      img: './img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
    },
    {
      img: './img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
    },
    {
      img: './img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
    },
    {
      img: './img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
    },
    {
      img: './img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
    },
    {
      img: './img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
    },
    {
      img: './img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
    },
    {
      img: './img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
    },
    {
      img: './img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
    },
    {
      img: './img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
    },
    {
      img: './img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
    },
    {
      img: './img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
    },
    {
      img: './img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
    },
    {
      img: './img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
    },
    {
      img: './img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
    },
    {
      img: './img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
    },
    {
      img: './img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
    },
    {
      img: './img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
    },
    {
      img: './img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
    },
    {
      img: './img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
    },
    {
      img: './img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
    },
    {
      img: './img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
    },
    {
      img: './img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
    },
    {
      img: './img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
    },
  ]
  
  inputBlock.forEach((info) => {
    const element = document.createElement('div')
    element.innerHTML = `
    <div class='w-[153px] h-[299px] m-auto  mt-[26px] '>
    <img src='${info.img}'>
    <h1 class='font-bold text-[13px] text-center  mt-[10px] w-[156px]'>${info.text1}</h1>
    <h1 class='font-bold text-[16px] text-center mt-[10px]'>${info.text2}</h1>
    <button class=' mt-[15px] w-[140px] h-[34px] ml-[17px] bg-[#F7D05E] rounded-[94px] text-white'>${info.text3}</button>
    </div>
    `;
    inputItem.appendChild(element)
  })

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
    <div class='w-[375px]  m-auto text-center leading-[30px] text-[#33394F6B]'>
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

const infoBlock1 = [
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


infoBlock1.forEach((info) => {
  const element2 = document.createElement('div')
  element2.innerHTML = `
infoBlock.forEach((info) => {

  const element = document.createElement('div')
  element.innerHTML = `
  <div class='w-[171px] h-[310px] m-auto mt-[25px]'>


  const element1 = document.createElement('div')
  element1.innerHTML = `
  <div class='w-[375px] justify-between flex bg-black flex-wrap'>
  <div class='w-[153px] h-[299px] m-auto mt-[25px]'>
  const element = document.createElement('div')
  element.innerHTML = `
  <div class='w-[171px] h-[310px] m-auto mt-[20px]'>

  <img src='${info.img}'>
  <img src='${info.img2}' class=' m-auto mt-[-10px]'>
  <h1 class='font-bold text-[13px] text-center  mt-[10px] w-[156px]'>${info.text1}</h1>
  <h1 class='font-bold text-[16px] text-center mt-[10px]'>${info.text2}</h1>
  <button class='mt-[15px] w-[140px] h-[34px] ml-[17px] bg-[#F7D05E] rounded-[94px] text-white'>${info.text3}</button>
  </div>
  
  `;

  div2.appendChild(element2)
})



  // inputSearch.appendChild(element1)
});


    inputSearch.appendChild(element1)
})


  div2.appendChild(element)
})




const menuButton1 = document.getElementById('menuButton1');
const mobileMenu1 = document.getElementById('mobileMenu1');

const Katalog = [
  {
    text: 'Каталог',
    img: '',
    text1: 'ОДЕЖДА',
    text2: 'Изделия из муслина',
    text3: 'Боди',
    text4: 'Песочники',
    text5: 'Нательные комбинезоны (слипы)',
    text6: 'Комбинезоны из футера',
    text7: 'Комбинезоны вязаные',
    text8: 'Демисезонные комбинезоны',
    text9: 'Комбинезоны-трансформеры',
    text10: 'Головные уборы',
    text11: 'Носочки',
    text12: 'Нагрудники',
    text13: 'ПЕЛЕНКИ',
    text14: 'КОНВЕРТЫ И ПЛЕДЫ',
    text15: 'АКСЕССУАРЫ',
    text16: 'ГОТОВЫЕ ПОДБОРКИ',
  }
]

menuButton1.addEventListener('click', () => {
    mobileMenu1.classList.toggle('open1');
    menuButton1.innerHTML = mobileMenu1.classList.contains() 
});


Katalog.forEach((info) => {
  const newElement =  document.createElement('div')
  newElement.innerHTML = `
  <div class='w-[375px] m-auto '>
  <button class="button" onclick="showInfo()">${info.text1}</button>
  <div class="info text-[20px] text-white font-normal font-sans" id="info">
      <h1 class='mt-[25px]'>${info.text2}</h1> 
      <h1 class='mt-[25px]'>${info.text3}</h1>
      <h1 class='mt-[25px]'>${info.text4}</h1>
      <h1 class='mt-[25px]'>${info.text5}</h1>
      <h1 class='mt-[25px]'>${info.text6}</h1>
      <h1 class='mt-[25px]'>${info.text6}</h1>
      <h1 class='mt-[25px]'>${info.text7}</h1>
      <h1 class='mt-[25px]'>${info.text8}</h1>
      <h1 class='mt-[25px]'>${info.text9}</h1>
      <h1 class='mt-[25px]'>${info.text10}</h1>
      <h1 class='mt-[25px]'>${info.text11}</h1>
      <h1 class='mt-[25px]'>${info.text12}</h1>
    </div>
    <div class='text-white font-normal text-[24px] w-[375px] font-sans'>
    <button class=" w-[100%] h-[50px] bg-[#33394F] text-start pl-[20px]">${info.text13}</button>
    <button class=" w-[100%] h-[50px] bg-[#33394F] text-start pl-[20px]" >${info.text14}</button>
    <button class="w-[100%] h-[50px] bg-[#33394F] text-start pl-[20px]">${info.text15}</button>
    <button class=" w-[100%] h-[50px] bg-[#33394F] text-start pl-[20px]">${info.text16}</button>
    </div>
  </div>
  `;
  mobileMenu1.appendChild(newElement)
});

function showInfo() {
  const info = document.getElementById('info');
  if (info.style.display === 'none' || info.style.display === '') {
      info.style.display = 'block'; // Показать информацию
  } else {
      info.style.display = 'none'; // Скрыть информацию
  }
}

const data1 = [
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

] 

data1.forEach((item) => {
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
  menuButton1.appendChild(div)
})



