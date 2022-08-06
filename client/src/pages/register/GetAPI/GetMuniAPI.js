import React from "react";
import { useState, useEffect } from "react";
import GetBaraAPI from "./GetBaraAPI";
import "../register.css"


const GetMuniAPI = ({ paramProvinceId, paramRegionId }) => {
  const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiZjJhYjBkNmMtNzMzOS00OGE1LTg2NDgtNjdmMzNhNTc3NTlhIiwidG9rZW4iOiJSSmtOaHI2N3h0dzFHZ3hZNnoiLCJ0eXBlIjoiQ0xJRU5UIiwiaXNfcHJvZHVjdGlvbiI6dHJ1ZSwic2Vzc2lvbl9pZCI6IjczNzE5ZDFhLTcyZGEtNGM0YS05NTUxLTFkNzE4NjA4N2NlYyIsImlhdCI6MTY1OTc2NjQzNCwiZXhwIjoxNjU5NzY3MzM0fQ.MC1f_sodJm1zhzQrw6qbcZ-UhTxmPDqNCt6Pdu7JsAF8Ksicek1DbXEKBglkZoOjjHRjr4Zm9tg_Ut54kiv6ziWpTwt1zrKQInKtEWaJJEGdpOBUwarSaEdD2Skx2Q9gUuo930UR88H-3GjLfaSzeKXEdnMLqYbaZO4krOIlF89htFEmeFNiyZhRRcaekE-2X4ShWYp3CILpu0fIhyiKtFnyts1b1-HBM-BOz17syHqRJymgsAZRp1jQ9ccbPJT43TT7eve98NxjEFTI0TZiQdSrOqEV2mh_uiuAeedIo7OKpmcRdg0iXWfgiG9fY3OUV3oDGdbphSSHc-y2rUUGh_fLOoI5DkHSgitjjwoZtLmm_ePmLGtZsqEbu3XSlZkTT5fLT3r7jeBzzHeDhziYHD1zjTyvZDX4PsPZvtUi4l2owFBaoFtUVw8QtZrF3SOJcE9yHEjNJnxGD70Qbq1ZdmfzBj0xKrU-ew7rRBW0XPIgF458i9WB-CLOdEPEZpYbDBHx6AH2wxIzO5VW5xnkY5R3N2vq8cVBUAe9y4SHiHFX4Udo_-pgv6OKSo8-jYfsv1VHXXfQCuG1TTyPwC3OBiVH7i2MOf0JY6Iw6ukqhlb5Z_6oc7bujJ1l0q-lKGk5Jo4n8_N9coCIWtkbEd_xy5_J9z6IdqHCKgQTtf2xmZI";
  const [municipalities, setMunicipalities] = useState();
  const [municipalityId, setMunicipalityId] = useState();

  useEffect(() => {
    const getMuni = async () => {
      const fetchMuni = await fetch(
        "https://api.concati.com/address/municipalities",
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: JSON.stringify({ 
            region_id : [paramRegionId],
            province_id : [ paramProvinceId]
          }),
        }
      );
      const resMuni = await fetchMuni.json();
      setMunicipalities(await resMuni);
    };
    if (paramProvinceId) {
      getMuni();
    }
  }, [paramProvinceId]);

  if (!municipalities) {
    return false;
  }


  if(!paramProvinceId) return;


const onHandleMunicipality = (event) => {
  const getMunicipalityId = event.target.value;
  setMunicipalityId(getMunicipalityId);
}

  return (
    <div>
      <select className="select"  onChange={onHandleMunicipality}>
        <option className="option" value="0">--Select Municipality--</option>
        {municipalities.data.map((res, index) => (
          <option key={index} value={res.municipality_id}>
            {res.municipality_name}
          </option>
        ))}
      </select>
      <GetBaraAPI 
        paramRegionId={paramRegionId} 
        paramProvinceId={paramProvinceId} 
        paramMuniId={municipalityId ? municipalityId.toString() : "" }   
      />
    </div>
  );
};

export default GetMuniAPI;
