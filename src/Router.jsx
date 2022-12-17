import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Menu } from "./components/Menu/menu";
import { Footer } from "./components/Footer/footer";
import { Home } from "./Pages/Home/home";
import { About } from "./Pages/About/about";
import { Communit } from "./Pages/Communit/communit";
import { Login } from "./Pages/Login/login";
import { Error } from "./Pages/Error/error";


export function Router() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/sobre" element={<About />} />

        <Route path="/comunidade" element={<Communit />} />

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
