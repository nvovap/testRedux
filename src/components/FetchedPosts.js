import React from 'react';
import Post from './Post'

const featchedPosts = ({ posts }) => {
    if (!posts.length) return <button className="btn btn-primary">Загрузить</button>
    return posts.map(el => <Post post={el} key={el} />)
}

export default featchedPosts