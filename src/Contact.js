import React from 'react'

const Contact = () =>{

  const formSubmit = ()=>{
    alert('We have got your response. The team will contact you soon')
  }

  return(
    <>
      <div className="my-3 text-center">
      <h1>Contact Us</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
          <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Full Name</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Jane Doe"/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Phone</label>
          <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="8011230001"/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Requirements</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Need a e-commerce website" rows="3"></textarea>
        </div>
        <button className="btn btn-outline-success" type="submit">Get Quotation</button>
          </form>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;