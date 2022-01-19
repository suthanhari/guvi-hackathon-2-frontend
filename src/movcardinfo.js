import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'


function Movcardinfo() {



    return (
        <>
            <div id='parent' className='position-relative'>
                <div className='banner'>
                    <img src="/eternals-banner.jpg" alt='banner'
                        className="d-block w-100 banner-img" Style={'height: 500px;'} />
                </div>
                <div className='position-absolute top-50 start-0 translate-middle-y mx-5 '>
                    <div class="card shadow bg-dark mb-3" Style="max-width: 750px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="/eternal-card.jpg" class="img-fluid rounded-start" alt="banner" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body text-white">
                                    <h1 class="card-title">Eternals</h1>
                                    <h5 class="card-text bg-light text-dark p-3 rounded d-flex justify-content-between">Add your ratings & review<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
                                        Rate now
                                    </button></h5>
                                    <p class="card-text"><strong class="text-muted">2h 35min</strong></p>
                                    <Link to={"/book-ticket"}>

                                    <button className='btn btn-info'><strong>Book Tickets</strong></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>









        </>
    )
}

export default Movcardinfo
