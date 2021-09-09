import React from "react";
import "./style/dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div class="sidebar"></div>
      <div class="main-content">
        <nav class="top-nav"></nav>
        <section class="container">
          <div class="row justify-content-center mt-4">
            <div class=" bar bar1">bar 1</div>
            <div class=" bar bar2">bar 2</div>
            <div class="bar bar3">bar 3</div>
          </div>
        </section>
        <section class="container">
          <table class="table table-striped">
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
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
