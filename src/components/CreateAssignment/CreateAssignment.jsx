import { useState } from "react";
import Swal from "sweetalert2";


const CreateAssignment = () => {

    const [difficulty,setdifficulty] = useState('');

    const handleCreateAssignment = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const email =form.email.value; 
        const description =form.description.value;
        const marks = form.marks.value;
        const image =form.image.value;
        const date =form.date.value;
        
        
        const newAssignment = {title,email,image,description,marks,difficulty,date};
        console.log(newAssignment);

        fetch('https://group-study-assignment-server.vercel.app/assignment',{
            method:"POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(newAssignment)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged)
            {
                Swal.fire(
                    'success',
                    'Successfully added your assignment',
                    'success'
                  )
            }
            form.reset();
        })
    }


    return (
        <div className="hero min-h-screen bg-orange-300">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className=" text-4xl md:text-5xl lg:text-5xl font-bold text-violet-800">CREATE ASSIGNMENT </h1>
    </div>
    <div className="card flex-shrink-0 w-[260px] md:w-[500px] lg:w-[500px] shadow-2xl bg-violet-300">
      <form onSubmit={handleCreateAssignment} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" name="title" placeholder="Title" className="input input-bordered"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" name="description" placeholder="Description" className="input input-bordered"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Marks</span>
          </label>
          <input type="number" name="marks" placeholder="Marks" className="input input-bordered"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Thumbnail Image URL</span>
          </label>
          <input type="text"  name="image" placeholder="Thumbnail Image URL" className="input input-bordered"/>
        </div>

        <div className="dropdown">
  <label tabIndex={0} className="btn m-1">Assignment Difficulty</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a onClick={() => setdifficulty('Easy')}>Easy</a></li>
    <li><a onClick={() => setdifficulty('Medium')}>Medium</a></li>
    <li><a onClick={() => setdifficulty('Hard')}>Hard</a></li>
  </ul>
</div>
<div className="form-control">
          <label className="label">
            <span className="label-text">Deu Date</span>
          </label>
          <input type="date"  name="date" placeholder="deu date" className="input input-bordered"/>
        </div>
        
        <div className="form-control mt-6">
          <button className="btn bg-fuchsia-400">Create Assignment</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default CreateAssignment;