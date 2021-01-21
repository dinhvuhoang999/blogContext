import React, { Component } from 'react'
import { PostContext } from "../../context";
import { Link } from "react-router-dom"
export default class index extends Component {
    constructor(props) {
        super(props)
        // console.log(this.props)
        this.state = {
            slug: this.props.match.params.slug
        }
    }
    static contextType = PostContext;

    render() {
        const { getPost } = this.context;

        const post = getPost(this.state.slug);
        if (!post) {
            return <div className="error">
                <h3>no such room could be found</h3>
                <Link to="/" className="btn-primary">
                    back to home
                </Link>
            </div>
        }
            return (
                <div>

                </div>
            )
        }
    }

