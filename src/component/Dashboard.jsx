import React, { useState, useEffect } from "react";
import "./style/dashboard.css";
import HttpServices from "./../HttpServices/index";
import ReactExport from "@ibrahimrahmani/react-export-excel";

const Dashboard = () => {
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      let call = new HttpServices("/paystack/history");
      let get = await call.get({});
      if (get.status) setData(get.message);
      setLoading(false);
    })();
  }, []);

  if (isLoading) {
    return (
      <div className="notification">
        <p>Fetching Payments History!!!</p>
      </div>
    );
  }

  return (
    <>
      <div class="sidebar">
        <div className="logo_area">
          <img
            src="assets/images/slum2school_logo.png"
            width="60%"
            height="60%"
            alt=""
          />
        </div>
      </div>
      <div class="main-content">
        <nav class="top-nav"></nav>
        <section class="container">
          <div class="row justify-content-center mt-4">
            <div class=" bar bar1">
              <h1>
                Total
                <br /> Donations
              </h1>
              <p>{data.length}.</p>
            </div>
            <div class=" bar bar2">
              <h1>
                Total Amount
                <br /> Donated
              </h1>
              <p>N{data.length}.</p>
            </div>
          </div>
        </section>
        <section class="container table-responsive">
          {data.length === 0 && (
            <div className="alert alert-danger text-center">
              No Records Found!!!
            </div>
          )}

          {data.length > 0 && (
            <div className="excel-area">
              {
                <ExcelFile>
                  <ExcelSheet data={data} name="Employees">
                    <ExcelColumn label="First Name" value="firstName" />
                    <ExcelColumn label="Last Name" value="LastName" />
                    <ExcelColumn label="email" value="email" />
                    <ExcelColumn label="phone" value="phone" />
                    <ExcelColumn label="amount" value="amount" />
                    <ExcelColumn label="donation" value="duration" />
                    <ExcelColumn label="donation type" value="memberType" />
                    <ExcelColumn label="platform" value="paymentPlatform" />
                    <ExcelColumn label="other donation" value="" />
                    <ExcelColumn label="date" value="createdAt" />
                  </ExcelSheet>
                </ExcelFile>
              }
            </div>
          )}

          {data.length > 0 && (
            <table class="table table-striped mt-5 custom-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Amount</th>
                  <th>Donation</th>
                  <th>Other Donation Type</th>
                  <th>platform</th>
                  <th>Other Donation</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {data.map((data_, index) => (
                  <tr>
                    <td>
                      {data_.firstName} {data_.lastName}
                    </td>
                    <td>{data_.email}</td>
                    <td></td>
                    <td>N{data_.amount}</td>
                    <td>{data_.duration}</td>
                    <td>{data_.memberType}</td>
                    <td>{data_.paymentPlatform}</td>
                    <td></td>
                    <td>{data_.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </div>
    </>
  );
};

export default Dashboard;
