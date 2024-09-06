

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const ContactBanner = () => {

  const notifySuccess = () => toast.success("Contact SuccessFully");
  const notifyError = () => toast.error("Contact Failed");

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


            <div>
                <p className=" text-center text-white  text-5xl font-mono font-bold">Contact Us</p>
                <p className=" text-center mt-5 text-xl font-mono text-white ">Article evident arrived express highest men did boy.<br></br> Mistress sensible entirely am so. Quick can<br></br> manor smart money hopes worth too. Comfort<br></br>produce husband boy her had hearing. <br></br>Law others theirs passed but wishes. </p>
            </div>



            <div className=" flex-col md:flex-row lg:flex-row mt-10 flex justify-center">


            <div className=" flex justify-center">


            <form onSubmit={onSubmit}>
             <div>
               <p className=" text-xl font-mono text-white">Name</p>
               <input placeholder="Enter Your Name" className=" p-3 h-[50px] w-[400px] rounded-xl border-[1px] border-blue-800 " name="text" required type="text" />
             </div>

             <div>
               <p className=" mt-5 text-xl font-mono text-white">Email</p>
               <input placeholder="Enter Your Email" className=" p-3 h-[50px] w-[400px] rounded-xl border-[1px] border-blue-800 "  type="email" required name="email" id="" />
             </div>
    
             <div>
               <p className=" mt-5 text-xl font-mono text-white">Message</p>
               <textarea placeholder="Enter Your Message" className=" p-3 h-[200px] w-[400px] rounded-xl border-[1px] border-blue-800 " name="message" required id=""></textarea>
             </div>

             <div>
                <input  className=" mt-5 h-[30px] w-[400px] text-white btn bg-blue-800" type="submit"  value="Submit" />
                <ToastContainer />

             </div> 
             </form>






            </div>

















            </div>

 








            </div>

            
        </div>
    );
};

export default ContactBanner;