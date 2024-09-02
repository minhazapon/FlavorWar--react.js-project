

const Contact = () => {
    return (
        <div className=" mb-10 mt-10 ml-5 mr-5">

            <div>

             <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-10">



             <div className=" bg-gradient-to-r from-cyan-400 to-blue-900  w-[500px]  h-[480px] p-5 rounded-xl"
            >
            <div className=" ">

              <div className="  ml-64  transition duration-300 ease-in-out hover:scale-110 flex justify-center bg-black p-1 rounded-full w-[150px] h-[150px] ">
              <div className=" mt-5">
                <p className=" text-white text-center font-mono text-2xl font-semibold">40%<br></br>
               </p>
               <p className=" text-white text-center font-mono text-2xl  "> business lunch</p>
              </div>
              </div>
              
              <div>
               <p className=" text-2xl font-mono  text-white mt-5">new restaurant</p>
               <p className=" text-7xl font-mono font-bold mt-5  text-white">Our Contact</p>
               <button className=" transition duration-300 ease-in-out hover:scale-110 font-mono  btn bg-black text-white mt-5">READ MORE</button>
              </div>

            </div>
            </div>



          {/* ----------------------------------------------------- */}



             <div className=" bg-white w-[500px]  h-[480px] p-10 rounded-xl text-black">

               <div className=" flex items-center gap-10">
                 <div>
                    <img className="  h-[40px] w-[40px]" src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="" />
                 </div>
                
                 <div>
                    <p className=" text-xl font-mono text-white">Chart to us</p>
                    <p className=" text-xl mt-3 font-mono text-black">Our friendly team is here to help.</p>
                    <p className=" text-xl mt-3 font-mono text-black">flavorWar@gmail.com</p>
                 </div>
               </div>


               <div className=" flex items-center gap-10">
                 <div>
                  <img className="h-[40px] w-[40px]" src="https://cdn-icons-png.flaticon.com/128/2991/2991231.png" alt="" />
                 </div>
                 
                 <div>
                    <p className=" text-xl font-mono text-white">Office</p>
                    <p className=" text-xl mt-3 font-mono text-black">Come say hello at our office HQ.</p>
                    <p className=" text-xl mt-3 font-mono text-black">Jhenaidah, Dhaka, Bangladesh</p>
                  
                 </div>
               </div>



               <div className=" flex items-center gap-10">
                 <div>
                 <img className=" h-[40px] w-[40px]" src="https://cdn-icons-png.flaticon.com/128/3059/3059590.png" alt="" />
                 </div>
                 
                 <div>
                    <p className=" text-xl font-mono text-white">Phone</p>
                    <p className=" text-xl mt-3 font-mono text-black">Mon-Fri from 8am to 5am</p>
                    <p className=" text-xl mt-3 font-mono text-black">+8801950374409</p>
                 </div>
               </div>






             </div>












             </div>







            </div>
            
        </div>
    );
};

export default Contact;