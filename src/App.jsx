import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SheetNamesProvider } from "./context/SheetNamesContext";

import AppLayout from "./layouts/AppLayout";
import Index from "./pages/Index";
import MonthDetail from "./pages/MonthDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <SheetNamesProvider>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Index />}></Route>
              <Route path="detalle/:month" element={<MonthDetail />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Route>
          </Routes>
        </SheetNamesProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
