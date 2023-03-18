import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "./components/spinner/spinner";
import Layout from "./components/layout/layout";
const HomePage = lazy(() => import("./routes/home/home"));
const CoursePage = lazy(() => import("./routes/course/course"));
const AboutPage = lazy(() => import("./routes/about/about"));
const Cart = lazy(() => import("./routes/cart/cart"));
const Checkout = lazy(() => import("./routes/checkout/checkout"));
const Favourites = lazy(() => import("./routes/favourites/favourites"));
const Notifications = lazy(() =>
  import("./routes/notifications/notifications")
);
const Signin = lazy(() => import("./routes/signin/signin"));
const Signup = lazy(() => import("./routes/signup/signup"));
const Admin = lazy(() => import("./routes/admin/admin"));
const ErrorPage = lazy(() => import("./routes/error/error"));

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Suspense fallback={<Spinner />}>
              <HomePage />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path="/courses"
        element={
          <Layout>
            <Suspense fallback={<Spinner />}>
              <CoursePage />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <Suspense fallback={<Spinner />}>
              <AboutPage />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path="/cart"
        element={
          <Layout>
            <Suspense fallback={<Spinner />}>
              <Cart />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path="/checkout"
        element={
          <Layout>
            <Suspense fallback={<Spinner />}>
              <Checkout />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path="/favourites"
        element={
          <Layout>
            <Suspense fallback={<Spinner />}>
              <Favourites />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path="/notifications"
        element={
          <Layout>
            <Suspense fallback={<Spinner />}>
              <Notifications />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path="/signin"
        element={
          <Layout>
            <Suspense fallback={<Spinner />}>
              <Signin />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path="/signup"
        element={
          <Layout>
            <Suspense fallback={<Spinner />}>
              <Signup />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path="/admin"
        element={
          <Layout>
            <Suspense fallback={<Spinner />}>
              <Admin />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path="*"
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
