import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import NameCard from'./components/NameCard';
import Counter from './components/Couter';
import Student from './components/Student';
import UserForm from './components/UserForm';
import TotalUser from './components/TotalUser';
function App() {
  const [users, setUsers] = useState([]);

  const handleFormSubmit = (newUser) => {
    // Thêm user mới vào danh sách users
    // Thêm mới user sau khi bấm submit
    setUsers([...users, newUser]);
    console.log(newUser);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>User Form</h1>
        <UserForm onFormSubmit={handleFormSubmit} />

        <h1>Total Users</h1>
        <TotalUser users={users} />
        
      </header>
    </div>
  );
}

export default App;