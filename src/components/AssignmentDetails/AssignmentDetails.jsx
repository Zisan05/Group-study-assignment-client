
import {RiDeleteBin5Fill } from 'react-icons/ri';
import Swal from 'sweetalert2';
import { useContext} from "react";
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const AssignmentDetails = ({data,userData,setuserData}) => {

    

const {_id,email,title,image,date,difficulty,description,marks} = data ;


const {user} = useContext(AuthContext);

const handleDelete = (id) => {

    if(email === user.email){
        fetch(`http://localhost:5000/assignment/${id}`,{
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.deletedCount> 0){
            const remainingData = userData.filter(item => item._id !== id)
             setuserData(remainingData); 
            Swal.fire(
                'successfully',
                'The item is deleted',
                'success'
              )

             
        }
    })
    }

    else{
        Swal.fire(
            'Error',
            'You can not delete this assignment because you are not the creator of it',
            'error'
          )
    }

   
  
       
}

    return (
        <div className="card w-[300px] bg-base-100 shadow-xl ml-[0px] md:ml-[50px] lg:ml-[35px] bg-green-200">
  <figure><img className="h-[200px] w-full" src={image} /></figure>
  <div className="card-body">
    <h2 className="card-title"><span className="font-bold">Title:</span>{title}</h2>
    <p><span className="font-bold">Description:</span> {description}</p>
    <p><span className="font-bold">Marks: </span> {marks}</p>
    <p><span className="font-bold">Difficulty: </span> {difficulty}</p>
    <p><span className="font-bold">Deu Date: </span> {date}</p>
    <p><span className="font-bold">Email: </span> {email}</p>
    <p className='flex items-center gap-[10px]'><span className="font-bold">Delete card: </span><RiDeleteBin5Fill onClick={() => handleDelete(_id)} className='text-[35px]'></RiDeleteBin5Fill></p>
   <div className='flex gap-[40px]'>
   <div className="card-actions">
      <Link to = {`/details/${_id}`}><button className="btn bg-orange-500 ">View Details</button></Link>
    </div>
    <div className="card-actions">
      <Link to = {`/update/${_id}`}><button className="btn bg-lime-300 px-[20px]">Update</button></Link>
    </div>
   </div>
  </div>
</div>
    );
};

export default AssignmentDetails;