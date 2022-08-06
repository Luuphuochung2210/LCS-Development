import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { forgotPassword } from '../../api/resetPassword';
import './ForgotPassword.css';
import Footer from './Footer';

const schema = yup.object({
  email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
}).required();

const ForgotPassword = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => {{
      forgotPassword(data).then(resolve =>console.log("thanh cong"))
      .catch(err =>{
        console.log(err.response.status)
      })
  }}

  return (
    <div className="ForgotP">
        <form className='form-box2'>       
         <div className='Title-name'>
          <h2>LCS</h2> <hr className='line'></hr>
          <h3>Forgot Password</h3>
          </div>  
          <form onSubmit={handleSubmit(onSubmit)} id='forgot' className='input-group2'>          
            <label htmlFor="exampleInputEmail1" className="form-label"> <i class="fas fa-lock">Email address:</i></label>
            <input {...register("email")} type='email' className="input-box2" aria-describedby="emailHelp" placeholder='Enter your email' required></input>
            <p>{errors.email?.message}</p>
            <button type='submit' className="submit-btn2">Send</button><hr></hr>
            <a href='/Login' className='accounts2'><ul>Back to Login</ul></a>
          </form>
        </form> 
        <Footer/>
    </div>

      )
  }
export default ForgotPassword