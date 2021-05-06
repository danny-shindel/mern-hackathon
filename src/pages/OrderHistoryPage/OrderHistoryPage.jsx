import { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import './OrderHistoryPage.css';
import * as usersService from '../../utilities/users-service';
import * as ordersAPI from '../../utilities/orders-api';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderList from '../../components/OrderList/OrderList'
import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function OrderHistoryPage({ user, setUser }) {
  const [orders, setOrders] = useState([]);

  useEffect(function() {
    async function getOrders() {
      const orders = await ordersAPI.getAll();
      setOrders(orders);
    } 
    getOrders();
    
  }, [])
  

  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
        <OrderList orders={orders} />
        <OrderDetail />
    </main>
  );
}