import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
            <h1>Contact Us</h1>
          <form >
            <div className="Personal-details">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" required placeholder='John Doe' />
              <label htmlFor="email">Email</label>
              <input id="email" type="email" required placeholder='abc@xyz.com'/>
              <label htmlFor="mobile">Number</label>
              <input id="mobile" type="number" required maxLength='10' placeholder='XXXXXXXXXX' />
            </div>             
            <button>Request Call Back</button>
          </form>
    </div>
  )
}

export default Contact
