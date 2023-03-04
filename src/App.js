import React,{useState} from 'react';

import { Routes ,Route } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Home from './Home';
import Sell from './Sell';
import Today from './Today-sell';
import Fashion from './Fashion'
import Mobile from './Mobile';
import Electronics from './Electronics';
import Footer from './Footer';
import Singhup from './Singhup';
import Cart from './Cart/Cart.js'
//import Product from './Product';
import Data from './back/Data';



function App(){



 const [cartItem, setCart] = useState([]);
  const [tempdata, setTempdata] = useState(Data);
  //const [productData, setProductdata] = useState(Data);


 return(
  <>
  <Header setTempdata={setTempdata} tempdata={tempdata} />
<Navbar/>

<Routes>
  <Route path='/' element={<Home tempdata={tempdata} setCart={setCart} cartItem={cartItem}/>} />
  <Route path='/sell' element={<Sell/>}/>
  <Route path='/today' element={<Today/>}/>
  <Route path='/fashion' element={<Fashion/>}/>
  <Route path='/mobile' element={<Mobile/>}/>
  <Route path='/electronics' element={<Electronics/>}/>
  <Route path='/today' element={<Today/>}/>
  <Route path='/singh' element={<Singhup/>}/>
  <Route path='/cart' element={<Cart cartItem={cartItem} setCart={setCart} />}/>
  

</Routes>
<Footer/>
  </>
 )
}

export default App;