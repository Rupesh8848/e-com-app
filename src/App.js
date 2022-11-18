import Home from './routes/home/home'
import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/Navigation/Navigation';
import SignIn from './routes/signIn/SignIn';
function Shop(){
  return(
    <div>
      <h3>I'm Shop Route.</h3>
    </div>
  )
}

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}></Route>
        <Route path='shop' element={<Shop/>}></Route>
        <Route path='signIn' element={<SignIn/>}></Route>
      </Route>

    </Routes>
  );
}

export default App;
