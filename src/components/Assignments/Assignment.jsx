import {FaFilter } from 'react-icons/fa';
import {useEffect, useState} from 'react'
import AssignmentDetails from "../AssignmentDetails/AssignmentDetails";


const Assignment = () => {

// pagination

    const [totalData,settotalData] = useState(0);
    const [itemPerPage ,setitemPerPage] = useState(5); 
    const [currentPage,setcurrentPage] = useState(0);  
 
   useEffect(() => {
     fetch('https://group-study-assignment-server.vercel.app/assignmentCount',{credentials:"include"})
     .then(res => res.json())
     .then(data => {
      settotalData(data.count);
     })
   },[])
   
 
   const numberOfPage = Math.ceil(totalData/itemPerPage);
  
    const pages = [];
   for(let i = 0; i<numberOfPage;i++){
     pages.push(i)
   }
   console.log(pages);

 


    // other thing

    const [userData,setuserData] = useState([]);

    useEffect(() => {
      fetch(`https://group-study-assignment-server.vercel.app/assignment?page=${currentPage}&size=${itemPerPage}`)
      .then(res => res.json())
      .then(data => {
        setuserData(data)
        console.log
      })
    },[currentPage,itemPerPage])
    
    


    // const [data,setdata] = useState(assiData);
    
    const filterData = (difficulty) =>{
      if(difficulty === "All")
       {
        fetch(`https://group-study-assignment-server.vercel.app/assignment?page=${currentPage}&size=${itemPerPage}`)
      .then(res => res.json())
      .then(data => {
        setuserData(data)
        console.log
      }) 
    }
    else{
      fetch(`https://group-study-assignment-server.vercel.app/assignment?page=${currentPage}&size=${itemPerPage}`)
      .then(res => res.json())
      .then(data => {
        
        const filterData = data.filter(item => item.difficulty === difficulty );
        setuserData(filterData);
      }) 
    }
       
        
       
    }

    return (
        <div>
            <div className="flex mt-[45px] items-center ml-[0px] md:ml-[25px] lg:ml-[450px]">
            <div>
                <h1 className="text-[30px] font-semibold text-cyan-400">You can filter this assignments according to their difficulty</h1>
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

      <h1 className="text-[40px] mt-[120px] mb-[30px] font-bold text-center text-orange-800 underline">Assignments</h1> 

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
        {
            userData.map(data => <AssignmentDetails key={data._id} data = {data} userData = {userData} setuserData = {setuserData} ></AssignmentDetails>)
        }
        </div> 

        <div className="mt-[20px] ml-[70px] md:ml-[350px] lg:ml-[800px] md:flex lg:flex">

          {
            pages.map(page => <button onClick={() => setcurrentPage(page)} className="bg-black hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 text-white font-bold ml-[10px] py-2 px-4 rounded" key = {page.id}>{page}</button>)
          }
        </div>
        </div>
        
    );
};

export default Assignment;