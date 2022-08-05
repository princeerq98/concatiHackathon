import React from "react";
import { useState, useEffect } from "react";
import GetMuniAPI from "./GetMuniAPI";

const GetProvinceAPI = ({ paramRegionId }) => {
  const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiZjJhYjBkNmMtNzMzOS00OGE1LTg2NDgtNjdmMzNhNTc3NTlhIiwidG9rZW4iOiIwVUI4Uzl6NnJSVXUyR1hDRWIiLCJ0eXBlIjoiQ0xJRU5UIiwiaXNfcHJvZHVjdGlvbiI6dHJ1ZSwic2Vzc2lvbl9pZCI6IjczNzE5ZDFhLTcyZGEtNGM0YS05NTUxLTFkNzE4NjA4N2NlYyIsImlhdCI6MTY1OTcyMzM0MiwiZXhwIjoxNjU5NzI0MjQyfQ.Nx9hHc-jcedv8ky1ot9UCyOSmi-9I_W-trWF0Eus0famLdSWDIXz1kHv2n8ohJM_GxSJHgnUnW5hy9CiIAq0OsisQoM9yYJaua4WvAYcu9MBEL9T_4DXq_nev5Gqj9BZQQPjO3c4QdhDq6c49nWlChY62zPa-xIi8amyuq1llZ0c3SpobTwXDZX2S0GGKCk7yv1bHdRyDrJumEI1cf23P0jGCwhdxPwbEBLkTZ3VYYmNjoKaeHwdrAFtYvIlSBEtEqvVE5p4SQf8FZVLn1X_OkyN3sE6xN-5gmPD0q-q0t-XFbs8RecmHZCxas-mzb6_hTV2IOYL7ripMadIB7QiXOdXAhZ1wXXSKoS9M85zSs131aNL-93L7d1CJ2AhrV4jFTBnpDd4jV2AsMiB6xAEJvJktk7EjYvFIh0XArWBWfgo2CjTy5TcjcE_bHWpOVL_DoCclbIrjLq_pOINh6SIq2y0YhHlVL-109jths5OcotJ5569TZUYAnRi361wXe8-KrPan5Jzg4FDBib6vwkloW7rOZbZYswod3UL94EMXuvkcZqvt-S13wWEhMswvaE6zgQREZzIn2v5S74koieqEW4JHBDYgeqo3Pt9np8eMtu3Qko62ZKYS-Od_8VVEaL25wKZMz3Dxu0ZKtPfkfTTEFLqCiVdJonf6CM3Hsmej7s";

  const [provinces, setProvinces] = useState();
  const [provinceId, setProvinceId] = useState();

  useEffect(() => {
    const getProvince = async () => {
      const fetchProvince = await fetch(
        "https://api.concati.com/address/provinces",
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: JSON.stringify({ region_id: [ paramRegionId ] }),
        }
      );
      const resProvince = await fetchProvince.json();
      setProvinces(await resProvince);
    };
    if (paramRegionId) {
      getProvince();
    }
  }, [paramRegionId]);

  if (!provinces) {
    return false;
  }

  console.log(provinces)
  console.log(paramRegionId)
  const onHandleProvince = (event) => {
    const getProvinceId = event.target.value;
    setProvinceId(getProvinceId);
    // return getProvinceId;
  };

  return (
    <div>
      <select onChange={onHandleProvince}>
        <option value="0">--Select Province--</option>
        {provinces.data.map((res, index) => (
          <option key={index} value={res.province_id}>
            {res.province_name}
          </option>
        ))}
      </select>
      <GetMuniAPI paramRegionId={paramRegionId}  paramProvinceId={provinceId ? provinceId.toString() : ""} />
    </div>
  );
};

export default GetProvinceAPI;
