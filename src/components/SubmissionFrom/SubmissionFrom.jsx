import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const SubmissionFrom = () => {
    const submitData = useLoaderData();

    const {_id,email,title,marks,image} = submitData;

const handleSubFrom = e => {
    e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const email =form.email.value; 
        const marks = form.marks.value;
        const name =form.name.value;
        const pdf =form.pdf.value;
        const text =form.text.value;

        const newSubmit = {title,email,name,pdf,marks,text,status: "pending"};

        const myNewSubmit = {title,email,name,pdf,marks,text,status: "pending"};
        console.log(newSubmit);

        fetch('http://localhost:5000/submit',{
            method:"POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(newSubmit)
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
        fetch('http://localhost:5000/my',{
            method:"POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(myNewSubmit)
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
        <div className="hero min-h-screen bg-yellow-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-blue-300 mb-[30px]">Assignment submission from</h1>
          </div>
          <div className="card flex-shrink-0 w-[500px] shadow-2xl bg-base-100 bg-blue-300">
            <form onSubmit={handleSubFrom} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input type="text" defaultValue={title} name="title" placeholder="Title" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Marks</span>
                </label>
                <input type="text" defaultValue={marks} name="marks" placeholder="Marks" className="input input-bordered"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Examiner Name</span>
                </label>
                <input type="text" name="name" placeholder=" Examiner name" className="input input-bordered"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PDF link</span>
                </label>
                <input type="text" name="pdf" placeholder=" PDF link" className="input input-bordered"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Quick note text</span>
                </label>
                <input type="text" name="text" className="input py-[50px]"/>
              </div>
              
      
              <div className="form-control mt-6">
                <button className="btn bg-purple-400">Submit</button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SubmissionFrom;