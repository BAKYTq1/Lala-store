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
    <a href='../../index.html'><h1 class='hover:text-[black] text-[22px] font-normal font-sans cursor-pointer'>${item.info1}</h1></a>
    <a href='../как купит/kakKupit.html'><h1 class='hover:text-[black] text-[22px] font-normal font-sans cursor-pointer'>${item.info2}</h1></a>
    <h1 class='hover:text-[black] text-[22px] font-normal font-sans cursor-pointer'>${item.info3}</h1>
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
const sectionOne = document.querySelector('#section-one')
const dostavka = [
    {
        text: 'Способы доставки:',
        text1: 'Доставка ваших заказов осуществляется по всей России следующими способами:',
        text2: '1. Курьером до двери (по Москве в пределах МКАД) – стоимость 400 рублей. Удобные для вас дата и время доставки согласовывается с вами заблаговременно. Срочная курьерская доставка (день в день) по Москве в пределах МКАД – 500 руб. (при наличии свободного курьера).',
        text3: '2. Компанией СДЭК (до пункта выдачи заказов, удобного для вас в вашем городе или до двери) – стоимость и срок доставки* зависит от вашего города проживания и размера упаковки вашего заказа.',
        text4: '3. Почтой России (до удобного вам отделения связи) – стоимость и срок доставки* зависит от вашего города проживания и размера упаковки вашего заказа.',
        text5:'*Отправление заказов осуществляется в срок от 1-3 раб.дн. с момента оплаты вами заказа. (Зачастую отправления заказов осуществляются в срок 1-2 дня).',
        text6:'Заказы, сделанные в пятницу после 15:00 и в выходные дни - подтверждаются в понедельник и ближайшая доставка по Москве – вторник или среда.',
        text7:'4. Самовывоз - возможен из шоу-рума (согласно графика работы) по адресу: г. Москва, м.Нагорная, Электролитный проезд 3Б стр 6 (5 мин от метро Нагорная). Предварительно согласовывается наличие товара и время забора заказа.',
    }
]

dostavka.forEach((dos) =>{
    const element = document.createElement('div')
    element.innerHTML= `
    <div class='w-[347px] mt-[30px]'>
    <h1 class=' pt-[5px] font-bold text-[24px] font-sans text-[#33394F]' >${dos.text}</h1>
    <p class='leading-[22px] pt-[15px] text-[14px] font-normal font-sans text-[#7B7F8D]'>${dos.text1}</p>
    <p class='pt-[20px] text-[#33394F] text-[16px] font-normal font-sans'>${dos.text2}</p>
    <p class='pt-[15px] text-[#33394F] text-[16px] font-normal font-sans'>${dos.text3}</p>
    <p class='pt-[15px] text-[#33394F] text-[16px] font-normal font-sans'>${dos.text4}</p>
    <p class='pt-[15px] text-[#33394F] text-[16px] font-normal font-sans'>${dos.text5}</p>
    <p class='pt-[15px] text-[#33394F] text-[16px] font-normal font-sans'>${dos.text6}</p>
    <p class='pt-[15px] text-[#33394F] text-[16px] font-normal font-sans'>${dos.text7}</p>
    </div>
    `;
    sectionOne.appendChild(element)
})