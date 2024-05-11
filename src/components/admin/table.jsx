import React, { useEffect, useState } from "react";
import ProductsService from "../../services/products";

const Table = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  const getProducts = async () => {
    const data = await ProductsService.getProducts();
    setProducts(data.data.data.body);
    setMessage(data.data.data.message);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="relative rounded-lg overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-[#e1e8f0]">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Photo
            </th>
            <th scope="col" className="px-6 py-3">
              PRODUCT NAME
            </th>
            <th scope="col" className="px-6 py-3">
              TOTAL WEIGHT
            </th>
            <th scope="col" className="px-6 py-3">
              TOTAL WEIGHT
            </th>
            <th scope="col" className="px-6 py-3">
              DATE
            </th>
            <th scope="col" className="px-6 py-3">
              COMMENT
            </th>
            <th scope="col" className="px-6 py-3">
              STATUS
            </th>
          </tr>
        </thead>
        <tbody>
          {products ? (
            products.map((item) => (
              <tr className="bg-white border-b">
                <td className="px-6 py-4">{item.id}</td>
                <th className="py-2">
                  <img
                    className="rounded-full w-20 h-20"
                    src={item.image}
                    alt=""
                  />
                </th>
                <td className="px-6 py-4">Pigment</td>
                <td className="px-6 py-4"> 0.168 sm 3</td>
                <td className="px-6 py-4">51.000 Kg</td>
                <td className="px-6 py-4">2024-4-29</td>
                <td className="px-6 py-4">Pigment</td>
                <td className="px-6 py-4">Ready</td>
              </tr>
            ))
          ) : (
            <tr className="text-center text-2xl mx-auto">{message}</tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
