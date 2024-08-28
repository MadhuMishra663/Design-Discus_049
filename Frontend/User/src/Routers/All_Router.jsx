import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Cookie } from '../Components/Cookie'
import { PagenotFound } from '../Components/PagenotFound'

import { RegisterPage } from '../Pages/RegisterPage'
import { LoginPage } from '../Pages/LoginPage'
import { ForgetPasswordPage } from '../Pages/ForgetPasswordPage'
import { HomePage } from '../Pages/HomePage'

export const All_Router = () => {
  return (
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/login' element={<LoginPage/>} />
    <Route path='/register' element={<RegisterPage/>} />
    <Route path='/forget_password' element={<ForgetPasswordPage/>} />
    <Route path='/forget_password/:token' element={<ForgetPasswordPage />} />
    <Route path='/session' element={<Cookie/>} />
    <Route path='/*' element={<PagenotFound/>}/>
   </Routes>
  )
}
