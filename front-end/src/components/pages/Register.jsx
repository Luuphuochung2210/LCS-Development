import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './Register.css';
import Footer from './Footer';
 
const schema = yup.object({
  name: yup.string().max(255).required('Name is required'),
  email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
  password: yup.string().max(255).required('Password is required'),
}).required();

const Register = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
 
  const onSubmit = data => console.log(data);
  return (
    <body>
    <div className="Register">
      <div className='form-box3'>
        <div className='button-box3'>
          <div id='btn3'></div>
            <a href="/login" className='Login-btn2'>Login</a>
            <a href="/register" className='Register-btn2'>Register</a>  
          </div>
            <div className='social-icons'>
             <img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.344/static/media/google-logo.e086107b.svg" alt=""></img> 
             <img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.344/static/media/microsoft-logo.42b61fa1.svg" alt=""></img>
             <img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.344/static/media/apple-logo.4f2453fb.svg" alt=""></img>
             </div>
          <form  onSubmit={handleSubmit(onSubmit)} id='register' className='input-group3'>
            <input {...register("name")} type="text" className="input-box3" placeholder='Your Name' required />
              <p>{errors.name?.message}</p>
            <input {...register("email")} type="email" className="input-box3" placeholder='Enter your Email' aria-describedby="emailHelp"  required/>
              <p>{errors.email?.message}</p>
            <input {...register("password")} type="password" className="input-box3" placeholder='Enter Password'  required/>
              <p>{errors.password?.message}</p>
            <button type='submit' className="submit-btn3">Register</button>
            <a href='/login' className='accounts'><i>Already have an account? Try log in!</i></a>
         </form>
        </div>
         <Footer />
      </div>
  </body>
  )
}

export default Register