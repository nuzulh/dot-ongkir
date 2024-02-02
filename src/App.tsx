import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Loading } from "./components/loading";
import { AuthLayout, IndexLayout } from "./components/layouts";

import AOS from "aos";
import "aos/dist/aos.css";

const LoginPage = lazy(() => import("./pages/auth/login.page"));
const RegisterPage = lazy(() => import("./pages/auth/register.page"));
const HomePage = lazy(() => import("./pages/home.page"));
const OngkirPage = lazy(() => import("./pages/ongkir.page"));
const AboutPage = lazy(() => import("./pages/about.page"));

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route path="/" element={<IndexLayout />}>
            <Route index element={<HomePage />} />
            <Route path="cek-ongkir" element={<OngkirPage />} />
            <Route path="tentang" element={<AboutPage />} />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Navigate to="login" />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}
