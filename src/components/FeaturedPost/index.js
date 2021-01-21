import React, { Component } from 'react';
import Post from "../../components/Post"
import {PostContext} from "../../context";
 class FeaturedPost extends Component {
        static contextType = PostContext;
        render() {
            let {featuredPosts : posts} = this.context;
            console.log(posts);
        posts = posts.map( post =>{
            return <Post key={post.id} post={post} />
        })
            return (
                <div>
                {posts}
            </div>
        )
    }
}
export default FeaturedPost