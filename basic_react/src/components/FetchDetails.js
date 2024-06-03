import { useEffect, useState } from "react";

function FetchDetails() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("originalData");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      fetch("/../user.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data);
          localStorage.setItem("originalData", JSON.stringify(data));
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, []);

  function handleDelete(index) {
    console.log("index=", index);
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
    localStorage.setItem("originalData", JSON.stringify(updatedData));
  }

  return (
    <div>
      <button className="btn btn-primary">Create one More Field</button>
      <table className="table">
        <thead>
          <tr key="">
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone Number</td>
            <td>Modify</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.phone}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>{" "}
                &nbsp;&nbsp;
                <button className="btn btn-warning">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default FetchDetails;
