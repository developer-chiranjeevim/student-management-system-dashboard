import React from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Notice from "./Notice";

ChartJS.register(ArcElement, Tooltip, Legend);


const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: false,
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.parsed} days`;
          },
        },
      },
    },
  };
  
const Charts = ({male, female}) => {
    

    const data = {
        labels: ['Male', 'Female'],
        datasets: [
        {
            label: 'Attendance',
            data: [male, female],
            backgroundColor: ['#219ebc', '#023047'],
            borderColor: ['#ffffff', '#ffffff'],
            borderWidth: 2,
        },
        ],
    };


    return(
        <div className="grid grid-cols-2 gap-[1rem] px-[2rem] py-[1rem]">
            <div className="col-span-1 bg-white py-[1rem] rounded-lg">
                {/* doughnut chart */}
                <div className="">
                    <h1 className="capitalize text-center text-[1.5rem] font-semibold">total students by gender</h1>
                </div>
                <div className="relative h-[30rem] my-[1rem]">
                    <Doughnut data={data} options={options} />
                    <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center">
                        <h1 className="text-black text-[1.5rem] font-semibold capitalize">total students</h1>
                        <h1 className="text-black text-[2.5rem] font-semibold">{male + female}</h1>
                    </div>
                </div>
                <div className="w-full flex justify-center my-[1rem]">
                    <ul className="inline-flex items-center gap-[1rem]">
                        <li className="flex items-center gap-1  ">
                            <div className="bg-[#219ebc] p-2"></div>
                            <h1 className="capitalize text-[1rem] font-semibold">male students</h1>
                        </li>

                        <li className="flex items-center gap-1  ">
                            <div className="bg-[#023047] p-2"></div>
                            <h1 className="capitalize text-[1rem] font-semibold">female students</h1>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-span-1 bg-white py-[1rem] rounded-lg">
                {/* notice board */}
                <div className="">
                    <h1 className="capitalize text-center text-[1.5rem] font-semibold">total students by gender</h1>
                </div>
                <div className="">
                    <Notice />
                    <Notice />
                    <Notice />
                    <Notice />
                    <Notice />
                    <div className="flex justify-end px-[1rem]">
                        <button className="bg-[#219ebc] w-fit p-[0.5rem] rounded-lg cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Charts;