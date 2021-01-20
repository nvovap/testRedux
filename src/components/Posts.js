import React from 'react'
import Post from './Post'
import {connect} from 'react-redux'

const posts = ({syncPosts}) => {
    if (!posts.length ) return <p className="text-center">Постов пока нет!</p>
    return syncPosts.map(el => <Post post={el.title} key={el.id} />)
}

const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(posts);