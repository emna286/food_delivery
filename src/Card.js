import React from 'react'
import tacos from './photos/tacos.png'

export default function Card({name,price,photo}) {

  return (
    <div className="card" style={{width:"20rem"}}>
    <img src={photo} style={{width:"20rem",height:"15rem"}} className="card-img-top" alt=""/>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{price} </p>
      <a href="#" className="btn btn-primary">Add</a>
    </div>
  </div>
  )
}
