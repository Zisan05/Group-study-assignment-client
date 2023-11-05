

import { useLoaderData} from "react-router-dom";
import {FaFilter } from 'react-icons/fa';
import {useState} from 'react'
import AssignmentDetails from "../AssignmentDetails/AssignmentDetails";


const Assignment = () => {
    
    const assiData =useLoaderData();
    
    const [userData,setuserData] = useState(assiData);


    // const [data,setdata] = useState(assiData);
    
    const filterData = (difficulty) =>{
      if(difficulty == "All")
       {
        setuserData(assiData);
       }
       else{
        const filterData = assiData.filter(item => item.difficulty === difficulty );
        setuserData(filterData);
        
       }
    }

    return (
        <div>
            <div className="flex mt-[45px] items-center ml-[0px] md:ml-[25px] lg:ml-[150px]">
            <div>
                <h1 className="text-[25px] font-semibold text-cyan-400">You can filter this assignments according to their difficulty</h1>
            </div>
            <div className="dropdown  dropdown-left mt-[40px] md:mt-[0px] lg:mt-[0px] ">
  <label tabIndex={0} className="btn m-1"><FaFilter></FaFilter></label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a onClick={() => filterData('All')}>All</a></li>
    <li><a onClick={() => filterData('Easy')}>Easy</a></li>
    <li><a onClick={() => filterData('Medium')}>Medium</a></li>
    <li><a onClick={() => filterData('Hard')}>Hard</a></li>
  </ul>
</div>
        </div>

      <h1 className="text-[35px] mt-[120px] mb-[30px] font-bold text-center text-orange-800 underline">Assignments</h1> 

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {
            userData.map(data => <AssignmentDetails key={data._id} data = {data} userData = {userData} setuserData = {setuserData} ></AssignmentDetails>)
        }
        </div> 
        </div>
        
    );
};

export default Assignment;