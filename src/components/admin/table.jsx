import React from "react";

const Table = () => {
  return (
    <div class="relative rounded-lg overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-[#e1e8f0]">
          <tr>
            <th scope="col" class="px-6 py-3">
              #
            </th>
            <th scope="col" class="px-6 py-3">
              Photo
            </th>
            <th scope="col" class="px-6 py-3">
              PRODUCT NAME
            </th>
            <th scope="col" class="px-6 py-3">
              TOTAL WEIGHT
            </th>
            <th scope="col" class="px-6 py-3">
              TOTAL WEIGHT
            </th>
            <th scope="col" class="px-6 py-3">
              DATE
            </th>
            <th scope="col" class="px-6 py-3">
              COMMENT
            </th>
            <th scope="col" class="px-6 py-3">
              STATUS
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b">
            <td class="px-6 py-4">1</td>
            <th className="py-2">
              <img
                className="rounded-full w-20 h-20"
                src="http://137.184.13.215:8090/attachment/getFile/357"
                alt=""
              />
            </th>
            <td class="px-6 py-4">Pigment</td>
            <td class="px-6 py-4"> 0.168 sm 3</td>
            <td class="px-6 py-4">51.000 Kg</td>
            <td class="px-6 py-4">2024-4-29</td>
            <td class="px-6 py-4">Pigment</td>
            <td class="px-6 py-4">Ready</td>
          </tr>
          <tr class="bg-white border-b">
            <td class="px-6 py-4">1</td>
            <th className="py-2">
              <img
                className="rounded-full w-20 h-20"
                src="http://137.184.13.215:8090/attachment/getFile/357"
                alt=""
              />
            </th>
            <td class="px-6 py-4">Pigment</td>
            <td class="px-6 py-4"> 0.168 sm 3</td>
            <td class="px-6 py-4">51.000 Kg</td>
            <td class="px-6 py-4">2024-4-29</td>
            <td class="px-6 py-4">Pigment</td>
            <td class="px-6 py-4">Ready</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
