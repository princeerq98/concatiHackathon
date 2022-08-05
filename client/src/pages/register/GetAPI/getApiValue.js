import React from 'react'

export default function getApiValue({ paramRegionId, paramProvinceId, paramMuniId, paramBaraId}) {

  const regionId = paramRegionId;
  

    console.log("Region Id:",paramRegionId)
    console.log("Province Id:",paramProvinceId)
    console.log("Municipality id:",paramMuniId)
    console.log("barangay id:",paramBaraId)
  return (
    <div>
            <h1>region id : {regionId}</h1>

    </div>
  )
}
