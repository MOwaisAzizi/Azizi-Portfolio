// import React from 'react'
// import './contact.css'
// import Swal from 'sweetalert2'

// function Contact() {

//     const onSubmit = async (event) => {
//         event.preventDefault();
//         const formData = new FormData(event.target);
    
//         formData.append("access_key", "0039c595-6a81-46f7-8cba-c790ceb4b732");
    
//         const object = Object.fromEntries(formData);
//         const json = JSON.stringify(object);
    
//         const res = await fetch("https://api.web3forms.com/submit", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//           },
//           body: json
//         }).then((res) => res.json());
        

//         if (res.success) {
//           console.log("Success", res);
//           Swal.fire({
//             title: "Success!",
//             text: "Message Sent Successfully!",
//             icon: "success"
//           });
//         }
//       };


//     return (
//         <section className='mt-40' id='contact'>
//             <h3 className='text-white text-1xl hover:opacity-70 text-center'>Get in touch</h3>
//             <h1 className='text-white text-5xl hover:opacity-70 text-center'>Contact Me</h1>

//             <div className="mt-8 mb-40">

//                 <form onSubmit={onSubmit} className='grid grid-flow-row gap-3'>
//                     <div className="flex flex-col gap-2">
//                         <p className='text-white'>Enter Name :</p>
//                         <input type="text" className='outline-none p-2 rounded-md feilds' name='name' required/>
//                     </div>
//                     <div className="flex flex-col gap-2">
//                         <p className='text-white'>Enter Email :</p>
//                         <input type="email" className='outline-none p-2 rounded-md feilds' name='email' required/>
//                     </div>
//                     <div className="flex flex-col gap-2">
//                         <p className='text-white'>Enter Message :</p>
//                         <textarea name="message" id="" className='outline-none h-[300px] p-5 resize-none rounded-md feilds' required></textarea>
//                     </div>

//                     <div className="flex flex-col items-center mt-6">
//                         <button type='submit' className='text-1xl text-white font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 p-2 w-48 rounded-md hover:text-black duration-300 '>Submit</button>
//                     </div>
                    
//                 </form>


//             </div>
//         </section>
//     )
// }

// export default Contact


import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser'

const Contact = () => {

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
    
  //   formData.append("access_key", "3aa15a33-2b36-4eb9-9859-b55b7a6d76d2");
    
  //   const object = Object.fromEntries(formData);
  //   const json = JSON.stringify(object);
    
  //   try {
  //     const res = await fetch("https://api.web3forms.com/submit", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json"
  //       },
  //       body: json
  //     }).then((res) => res.json());
      
  //     if (res.success) {
  //       console.log("Success", res);
  //       Swal.fire({
  //         title: "Success!",
  //         text: "Message Sent Successfully!",
  //         icon: "success"
  //       });
  //       event.target.reset();
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_wbk8n58', 'template_cd72onu', e.target, 'D6YlJfjXbdiipAnl2')
    alert('Your Data Sended')
  }

  return (
    <section className="text-white mb-0 flex flex-col items-center justify-center p-40" id="contact">
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <Box sx={{ 
  minHeight: '40vh', 
  background: 'linear-gradient(to top, #000000, #4B0082, #000000, #000000)', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  padding: '3rem 5rem',
  backgroundSize: '100% 100%, 100% 100%', 
  backgroundPosition: 'center center, left center', 
  backgroundRepeat: 'no-repeat', 
}}>

          <div className="w-full max-w-md mx-4">
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                Get in touch
              </Typography>
              <Typography variant="h2" sx={{ color: 'white', fontWeight: 'bold' }}>
                Contact Me
              </Typography>
            </Box>

            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <TextField
                  label="Enter Name"
                  name="name"
                  required
                  fullWidth
                  variant="outlined"
                  sx={{
                    marginBottom: '16px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    '& .MuiInputBase-root': {
                      borderRadius: '8px',
                    },
                  }}
                />
              </div>

              <div>
                <TextField
                  label="Enter Email"
                  name="email"
                  required
                  fullWidth
                  variant="outlined"
                  sx={{
                    marginBottom: '16px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    '& .MuiInputBase-root': {
                      borderRadius: '8px',
                    },
                  }}
                />
              </div>

              <div>
                <TextField
                  label="Enter Message"
                  name="message"
                  required
                  multiline
                  rows={4}
                  fullWidth
                  variant="outlined"
                  sx={{
                    marginBottom: '16px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    '& .MuiInputBase-root': {
                      borderRadius: '8px',
                    },
                  }}
                />
              </div>

              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    padding: '10px 20px',
                    borderRadius: '8px',
                    background: 'linear-gradient(45deg, #6a1b9a, #8e24aa)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #8e24aa, #6a1b9a)',
                    },
                  }}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </Box>
      </Container>
    </React.Fragment>
    </section>
  );
};

export default Contact;