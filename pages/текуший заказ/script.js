document.addEventListener("DOMContentLoaded", () => {

  const orderData = JSON.parse(localStorage.getItem("orderData"));

  const detailsContainer = document.getElementById("order-details");
  if (orderData) {
    detailsContainer.innerHTML = `
      <div class="order-item">
        <p><strong>Тип доставки:</strong> ${orderData.deliveryType || "Не указано"}</p>
      </div>
      <div class="order-item">
        <p><strong>Способ оплаты:</strong> ${orderData.paymentMethod.card ? "Карта" : orderData.paymentMethod.cash ? "Наличные" : "Не выбрано"}</p>
      </div>
      <div class="order-item">
        <p><strong>Имя:</strong> ${orderData.text || "Нет имени"}</p>
      </div>
      <div class="order-item">
        <p><strong>Адрес:</strong> ${orderData.address || "Не указано"}</p>
      </div>
      <div class="order-item">
        <p><strong>Email:</strong> ${orderData.email || "Не указано"}</p>
      </div>
      <div class="order-item">
        <p><strong>Телефон:</strong> ${orderData.number || "Не указано"}</p>
      </div>
    `;
  } else {
    detailsContainer.innerHTML = "<p>Данные о заказе не найдены.</p>";
  }
});
