import React from 'react'
import MaterialTable from 'material-table'

export default function Table() {

    const data = [
        {filename: "Tuberculosis type II", hmo:"FMC Jabi", physician:"Dr. Miriam Jenna", last:"May 23rd,2023"},
        {filename: "Malaria & Typhoid", hmo:"FMC Jabi", physician:"Dr. Chizube Ejere", last:"May 23rd,2023"},
        {filename: "Measles Stage II", hmo:"FMC Jabi", physician:"Dr. Tappi", last:"May 23rd,2023"},
        {filename: "Malaria & Typhoid", hmo:"FMC Jabi", physician:"Dr. Yemisi", last:"May 23rd,2023"},
        {filename: "Measles Stage I", hmo:"FMC Jabi", physician:"Dr. Ikenna Roberts", last:"May 23rd,2023"},
        {filename: "Measles Stage I", hmo:"FMC Jabi", physician:"Dr. Kemi Wilkinson", last:"May 23rd,2023"},
        {filename: "Axphysiation and Blocked Thorax", hmo:"FMC Jabi", physician:"Dr. Bolu Ajah", last:"May 23rd,2023"}
    ]
    const columns = [
        {
            title:'File name',field:'filename',cellStyle:{fontSize:"14px", fontWeight:"400", padding:"25px"},Style:{fontSize:"14px", fontWeight:"400", padding:"25px"}
        },
        {
            title:'HMO',field:'hmo',cellStyle:{fontSize:"14px", fontWeight:"300"}
        },
        {
            title:'Physician',field:'physician',cellStyle:{fontSize:"14px", fontWeight:"300"}
        },
        {
            title:'Last Appointment',field:'last',cellStyle:{fontSize:"14px", fontWeight:"300"}
        }
    ]


  return (
    <div>
      <MaterialTable
        title="Diagnosis history"
        data={data}
        columns={columns}
        options={{
          search:false,
          paging:false,
          exportButton:false,
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
