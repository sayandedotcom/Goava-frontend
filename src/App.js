import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "./components/spinner/spinner";
import Layout from "./components/layout/layout";
const ErrorPage = lazy(() => import("./routes/error/error"));
const HomePage = lazy(() => import("./routes/home/home"));
const CoursePage = lazy(() => import("./routes/course/course"));
const AboutPage = lazy(() => import("./routes/about/about"));
const Signin = lazy(() => import("./routes/signin/signin"));
const Signup = lazy(() => import("./routes/signup/signup"));
const Admin = lazy(() => import("./routes/admin/admin"));

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
