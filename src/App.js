import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import axios from 'axios';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => {
        setPizzas(data.pizzas)
      });

    // fetch('http://localhost:3000/db.json')
    //   .then((resp) => resp.json())
    //   .then(json => setPizzas(json.pizzas));
  }, [])

  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" render={() => <Home items={pizzas} />} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    </div>
  );
}

export default App;
