import React, {lazy, Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
import Spinner from 'components/spinner';
import Layout from 'layout';
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
      <Route
        path='/'
        element={
          <Layout>
            <Suspense fallback={<Spinner />}>
              <HomePage />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path='/courses'
        element={
          <Layout>
            <Suspense fallback={<Spinner />}>
              <CoursePage />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path='/about'
        element={
          <Layout>
            <Suspense fallback={<Spinner />}>
              <AboutPage />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path='/cart'
        element={
          <Layout>
            <Suspense fallback={<Spinner />}>
              <Cart />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path='/checkout'
        element={
          <Layout>
            <Suspense fallback={<Spinner />}>
              <Checkout />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path='/favourites'
        element={
          <Layout>
            <Suspense fallback={<Spinner />}>
              <Favourites />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path='/notifications'
        element={
          <Layout>
            <Suspense fallback={<Spinner />}>
              <Notifications />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path='/login'
        element={
          <Layout>
            <Suspense fallback={<Spinner />}>
              <Login />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path='/signup'
        element={
          <Layout>
            <Suspense fallback={<Spinner />}>
              <Signup />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path='/admin'
        element={
          <Layout>
            <Suspense fallback={<Spinner />}>
              <Admin />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path='*'
        element={
          <Layout>
            <Suspense fallback={<Spinner />}>
              <ErrorPage />
            </Suspense>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
