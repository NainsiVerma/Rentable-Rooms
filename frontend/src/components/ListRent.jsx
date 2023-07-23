import React from 'react'
import rentData from './rentableData';

const ListRent = () => {



    return (
        <div>
            <h1 className='text-center'>Rent Spaces near You</h1>
            <div className='container'>
                {
                    rentData.map(rent => (
                        <div>
                            <div className="row mb-3 border ">
                                <div className="col-md-3">
                                    <img className='card-img-top' src={rent.image} />

                                </div>
                                <div className="col-md-9">
                                    <div className="card-body">
                                        <h2>{rent.name}</h2>
                                        <p>{rent.description}</p>
                                        <h5>Type : {rent.type}</h5>
                                        <p>Address : {rent.address}</p>

                                        <button className='btn btn-primary mt-3'>Rent Space</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ListRent;