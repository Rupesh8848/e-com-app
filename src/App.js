import Home from './routes/home/home'
import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/Navigation/Navigation';
import SignIn from './routes/signIn/SignIn';
import Shop from './routes/shop/shop.component';
import CheckOut from "./routes/CheckOut/CheckOut"
function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}></Route>
        <Route path='shop/*' element={<Shop/>}></Route>
        <Route path='signIn' element={<SignIn/>}></Route>
        <Route path="checkout" element={<CheckOut />}></Route>
      </Route>

    </Routes>
  );
}

export default App;
