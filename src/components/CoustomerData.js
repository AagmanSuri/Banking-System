import React,{useState} from 'react';


const CoustomerData = () => {  

  
  //input which we are taking 
  const [inputValue,setInputValue] = useState()
  
  const baldict = [100,1,2];
  
  const inputHandeler = (event)=>{
    console.log(event.target.value);
    // console.log(bal1);
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
  const btnHandeler = () =>{
     console.log(dropdownValue1,dropdownValue2)
     console.log('dpvalue',{dropdownValue1})
     
  }
    return (
  <div>
    
    <select onChange={optionHandel1}>
      <option value="a">jhon</option>
      <option value="a">marry</option>
      <option value="a">july</option>
    </select>
    <select onChange={optionHandel2}>
      <option value="{bal1}">jhon</option>
      <option value="{bal2}">marry</option>
      <option value="{bal3}">july</option>
    </select>
    
    <p>first {dropdownValue1}</p>
    <p>second {dropdownValue2}</p>
    
  
    
    <h2>Balance</h2>
    
    {/* table */}
    <input onChange={inputHandeler} type='Number'/>
    <button onClick={btnHandeler} >transfer</button>
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
          <td>{baldict[0]}</td>
        </tr>
        <tr>
          <td>Mary</td>
          <td>Moe</td>
          <td>{baldict[1]}</td>
        </tr>
        <tr>
          <td>July</td>
          <td>Dooley</td>
          <td>{baldict[2]}</td>
        </tr>
      </tbody>
    </table>
</div>
    )
}
export default CoustomerData;