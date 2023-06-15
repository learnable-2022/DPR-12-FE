import React from 'react'
import MaterialTable from 'material-table'

export default function Table() {

    const appointmentData = [
        {physician: "Sarah Umeh", status:"Active", date:"30/05/23"},
        {physician: "Uchenna Mayowa", status:"InActive", date:"30/05/23"},
        {physician: "Emmanuella Simon", status:"Active", date:"30/05/23"},
        
    ]
    const columns = [
        {
            title:`Physician's name`,field:'physician',cellStyle:{fontSize:"14px", fontWeight:"400", padding:"25px"}
        },
        {
            title:'Status',field:'status',cellStyle:{fontSize:"14px", fontWeight:"300"}
        },
        {
            title:'Date',field:'date',cellStyle:{fontSize:"14px", fontWeight:"300"}
        }
    ]


  return (
    <div>
      <MaterialTable
        title="Appointment History"
        data={appointmentData}
        columns={columns}
        options={{
          search:false,
          paging:false,
          exportButton:false,
          selection:true,
          showSelectAllCheckbox:false,
          showTextRowsSelected:false,
          actionsColumnIndex: true,
          selectionProps:rowData => ({
            color:"primary",
          })
        }}
      />
    </div>
  )
}
