import React from 'react'
import Card from './Card'
import web from '../src/Images/web.jpg'
import android from '../src/Images/Androidss.jpg'
import IOS from '../src/Images/IOS.png'
import Video from '../src/Images/video.jpg'
import Digital from '../src/Images/digital.jpg'
import Ecom from '../src/Images/ecom.jpg'
import './Service.css'


const Service = () =>{
  return(
    <>
      <div className='my-5'>
        <h1 className="text-center"> Our Services </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
        <div className="col-10 mx-auto">
  <div className="row gy-4">
            <Card title='Website Design' text='Websites are always considered as the key element of a buisness. Kick start your business with a proffesional looking website and get more sales today.' btnText='Order Now' img={web} />
            <Card title='Android App' text='Looking to showcase your ideas in mobile also. Get the andriod app now and get it published today and build your brand to drive more sales and get noticed' btnText='Order Now' img={android} />
            <Card title='IOS App' text='Is your customer above middle class using apple products, Show your brand to them by getting your own app published on app store.' btnText='Order Now' img={IOS} />
            <Card title='Personalized Software' text='We understand the need of a software if you are running your local business. Now track your sales and company data using a personalized software' btnText='Order Now' img={Ecom} />
            <Card title='Digital Marketing' text='Started your business but not getting sales! Here we go we offer an end to end digital marketing solution very personalized for your business so that you grow' btnText='Order Now' img={Digital} />
            <Card title='Video Editing' text='Are you a digital creator are you trying to build a best video for your business. We offer the best video editing from our team in lowest rate guaranteed' btnText='Order Now' img={Video} />
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Service;