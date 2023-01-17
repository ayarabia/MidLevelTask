import PropertiesCard from "@/Components/PropertiesCard";
import React, { useState } from "react";
import Slider from "@mui/material/Slider";
export const getStaticProps = async () => {
  const res = await fetch(
    "https://63bd70b818bc301c0267c02b.mockapi.io/api/v1/properties?page=1&limit=10"
  );
  const products = await res.json();
  console.log(products);
  return {
    props: {
      products,
    },
  };
};

export default function Products({ products }) {
  const types = ["Apartment", "Twinhouse", "Duplex", "Villa"];
  const numberOfBedrooms = ["Studio", "2", "3", "4"];
  const area = ["Any", "Furnished", "Unfurnished"];
  const buttons = [
    "55 - 75 SQM",
    "75 - 100 SQM",
    "100 - 130 SQM",
    "55 - 75 SQM",
    "75 - 100 SQM",
    "100 - 130 SQM",
  ];
  const [data, setData] = useState(products);
  const [type, setType] = useState("");
  const [num, setNum] = useState("");
  const [value, setValue] = React.useState([20, 50]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };
  const filterType = (e) => {
    let newData = products.filter((item) => {
      return item.type === e;
    });
    setData(newData);
  };
  const filterNumOfBath = (e) => {
    let newData = products.filter((item) => {
      return item.number_of_bedrooms === e;
    });
    setData(newData);
  };

  console.log(data);

  return (
    <div className="container py-5">
      <h2 className="fs-1 text-primary mb-5">Explore properties</h2>
      <div className="row">
        <div className="col-sm col-md-3 rounded border p-3 mx-3 mx-md-0">
          <h4 className="border-bottom pb-3 text-primary">Filter by:</h4>
          <div className="border-bottom pb-3 pt-2">
            <h5 className="mb-3 text-primary">Type of home</h5>
            {types.map((item) => {
              return (
                <div className="form-check " key={item}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={type === item}
                    value={item}
                    onChange={(e) => {
                      setType(e.target.value);
                      filterType(e.target.value);
                    }}
                    name={item}
                  />
                  <label
                    className="form-check-label text-warning"
                    htmlFor={item}
                  >
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
          <div className="border-bottom pb-3 pt-2">
            <h5 className="mb-3 text-primary">Price range</h5>
            <Slider
              color="secondary"
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
            />
          </div>
          <div className="border-bottom pb-3 pt-2">
            <h5 className="mb-3">Number of bedrooms</h5>
            {numberOfBedrooms.map((item) => {
              return (
                <div className="form-check " key={item}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={item}
                    name={item}
                    checked={num === item}
                    onChange={(e) => {
                      setNum(e.target.value);
                     filterNumOfBath(e.target.value);
                   
                    }}
                  />
                  <label
                    className="form-check-label text-warning"
                    htmlFor={item}
                  >
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
          <div className="border-bottom pb-3 pt-2">
            <h5 className="mb-3 text-primary">Area (sqm)</h5>

            <Slider
              color="secondary"
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
            />
          </div>
          <div className="border-bottom pb-3 pt-2">
            <h5 className="mb-3 text-primary">Furnishings</h5>
            {area.map((item) => {
              return (
                <div className="form-check " key={item}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={item}
                  />
                  <label
                    className="form-check-label text-warning"
                    htmlFor={item}
                  >
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
          <button className="btn btn-secondary text-light rounded-pill py-3 px-5 w-100 mt-5">
            Applay
          </button>
        </div>
        <div className="col-sm col-md-9 mt-md-0 mt-3">
          <div>
            {buttons.map((item, index) => {
              return (
                <button
                  key={index}
                  className="btn btn-danger text-warning rounded-pill py-3 px-4 me-2 mb-3 "
                >
                  {item}
                </button>
              );
            })}
          </div>
          <div className="container py-4">
            <div className="row">
              {data.map((item) => {
                return (
                  <div className="col-sm col-md-4 mb-5" key={item.id}>
                    <PropertiesCard cardData={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
