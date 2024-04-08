import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

const App = () => {
  return (
    <Router>
      <div>
        {/* Route за началната страница */}
        <Route exact path="/" component={Home} />
        
        {/* Route за страницата "About" */}
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;


//В този пример exact се използва за да се уверим, че компонентът, свързан с пътя "/", се рендира само когато адресът в адресната лента съвпада точно с "/" и не е част от други пътища като "/about", "/contact" и други.
