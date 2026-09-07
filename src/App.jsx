/*
  Exercise: share cart state without useContext

  Follow the data flow step by step:
  1. App owns the cart state with useState.
  2. App passes cart to Navbar so CartIcon can display the item count.
  3. App passes cart and setCart to ProductList.
  4. ProductList passes cart and setCart to each ProductCard.
  5. ProductCard passes cart and setCart to AddToCart.
  6. AddToCart calls setCart when the user clicks the button.

  This repeated prop passing is called prop drilling. The goal of this
  exercise is to understand this flow before replacing it with useContext.
*/
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { productsSearch } from './data';
import { Navbar } from './components/product/exercise/Navbar';
import { ProductList } from './components/product/exercise/ProductList';
import { DashboardLayout } from './pages/dashboard/DashboardLayout';
import { Users } from './pages/dashboard/Users';
import { UserDetails } from './pages/dashboard/UserDetails';
import { NotFound } from './pages/NotFound';
import { AcademyPage } from './pages/useContext/AcademyPage';
import { RandomProvider } from './pages/useContext/randomProvider';
import { CartProvider } from './components/product/exercise/cartProvider';
import { Movies } from './pages/Movies';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <RandomProvider>
            <AcademyPage />
          </RandomProvider>
        } />
        <Route
          path="/exercise"
          element={
            <CartProvider>
              <Navbar  />
              <ProductList products={productsSearch}  />
            </CartProvider>
          }
        />
        <Route path="/movies" element={<Movies />} />
        <Route path="/dashboard" element={<DashboardLayout />} >
          <Route index element={<h1>This is dashdbaord overview section</h1>} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<UserDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;