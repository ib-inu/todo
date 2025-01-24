import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css";
import { Provider } from 'react-redux';
import store, { persistor } from './store/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ThemedApp from './components/ThemeApp.jsx';
import Authentication from './auth/Authentication.jsx';
import ProtectedRoute from './auth/ProtectedRoute.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/auth" element={<Authentication />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <ThemedApp />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/auth" />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </StrictMode>
);
