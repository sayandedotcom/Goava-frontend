import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Spinner from "./components/spinner/spinner";
import Layout from "./components/layout/layout";
const ErrorPage = lazy(() => import("./routes/error/error"));
const HomePage = lazy(() => import("./routes/home/home"));
const CoursePage = lazy(() => import("./routes/course/course"));
const AboutPage = lazy(() => import("./routes/about/about"));
const JoinPage = lazy(() => import("./routes/join/join"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route
          index
          element={
            <Layout>
              <Suspense fallback={<Spinner />}>
                <HomePage />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="Courses"
          element={
            <Layout>
              <Suspense fallback={<Spinner />}>
                <CoursePage />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="about"
          element={
            <Layout>
              <Suspense fallback={<Spinner />}>
                <AboutPage />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="join"
          element={
            <Layout>
              <Suspense fallback={<Spinner />}>
                <JoinPage />
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
      </Route>
    </Routes>
  );
}

export default App;
