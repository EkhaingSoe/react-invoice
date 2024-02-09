import React from 'react'
import Record from './Record'
import EmptyStage from './EmptyStage'

const RecordGroup = ({records , deleteRecordHandlers,updateRecordHandlers}) => {
  return (
    <>

    {
        records.length === 0 && <EmptyStage/>
    }
    {
        records.map((record,index)=><Record key={record.id} updateRecordHandlers={updateRecordHandlers} deleteRecordHandlers={deleteRecordHandlers} index={index} {...record} />)
    }
      
    </>
  )
}

export default RecordGroup
