import React from "react";
import {Link} from "react-router-dom";

export const Card = () => (
    <div className="card">
        <div className="card-body">
            <img src={''} alt={''} className='card-img-top' />
            <h5 className="card-title">Title</h5>
            <Link
                to={'/profile/'}
                className="btn btn-primary">
                Открыть
            </Link>
        </div>
    </div>
)