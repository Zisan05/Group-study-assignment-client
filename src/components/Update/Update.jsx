import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const updateData = useLoaderData();

    const {_id,email,title,image,date,difficulty,description,marks} = updateData;

    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description =form.description.value;
        const marks = form.marks.value;
        const image =form.image.value;
        const date =form.date.value;
        const difficulty =form.difficulty.value;

        const updateAssignment = {title,image,description,marks,difficulty,date};
        console.log(updateAssignment);

        fetch(`https://group-study-assignment-server.vercel.app/assignment/${_id}`,{
            method: 'PUT',
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(updateAssignment) 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                Swal.fire(
                    'success',
                    'Successfully Updated your assignment',
                    'success'
                  )
            } 
           
        }) 

    }

    return (
        <div className="hero min-h-screen bg-red-300">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className=" text-4xl md:text-5xl lg:text-5xl font-bold text-violet-800">
        UPDATE ASSIGNMENT </h1>
    </div>
    <div className="card flex-shrink-0 w-[260px] md:w-[500px] lg:w-[500px] shadow-2xl bg-sky-300">
      <form onSubmit={handleUpdate} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" defaultValue={title} name="title" placeholder="Title" className="input input-bordered"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" defaultValue={description} name="description" placeholder="Description" className="input input-bordered"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Marks</span>
          </label>
          <input type="text" defaultValue={marks } name="marks" placeholder="Marks" className="input input-bordered"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Thumbnail Image URL</span>
          </label>
          <input type="text" defaultValue={image}  name="image" placeholder="Thumbnail Image URL" className="input input-bordered"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Difficulty</span>
          </label>
          <input type="text" defaultValue={difficulty}  name="difficulty" placeholder="Difficulty" className="input input-bordered"/>
        </div>


 
<div className="form-control">
          <label className="label">
            <span className="label-text">Deu Date</span>
          </label>
          <input type="text" defaultValue={date}  name="date" placeholder="deu date" className="input input-bordered"/>
        </div>
        
        <div className="form-control mt-6">
          <button className="btn bg-fuchsia-400">Update Assignment</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Update;