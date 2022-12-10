
import './App.css';
import Nav from './components/Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import AddUser from './components/AddUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<PrivateComponent/>}>
          <Route path="/" element={<h1>Product</h1>}></Route>
          <Route path="/add" element={<AddProduct/>}></Route>
          <Route path="/update" element={<h1>Update Product</h1>}></Route>
          <Route path="/logout" element={<h1>Logout Page</h1>}></Route>
          <Route path="/profile" element={<h1>Profile Page</h1>}></Route>
          <Route path="/user" element={<AddUser/>}></Route>
          </Route>
          
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          
        </Routes>
        
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
