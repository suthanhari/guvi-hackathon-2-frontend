import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Admintheaerlist() {

    const [user, setUser] = useState([])

    useEffect(() => {
        const fetch = async () => {
            try {
                let adminData = await axios.get("http://localhost:3000/admin-theater")
                setUser(adminData.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetch()
    }, [])

    return (
        <>
            <div className='row'>
                <div className='col-md-8'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Theater Name</th>
                                <th scope="col">Movie Name</th>
                                <th scope="col">Place</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map((data) => {
                                    return <tr>
                                        <th scope="row">{data.index}</th>
                                        <td>{data.theatername}</td>
                                        <td>{data.mobiename}</td>
                                        <td>{data.place}</td>
                                        <td>
                                            <button className='bnt btn-primary'>Edit</button>
                                            <button className='bnt btn-primary'>Delete</button>
                                        </td>
                                    </tr>
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Admintheaerlist
