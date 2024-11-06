import React, { Component } from 'react'

export class NewItem extends Component {
  render() {
    let {title , description , imageUrl , newUrl , Time , author} = this.props
    return (
      <div>
        <div className="card  m-4">
            <img src={!imageUrl?"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className='card-text'><small className='text-muted'>By {!author?"unkhown":author} on {new Date(Time).toTimeString()}</small></p>
                <a href={newUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewItem
