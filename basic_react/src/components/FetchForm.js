import { useState } from "react"
import axios from "axios"
function FetchForm(){
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [age,setAge] = useState();
    const [phone,setPhone] = useState();
    function postData(e){
            e.preventDefault()        
            axios.post("user.json", {
                name,
                email,
                age,
                phone
            }).then(response=>{
                console.log("Success")
            }).catch(error=>{
                console.log("Error")
            })

    }
    return(
       
        <div>
            <form onSubmit={postData}>
                <label htmlFor="name">Enter Your Name: </label>
                <input type="text" onChange={(e)=>{
                    setName(e.target.value)
                }} name="name" id="name"/>
                <label htmlFor="email">Enter your Email: </label>
                <input type="text" name="email" id="email" onChange={(e)=>{
                    setEmail(e.target.value)
                }} />
                <label htmlFor="age">Enter your Age: </label>
                <input type="text" name="age" id="age" onChange={(e)=>{
                    setAge(e.target.value)
                }} />
                <label htmlFor="phone">Enter Your Phone: </label>
                <input type="text" id="phone" name="phone" onChange={(e)=>{
                    setPhone(e.target.value)
                }}/>
                <button type="submit">Submit Data</button>
            </form>
        </div>
    )
}
export default FetchForm;