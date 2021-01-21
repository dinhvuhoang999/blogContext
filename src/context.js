import React, { Component } from 'react';
import items from "./data"

const PostContext =React.createContext();
export default class PostProvider extends Component {
    state = {
        posts: [],
        sortedPosts:[],
        featuredPosts:[]
    }
    // get data
componentDidMount(){
    let posts = this.formatData(items);
    let featuredPosts = posts.filter(post =>post.featured === true); 
    this.setState({ 
        posts,
        featuredPosts,
        sortedPosts:posts, 
    })

}
formatData(items){
    let tempItems = items.map(item =>{
    let id = item.sys.id
    let images = item.post.images.map(image => image.post.file.url);

        let post ={...item.post,images,id}
        return post;      
    })
    return tempItems
} 
getPost = slug => {
    let tempPosts = [...this.state.posts];
    const post = tempPosts.find(post => post.slug === slug);
    return post
}

    render() {
        return (
            <PostContext.Provider 
            value={{
                ...this.state,

                getPost: this.getPost,}}>
                {this.props.children}
            </PostContext.Provider>
        )
    }
}

const PostConsumer =PostContext.Consumer;

export {PostProvider, PostConsumer,PostContext};
