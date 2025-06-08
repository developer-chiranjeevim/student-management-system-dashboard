import React,{ useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Metrics from "../components/Metrics";
import Charts from "../components/Charts";
import Footer from "../components/Footer";
import fetchDetails from "../api/metrics";


const Dashboard = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        //useEffect to fetch data from API

        const get_data = async() => {
            try{
                const response = await fetchDetails();
                console.log(response.data.response);
                setData(response.data.response);

            }catch(error){
                console.log(error.message);
            };
        };

        get_data();
    },[])


    return(
        <div className="">
            <Navbar />
            { data? 
                <>
                    <Metrics teachers={data["teachers_count"]} students={data["students_count"]} staffs={data["staffs_count"]} />
                    <Charts male={data["male_students"]} female={data["female_students"]} />
                </>
                : 
                <></> 
            }
            
            
            <Footer />
        </div>
    );
};


export default Dashboard;