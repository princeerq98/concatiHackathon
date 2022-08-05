import { useState, useEffect } from "react";
import GetProvinceAPI from "./GetProvinceAPI";

const GetRegionsAPI = () => {
    const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMmRiNjAwYTItZTgwMy00YmY5LWFjMzQtN2FkMjE1MGNlZWI0IiwidG9rZW4iOiJhSEZxeXBKckpvRWhwTHBqbUoiLCJ0eXBlIjoiQ0xJRU5UIiwiaXNfcHJvZHVjdGlvbiI6dHJ1ZSwic2Vzc2lvbl9pZCI6IjQ2N2EyMzI0LWY4NTUtNDc4NS04YmFhLTQ0NDQ3YTYyMTI4OSIsImlhdCI6MTY1OTcxMjYzNywiZXhwIjoxNjU5NzEzNTM3fQ.PAvWhzUEWHKDGE4l_6iBtBuH5sCurwNTaHYjgp233WSi0dgebGuSoiTn_2G1WzED91pCuAMEsQzgeUlLhGvg6qTefmtZifWC-wbZarL7bTOZaVG90_-82HLgWQboaTl4RDPlLp8L0wGCHHXD0Gl7g7ahaWjreqal-qmLeTUooyZFE5iG_ezw3N7u7h6Yj7DMkY5J4jtZTKMR5--QBH6dsnyt_wo9JGYZWKgrfGi3ClbqXWuMptDXvKvp7XK-uF4952NSOAnlwDM_Ka4USeNf4NCGCplFrM2knM_I-S1CAk11x_91LQJsSNp3wcqcX-mGo4Z0oQKXqP7cpX_09UX3kdyYwQUuyq4f-2OzywtgRi7Iw0R2DJ_-xtPwkruQ6dWKRe8nTRPknhqz1gxkmyPYzQcPonfU6VXbT-6_m-6dLo_TUnZ60uaHu5ZGUvIoOaaNEx6MigYU7hhNUko1ppaZjODfaoajfbS6VzbI-bhyMQ4gqBRB4r7m26mYm7o9N45_DwvKyB2GadzEhzkogQSbTbAUy-PRneAkYEs22n4CJjbocPxoXkYUujEXjOb_CFgh8rWjQxaL6WJvHsqfpQzQ8bdd8XoK9g_1H6XM3-Tc0GpJpVnUw2EloohZFPskHJDS9Vrm4dhbTokkoKfpZ1FEJhqasHSrFFLwi0ktyVSgD6A";
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
        <option value="">--Select Region--</option>
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
