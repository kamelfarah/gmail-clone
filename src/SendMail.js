import React from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { useForm } from 'react-hook-form';


function SendMail() {

  const {
    register,
    handleSubmit,
    watch,
    formState:{ errors },
  } = useForm();


  const dispatch=useDispatch();
  
  const onSubmit = (data) =>{
    console.log(data)

   }
 

  return (
    <div className='sendMail'>
        <div className="sendMail__header">
            <h3>New Message</h3>
            <CloseIcon onClick={() => dispatch(closeSendMessage())} className='sendMail__close'/>
        </div>

      <form  onSubmit={handleSubmit(onSubmit)}>
        <input
        type="text"
        placeholder="To"
        name="to"
        {...register('to', { required: true })}
      />
      {errors.to && <p className='sendMail__error'>This field is required</p>}

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        {...register('subject', { required: true })}
        
      />
      {errors.subject && <p className='sendMail__error'>This field is required</p>}

      <input
        type="text"
        name="message"
        placeholder="Message"
        className="sendMail__message"
        {...register('message', { required: true })}
        
      />
      {errors.message && <p className='sendMail__error'>This field is required</p>}
 
            <div className="sendMail__options">
                <Button variant='contained' color='primary'>send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail
