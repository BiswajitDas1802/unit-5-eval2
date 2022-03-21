import React from 'react'

function Newform({handleAdd, handleChange, name ,dep, gen, role, salary ,setName,setDep,setGen,setRole,setSalary}) {


   
  return (
    <div>
        <form>
        <input type="text" value={name}  onChange={(e)=>handleChange(e,setName)}   placeholder="Name" />
        <select type="text" value={dep}   onChange={(e)=>handleChange(e,setDep)}  placeholder="Department" >
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="FINANCE">FINANCE</option>
            <option value="MARKETING">MARKETING</option>
        </select>
        <input type="text"  value={gen} onChange={(e)=>handleChange(e,setGen)}  placeholder="Gender" />
        <input type="text" value={role}  onChange={(e)=>handleChange(e,setRole)}   placeholder="Role" />
        <input type="number" value={salary} onChange={(e)=>handleChange(e,setSalary)} placeholder="Salary" />
        <button onClick={(e)=>handleAdd(e)}>Add Employee</button>
        </form>
    </div>
  )
}

export default Newform