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

const data = [
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

data.forEach((item) => {
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

let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cartItems));
}

function updateCartDisplay() {
    cartItemsList.innerHTML = '';
    let total = 0;
  
    cartItems.forEach(item => {
      const div = document.createElement('div');
      div.innerHTML = `
        <div class='w-[347px] h-[143px] m-auto flex gap-[20px] border-t mt-[20px] p-[15px] mb-[30px]'>
        <img src='${item.img}' class='w-[70px] h-[70px]'>
        <div class=''>
        <h3 class='text-[18px] font-bold font-sans'> ${item.text2} </h3>
        <h1 class='text-[15px] font-bold font-sans w-[200px]'>${item.text1}</h1>
        <div class='w-[280px] flex justify-between gap-[10px] mt-[20px] text-[#818492]'>
        <h1 class='text-[15px] font-normal font-sans'>Скидка:${item.scidka}%<h1>
        <h1 class='text-[15px] font-normal font-sans'>Размер:${item.razmer}<h1>
        <h1 class='text-[15px] font-normal font-sans'>Вес:${item.vec}кг<h1>
        </div>
         </div>
        <button onclick="removeFromCart(${item.id})" class='w-[20px] h-[20px]  text-red-500 text-[25px] rounded-[50%] ml-[-30px] mt-[-30px]'>x</button>
        </div>
      `; 
      cartItemsList.appendChild(div);
      total += parseInt(`${item.text2}`

      )
    });
  
    cartTotal.textContent = `Итого: ${total} рубл.`;
  }

  function addToCart(productId) {
    const product = data.find(item => item.id === productId);
    if (product) {
      cartItems.push(product);
      saveCartToLocalStorage();
      updateCartDisplay();
    }
  }
  updateCartDisplay();
  
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
  // const openButton = document.getElementById('open-popup');
  // const closeButton = document.getElementById('close-popup');
  // const popup = document.getElementById('popup');

  // openButton.addEventListener('click', () => {
  //     popup.style.display = 'flex';
  // });

  // closeButton.addEventListener('click', () => {
  //     popup.style.display = 'none';
  // });

  // 
  const openButton = document.getElementById('open-popup');
  const closeButton = document.getElementById('close-popup');
  const popup = document.getElementById('popup');
  const submitButton = document.getElementById('submit-button');
  openButton.addEventListener('click', () => {
      popup.style.display = 'flex';
  });
  closeButton.addEventListener('click', () => {
      popup.style.display = 'none';
  });

  submitButton.addEventListener('click', () => {
      const deliveryType = document.getElementById('delivery-type').value;
      const paymentCard = document.getElementById('payment-card').checked;
      const paymentCash = document.getElementById('payment-cash').checked;
      const address = document.getElementById('address').value;
      const text = document.getElementById('text').value;
      const email = document.getElementById('email').value;
      const number = document.getElementById('number').value;

      const orderData = {
          deliveryType,
          paymentMethod: {
              card: paymentCard,
              cash: paymentCash
          },
          address,
          email,
          number,
          text
      };
      localStorage.setItem('orderData', JSON.stringify(orderData));
  });
  // Вход
  const openToButton = document.getElementById('submit-button');
  const closeToButton = document.getElementById('close-pop');
  const pop = document.getElementById('pop');

  // Открытие попапа
  openToButton.addEventListener('click', () => {
      pop.style.display = 'flex';
  });

  // Закрытие попапа
  closeToButton.addEventListener('click', () => {
      pop.style.display = 'none';
  });

  loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // const login = document.getElementById('login').value;
      // const password = document.getElementById('password').value; // Не рекомендуется сохранять пароль
      // const rememberMe = document.getElementById('remember-me').checked;
    });
      popup.style.display = 'none';
      
      document.addEventListener("DOMContentLoaded", () => {
        const loginForm = document.getElementById('login-form');
        loginForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const email = document.querySelector("#email").value.trim();
          const password = document.querySelector("#password").value.trim();

          const users = JSON.parse(localStorage.getItem("users")) || [];
          const user = users.find(
            (user) => user.email === email && user.password === password 
          );
          if (!user) {
            alert("Неверный email или пароль или номер !");
            return;
          }
      
          localStorage.setItem("currendUser", JSON.stringify(user));
          window.location.href = "";
        });
      });

      const cartContainer = document.querySelector("#cart");

      function loadCart() {
        const cart = JSON.parse(localStorage.getItem("cart"));
        cartContainer.innerHTML = "";
      
        if (cart.length === 0) {
          cartContainer.innerHTML =
            "<h1 class='flex justify-center items-center h-[200px] text-4xl font-bold'>Ваша корзина пуста</h1>";
        }
      
        console.log(cart);
        cart.forEach((item, index) => {
          const cartRow = document.createElement("div");
          cartRow.innerHTML = `
                  <div class='border-2 border-[#ccc] flex justify-between items-center gap-[30px] p-3'>
                  <div class='flex gap-[30px] items-center'>
                  <img src=${item.url} class='w-[100px]'>
                  <p class='text-xl font-bold'>${item.title}</p>
                  </div>
                      <button id='remove-item' data-index="${index}" class='text-3xl font-bold'>x</button>
                  </div>
              `;
          cartContainer.appendChild(cartRow);
        });
      
        const removeBtn = document.querySelectorAll("#remove-item");
        removeBtn.forEach((btn) =>
          btn.addEventListener("click", (event) => {
            const index = event.target.getAttribute("data-index"); //индексти алып берет
            const confirmeDelete = confirm("Вы точно хотите удалть товар");
            if (confirmeDelete) {
              removeItem(index); // индекс аркылуу очот
            }
          })
        );
      }
      function removeItem(index) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
      }
      
      loadCart();
