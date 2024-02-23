//1. Пример с Axios:

import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log('Data:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

//2. Пример с Fetch:

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

//Разлики и обяснения:

//Синтаксис: Както виждате, axios предоставя лесен за използване API, като използва методи като axios.get(), axios.post() и др., което прави кода по-четим и по-удобен за поддръжка. fetch, от друга страна, използва вградената функция за заявки в браузъра и изисква повече код, особено за обработка на отговорите.

//Обработка на грешки: В axios, обработката на грешки става чрез .catch() блока, който прихваща всички грешки в заявката или обработката на отговора. В fetch е необходимо да проверявате response.ok в .then() блока, за да видите дали заявката е успешна, и след това да хвърляте грешка при неуспех.

//Поддръжка на браузъри: axios е съвместим с по-стари браузъри и предоставя консистентност в тяхното поведение, тъй като използва Promise API. fetch е вграден в съвременните браузъри и има ограничена поддръжка в по-старите версии.
