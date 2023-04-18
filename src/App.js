// In simple js file it will not give any output but in React js file it will give the output

import React,{useState} from 'react'
import emailjs from 'emailjs-com'
import './App.css'

function App(){
  const [data,setData] = useState({
    subject:"",
    from_name:"",
    email:"",
    message:"",
    phone:"",
  })
  const {subject,from_name, email,message,phone} = data;
  const onChange = e => {
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const submitHandler = e => {
    e.preventDefault();
    emailjs.sendForm('service_k8par4z', 'template_thq985s', e.target , '3ZEwERPJS7LwnAFCV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  }
  return (
    <div>
      <center>
        <h3 className='first-head'> QUERY SUBMISSION FORM</h3>
        <form onSubmit={submitHandler}>
        <label for="from_name"> Name: </label> 
          <input type = "text" name="from_name" value={from_name} onChange={onChange} placeholder='Your good name' required/>
          <label for="subject"> Subject: </label>
          <input type = "text" name="subject" value={subject} onChange={onChange} placeholder='Subject' required/>
          <label for="email"> Email: </label>
          <input type = "email" name="email" value={email} onChange={onChange} placeholder='Email' required/>

          <label for="message"> Message: </label>
          <input type = "text" name="message" value={message} onChange={onChange} placeholder='Your Message' required/>

          <label for="phone"> Mobile: </label>
          <input type = "number" name="phone" value={phone} onChange={onChange} placeholder='Phone number' required/>
          <input type="submit" name="submit" className='button'/>
        </form>
      </center>
    </div>
  )
}

export default App