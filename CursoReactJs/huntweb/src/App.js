import React, { Component } from 'react';
import Routes from './routes';

import './styles.css';

import Main from './pages/main';
import Header from './components/Header';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello </h1>
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <h1>ola</h1>
//     </div>
//   );
// }

export default App;
