import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

const routes = [
  {
    path:  '/',
    element: Home
  },
  {
    path: '/aboutUs',
    element: AboutUs
  },
  {
    path: '/contactUs',
    element: ContactUs
  }
]


export default routes;