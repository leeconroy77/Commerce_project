import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Authentication from './routes/authentication/authentication'
import Shop from './routes/Shop/Shop';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>#
      
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='authentication' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
