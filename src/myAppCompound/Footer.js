import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className='bg-dark border'>
        <div>
            <nav className='d-flex justify-content-center'>
                <a href="#" className='link-light m-3 p-3'>Home</a>
                <a href="#" className='link-light m-3 p-3'>Contact</a>
                <a href="#" className='link-light m-3 p-3'>Service</a>
                <a href="#" className='link-light m-3 p-3'>Api</a>
            </nav>
        </div>
        <div >
            <p className='text-light'>CopyRight by &copy; Hasnain khushi</p>
        </div>
      </div>
    )
  }
}

export default Footer
