// Saving multiple functions in LocalStorage
localStorage.setItem(
  "logFunction",
  `
  function logToConsoleAndLocalStorage(message) {
    const separator = '----------------------------------------'; // Определяем разделитель
    console.log(message); 
    console.log(separator); // Выводим разделитель в консоль

    const currentLogs = localStorage.getItem('logs') || '[]';
    const logs = JSON.parse(currentLogs);
    logs.push(message); 
    logs.push(separator); // Добавляем разделитель в массив логов
    localStorage.setItem('logs', JSON.stringify(logs));
  }
`
);

localStorage.setItem(
  "getUserFunction",
  `
  function getRegisteredUserData() {
    const userData = localStorage.getItem("registeredUser");
    return userData ? JSON.parse(userData) : null;
  }
`
);

localStorage.setItem(
  "saveUserFunction",
  `
  function saveRegistrationData(name, phone, email, password) {
    const userData = { name, phone, email, password };
    localStorage.setItem("registeredUser", JSON.stringify(userData));
  }
`
);
