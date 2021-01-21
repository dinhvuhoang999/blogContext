import React, { Component } from 'react'
// import StyledHero from '../../components/StyledHero';
import Banner from '../../components/Banner';
// import Post from "../../components/Post"
import { PostContext } from "../../context";
// import FeaturedPost from "../../components/FeaturedPost ";
import StyledHero from '../../components/StyledHero';
import imgPost from '../../images/post-bg.jpg'
import "./style.css"
class SamplePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug
        }
    }
    static contextType = PostContext;
    render() {


        const { getPost } = this.context;
        const post = getPost(this.state.slug);
        if (!post) {
            return (
                <div class="error">
                    <h3>no such your post</h3>
                </div>
            )
        }
        const { title, subtitle, description, content } = post;
        return (
            <div>
                <StyledHero img={imgPost}>
                <div class="overlay"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 col-md-10 mx-auto">
                                <div class="post-heading">
                                    <h1>{title}</h1>
                                    <h2 class="subheading">{subtitle}</h2>
                                    <span class="meta">{description}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </StyledHero>
                <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        {content}
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
            
        )
    }
}
export default SamplePost;
