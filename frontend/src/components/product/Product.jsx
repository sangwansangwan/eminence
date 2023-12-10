// UserPage.js

import './Product.css';
import Category from './category/Category';
import { useAppDispatch, useAppSelector } from '../../common/hooks';
import { logout } from '../auth/auth.slice';
import { useEffect } from 'react';
import { product } from './product.slice';
import './Loader.css'; 

const Product = () => {
  const userName = useAppSelector(state=>state.auth.userId)
  const state = useAppSelector(state=>state.product)
  const dispatch = useAppDispatch()

  useEffect(()=>{dispatch(product())},[])
  
  return (
    <div className="user-page">
      <header className="header">
        <div className="user-info">
          <span>Welcome, {userName}  </span>
        </div>
        <button className="logout-button" onClick={()=>{dispatch(logout())}}>
          Logout
        </button>
      </header>
      <div className="content">
      <div>
      <h1>Category List</h1>
      <div>
       {state.isLoading === true ?   <div className="loading-spinner">
      <div className="spinner"></div>
    </div> :
      <Category data={state.data} />}
      </div>
    </div>
      </div>
    </div>
  );
};

export default Product;
