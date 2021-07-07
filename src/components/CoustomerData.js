import React,{useState} from 'react';


const CoustomerData = () => {  
    return(
<div style={{textAlign:'center'}} >
    {/* table */}
    <input  type='Number'/>
    <button >transfer</button>
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
          <td>1000</td>
        </tr>
        <tr>
          <td>Mary</td>
          <td>Moe</td>
          <td>123</td>
        </tr>
        <tr>
          <td>July</td>
          <td>Dooley</td>
          <td>1400</td>
        </tr>
      </tbody>
    </table>
</div>
    )
}
export default CoustomerData;