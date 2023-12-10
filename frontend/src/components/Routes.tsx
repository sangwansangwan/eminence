import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from '../components/home'
import { useAppSelector } from '../common/hooks';
import Product from './product/Product';

export default function MainRoutes() {
  const isAuthenticated = useAppSelector(state=>state.auth.token)

  return (
    <BrowserRouter>
      <Routes>
        
        <Route
          path='/'
          element= {isAuthenticated !== null ? <Navigate to={'/product'} />:<Home/>  
        }
        />
        <Route
          path='/product'
          
            element={isAuthenticated !== null ?  <Product />:<Navigate to={'/'} /> }

          
        />

      </Routes>
    </BrowserRouter>
  );
}
