import React, { Component } from 'react'
import Loading from "./loading.gif"
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-4'>
        <img src={Loading} style={{width:"70px"}} alt="loading" />
      </div>
    )
  }
}

export default Spinner
