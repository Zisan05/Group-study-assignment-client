
import { Link, useLoaderData } from "react-router-dom";

const SubmittedAssignment = () => {

    
   
    const submitData = useLoaderData(); 
    
    console.log(submitData);

    const filteredData = submitData.filter(data => data.status === "pending");

    return (
        <div>
            <h1 className="text-[30px] font-bold text-center underline text-neutral-500 mt-[30px]">Submitted Assignment</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[40px] gap-[20px]">
            {
                filteredData.map(data => <div key ={data._id} >

<div className="card card-compact w-[300px] ml-[10px] md:ml-[40px] lg:ml-[100px] bg-orange-200 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Title: <span className="text-sky-500">{data.title}</span></h2>
    <p className="text-[20px]"><span className="font-bold">Email:</span> {data.email}</p>
    <p className="text-[20px]"><span className="font-bold">Total Mark:</span> {data.marks}</p>
    <p className="text-[20px]"><span className="font-bold">Examiner name:</span> {data.name}</p>
    <p className="text-[20px]"><span className="font-bold">Status:</span> {data.status}</p>
    <div className="card-actions justify-end">
      <Link to ={`/givemark/${data._id}`}><button className="btn bg-rose-400">Give mark</button></Link>
    </div>
  </div>
</div>

                </div>)
            }
        </div>
        </div>
    );
};

export default SubmittedAssignment;