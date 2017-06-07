import React from 'react'

const HelloWorld = ({ name }) => (
  <div className="page">
    <h1>Hello world</h1>
    <p>{`Hello everybody, I'm ${name}`}</p>
  </div>
)

export default HelloWorld