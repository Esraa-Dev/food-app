import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Order from './pages/order/Order';
import Items from './pages/items/Items';
import SingleItem from './pages/single-item/SingleItem';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/items" element={<Items />} />
        <Route path="/item/:id" element={<SingleItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App