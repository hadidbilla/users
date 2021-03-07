import { useState } from "react";
import FakeData from "./component/FakeData/FakeData.json";
import User from "./component/User/User";
import Cart from "./component/Cart/Cart";
import "./App.css";

function App() {
  const [users, setUser] = useState(FakeData);
  const [newUser, setNewUser] = useState([]);
  const handleAddUser = (user) => {
    const newCount = [...newUser, user];
    setNewUser(newCount);
  };
  return (
    <div className="App">
      <div className="left-side">
        {users.map((user) => (
          <User handleAddUser={handleAddUser} user={user}></User>
        ))}
      </div>
      <div className="right-side">
        <h1>Total Loaded User: {users.length}</h1>
        <h3>Selected Users: {newUser.length}</h3>
        <h3>Total Amount: $</h3>
        {newUser.map((user) => (
          <Cart user={user}></Cart>
        ))}
      </div>
    </div>
  );
}

export default App;
