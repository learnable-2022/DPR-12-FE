import React from 'react'
import MaterialTable from 'material-table'

export default function Table() {

    const data = [
        {diagnosis: "Tuberculosis type II", hmo:"ROA Hospital", physician:"Dr. Miriam Jenna", last:"May 23rd,2023"},
        {diagnosis: "Malaria & Typhoid", hmo:"UNTH, Enugu", physician:"Dr. Chizube Ejere", last:"May 23rd,2023"},
        {diagnosis: "Measles Stage II", hmo:"Medvac Inc.", physician:"Dr. Tappi", last:"May 23rd,2023"},
        {diagnosis: "Malaria & Typhoid", hmo:"ROA Hospital", physician:"Dr. Yemisi", last:"May 23rd,2023"},
        {diagnosis: "Measles Stage I", hmo:"FMC Jabi", physician:"Dr. Ikenna Roberts", last:"May 23rd,2023"},
        {diagnosis: "Measles Stage I", hmo:"FMC Jabi", physician:"Dr. Kemi Wilkinson", last:"May 23rd,2023"},
        {diagnosis: "Axphysiation and Blocked Thorax", hmo:"UITH, Ibadan", physician:"Dr. Bolu Ajah", last:"May 23rd,2023"}
    ]
    const columns = [
        {
            title:'Diagnosis',field:'diagnosis',cellStyle:{fontSize:"14px", fontWeight:"400", padding:"25px"},Style:{fontSize:"14px", fontWeight:"400", padding:"25px"}
        },
        {
            title:'HMO',field:'hmo',cellStyle:{fontSize:"14px", fontWeight:"300"}
        },
        {
            title:'Physician',field:'physician',cellStyle:{fontSize:"14px", fontWeight:"300"}
        },
        {
            title:'Last Update',field:'last',cellStyle:{fontSize:"14px", fontWeight:"300"}
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
