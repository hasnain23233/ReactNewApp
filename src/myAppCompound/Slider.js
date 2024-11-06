import React, { Component } from 'react'

export class Slider extends Component {
  render() {
    return (
      <div>
        <div id="carouselExampleCaptions" className="carousel slide bg-dark" style={{height:"400px" , marginTop:"30px"}} data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className='d-flex justify-content-between text-light align-items-cente'>
                        <div className='mt-3 p-5'>
                            <h3 style={{lineHeight:"2cm", fontWeight:"bolder"}}>Faisal Mosque in Islamabad, Pakistan</h3>
                            <p style={{ fontWeight:"bolder"}}>Faisal Mosque Islamabad, Faisal Avenue, E-8, Islamabad, Pakistan</p>
                            <p style={{ color:"lightgray"}}>Faisal Mosque is a famous mosque located in Islamabad, the capital city of Pakistan. It is one of the largest mosques in the world and can accommodate up to 100,000 worshippers at a time.</p>
                        </div>
                        <img src="https://images.unsplash.com/photo-1608020932658-d0e19a69580b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{height:"400px"}}  className="d-block w-50" alt="..."/>
                    </div>
                <div className="carousel-caption d-none d-md-block bg-dark">
                    <h5>Faisal Mosque in Islamabad, Pakistan</h5>
                    <p>Faisal Mosque Islamabad, Faisal Avenue, E-8, Islamabad, Pakistan</p>
                </div>
                </div>
                <div className="carousel-item">
                    <div className='d-flex justify-content-between text-light align-items-cente'>
                        <div className='mt-3 p-5'>
                            <h3 style={{lineHeight:"2cm", fontWeight:"bolder"}}>Pakistani Flag in the Air</h3>
                            <p style={{ fontWeight:"bolder"}}>Published on August 16, 2020</p>
                            <p style={{ color:"lightgray"}}>The Pakistani flag, with its green and white colors representing peace and prosperity, flutters gracefully in the air, symbolizing the nation's unity, faith, and discipline.</p>
                        </div>
                        <img src="https://images.unsplash.com/photo-1597543177355-e874cee9dee8?q=80&w=1465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{height:"400px"}}  className="d-block w-50" alt="..."/>
                    </div>
                <div className="carousel-caption d-none d-md-block bg-dark">
                    <h5>Pakistani Flag in the Air</h5>
                    <p>Published on August 16, 2020</p>
                </div>
                </div>
                <div className="carousel-item">
                    <div className='d-flex justify-content-between  text-light align-items-cente'>
                    <div className='mt-3 p-5'>
                            <h3 style={{lineHeight:"2cm", fontWeight:"bolder"}}>Faisal Mosque in Islamabad, Pakistan</h3>
                            <p style={{ fontWeight:"bolder"}}>Faisal Mosque Islamabad, Faisal Avenue, E-8, Islamabad, Pakistan</p>
                            <p style={{ color:"lightgray"}}>Faisal Mosque is a famous mosque located in Islamabad, the capital city of Pakistan. It is one of the largest mosques in the world and can accommodate up to 100,000 worshippers at a time.</p>
                        </div>
                        <img src="https://images.unsplash.com/photo-1605795733251-a0b6c96d9dea?q=80&w=1518&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{height:"400px"}}  className="d-block w-50" alt="..."/>
                    </div>
                <div className="carousel-caption d-none d-md-block bg-dark">
                    <h5>Faisal Mosque in Islamabad, Pakistan</h5>
                    <p>Faisal Mosque Islamabad, Faisal Avenue, E-8, Islamabad, Pakistan</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden  btn btn-dark">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden ">Next</span>
            </button>
        </div>
      </div>
    )
  }
}

export default Slider
