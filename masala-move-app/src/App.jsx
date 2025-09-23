import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout'; 
import PublicLayout from './pages/PublicLayout'; 
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Order from './pages/Order';
import Menu from './pages/Menu';
import UserClass from './advanced/classBased/UserClass';
import { lazy, Suspense } from 'react';
import ScrolltoTop from './components/ScrolltoTop';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';

// ✅ Hot Toast
import { Toaster } from "react-hot-toast";

const App = () => {
  const Grocery = lazy(() => import('./advanced/lazyloding/GroceryBody'));

  return (
    <BrowserRouter>
      <ScrolltoTop />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/order' element={<Order />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/restaurant/:resId' element={<Menu />} />

          <Route path='/grocery'
            element={
              <Suspense fallback={<p>Loading....</p>}>
                <Grocery />
              </Suspense>
            }
          />

          <Route path='/class-based' element={<UserClass />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>

      {/* ✅ Hot Toast Container */}
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  )
}

export default App;
