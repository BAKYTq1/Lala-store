const sectionOne = document.querySelector('#section-one')

const data1 = [
    {
        text: 'Как оформить заказ',
        text2: 'Оформить заказ на нашем сайте легко. Просто добавьте выбранные товары в корзину, а затем перейдите на страницу Корзина, проверьте правильность заказанных позиций и нажмите кнопку «Оформить заказ» или «Быстрый заказ».',
    },
    {
        text:'Быстрый заказ',
        text2:'Функция «Быстрый заказ» позволяет покупателю не проходить всю процедуру оформления заказа самостоятельно. Вы заполняете форму, и через короткое время вам перезвонит менеджер магазина. Он уточнит все условия заказа, ответит на вопросы, касающиеся качества товара, его особенностей. А также подскажет о вариантах оплаты и доставки   .                           По результатам звонка, пользователь либо, получив уточнения, самостоятельно оформляет заказ, укомплектовав его необходимыми позициями, либо соглашается на оформление в том виде, в котором есть сейчас. Получает подтверждение на почту или на мобильный телефон и ждёт доставки.',
        
    },
    {
        text:'Оформление заказа в стандартном режиме',
        text2:'Если вы уверены в выборе, то можете самостоятельно оформить заказ, заполнив по этапам всю форму.',
    },
    {
        text:'Заполнение адреса',
        text2:'Выберите из списка название вашего региона и населённого пункта. Если вы не нашли свой населённый пункт в списке, выберите значение «Другое местоположение» и впишите название своего населённого пункта в графу «Город». Введите правильный индекс.',
    },
    {
        text:'Доставка',
        text2:'В зависимости от места жительства вам предложат варианты доставки. Выберите любой удобный способ. Подробнее об условиях доставки читайте в разделе «Доставка».',
    },
    {
        text:'Оплата',
        text2:'Выберите оптимальный способ оплаты. Подробнее о всех вариантах читайте в разделе «Оплата»',
    },
    {
        text:'Покупатель',
        text2:'Введите данные о себе: ФИО, адрес доставки, номер телефона. В поле «Комментарии к заказу» введите сведения, которые могут пригодиться курьеру, например: подъезды в доме считаются справа налево.',
    },
    {
        text:'Оформление заказа',
        text2:'Проверьте правильность ввода информации: позиции заказа, выбор местоположения, данные о покупателе. Нажмите кнопку «Оформить заказ».  Наш сервис запоминает данные о пользователе, информацию о заказе и в следующий раз предложит вам повторить к вводу данные предыдущего заказа. Если условия вам не подходят, выбирайте другие варианты.',
    },
]

data1.forEach((item) => {
    const newElement = document.createElement('div')
    newElement.innerHTML = `
    <div class='w-[375px]  m-auto mt-[30px]'>
    <h1 class='text-[24px] font-bold font-sans mt-[30px]'>${item.text}</h1>
    <p class='text-[#33394F] text-[16px] font-normal font-sans pt-[20px] w-[345px]'>${item.text2}</p>
    </div>
    `
  sectionOne.appendChild(newElement)
})

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
    searchIcon.innerHTML = inputSearch.classList.contains('get') ? '✖' : '<img src="../../img/search.svg" alt="">';
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
    <a href='../Доставка/dostavka.html'> <h1 class='hover:text-[black] text-[22px] font-normal font-sans cursor-pointer'>${item.info3}</h1>
    <a href='../О компании/index.html'> <h1 class='hover:text-[black] text-[22px] font-normal font-sans cursor-pointer'>${item.info4}</h1>
    <a href='https://www.instagram.com/'> <h1 class='hover:text-[black] text-[22px] font-normal font-sans cursor-pointer'>${item.info5}</h1>
    <a href=''> <h1 class='hover:text-[black] text-[22px] font-normal font-sans cursor-pointer'>${item.info6}</h1>
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
