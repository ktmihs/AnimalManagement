import React, { Component, useEffect, useState } from "react";
import "./ProductHospitalTable.css";
import axios from "axios";
import ProductHospitalTableColumnName from "./ProductHospitalTableColumnName";
const ProductHospitalTableRow = (props) => {
  const { headersName, children } = props;

  // return (
  // <table className="product-table">
  //   <tbody>
  {
    headersName &&
      headersName.map((item, index) => {
        const [hospitalData, setHospitalData] = useState([
          {
            _id: "",
            name: "",
            tel: "",
          },
        ]);
        console.log(item);

        useEffect(async () => {
          try {
            const res = axios
              .get("/api/hospitals/read/" + item)
              .then((response) => {
                console.log(response.data.name);
                setHospitalData({
                  _id: response.data._id,
                  name: response.data.name,
                  tel: response.data.tel,
                });
                console.log(hospitalData);
                // console.log("res: ", res.data)
              });
          } catch (e) {
            console.error(e.message);
          }
        }, []);

        return (
          <tr>
            <ProductHospitalTableColumnName
              // className="product-table-row"
              key={index}
            >
              {hospitalData.name}
            </ProductHospitalTableColumnName>
            <ProductHospitalTableColumnName
              // className="product-table-row"
              key={index}
            >
              {hospitalData.tel}
            </ProductHospitalTableColumnName>
            <td
              className=" product-table-column"
              // onClick={toDetail}
              // onClick={() => history.push("/PostView/" + { test })}
            >
              {children}
            </td>
            <td
              className=" product-table-column"
              // onClick={toDetail}
              // onClick={() => history.push("/PostView/" + { test })}
            >
              {children}
            </td>
          </tr>
        );
      });
  }
  // </tbody>
  // {/* <tbody>{children}</tbody> */}
  // </table>
  // );
};

export default ProductHospitalTableRow;
