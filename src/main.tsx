

import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about/About.tsx';
import SignIn from './pages/signIn/SignIn.tsx';
import SignUp from './pages/signUp/SignUp.tsx';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import Layout from './components/Layout.tsx';
import './index.css'
import App from './App.tsx'
import EmailVerify from './pages/signUp/verify/EmailVerify.tsx';
import EmailVerified from './pages/signUp/verified/EmailVerified.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId='848823528545-ts2t0netv6bv518fqvk4u7pe3acjfnql.apps.googleusercontent.com'>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="signIn" element={<SignIn />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="signUp/verify" element={<EmailVerify />} />
            <Route path='signUp/EmailVerify' element={<EmailVerified />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
