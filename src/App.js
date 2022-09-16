import './index.scss'
import { Routes, Route, Outlet } from 'react-router-dom'
import Navigation from './routes/navigation/Navigation'
import Shop from './routes/Shop/Shop'
import Contact from './routes/contact/Contact'
import SignIn from './routes/sign-in/SignIn'

import Home from './routes/home/Home';


const App = () => {

  
  


  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
      </Route>
    </Routes>
  );
}

export default App;
