import React from 'react'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import './style.css'
function Post({ post }) {
    const { title, subtitle, description, slug } = post;
    console.log(post);
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="post-preview">
                            <Link to={`/post/${slug}`}>
                                <h2>{title}</h2>
                                <h3>{subtitle}</h3>
                            </Link>
                            <p class="description">{description}</p>

                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </>

    )   
}


Post.propTypes = {
    room: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired

    })
}
export default Post

