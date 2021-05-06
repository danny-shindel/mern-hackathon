import './OrderList.css';
import OrderListItem from '../OrderListItem/OrderListItem';

export default function OrderList({ orders, setOrder, selected }) {
  const items = orders.map(item =>
    <OrderListItem
      key={item._id}
      order={item}
      setOrder={setOrder}
      selected={selected}
    />
  );
  return (
    <main className="OrderList">
      {items}
    </main>
  );
}