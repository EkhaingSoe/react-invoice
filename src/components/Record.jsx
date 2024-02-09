import React from "react";
import { MdDelete } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import { HiMinusSmall } from "react-icons/hi2";

const Record = ({
  id,
  productId,
  name,
  price,
  quantity,
  cost,
  index,
  deleteRecordHandlers,
  updateRecordHandlers,
}) => {
  return (
    <tr className="group">
      <td className="px-4 py-3 border-b border-orange-100 text-left">
        {index + 1}
      </td>
      <td className="px-4 py-3 border-b border-orange-100 text-left">{name}</td>
      <td className="px-4 py-3 border-b border-orange-100 text-right">
        {price}
      </td>
      <td className="px-4 py-3 border-b border-orange-100 text-right">
      <button
          onClick={() => updateRecordHandlers(id,1)}
          className="opacity-0 bg-orange-50 mr-2 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto duration-300 translate-x-1 group-hover:translate-x-0"
        >
          <BsPlus className="text-orange-600" />
        </button>
        {quantity}
        <button
          onClick={() => quantity>1 && updateRecordHandlers(id,-1)}
          className="opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto bg-orange-50 ml-2 duration-300 translate-x-1 group-hover:translate-x-0"
        >
          <HiMinusSmall className="text-orange-600" />
        </button>
      </td>
      <td className="px-4 py-3 border-b border-orange-100 text-right flex items-center justify-end gap-5">
        {cost.toFixed(2)}{" "}
        <button
          onClick={() => deleteRecordHandlers(id)}
          className="opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto duration-300 translate-x-6 group-hover:translate-x-0"
        >
          <MdDelete className="text-orange-600" />
        </button>
      </td>
    </tr>
  );
};

export default Record;
