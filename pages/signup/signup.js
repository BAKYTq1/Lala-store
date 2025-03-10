document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.querySelector("#signupForm");
  
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.querySelector("#signupName").value.trim();
      const email = document.querySelector("#signupEmail").value.trim();
      const password = document.querySelector("#signupPassword").value.trim();
      const number = document.querySelector("#signupNumber").value.trim();
  
      const users = JSON.parse(localStorage.getItem("users")) || [];
      if (users.find((user) => user.email === email)) {
        alert("Пользователь с таким email уже существует");
        return;
      }
  
      users.push({ name, email, password, number });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Пользователь успешно зарегистрирован");
      window.location.href = "../sign-in/signin.html";
    });
  });