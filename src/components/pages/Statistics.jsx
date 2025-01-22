import React, { useState } from 'react';
import { data, Link } from 'react-router-dom';
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from 'recharts';
import UseTitle from '../UseTitle';

const Statistics = () => {
  UseTitle("Statistics |")
  const [barchat,setbarchat]= useState([])
    useState(()=>{
        fetch("/GadgetData.json")
        .then(res=>res.json())
        .then(data=>setbarchat(data))
        
    },[])
    return (
       <Link to={"/Statistics"}>
      <div>
      <div className="hero  bg-[#9538E2] text-white w-full ">
  <div className="hero-content text-center ">
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold">Statistics</h1>
      <p className=" text-warp py-4 sm:py-6 text-sm sm:text-base lg:text-md">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      
    </div>
  </div>
</div>
      </div>
         <div style={{ width: '80%',margin:"auto", height: 400 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={1200}
            height={400}
            data={barchat}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="product_title" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="price" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="price" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      
       </Link>
    );
};

export default Statistics;
