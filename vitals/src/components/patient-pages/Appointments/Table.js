import React from 'react'
import MaterialTable from 'material-table'

export default function Table() {

    const data = [
        {filename: "Sarah Umeh", hmo:"FMC Jabi", current:"30/05/23", last:"May 23rd,2023"},
        {filename: "Sarah Umeh", hmo:"FMC Jabi", current:"30/05/23", last:"May 23rd,2023"},
        {filename: "Sarah Umeh", hmo:"FMC Jabi", current:"30/05/23", last:"May 23rd,2023"},
        {filename: "Sarah Umeh", hmo:"FMC Jabi", current:"30/05/23", last:"May 23rd,2023"},
        {filename: "Sarah Umeh", hmo:"FMC Jabi", current:"30/05/23", last:"May 23rd,2023"}
    ]
    const columns = [
        {
            title:`Physician's name`,field:'filename',cellStyle:{fontSize:"14px", fontWeight:"400", padding:"25px"}
        },
        {
            title:'HMO',field:'hmo',cellStyle:{fontSize:"14px", fontWeight:"300"}
        },
        {
            title:'Current Appointment',field:'current',cellStyle:{fontSize:"14px", fontWeight:"300"}
        },
        {
            title:'Last Appointment',field:'last',cellStyle:{fontSize:"14px", fontWeight:"300"}
        }
    ]


  return (
    <div>
      <MaterialTable
        title="Appointment History"
        data={data}
        columns={columns}
        options={{
          search:true,
          paging:false,
          exportButton:true,
          selection:true,
          showSelectAllCheckbox:false,
          showTextRowsSelected:false,
          selectionProps:rowData => ({
            color:"primary",
          })
        }}
      />
    </div>
  )
}
