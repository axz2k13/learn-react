import { ItemProps } from "@/types/item";

function Item({ name, isPacked } : ItemProps) {
  return (
    <div>
      {isPacked && (
        <li className="item">
          {name}
        </li>
      )}
      {!isPacked && (
        <li className="item">
          {name}
        </li>
      )}
    </div>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>My Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Laptop"
        />
        <Item
          isPacked={true}
          name="Chargers"
        />
        <Item
          isPacked={false}
          name="Socks"
        />
      </ul>
    </section>
  );
}
