import React from 'react';

 const posts = ({ post }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Card title {post}</h5>
            </div>
        </div>
    )
}

export default posts