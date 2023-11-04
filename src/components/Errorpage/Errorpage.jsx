import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div>
            <div>
                <img className="h-[300px] ml-[400px]" src="https://i.ibb.co/Lp2tZB3/1200px-Error-svg.png" alt="" />
            <h1 className="text-4xl text-center mt-[70px] text-red-600 font-bold ">404- It is A ERROR!!!</h1><br />
            <h1 className="text-4xl text-center text-red-600 font-bold">Please Click in go to home button</h1>
            <Link to = {'/'}><button className="btn ml-[500px] mt-[50px] bg-red-600 hover:bg-green-500">Go To Home</button></Link>
        </div>
        </div>
    );
};

export default Errorpage;