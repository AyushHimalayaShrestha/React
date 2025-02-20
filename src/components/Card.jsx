import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
    return (
        <>

            <div className='container-fluid'>
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                        <div class="card">
                            <img src="/images/1.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <Link to='#' className='btn btn-success'>View Details</Link>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="/images/2.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <Link to='#' className='btn btn-success'>View Details</Link>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="/images/3.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <Link to='#' className='btn btn-success'>View Details</Link>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="images/4.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <Link to='#' className='btn btn-success'>View Details</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
