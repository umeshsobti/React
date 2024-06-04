import { useState } from "react";

function HooksForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [list, setList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  function handleSubmit() {
    const newItem = { name, email, age, phone };
    setList([...list, newItem]);

    setName("");
    setAge("");
    setEmail("");
    setPhone("");
  }

  function handleEdit(index){
    setEditingIndex(index);
    const item = list[index]
    setName(item.name)
    setEmail(item.email)
    setAge(item.age)
    setPhone(item.phone)
  }

  function handleSave(index){
    
    const item = list[index]
    console.log(item)
    item.name= name
    item.email = email
    item.age = age
    item.phone = phone
    
    setList([...list])

    setEditingIndex(null)

  }
  function handleCancel(index){
    setEditingIndex(null)
    setAge("")
    setName("")
    setEmail("")
    setPhone("")

  }

 

  return (
    <div>
      <label htmlFor="name">Enter Your Name: </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <label htmlFor="email">Enter Your Email: </label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <label htmlFor="age">Enter Your Age: </label>
      <input
        type="text"
        id="age"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <br />
      <label htmlFor="phone">Enter Your Phone: </label>
      <input
        type="text"
        id="phone"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            Name: {item.name} <br />
            Email: {item.email} <br />
            Age: {item.age} <br />
            Phone: {item.phone} <br />
            {editingIndex === index ? (
              <div>
                <button onClick={() => handleSave(index)}>Save</button>
                <button onClick={() => handleCancel(index)}>Cancel</button>
              </div>
            ) : (
              <button onClick={() => handleEdit(index)}>Edit</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HooksForm;