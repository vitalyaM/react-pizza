import React, { useState, useEffect, Component } from 'react';
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import axios from 'axios';

import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas } from './redux/actions/pizzas';

// function App() {
//   const [pizzas, setPizzas] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3000/db.json')
//       .then(({ data }) => {
//         setPizzas(data.pizzas)
//       });
//   }, [])

//   return (
//     <div>
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Route path="/" render={() => <Home items={pizzas} />} exact />
//           <Route path="/cart" component={Cart} exact />
//         </div>
//       </div>
//     </div>
//   );
// }

class App extends Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <Header />
          <div className="content">
            <Route path="/" render={() => <Home items={this.props.items} />} exact />
            <Route path="/cart" component={Cart} exact />
          </div>
        </div>
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  };
};

const mapDispatchToProps = {
  setPizzas
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
