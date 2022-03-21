import React from 'react'

function Displaydata({key,name,dep,gen,role,salary}) {
  return (
    <div key={key} style={{width:"400px",height:"300px",border:"1px solid green",textAlign:"left"}}>
        <p>Name:{name}</p>
        <p>Department:{dep}</p>
        <p>Gender:{gen}</p>
        <p>Role;{role}</p>
        <p>Salary:{salary}</p>
    </div>
  )
}

export default Displaydata