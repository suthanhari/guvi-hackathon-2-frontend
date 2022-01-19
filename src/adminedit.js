import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function Adminedit() {
    const params = useParams()

    const formik = useFormik({
        initialValues: {
            theatername: "",
            moviename: "",
            place: ""

        },
        onSubmit: async (values) => {
            try {
                await axios.post("http://localhost:3000/admin-create", values)

            } catch (error) {
                console.log(error);
            }

        }
    })

    useEffect(() => {
        const fetch = async () => {
            try {
                await axios.put(`http://localhost:3000/admin/${params.id}`)

            } catch (error) {
                console.log(error);
            }
        }
    }, [])

    return (
        <>
            <div className='row' >
                <div className='col-md-8'>

                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor='thetername' className='form=label'>Theater Name</label>
                        <input type={'text'} className='form-control'

                            name='theatername'
                            onChange={formik.handleChange}
                            value={formik.values.theatername} />
                        <label htmlFor='moviename' className='form=label'>Movie Name</label>
                        <input type={'text'} className='form-control'
                            name='moviename'
                            onChange={formik.handleChange}
                            value={formik.values.moviename} />
                        <label htmlFor='place' className='form=label'>Place</label>
                        <input type={'text'} className='form-control'
                            name='place'
                            onChange={formik.handleChange}
                            value={formik.values.place} />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Adminedit
