import React,{useState} from 'react';


const CoustomerData = () => {  

  const [bal1,setBal1]=useState(2);
  const [bal2,setBal2]=useState(3);
  const [bal3,setBal3]=useState(4);
  
  const inputHandeler = (event)=>{
    console.log(event.target.value);
    console.log(bal1);
    setBal1(prebal=>prebal+Number(event.target.value))
  }
    return (

  <div>
    <h2>Balance</h2>
    <input onChange={inputHandeler} type='Number'/>
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
          <td>{bal1}</td>
        </tr>
        <tr>
          <td>Mary</td>
          <td>Moe</td>
          <td>{bal2}</td>
        </tr>
        <tr>
          <td>July</td>
          <td>Dooley</td>
          <td>{bal3}</td>
        </tr>
      </tbody>
    </table>
</div>
    )
}

export default CoustomerData;
