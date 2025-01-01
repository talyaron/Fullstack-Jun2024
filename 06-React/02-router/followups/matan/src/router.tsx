import Home from '../src/view/components/Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import Store from '../src/view/components/Store/Store';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/Store",
    element:<Store/>
  }
]);