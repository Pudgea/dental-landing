import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import MainLayout from './layouts/main.layout';
import ServiceLayout from './layouts/service.layout';
import RootLayout from './layouts/root.layout';
import { imgSrc } from "./constants/devConstants";

function App() {
  return (
    <>
    <BrowserRouter >
      <Routes>
        <Route path={imgSrc} element={<RootLayout />}>
          <Route index element={<MainLayout/>} />
          <Route path='service/:name' element={<ServiceLayout />} />
          <Route path="*" element={<Navigate replace to='/'/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App  