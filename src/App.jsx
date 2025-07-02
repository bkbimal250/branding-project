import React from "react";
import AppRouter from "./router";
import "./index.css";
import WhatsAppButton from './components/layout/WhatsAppButton';
import ScrollToTopButton from './components/layout/ScrollToTopButton';

function App() {
  return (
    <>
      <AppRouter />
      <ScrollToTopButton />
      <WhatsAppButton />
    </>
  );
}

export default App;
