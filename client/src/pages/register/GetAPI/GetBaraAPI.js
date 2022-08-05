import React from 'react';
import { useState, useEffect } from 'react';

const GetBaraAPI = ({ paramRegionId, paramProvinceId, paramMuniId }) => {
    const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMmRiNjAwYTItZTgwMy00YmY5LWFjMzQtN2FkMjE1MGNlZWI0IiwidG9rZW4iOiJhSEZxeXBKckpvRWhwTHBqbUoiLCJ0eXBlIjoiQ0xJRU5UIiwiaXNfcHJvZHVjdGlvbiI6dHJ1ZSwic2Vzc2lvbl9pZCI6IjQ2N2EyMzI0LWY4NTUtNDc4NS04YmFhLTQ0NDQ3YTYyMTI4OSIsImlhdCI6MTY1OTcxMjYzNywiZXhwIjoxNjU5NzEzNTM3fQ.PAvWhzUEWHKDGE4l_6iBtBuH5sCurwNTaHYjgp233WSi0dgebGuSoiTn_2G1WzED91pCuAMEsQzgeUlLhGvg6qTefmtZifWC-wbZarL7bTOZaVG90_-82HLgWQboaTl4RDPlLp8L0wGCHHXD0Gl7g7ahaWjreqal-qmLeTUooyZFE5iG_ezw3N7u7h6Yj7DMkY5J4jtZTKMR5--QBH6dsnyt_wo9JGYZWKgrfGi3ClbqXWuMptDXvKvp7XK-uF4952NSOAnlwDM_Ka4USeNf4NCGCplFrM2knM_I-S1CAk11x_91LQJsSNp3wcqcX-mGo4Z0oQKXqP7cpX_09UX3kdyYwQUuyq4f-2OzywtgRi7Iw0R2DJ_-xtPwkruQ6dWKRe8nTRPknhqz1gxkmyPYzQcPonfU6VXbT-6_m-6dLo_TUnZ60uaHu5ZGUvIoOaaNEx6MigYU7hhNUko1ppaZjODfaoajfbS6VzbI-bhyMQ4gqBRB4r7m26mYm7o9N45_DwvKyB2GadzEhzkogQSbTbAUy-PRneAkYEs22n4CJjbocPxoXkYUujEXjOb_CFgh8rWjQxaL6WJvHsqfpQzQ8bdd8XoK9g_1H6XM3-Tc0GpJpVnUw2EloohZFPskHJDS9Vrm4dhbTokkoKfpZ1FEJhqasHSrFFLwi0ktyVSgD6A";
  const [barangays, setBarangays] = useState();
  

  useEffect(() => {
    const getBara = async () => {
      const fetchBara = await fetch(
        "https://api.concati.com/address/barangays",
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: JSON.stringify({ 
            region_id : [paramRegionId],
            province_id : [ paramProvinceId],
            municipality_id : [paramMuniId]
          }),
        }
      );
      const resBara = await fetchBara.json();
      setBarangays(await resBara);
    };
    if (paramMuniId) {
        getBara();
    }
  }, [paramMuniId]);

  if (!barangays) {
    return false;
  }


  if(!paramMuniId) return;

const onHandleBarangays = (event) => {
//   const getMunicipalityId = event.target.value;
  
}

  return (
    <div>
      <select onChange={onHandleBarangays}>
        <option value="0">--Select Barangay--</option>
        {barangays.data.map((res, index) => (
          <option key={index} value={res.barangay_id}>
            {res.barangay_name}
          </option>
          
        ))}
        
      </select>
      <p>{barangays.data.zipcode}</p>
    </div>
  );
}

export default GetBaraAPI
