
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Join = () => {


    const notifySuccess = () => toast.success("Join SuccessFully");
    const notifyError = () => toast.error("Join Failed");
  
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

            <div>

            
            <form onSubmit={onSubmit} >
                

            <div className=" bg-gradient-to-r from-cyan-300 to-blue-800 p-10 rounded-2xl text-white text-center">
                <p className=" text-5xl font-mono" >Keep up to date with us</p>
                <p className=" text-xl mt-5 font-mono" >"Eat well, travel often." — Unknown</p>
                <div className=" flex-col md:flex-row mt-10 flex justify-center items-center gap-2">
                    <input placeholder="Enter Your Name"   required className=" p-2 h-[50px]  w-[300px] border-[1px] rounded-xl" type="text" name="name" />
                    <input  placeholder="Enter Your Email" required className=" p-2 h-[50px]  w-[300px] border-[1px] rounded-xl" type="email" name="email" id="" />
                    <input className=" btn " type="submit" value="Submit" />
                    <ToastContainer></ToastContainer>
                </div>
              </div>


            </form>

            





            </div>
            
        </div>
    );
};

export default Join;