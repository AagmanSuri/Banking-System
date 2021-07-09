import React,{useState} from 'react';


const CoustomerData = () => {  
//initial balance state 
  const [bal,setbal]=useState({
    value1:2000,
    value2:600,
    value3:400
  });
  
  
//input which we are giving for amt
  const [inputValue,setInputValue] = useState()
  
  const inputHandeler = (event)=>{
    console.log(event.target.value);
    setInputValue(Number(event.target.value))
  }
  
  const [dropdownValue1,setdropdownVAlue1]=useState();

  const optionHandel1=(event)=>{
    setdropdownVAlue1(event.target.value)
  }

  const [dropdownValue2,setdropdownVAlue2]=useState();

  const optionHandel2=(event)=>{
    setdropdownVAlue2(event.target.value)
  }
  const transferHandeler = () =>{
    setbal({...bal,dropdownValue1:bal.dropdownValue1+inputValue,dropdownValue2:bal.dropdownValue2-inputValue})
    console.log(bal);
  }
 
    return (
  <div>
    
    <select onChange={optionHandel1}>
      <option value="value1">jhon</option>
      <option value="value2">marry</option>
      <option value="value3">july</option>
    </select>
    <select onChange={optionHandel2}>
      <option value="value1">jhon</option>
      <option value="value2">marry</option>
      <option value="value3">july</option>
    </select>
    
    <h1>first {dropdownValue1}</h1>
    <h1>second {dropdownValue2}</h1>
    
  
    
    <h2>Balance</h2>
    
    {/* table */}
    <h3>Transfer from person2 to person1</h3>
    <input onChange={inputHandeler} type='Number'/>
    <button onClick={transferHandeler} >transfer</button>
    <table>
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>{bal.value1}</td>
        </tr>
        <tr>
          <td>Mary</td>
          <td>Moe</td>
          <td>{bal.value2}</td>
        </tr>
        <tr>
          <td>July</td>
          <td>Dooley</td>
          <td>{bal.value3}</td>
        </tr>
      </tbody>
    </table>
</div>
    )
}
export default CoustomerData;