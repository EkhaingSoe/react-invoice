import React from 'react'

import RecordGroup from './RecordGroup';

const RecordTable = ({records,deleteRecordHandlers,updateRecordHandlers}) => {
  return (
    <div>
      <table className='w-full'>
        <thead className='bg-orange-100 '>
            <tr>
                <th className='font-medium  py-2 px-4 text-sm text-left'>No</th>
                <th className='font-medium  py-2 px-4 text-sm text-left'>Product Name</th>
                <th className='font-medium  py-2 px-4 text-sm text-right'>Price</th>
                <th className='font-medium  py-2 px-4 text-sm text-right'>Quantity</th>
                <th className='font-medium  py-2 px-4 text-sm text-right'>Cost</th>
            </tr>
        </thead>
        <tbody className='text-sm'>
           <RecordGroup records={records} deleteRecordHandlers={deleteRecordHandlers} updateRecordHandlers={updateRecordHandlers} />
            <tr>
                <td colSpan={4} className='px-4 py-3 border-b border-orange-100 text-center font-semibold'>Total</td>
                <td className='px-4 py-3 border-b border-orange-100 text-right'>
                  {
                    records.reduce((pv,cv)=>pv+cv.cost,0).toFixed(2)
                  }
               
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RecordTable
