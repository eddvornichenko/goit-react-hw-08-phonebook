import React, { useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HomePage } from 'pages/HomePage';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { Layout } from 'components/AuthRouts/Layout';
import { ContactsPage } from 'pages/ContactsPage';
import { useAuth } from 'hooks';
import PrivateRoute from 'components/AuthRouts/PrivateRoute';
import PublicRoute from 'components/AuthRouts/PublicRoute';
import { refreshUser } from 'redux/auth/operations';
import { NotFoundPage } from 'pages/NotFoundPage';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <BrowserRouter basename="goit-react-hw-08-phonebook">
      <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*Home page */}
          <Route index element={<HomePage />} />
          {/* User registration page */}
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/login" component={<RegisterPage />} />
            }
          />
          {/* User login page */}
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
            }
          />
          {/* Contact page (available only to authorized users) */}
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
        {/* Default route (if no other route matches) */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
