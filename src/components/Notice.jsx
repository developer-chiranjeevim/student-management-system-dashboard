import React from "react";



const Notice = () => {


    return(
        <div className="flex items-center justify-between gap-[1rem] px-[1rem] my-[2rem]">
            <div className="flex items-center gap-[1rem]">
                <div className="w-[4rem] h-[4rem]">
                    <img src="https://media.istockphoto.com/id/1136317339/photo/sports-equipment-on-floor.jpg?s=612x612&w=0&k=20&c=-aI8u_Se89IC-HJZYH724ei5z-bIcSvRW6qUwyMtRyE=" alt="" className="w-full h-full object-fill" />
                </div>
                <div className="">
                    <h1 className="capitalize text-[1.5rem]">school annual day</h1>
                    <p className=""><span className="capitalize font-semibold">date : </span>20.7.2025</p>
                </div>
            </div>
            <div className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </div>
        </div>
    );
};


export default Notice;