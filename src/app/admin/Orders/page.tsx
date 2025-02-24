"use client"
import { useState, useEffect } from "react";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/admin/components/ui/Button";

interface Order {
  id: string;
  customerName: string;
  phone: string;
  address: string;
  services: string;
  status: string;
}

const OrderDetailTable = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch orders from the database
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/orders");
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  const handleEditOrder = (order: Order) => {
    router.push(`/admin/orders/edit/${order.id}`);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Order Details</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Customer Name</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Services</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="text-center border-t">
              <td className="border p-2">{order.customerName}</td>
              <td className="border p-2">{order.phone}</td>
              <td className="border p-2">{order.address}</td>
              <td className="border p-2">{order.services}</td>
              <td className="border p-2">{order.status}</td>
              <td className="border p-2">
                <Button
                  onClick={() => handleEditOrder(order)}
                  className="flex items-center gap-2"
                >
                  <Pencil size={16} /> Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetailTable;
