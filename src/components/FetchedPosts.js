import React from 'react';
import Post from './Post'

import {useDispatch, useSelector} from 'react-redux'
import { fetchPosts } from '../redux/actions';

const FeatchedPosts = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)

    console.log(posts)
    if (!posts.length) {
        return <button 
                className="btn btn-primary"
                onClick = {() => dispatch(fetchPosts())}
            >Загрузить</button>
    }

    return posts.map(el => <Post post={el} key={el.id} />)
}

export default FeatchedPosts