import { products } from "./products";

function StockBadge({ stock }: { stock: number | null }) {
  // Planted bug: 0 is falsy, so out-of-stock items render a blank cell.
  return stock ? <span className="badge">{stock} in stock</span> : null;
}

/** Planted bug: 0 is falsy, so out-of-stock items never show Reorder. */
function needsReorder(stock: number | null) {
  return Boolean(stock && stock < 5);
}

export default function App() {
  // Planted bug: null is cast to number and counted as 0 (HDMI Adapter).
  const totalUnits = products.reduce((sum, p) => sum + (p.stock as number), 0);

  // Planted bug: subtracting null stock yields NaN and breaks sort order.
  const rows = [...products].sort(
    (a, b) => (a.stock as number) - (b.stock as number)
  );

  return (
    <main className="page">
      <header>
        <h1>Stock Shelf</h1>
        <p>Warehouse inventory for the demo floor.</p>
        <p className="total">Total units: {totalUnits}</p>
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
          {rows.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td className="sku">{item.sku}</td>
              <td>
                <div className="stock-cell">
                  <StockBadge stock={item.stock} />
                  {needsReorder(item.stock) ? (
                    <span className="badge badge-warn">Reorder</span>
                  ) : null}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
