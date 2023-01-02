import React from 'react';
const Packages = () => {
  return (
    <div>

    <div className='Packages-Monthly'>
      <h1> We Have 1 Month Package Worth for <del>1500 /- ₹</del> Offer Price : 1000 ₹ </h1>
      <h1> We Have 3 Month Package Worth for <del> 3500 /- ₹</del> Offer Price : 2500 ₹ </h1>
      <button> Buy Now </button>
     </div>
    <div className='Packages-Annual'>
      <h1> We Have 6 Month Package Worth for <del>6500 /- ₹</del> Offer Price : 5000 ₹ </h1>
      <h1> We Have Annual Package Worth for <del>8500 /- ₹</del> Offer Price : 6000  ₹ </h1>
      <button> Buy Now </button>
    </div>
    </div>
  )
}

export default Packages
