import React from 'react'
import { Link } from 'react-router-dom'

function Carousel() {
    return (
        <>
            <div class="container-fluid mb-3">
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner" >
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src="/eternals-banner.jpg" class="d-block w-100 " alt="..." />
                            <Link to="/book-ticket">
                                <button type="button" class="btn btn-info" data-bs-toggle="tooltip" data-bs-placement="top" title="movie: Eternals">
                                    <i class="fas fa-ticket-alt"></i> Book-Eternals
                                </button>
                            </Link>

                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="/siva-banner.jpg" class="d-block w-100 " alt="..." />
                            <Link to="/book-ticket">
                                <button class="btn btn-info" data-bs-toggle="tool-tip" data-bs-placement="top" title='Movie: Sivakumarin-sabhatham'><i class="fas fa-ticket-alt"></i> Book-Sivakumarin sabtham</button>

                            </Link>

                        </div>
                        <div class="carousel-item">
                            <img src="/pushpa.jpeg" class="d-block w-100 " alt="..." />
                            <Link to="book-ticket">
                                <button class="btn btn-info" data-bs-toggle="tool-tip" data-bs-placement="top" title='Movie: Pushpa'><i class="fas fa-ticket-alt"></i> Book-Pushpa</button>

                            </Link>


                        </div>

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Carousel
