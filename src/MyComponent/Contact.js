import React from 'react'
import Photo from '../assets/5.jpg'

export default function Contact() {
  return (
    <div className='container-sm' style={{height:'500px',backgroundSize:'cover',margin:'0px',paddingLeft:'0px'}}>
      
     
      <div className="container" style={{width: '804px',height: '497px',float:'right'}}><h1 style={{color:'#503608',WebkitTextStroke:'2px red'}}>Contact Us</h1>
        <div className="mb-3" >
          <label htmlFor="formGroupExampleInput" className="form-label" style={{paddingRight:'701px'}}>Full Name</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Full Name"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label" style={{paddingRight:'675px'}}>Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{paddingRight:'701px'}}>Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" placeholder='Anything For Us?'></textarea>
        </div>
        <button style={{backgroundColor:'#503608',color:'white',borderRadius:'5px'}}>Submit</button>
      </div>
        <div className="image" style={{backgroundImage:`url(${Photo})`,width:'500px',height:'498px',backgroundSize:'cover'}}></div>
        

      
    </div>
  )
}
