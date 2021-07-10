import { useState } from 'react'

const Banking1 = () => {

    const [ balance, setBalance] = useState({
            value1: 100,     
            value2: 200,
            value3:300
        })

    const handleForm = (e) => {
        e.preventDefault()

        console.log(e.target[0].value)
        console.log(e.target[1].value)
        console.log(e.target[2].value)

        const valueToUpdate = Number(e.target[2].value)

        if(e.target[1].value === 'Sanket Bhaiya' && e.target[0].value === 'Ashray') {

            // const newValue = balance.value1+valueToUpdate

            setBalance({...balance, value1 : balance.value1+valueToUpdate, value3: balance.value3-valueToUpdate })

        }
    }

    return (
        <div>
            <form onSubmit={handleForm}>
            <select>
                <option>Ashray</option>
                <option>Agaman</option>
                <option>Sanket Bhaiya</option>
            </select>
            <select>
                <option>Sanket Bhaiya</option>
                <option>Agaman</option>
                <option>Ashray</option>
            </select>

            <input></input>
            <button type='submit'>transfer</button>
            </form>

            <div>
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
                    <td>Ashray</td>
                    <td>Parmar</td>
                    <td>{balance.value1}</td>
                    </tr>
                <tr>
                <td>Aagman</td>
                <td>Suri</td>
                <td>{balance.value2}</td>
                </tr>
                <tr>
                <td>Sanket</td>
                <td>Khandekar</td>
                <td>{balance.value3}</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
    )
}

export default Banking1