import React, { useEffect, useState } from 'react'
import Newform from './Newform'
import Displaydata from './Displaydata'

function Employee() {

    const [name, setName] = useState("")
    const [dep, setDep] = useState("")
    const [gen, setGen] = useState("")
    const [role, setRole] = useState("")
    const [salary, setSalary] = useState(0)
    const [data,setData] = useState([])
    const [fil,setFil] = useState([])

    

    const handleChange=(e,setSt)=>{
        setSt(e.target.value)
    }

    useEffect(() => {
      getData()
    }, [])
    


    const handleAdd = (e)=>{
        e.preventDefault()
        let payload = {
            name,
            dep,
            gen,
            role,
            salary
        }
        console.log(payload)
        payload = JSON.stringify(payload)
        fetch("https://fake-server-app-biswa.herokuapp.com/employee",{
            method: "POST",
            body:payload,
            headers: {"Content-Type":"application/json"}
        })
        .then(()=>{
            getData()
        })
        .catch((err)=>{console.log(err)});
        
    }


    const getData = ()=>{
        fetch("https://fake-server-app-biswa.herokuapp.com/employee")
        .then((data)=>data.json())
        .then((data)=>{setData(data)
            console.log(data)
            setFil(data)
        })
        .catch((err)=>{console.log(err)})
    }

    const filteredData = (filBy)=>{
        // getData()
        let newData = data.filter((elem)=>elem.dep==filBy)
        setFil(newData)
        if(filBy=='All'){
            setFil(data)
        }
    }

    const sortData=()=>{
        let newData = data.sort((a,b)=>a.salary-b.salary)
        console.log(newData)
        setFil([...newData])
       
    }
    const sortDes=()=>{
        let newData = data.sort((a,b)=>b.salary-a.salary)
        console.log(newData)
        setFil([...newData])
    }


  return (
    <div>
        <div style={{width: '100%',display: 'flex',alignItems: 'center',flexDirection:"column" ,marginBottom:"30px"}}>
        <Newform handleAdd ={handleAdd} handleChange={handleChange} name={name } dep = {dep} gen={gen} role={role} salary={salary} setName={setName} setDep={setDep} setGen={setGen} setRole={setRole} setSalary={setSalary} />
        </div>
        <button onClick={()=>{filteredData("All")}} >Show All DEPARTMENT</button>
        <button onClick={()=>{filteredData("MARKETING")}}>Show MARKETING</button>
        <button onClick={()=>{filteredData("HR")}}>Show HR</button>
        <button onClick={()=>{filteredData("IT")}}>Show IT</button>
        <button onClick={()=>{filteredData("FINANCE")}}>Show FINANCE</button>
        <button onClick={()=>sortData()}>Sort By Salary Ascending</button>
        <button onClick={()=>sortDes()}>Sort By Salary Descending</button>
        

        <div style={{width: '100%',display: 'flex',alignItems: 'center',flexDirection:"column",marginTop:"30px"}}>

        {fil?fil.map((e)=><Displaydata key={e.id} name={e.name} dep={e.dep} gen={e.gen} role={e.role} salary={e.salary}/>):"ADD SOME EMPLOYEES"}
        </div>
    </div>

  )
}

export default Employee