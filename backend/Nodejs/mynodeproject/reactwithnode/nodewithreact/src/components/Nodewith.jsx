import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css'

const Nodewith = () => {
    const [data, setdata] = useState([])

    useEffect(() => {
        fetch("http://localhost:8883/")
            .then(respones => respones.json())
            .then(data => setdata(data))
    }, [])


    return (
        <div>
            <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>address</th>
                    <th>degree</th>
                    <th>work</th>
                </tr>
                {
                    data.map((item, index) => {
                        return (

                            <tr key={index}>

                                <td>{item.id}</td>


                                <td> {item.name}</td>


                                <td> {item.age}</td>



                                <td> {item.address}</td>


                                <td> {item.degree}</td>


                                <td> {item.work}</td>

                            </tr>



                        )
                    })
                }
            </table>
        </div>
    )
}

export default Nodewith
