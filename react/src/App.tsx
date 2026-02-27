import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { AuthProvider, Login, Register } from './modules/auth';
import { CarTint, CarTintV2, Home, TemplateDemo } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Car Tint V2: standalone full-page (no Layout nav) */}
          <Route path="/car-tint-v2" element={<CarTintV2 />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="template" element={<TemplateDemo />} />
            <Route path="car-tint" element={<CarTint />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
