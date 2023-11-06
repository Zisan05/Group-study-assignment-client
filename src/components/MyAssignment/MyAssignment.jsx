import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const MyAssignment = () => {

const [newData,setnewData] = useState([]);

const myData = useLoaderData();
console.log(myData);

const {user} = useContext(AuthContext);

console.log(user.email);

useEffect( () => {

    if(user){
        const myUser = myData ?.filter(item => item.email === user?.email);
        setnewData(myUser);
    }

} ,[myData,user])

console.log(newData);

    return (
        <div> 

             <h1 className="text-[30px] font-bold text-center underline text-neutral-500 mt-[30px]">My Assignment</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                newData.map(data => <div key = {data._id}>
                   
                   <div className="card card-compact w-[300px] ml-[10px] md:ml-[40px] lg:ml-[30px] bg-zinc-500 shadow-xl mt-[20px]">
  <div className="card-body">
    <h2 className="card-title">Title: <span className="text-orange-300">{data.title}</span></h2>
    <p className="text-[20px]"><span className="font-bold">Email:</span> {data.email}</p>
    <p className="text-[20px]"><span className="font-bold">Total Mark:</span> {data.marks}</p>
    <p className="text-[20px]"><span className="font-bold">Examiner name:</span> {data.name}</p>
    <p className="text-[20px]"><span className="font-bold">Status:</span> {data.status}</p>
    <div className="card-actions justify-end">
      <Link><button className="btn bg-orange-100">Give mark</button></Link>
    </div>
  </div>
</div>
                </div> )
            }
        </div>
        </div>
    );
};

export default MyAssignment;