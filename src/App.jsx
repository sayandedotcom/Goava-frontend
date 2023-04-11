import React, {lazy, Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
import RenderPage from 'utils/RenderPage';
import 'styles/tailwind.css';
import 'react-tippy/dist/tippy.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-toastify/dist/ReactToastify.css';
const HomePage = lazy(() => import('pages/HomePage'));
const CoursePage = lazy(() => import('pages/CoursePage'));
const AboutPage = lazy(() => import('pages/AboutPage'));
const Cart = lazy(() => import('pages/CartPage'));
const Checkout = lazy(() => import('pages/CheckoutPage'));
const Favourites = lazy(() => import('pages/FavouritesPage'));
const Notifications = lazy(() => import('pages/NotificationsPage'));
const Login = lazy(() => import('pages/LoginPage'));
const Signup = lazy(() => import('pages/SignupPage'));
const Admin = lazy(() => import('pages/AminPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));

function App() {
  return (
    <Routes>
      <Route path='/' element={<RenderPage page={HomePage} />} />
      <Route path='/courses' element={<RenderPage page={CoursePage} />} />
      <Route path='/about' element={<RenderPage page={AboutPage} />} />
      <Route path='/cart' element={<RenderPage page={Cart} />} />
      <Route path='/checkout' element={<RenderPage page={Checkout} />} />
      <Route path='/favourites' element={<RenderPage page={Favourites} />} />
      <Route
        path='/notifications'
        element={<RenderPage page={Notifications} />}
      />
      <Route path='/login' element={<RenderPage page={Login} />} />
      <Route path='/signup' element={<RenderPage page={Signup} />} />
      <Route path='/admin' element={<RenderPage page={Admin} />} />
      <Route path='*' element={<RenderPage page={ErrorPage} />} />
    </Routes>
  );
}

export default App;
