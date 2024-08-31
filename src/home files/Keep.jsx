

const Keep = () => {
    return (
        <div className=" mb-10 mt-10 ml-5 mr-5">

            <div className=" bg-no-repeat bg-cover p-20 bg-fixed "
            
            style={{
                backgroundImage: "url(  https://img.freepik.com/free-photo/vintage-old-rustic-cutlery-dark_1220-4886.jpg?t=st=1725075939~exp=1725079539~hmac=3f9d8fc81590fd91255b6210a849fc809894a4935bc70f6417930f32d09648bb&w=740  )",
              }}
            
            
            >


             


            <div className="  bg-gradient-to-r from-black p-3">

            <div className=" transition duration-300 ease-in-out hover:scale-110 flex justify-center bg-green-400 p-1 rounded-full w-[150px] h-[150px] ">
            <div className=" mt-5">
              <p className=" text-center font-mono text-2xl font-semibold">40%<br></br>
             </p>
             <p className=" text-center font-mono text-2xl  "> business lunch</p>
            </div>
            </div>
            
            <div>
            
             <p className=" text-5xl font-mono font-semibold mt-5 text-white">Keep up to date with us</p>
              
              <div className=" mt-5 flex items-center gap-2">

               <input className=" h-[50px] w-[400px] rounded-xl "  type="text" required />

               <input className="  btn  bg-green-400 text-white" type="submit" value="Submit" />

              </div>
           
            </div>
            
            </div>













            </div>
            
        </div>
    );
};

export default Keep;