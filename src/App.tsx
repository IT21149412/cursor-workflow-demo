import { products } from "./products";

function StockBadge({ stock }: { stock: number | null }) {
  // Planted bug: 0 is falsy, so out-of-stock items render a blank cell.
  return stock ? <span className="badge">{stock} in stock</span> : null;
}

export default function App() {
  return (
    <main className="page">
      <header>
        <h1>Stock Shelf</h1>
        <p>Warehouse inventory for the demo floor.</p>
      </header>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>SKU</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td className="sku">{item.sku}</td>
              <td>
                <StockBadge stock={item.stock} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
