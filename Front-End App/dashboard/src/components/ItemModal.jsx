import { useEffect, useState } from "react";
import API from "../api/api";

function ItemModal({ setShow, setItems, items }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/items").then((res) => setData(res.data));
  }, []);

  const addItem = (item) => {
    const exists = items.find((i) => i.item_code === item.ItemCode);

    if (exists) {
      const updated = items.map((i) =>
        i.item_code === item.ItemCode
          ? { ...i, quantity: i.quantity + 1 }
          : i
      );
      setItems(updated);
    } else {
      setItems([
        ...items,
        {
          item_code: item.ItemCode,
          name: item.ItemName,
          price: item.SellingPrice,
          quantity: 1,
        },
      ]);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Select Items</h2>
        <button onClick={() => setShow(false)}>Cancel</button>

        <div className="card-container">
          {data.map((item) => (
            <div key={item.ItemCode} className="card">
              <h3>{item.ItemName}</h3>

              <button onClick={() => addItem(item)}>ADD</button>
            </div>
          ))}
        </div>

        <button onClick={() => setShow(false)}>Done</button>
      </div>
    </div>
  );
}

export default ItemModal;