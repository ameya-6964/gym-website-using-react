import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
            <h1>Contact Us</h1>
          <form >
            <div className="Personal-details">
              <label for="name">Name</label>
              <input id="name" type="text" required/>
              <label for="email">Email</label>
              <input id="email" type="email" required />
              <label for="mobile">Number</label>
              <input id="Mobile" type="number" required />
            </div>             
            <button>Request Call Back</button>
          </form>
    </div>
  )
}

export default Contact
