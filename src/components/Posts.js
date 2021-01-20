import React from 'react'
import Post from './Post'
import {connect} from 'react-redux'

const posts = ({syncPosts}) => {
    console.log(' <-------- posts ------->')
    if (!syncPosts.length ) return <p className="text-center">Постов пока нет!</p>
    return syncPosts.map(post => <Post post={post} key={post.id} />)
}

const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(posts);