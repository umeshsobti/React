import { useState } from "react";

function Form(){
    const [name , setName] = useState();
    const[age , setAge] = useState();
    const[email, setEmail] = useState();
    const[password,setPassword] = useState();

    function handleSubmit(){
        if(name.length<4){
            alert("Name is Invalid")
        }
        const nameRegex = /^[A-Za-z]+$/
        if(!nameRegex.test(name)){
            alert("Name can contain only alphabets.")
        }
        
        
        const ageRegex = /^[0-9]{1,2}$/;
        if(!ageRegex.test(age)){
            alert("Age Can not contain alphabets and it can contain maximum 2 digits");
        }

        const emailRegex = /^[A-Za-z0-9.]{4,}[@][A-Za-z0-9.]+[.]com$/;
     
        if(!emailRegex.test(email)){
            alert("Invalid Email Format");
        }

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,20}$/;
        if(!passwordRegex.test(password)){
            alert("Password Format does not match")
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
            <h1>React Form</h1>
            <label>
                Name: 
            </label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

            <label>Age</label>
            <input type="text" value={age} onChange={(e)=>setAge(e.target.value)}/>

            <label>Email Address: </label>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />

            <label>Password: </label>
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <button type="submit">Submit</button>
        </div>

        </form>
    )
}

export default Form;