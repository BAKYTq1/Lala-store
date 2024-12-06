const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');


menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    menuButton.innerHTML = mobileMenu.classList.contains('open') ? '<img src="../../img/Vector (26).svg" alt="">' : '<img src="../../img/Group 3924 (1).svg" alt="">';
});

const searchIcon = document.querySelector('#searchButton');
const inputSearch = document.querySelector('#inputSearch')
searchIcon.addEventListener('click', () => {
    inputSearch.classList.toggle('get');
    searchIcon.innerHTML = inputSearch.classList.contains('get') ? '<img src="../../img/Vector (26).svg" alt="">' : '<img src="../../img/search.svg" alt="">';
});

   const rf = document.createElement('div')
   rf.innerHTML = `
   <div class='w-[345px] h-[45px] m-auto flex'>
    <input type="search" placeholder='Начните писать' class='[345px] h-[45px] bg-[#F0F0F0] m-auto pl-[18px] pr-[75px] border-none rounded-l-[5px] outline-none'>
    <button class='w-[57px] h-[45px] bg-[#F7D05E] flex justify-center items-center m-auto rounded-r-[5px]'>
    <img src='../../img/df.svg'>
    </button>
    </div>
   `;
   inputSearch.appendChild(rf)

const data1 = [
    {
        info1: 'Главная',
        info2: 'Как купить',
        info3: 'Доставка',
        info4: 'О компании',
        info5: 'Мы в instagram',
        info6: 'Акции',
        img: '../../img/Vector (15).svg',
        img1: '../../img/Vector (16).svg',
        info7: 'г. Москва, Электролитный проезд 3Б стр 6',
        info8: '+7 916 361-30-00',
    }
]

data1.forEach((item) => {
    const div = document.createElement('div')
    div.innerHTML = `
    <div class='w-[375px] m-auto text-center leading-[30px] text-[#33394F6B]'>
    <a href='../главный/index.html'><h1 class='hover:text-[black] text-[22px] font-normal font-sans cursor-pointer'>${item.info1}</h1></a>
    <a href='../как купит/kakKupit.html'><h1 class='hover:text-[black] text-[22px] font-normal font-sans cursor-pointer'>${item.info2}</h1></a>
    <a href='../Доставка/dostavka.html'> <h1 class='hover:text-[black] text-[22px] font-normal font-sans cursor-pointer'>${item.info3}</h1></a>
    <a href='../О компании/index.html'> <h1 class='hover:text-[black] text-[22px] font-normal font-sans cursor-pointer'>${item.info4}</h1></a>
    <a href='https://www.instagram.com/'> <h1 class='hover:text-[black] text-[22px] font-normal font-sans cursor-pointer'>${item.info5}</h1></a>
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
  <button class="button text-white font-normal text-[24px] w-[375px] font-sans" onclick="showInfo()">${info.text1}</button>
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
    <a href='../зборки/збор.html'><button class=" w-[100%] h-[50px] bg-[#33394F] text-start pl-[20px]">${info.text16}</button></a>
    </div>
  </div>
  `;
  mobileMenu1.appendChild(newElement)
});

function showInfo() {
  const info = document.getElementById('info');
  if (info.style.display === 'none' || info.style.display === '') {
      info.style.display = 'block'; 
  } else {
      info.style.display = 'none'; 
  }
}

  
 
  function removeFromCart(productId) {
    const productIndex = cartItems.findIndex(item => item.id === productId);
    
    if (productIndex !== -1) {
      cartItems.splice(productIndex, 1);
      saveCartToLocalStorage();
      updateCartDisplay();
    }
  }
  function showAlert(message) {
  
    const alertDiv = document.createElement('div');
    alertDiv.textContent = message;
    alertDiv.style.position = 'fixed';
    alertDiv.style.top = '20px';
    alertDiv.style.left = '50%';
    alertDiv.style.transform = 'translateX(-50%)';
    alertDiv.style.backgroundColor = '#f44336';
    alertDiv.style.color = 'white';
    alertDiv.style.padding = '10px 20px';
    alertDiv.style.borderRadius = '5px';
    alertDiv.style.fontSize = '16px';
    alertDiv.style.zIndex = '1000';
    
   
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
      alertDiv.remove();
    }, 1000);
  }
  
  function removeFromCart(productId) {
    const productIndex = cartItems.findIndex(item => item.id === productId);
  
    if (productIndex !== -1) {
      cartItems.splice(productIndex, 1); 
      saveCartToLocalStorage();
      updateCartDisplay();
      showAlert('Товар удален из корзины!');
    }
  }
  
  const inputItem = document.querySelector('#input-item') 
   const inputBlock = [
    {
      img: '../../img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
      razmer: 74,
      scidka: 20,
      vec: 2.5

    },
    {
      img: '../../img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
      img2: '../../img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
      razmer: 70,
      scidka: 15,
      vec: 2.5

    },
    {
      img: '../../img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
      razmer: 74,
      scidka: 20,
      vec: 2.5
    },
    {
      img: '../../img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
      img2: '../../img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
      razmer: 70,
      scidka: 15,
      vec: 2.5
    },
    {
      img: '../../img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
      razmer: 74,
      scidka: 20,
      vec: 2.5
    },
    {
      img: '../../img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
      img2: '../../img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
      razmer: 70,
      scidka: 15,
      vec: 2.5
    },
    {
      img: '../../img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
      razmer: 74,
      scidka: 20,
      vec: 2.5
      
    },
    {
      img: '../../img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
      img2: '../../img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
      razmer: 70,
      scidka: 15,
      vec: 2.5
    },
    {
      img: '../../img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
      razmer: 74,
      scidka: 20,
      vec: 2.5
    },
    {
      img: '../../img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
      img2: '../../img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
      razmer: 70,
      scidka: 15,
      vec: 2.5
    },
    {
      img: '../../img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
      razmer: 74,
      scidka: 20,
      vec: 2.5
    },
    {
      img: '../../img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
      img2: '../../img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
      razmer: 70,
      scidka: 15,
      vec: 2.5
    },
    {
      img: '../../img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
      razmer: 74,
      scidka: 20,
      vec: 2.5
    },
    {
      img: '../../img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
      img2: '../../img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
      razmer: 70,
      scidka: 15,
      vec: 2.5
    },
    {
      img: '../../img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
      razmer: 74,
      scidka: 20,
      vec: 2.5
    },
    {
      img: '../../img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
      img2: '../../img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
      razmer: 70,
      scidka: 15,
      vec: 2.5
    },
    {
      img: '../../img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
      razmer: 74,
      scidka: 20,
      vec: 2.5
    },
    {
      img: '../../img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
      img2: '../../img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
      razmer: 70,
      scidka: 15,
      vec: 2.5
    },
    {
      img: '../../img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
      razmer: 74,
      scidka: 20,
      vec: 2.5
    },
    {
      img: '../../img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
      img2: '../../img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
      razmer: 70,
      scidka: 15,
      vec: 2.5
    },
    {
      img: '../../img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
      razmer: 74,
      scidka: 20,
      vec: 2.5
    },
    {
      img: '../../img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
      img2: '../../img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
      razmer: 70,
      scidka: 15,
      vec: 2.5
    },
    {
      img: '../../img/4j0u01nxo87ky1em2aajac3j9ms1k6xh 8.svg',
      img2: './img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
      razmer: 74,
      scidka: 20,
      vec: 2.5
    },
    {
      img: '../../img/0o8doy9tcgr9xfesapj5aw07x3wcea3f.svg',
      img2: '../../img/vnalichi.svg',
      text1: 'Боди без рукавов "ФРУК-ТИК", розовый',
      text2: '349 ₽/шт',
      text3: 'В корзину',
      razmer: 70,
      scidka: 15,
      vec: 2.5
    },
  ]
    
  
  inputBlock.forEach((info) => {
    const element = document.createElement('div')
    element.innerHTML = `
    <div class='w-[153px] h-[299px] m-auto  mt-[26px] '>
    <img src='${info.img}'>
    <h1 class='font-bold text-[13px] text-center  mt-[10px] w-[156px]'>${info.text1}</h1>
    <h1 class='font-bold text-[16px] text-center mt-[10px]'>${info.text2}</h1>
    <button id='add-to-cart' class=' mt-[15px] w-[140px] h-[34px] ml-[17px] bg-[#F7D05E] rounded-[94px] text-white'>${info.text3}</button>
    </div>
    `;
    inputItem.appendChild(element)
  const button = element.querySelector("#add-to-cart");
  button.addEventListener("click", () => addToCard(info));
});
function addToCard(item) {
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push(item);
localStorage.setItem("cart", JSON.stringify(cart));
setTimeout(() => {
alert("Товар успешно добавлен в корзину");
}, 1000);
}

// const data = [
//     {
//         info1: 'Главная',
//         info2: 'Как купить',
//         info3: 'Доставка',
//         info4: 'О компании',
//         info5: 'Мы в instagram',
//         info6: 'Акции',
//         img: '../../img/Vector (15).svg',
//         img1: '../../img/Vector (16).svg',
//         info7: 'г. Москва, Электролитный проезд 3Б стр 6',
//         info8: '+7 916 361-30-00',
//     }
// ]

// data.forEach((item) => {
//     const div = document.createElement('div')
//     div.innerHTML = `
//     <div class='w-[375px]  m-auto text-center leading-[30px] text-[#33394F6B]'>
//     <a href=''><h1 class='hover:text-[black] text-[22px] font-normal font-sans cursor-pointer'>${item.info1}</h1></a>
//     <a href='../../pages/как купит/kakKupit.html'><h1 class='hover:text-[black] text-[22px] font-normal font-sans cursor-pointer'>${item.info2}</h1></a>
//     <a href='../../pages/Доставка/dostavka.html'><h1 class='hover:text-[black] text-[22px] font-normal font-sans cursor-pointer'>${item.info3}</h1></a>
//     <a href='../О компании/index.html'> <h1 class='hover:text-[black] text-[22px] font-normal font-sans cursor-pointer'>${item.info4}</h1></a>
//    <a href='https://www.instagram.com/'> <h1 class='hover:text-[black] text-[22px] font-normal font-sans cursor-pointer'>${item.info5}</h1></a>
//     <a href=''> <h1 class='hover:text-[black] text-[22px] font-normal font-sans cursor-pointer'>${item.info6}</h1></a>
//     <div class='flex w-[260px] justify-center items-center m-auto mt-[30px] text-[black] text-[18px] font-normal font-sans gap-[10px]'>
//     <img src='${item.img}'>
//     <h1 class='cursor-pointer'>${item.info7}</h1>
//     </div>
//      <div class='flex w-[200px] justify-center items-center m-auto mt-[10px] gap-[10px] text-[black] text-[18px] font-normal font-sans cursor-pointer'>
//     <img src='${item.img1}'>
//     <h1>${item.info8}</h1>
//     </div>
//     </div>
//     `
// mobileMenu.appendChild(div)
// })

