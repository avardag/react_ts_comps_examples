import React, { useState, useEffect, CSSProperties, useMemo } from "react";

export interface IBeverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}
// function useFetchdata<PayloadT>(url: string): {data: PayloadT | null, done: boolean} { //inferred
function useFetchdata<PayloadT>(url: string) {
  const [data, setData] = useState<PayloadT | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((d: PayloadT) => {
        setData(d);
        setDone(true);
      });
  }, [url]);
  return { data, done };
}

const divStyle: CSSProperties = {
  width: "80%",
  margin: "0 auto",
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
};

function CustomHookCompnt() {
  const { done, data } = useFetchdata<IBeverage[]>("./bevList.json");
  const portlandBevs = useMemo(() => {
    return data?.filter((bev) => bev.producerLocation.includes("Portland"));
  }, [data]);
  return (
    <div>
      <h3>Custom hook component</h3>
      {done && (
        <div style={divStyle}>
          {data?.map((bev) => (
            <div key={bev.beverageName}>
              <img src={bev.logo} alt="beverage" />
              <p>{bev.beverageName}</p>
            </div>
          ))}
        </div>
      )}
      <h4>Portland beverages only(useMemo)</h4>
      <div style={divStyle}>
        {portlandBevs &&
          portlandBevs.map((bev) => (
            <div key={bev.beverageName}>
              <img src={bev.logo} alt="beverage" />
              <p>{bev.beverageName}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CustomHookCompnt;
