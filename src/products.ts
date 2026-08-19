export type Product = {
  id: string;
  name: string;
  sku: string;
  stock: number | null;
};

export const products: Product[] = [
  { id: "1", name: "Wireless Mouse", sku: "MS-104", stock: 12 },
  { id: "2", name: "USB-C Cable", sku: "CB-201", stock: 0 },
  { id: "3", name: "Laptop Stand", sku: "ST-330", stock: 3 },
  { id: "4", name: "HDMI Adapter", sku: "AD-018", stock: null },
];
