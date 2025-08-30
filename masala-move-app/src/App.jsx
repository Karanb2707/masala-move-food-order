import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Order from './pages/Order';
import Menu from './pages/Menu';
import UserClass from './advanced/classBased/UserClass';
// import GroceryBody from './advanced/lazyloding/GroceryBody';
import { lazy, Suspense } from 'react';
import ScrolltoTop from './components/ScrolltoTop';

const App = () => {

  const Grocery = lazy(() => import('./advanced/lazyloding/GroceryBody'));

  return (
    <BrowserRouter>
      <ScrolltoTop/>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/order' element={<Order />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/restaurant/:resId' element={<Menu />} />

          {/* Lazy Loading */}
          <Route path='/grocery'
            element={
              <Suspense fallback={<p>Loding....</p>}>
                <Grocery />
              </Suspense>
            }
          />

          {/* Class Based Component */}
          <Route path='/class-based' element={<UserClass />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

// 1:35 hr