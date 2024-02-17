
///App.jsx

import React from 'react'
import MyComponent from './MyComponent';

export const App = () => {
  return (
    <div>
        <MyComponent />
    </div>
  )
}


///MyComponent

import React, { useState } from 'react'

export const MyComponent = () => {

    const [name, setName] = useState("Guest");

    const updateName = () => {
        setName("Joro");
    }

  return (
    <div>
        <p>Name:{name}</p>
        <button onClick={updateName}>Set Name</button>
    </div>
  )
}

// Ето един пример с useState:

import React, { useState } from 'react';

function Counter() {
  // Дефиниране на състоянието count и функцията setCount за актуализиране на състоянието
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* Обработчик на клик, който увеличава брояча с 1 при всяко кликане */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;

Тук имаме компонент Counter, който използва useState за да добави състояние към функционалния си компонент. При първото рендиране на компонента, useState(0) инициализира count със стойност 0. setCount е функция, която се използва за актуализиране на състоянието count.

При натискане на бутона "Click me", се извиква setCount, като се предава новата стойност на count (текущата стойност плюс 1). Това причинява ре-рендиране на компонента с актуализираното състояние count.

Така, при всяко натискане на бутона "Click me", стойността на count се увеличава с 1, а компонентът се ре-рендира, отразявайки новата стойност на брояча.
