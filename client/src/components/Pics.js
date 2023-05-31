import React from "react"

export default function Pic(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.url} className="App-logo" alt="logo" />
      <p>{props.description}</p>
    </div>
  )
}