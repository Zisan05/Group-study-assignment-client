
const FeaturePage = () => {
    return (
        <div>
            <h1 className="text-[30px] font-bold text-center underline text-red-400 mt-[30px]">Our Purpose</h1>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:ml-[30px] lg:ml-[60px] gap-[20px] mt-[30px]">
        
            <div className="card card-compact w-[300px] bg-green-300 shadow-xl">
  <figure><img className="h-[170px] w-full" src="https://i.ibb.co/qrrvNSt/Knowledge-Management-Guidelines-Best-Practices.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className=" text-center text-[25px] font-bold text-lime-800">Knowledge gathering</h2>
   
  </div>
</div>
            <div className="card card-compact w-[300px] bg-gray-700 shadow-xl">
  <figure><img className="h-[170px] w-full" src="https://i.ibb.co/gPFrmN9/d19d5sz0wkl0lu-cloudfront.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className=" text-center text-[25px] font-bold text-yellow-200">Knowledge Sharing</h2>
   
  </div>
</div>
            <div className="card card-compact w-[300px] bg-orange-400 shadow-xl">
  <figure><img className="h-[170px] w-full" src="https://i.ibb.co/SwS4dKx/images.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className=" text-center text-[25px] font-bold text-orange-950">Knowledge Increasing</h2>
   
  </div>
</div>
 
 
         </div>
             
        </div>
    );
};

export default FeaturePage;