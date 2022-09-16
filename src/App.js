import './index.scss'
import { Routes, Route, Outlet } from 'react-router-dom'
import Navigation from './routes/navigation/Navigation'
import Shop from './routes/Shop/Shop'
import Contact from './routes/contact/Contact'

import Home from './routes/home/Home';


const App = () => {

  
  


  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />}/>
        <Route path="/Shop" element={<Shop />}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Route>
    </Routes>
  );
}

export default App;
