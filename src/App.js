import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'tippy.js/dist/tippy.css';

import Home from "./pages/Home";
import ShortUrl from "./pages/ShortUrl";


const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shorturl" element={<ShortUrl />} />
      </Routes>

      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 3200,
        }}
      />

    </BrowserRouter>
  )
};

export default App;
