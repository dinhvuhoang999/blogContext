import React from 'react'
import './style.css';

const Banner = ({ title, subtitle }) => {
    return (
<>
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    <div class="site-heading">
                        <h1>{title}</h1>
                        <span class="subheading">{subtitle}</span>
                    </div>
                </div>
            </div>
        </div>
</> 
    )
}
export default Banner;