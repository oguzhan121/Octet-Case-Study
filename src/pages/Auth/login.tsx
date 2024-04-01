// import Input from '../../components/Input'
import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Button from '../../components/Button'
import { useNavigate } from "react-router-dom"

type FormInputs = {
  email: string;
  password: string;
};


export default function Login() {
  const navigate = useNavigate();

  const schema = yup
    .object()
    .shape({
      email: yup.string().email("Email is format is not valid").required('Email is Required!'),
      password: yup
        .string()
        .required('Password is Required')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .min(8)
        .max(15)

    })

  const onSubmit = (data: FormInputs) => {
    interface User {
      email: string;
      password: string;
    }
    
    const user: User = {
      email: 'admin@octet.com.tr',
      password: 'Octet123546',
    };
    if(user.email === data.email || user.password===data.password){
      localStorage.setItem('user',`${true}`)
      navigate("/");
    }

  };


  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>(
    {
      resolver: yupResolver(schema),
    }
  );


  return (
    <div className="center-screen">
      <h1 className="login-page-title">Movies App</h1>
      <div className="login">
        <div className="login-wrap">
          <div className="login-card">
            <h2 className="login-title">Giriş Yap</h2>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
              <input type="text" className="form-input" placeholder='Eposta' {...register('email')} />
              <p className="error-message">{errors.email?.message}</p>
              <input type="password" className="form-input" placeholder='Password' {...register('password')} />
              <p className="error-message">{errors.password?.message}</p>
              <Button label="Giriş" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
