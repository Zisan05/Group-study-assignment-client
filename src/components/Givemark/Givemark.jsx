import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Givemark = () => {
    const markData = useLoaderData();
    const {_id,status,pdf,text,marks,title} = markData;

    const handleGive = e => {
        e.preventDefault();
        const form = e.target;
        const marks = form.marks.value;
        const status =form.status.value;
        const feedback =form.feedback.value;
        const pdf =form.pdf.value;
        const text =form.text.value;

        const markUpdate = {status,pdf,text,marks,feedback};

        console.log(markUpdate);

        fetch(`http://localhost:5000/submit/${_id}`,{
            method: 'PUT',
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(markUpdate) 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                Swal.fire(
                    'success',
                    'Successfully Updated your assignment mark',
                    'success'
                  )
            } 
           
        })
    }
    
    return (
        <div>
            <div className="hero min-h-screen bg-lime-300">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-blue-500 mb-[30px]">Assignment Marking from</h1>
          </div>
          <div className="card flex-shrink-0 w-[500px] shadow-2xl bg-base-100 bg-stone-300">
            <form onSubmit={handleGive} className="card-body">
          
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input type="text" name="title" defaultValue={title} className="input input-bordered"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Give Marks out of {marks}</span>
                </label>
                <input type="text" name="marks" placeholder="Marks" className="input input-bordered"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Feedback out of 10</span>
                </label>
                <input type="text" name="feedback" placeholder="Feedback" className="input input-bordered"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Change the status to complete</span>
                </label>
                <input type="text" defaultValue={status} name="status" className="input input-bordered"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PDF link</span>
                </label>
                <input type="text" defaultValue={pdf} name="pdf"  className="input input-bordered"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Quick note text</span>
                </label>
                <input type="text" defaultValue={text} name="text" className="input py-[50px]"/>
              </div>
              
      
              <div className="form-control mt-6">
                <button className="btn bg-lime-400">Submit</button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Givemark;