
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
        <h1 class='text-[15px] font-normal font-sans'>Размер ${item.razmer}<h1>
        <h1 class='text-[15px] font-normal font-sans'>Вес:${item.vec}<h1>
        </div>
         </div>
        <button onclick="removeFromCart(${item.id})" class='w-[20px] h-[20px]  text-red-500 text-[25px] rounded-[50%] ml-[-30px] mt-[-30px]'>x</button>
        </div>
      `; 
      cartItemsList.appendChild(div);
      total += item.price;
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
  