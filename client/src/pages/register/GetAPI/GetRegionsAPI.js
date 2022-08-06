import { useState, useEffect } from "react";
import GetProvinceAPI from "./GetProvinceAPI";
import "../register.css";

const GetRegionsAPI = () => {
    const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiZjJhYjBkNmMtNzMzOS00OGE1LTg2NDgtNjdmMzNhNTc3NTlhIiwidG9rZW4iOiJSSmtOaHI2N3h0dzFHZ3hZNnoiLCJ0eXBlIjoiQ0xJRU5UIiwiaXNfcHJvZHVjdGlvbiI6dHJ1ZSwic2Vzc2lvbl9pZCI6IjczNzE5ZDFhLTcyZGEtNGM0YS05NTUxLTFkNzE4NjA4N2NlYyIsImlhdCI6MTY1OTc2NjQzNCwiZXhwIjoxNjU5NzY3MzM0fQ.MC1f_sodJm1zhzQrw6qbcZ-UhTxmPDqNCt6Pdu7JsAF8Ksicek1DbXEKBglkZoOjjHRjr4Zm9tg_Ut54kiv6ziWpTwt1zrKQInKtEWaJJEGdpOBUwarSaEdD2Skx2Q9gUuo930UR88H-3GjLfaSzeKXEdnMLqYbaZO4krOIlF89htFEmeFNiyZhRRcaekE-2X4ShWYp3CILpu0fIhyiKtFnyts1b1-HBM-BOz17syHqRJymgsAZRp1jQ9ccbPJT43TT7eve98NxjEFTI0TZiQdSrOqEV2mh_uiuAeedIo7OKpmcRdg0iXWfgiG9fY3OUV3oDGdbphSSHc-y2rUUGh_fLOoI5DkHSgitjjwoZtLmm_ePmLGtZsqEbu3XSlZkTT5fLT3r7jeBzzHeDhziYHD1zjTyvZDX4PsPZvtUi4l2owFBaoFtUVw8QtZrF3SOJcE9yHEjNJnxGD70Qbq1ZdmfzBj0xKrU-ew7rRBW0XPIgF458i9WB-CLOdEPEZpYbDBHx6AH2wxIzO5VW5xnkY5R3N2vq8cVBUAe9y4SHiHFX4Udo_-pgv6OKSo8-jYfsv1VHXXfQCuG1TTyPwC3OBiVH7i2MOf0JY6Iw6ukqhlb5Z_6oc7bujJ1l0q-lKGk5Jo4n8_N9coCIWtkbEd_xy5_J9z6IdqHCKgQTtf2xmZI";
  const [regions, setRegions] = useState();
  const [regionId, setRegionId] = useState();

  useEffect(() => {
    fetch(`https://api.concati.com/address/regions`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((json) => setRegions(json));
  }, []);

  if (!regions) {
    return false;
  }

  const onhandleRegion = (event) => {
    const getRegionId = event.target.value;
    setRegionId(getRegionId);
    // return getRegionId;
  };

  return (
    <div>
      <select className="select" onChange={(e) => onhandleRegion(e)}>
        <option className="option" value="">-----------Select Region------</option>
        {regions.data.map((res) => (
          <option value={res.region_id} key={res.region_id}>
            {res.region_name}
          </option>
        ))}
      </select>
      <GetProvinceAPI paramRegionId={regionId ? regionId.toString() : ""} />
    </div>
  );
};

export default GetRegionsAPI
