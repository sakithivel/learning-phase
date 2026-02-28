import React from 'react';
import './Animesite.css'

const Animesite=()=>{
    return(
        <center>
        <div className='card'>
        <div className='str'>
        <h2>Sing In With Email</h2> </div>
        <div className='mess'>
         <p>Make a Aatabase With Json And Document With This Login</p> </div> 
         <form>
         <div className='control'>
          <div className='node'>   
            <div>Name:<input type="text" placeholder="Name" /></div>
            <div>Email:<input type="Email"placeholder="Enter your email"/></div>
            <div>Password:<input type="password"placeholder="Enetr your password"/></div>
            <div>Number:<input type="password" placeholder="phone number" /></div>
         </div>   
            <div><a href='#'className='forget'>Forget password..?</a></div>
            <div><button type="sumite">Log in</button></div>
         </div>
         </form>
         </div>
        </center>
        
    )
}
export default Animesite