

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Keep = () => {


  const notifySuccess = () => toast.success("Date SuccessFully");
  const notifyError = () => toast.error("Date Failed");

  const onSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);

    formData.append("access_key", "e87151e8-7baa-471d-b58a-0bd71fe1cd67");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      notifySuccess();
      event.target.reset();
    } else {
      notifyError();
      setResult(data.message);
    }
  };





    return (
        <div className=" mb-10 mt-10 ml-5 mr-5">


          <form onSubmit={onSubmit} >


            
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
               <input className=" h-[50px] w-[400px] rounded-xl p-2 " placeholder=' Keep up to date with us '  type="text" required />
               <input className="  btn  bg-green-400 text-white" type="submit" value="Submit" />
               <ToastContainer></ToastContainer>
              </div>
            </div>
            </div>
            </div>



          </form>

            
        </div>
    );
};

export default Keep;