



const Story = () => {
    return (
        <div className=" mb-10 mt-10 ml-5 mr-5">

            <div className=" bg-no-repeat bg-cover p-28 rounded-xl "
            
            style={{
                backgroundImage: "url(  https://img.freepik.com/premium-photo/gourmet-dish-with-fresh-greens-vibrant-colors-dark-background-food-looks-elegant-artistic-perfect-food-styling-culinary-photography-enthusiasts-professional-food-photo-ai_372197-54044.jpg?w=826  )",
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
             <p className=" text-2xl font-mono  text-white mt-5">new restaurant</p>
             <p className=" text-5xl font-mono font-semibold mt-5 text-white">Where every <br></br>ingredient<br></br> tells a story</p>
             <button className=" transition duration-300 ease-in-out hover:scale-110 font-mono  btn bg-gradient-to-r from-[#e25822] to-yellow-500 text-white mt-5">READ MORE</button>
            </div>
            
            </div>











            </div>
            
        </div>
    );
};

export default Story;