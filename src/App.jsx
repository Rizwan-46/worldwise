// import React, { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";

// import AppLayout from "./pages/AppLayout";
// import CityList from "./components/cityList";
// import CountryList from "./components/CountriesList";
// import Form from "./components/Form";
// import City from "./components/City";
// import ProtectedRoute from "./pages/ProtectedRoute";
import SpinnerFullPage from "./components/SpinnerFullPage";
const HomePage = lazy(() => import("./pages/Homepage"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const Product = lazy(() => import("./pages/Product"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const CityList = lazy(() => import("./components/CityList"));
const CountryList = lazy(() => import("./components/CountriesList"));
const Form = lazy(() => import("./components/Form"));
const City = lazy(() => import("./components/City"));
const ProtectedRoute = lazy(() => import("./pages/ProtectedRoute"));

// const HomePage = lazy(() => import("./pages/Homepage"));
// const Pricing = lazy(() => import("./pages/Pricing"));
// const Login = lazy(() => import("./pages/Login"));
// const Product = lazy(() => import("./pages/Product"));
// const PageNotFound = lazy(() => import("./pages/PageNotFound"));

export default function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route
                path="/pricing"
                element={
                  <Suspense fallback={<SpinnerFullPage />}>
                    <Pricing />
                  </Suspense>
                }
              />

              <Route path="login" element={<Login />}></Route>
              <Route path="product" element={<Product />}></Route>

              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />}></Route>
                <Route path="cities" element={<CityList />}></Route>
                <Route path="cities/:id" element={<City />}></Route>
                <Route path="countries" element={<CountryList />}></Route>
                <Route path="form" element={<Form />}></Route>
              </Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}
