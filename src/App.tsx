import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import MainLayout from './layouts/main.layout';
import ServiceLayout from './layouts/service.layout';
import RootLayout from './layouts/root.layout';
import { api } from "./constants/devConstants";
import ContactLayout from "./layouts/ContactsLayout/contacts.layout";

function App() {
  return (
    <>
    <BrowserRouter >
      <Routes>
        <Route path={api} element={<RootLayout />}>
          <Route index element={<MainLayout/>} />
          <Route path='service/:name' element={<ServiceLayout />} />
          <Route path='contacts' element={<ContactLayout />} />
        </Route>
        <Route path="*" element={<Navigate replace to={api}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App  