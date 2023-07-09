import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from './redux/store';
import AddUsers from './pages/AddUsers';
import EditUser from './pages/EditUser';
import Register from './user/Register';
import Login from './user/Login';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/addUser" element={<AddUsers />} />
          <Route path="/editUser/:id" element={<EditUser />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>


  );
}
export default App;
