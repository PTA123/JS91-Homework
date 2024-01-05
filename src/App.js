import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import NameCard from'./components/NameCard';
import Counter from './components/Couter';
import Student from './components/Student';
import Login from "./components/LoginForm";
import Hobbies from "./components/Hobbies";
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([
    {name:"Alice", age:19, gender:"female"},
    {name:"John", age:20, gender:"male"},
    {name:"Cris", age:21, gender:"male"},
  ]);

  const renderNameCard = () => {
    return users.map(user) => (

    )
  };

  let button = null;
  if(isLoggedIn) {
    button = (
    <button onClick={() =>{
      setIsLoggedIn(false);
    }}>
        Logout
    </button>
    );
  }else {
    button = 
  }

  return (
    <div className="App">
      <header className="App-header">
        <NameCard />

      </header>
    </div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* <Profile/> */}
//         {/* <Counter/>
//         <NameCard name="Bob" age={30} gender="male" />
//         <NameCard name="Alice" age={25} gender="female" /> */}
//         <Student/>
//       </header>
//     </div>
//   );
// }

export default App;
