import './OrderList.css';
import OrderListItem from '../OrderListItem/OrderListItem';

export default function OrderList({ orders, setOrder }) {
  const items = orders.map(item =>
    <OrderListItem
      key={item._id}
      order={item}
      setOrder={setOrder}
    />
  );
  return (
    <main className="OrderList">
      {items}
    </main>
  );
}