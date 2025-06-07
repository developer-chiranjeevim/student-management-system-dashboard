import React from "react";
import Navbar from "../components/Navbar";
import Metrics from "../components/Metrics";
import Charts from "../components/Charts";
import Footer from "../components/Footer";

const Dashboard = () => {


    return(
        <div className="">
            <Navbar />
            <Metrics />
            <Charts />
            <Footer />
        </div>
    );
};


export default Dashboard;