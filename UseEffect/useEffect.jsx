
import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API WAS CALLED");
      });
  }, []);

  return (
    <div>
      Hello World
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default EffectTutorial;


//Този код представлява функционален компонент в React, който демонстрира използването на useEffect() хук за извършване на асинхронни операции след рендиране на компонента и useState() хукове за управление на състоянието на компонента.

// useState() хукове:

// data съхранява текущата стойност на данните, получени от API заявката.
// count съхранява текущата стойност на брояча.
// useEffect() хук:

// Използва се за извършване на асинхронни операции след рендиране на компонента. В този случай се използва, за да направи HTTP GET заявка към https://jsonplaceholder.typicode.com/comments, след което да съхранява първият имейл адрес от отговора в състоянието data.
// Празният масив [] като втори аргумент означава, че useEffect() ще се изпълни само веднъж след първоначалното рендиране на компонента.
// Render функция:

// Извежда заглавие "Hello World".
// Показва текущата стойност на data в елемент <h1>.
// Показва текущата стойност на count в друг елемент <h1>.
// Съдържа бутон, който при кликане увеличава стойността на count.
// При всяко рендиране на компонента се извършва HTTP GET заявка към https://jsonplaceholder.typicode.com/comments, но тъй като useEffect() е настроен да се изпълни само веднъж (поради празния масив като втори аргумент), тази заявка се изпълнява само при първото рендиране на компонента.

