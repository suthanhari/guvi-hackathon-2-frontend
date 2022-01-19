import React from 'react'
import { Link, useParams } from 'react-router-dom'


function Recmoviescard() {
    
    const params = useParams()
    

    return (


        <>

            <div className='row'>
                <h4>Recomended Movies</h4>

              

                         <div className='col-md-12 d-flex justify-content-around' id="scrollmenu" >

                            <a>
                                <div className='card shadow me-2' Style="width: 14rem;">
                                    <Link to={`/movie-info/${params.id}`}>
                                        <img src='/Naai-Sekar.jpg' alt='moviename' className='card-img-top rounded' />
                                    </Link>

                                    <div className='card-body'>
                                        <h5 className='card-title' Style="color:black;">Naai Sekar</h5>
                                        <span className='text-muted'>Tamil</span>
                                    </div>
                                </div>
                            </a>

                        </div>

                
            </div>

        </>

    )
}

export default Recmoviescard


































