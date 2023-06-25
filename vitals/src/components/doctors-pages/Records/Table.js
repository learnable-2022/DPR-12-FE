import React from 'react'
import MaterialTable from 'material-table'

export default function Table({patientRecords}) {

    const data = [
        {diagnosis: patientRecords.HealthRecords[0]?.disease, hmo:"ROA Hospital", physician:"Dr. Kemi Wilkinson", last:patientRecords.HealthRecords[0]?.updatedAt},
        {diagnosis: patientRecords.HealthRecords[1]?.disease, hmo:"ROA Hospital", physician:"Dr. Kemi Wilkinson", last:patientRecords.HealthRecords[1]?.updatedAt},
        {diagnosis: patientRecords.HealthRecords[2]?.disease, hmo:"ROA Hospital", physician:"Dr. Kemi Wilkinson", last:patientRecords.HealthRecords[2]?.updatedAt},
    ]
    const columns = [
        {
            title:'Diagnosis',field:'diagnosis',cellStyle:{fontSize:"14px", fontWeight:"400", padding:"25px"},Style:{fontSize:"14px", fontWeight:"400", padding:"25px"}
        },
        {
            title:'HMO',field:'hmo',cellStyle:{fontSize:"14px", fontWeight:"300"}
        },
        {
            title:'Doctor',field:'physician',cellStyle:{fontSize:"14px", fontWeight:"300"}
        },
        {
            title:'Last Update',field:'last',cellStyle:{fontSize:"14px", fontWeight:"300"}
        }
    ]


  return (
    <div>
      <MaterialTable
        title="Diagnosis History"
        data={data}
        columns={columns}
        options={{
          tableLayout:false,
          search:false,
          paging:true,
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
