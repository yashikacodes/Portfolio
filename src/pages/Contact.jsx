import {React, useRef, useState} from 'react'
import emailjs from '@emailjs/browser'; 

const Contact = () => {

  const formRef = useRef(null);
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  //to control the fox if we focus on a particular field
  const handleFocus = (e) => {};
  //to control the fox if we move out of a particular field
  const handleBlur = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        //set all the things included in email template which we set in emailjs.
        from_name: form.name,
        to_name: "Yashika",
        from_email: form.email,
        to_email: "yashika2294@gmail.com",
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        setIsLoading(false);
        //TODO: Show a success message
        //TODO: Hide the alert

        setForm({name: '', email: '', message: ''});
      }).catch((error) => {
        setIsLoading(false);
        console.error(error);
        //TODO: Show error message
      })

  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Let's Connect</h1>

        <form className='w-full flex flex-col gap-7 mt-14'onSubmit={handleSubmit}>
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder = 'John' required
              value = {form.name}
              onChange = {handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              />
          </label>

          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder = 'john@gmail.com' required
              value = {form.email}
              onChange = {handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              />
          </label>

          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows={4}
              className='textarea'
              placeholder = 'Send me a message...' required
              value = {form.message}
              onChange = {handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              />
          </label>
          <button type= "submit" className = "btn" onFocus={handleFocus} onBlur = {handleBlur}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
    
  )
}

export default Contact