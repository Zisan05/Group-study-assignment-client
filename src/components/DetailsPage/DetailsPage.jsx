import { useLoaderData } from "react-router-dom";


const DetailsPage = () => {

    const loadedData = useLoaderData();

   const {_id,email,title,image,date,difficulty,description,marks} = loadedData
    
    return (
        <div>
            <h1 className="text-[30px] font-bold text-red-300 text-center mt-[10px] mb-[10px]">Assignment Details Page</h1>
            <div className="card lg:card-side bg-amber-200 shadow-xl">
        <figure><img className="w-[700px] h-[500px]" src={image} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title mb-[10px]"><span className="font-bold">Title:</span> <span className="underline">{title}</span></h2>
          <p><span className="font-bold">Description:</span> {description}</p>
          <p><span className="font-bold">Marks:</span> {marks}</p>
          <p><span className="font-bold">Difficulty:</span> {difficulty}</p>
          <p><span className="font-bold">Due Date:</span> {date}</p>
          <p><span className="font-bold">Email:</span> {email}</p>
          <p><span className="font-bold">Difficulty:</span> {difficulty}</p>
          <div className="card-actions ">
            <button className="btn bg-red-300">Take Assignment</button>
          </div>
        </div>
      </div></div>
    );
};

export default DetailsPage;