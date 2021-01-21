import React from 'react'
import Banner from '../../components/Banner'

import FeaturedPost from '../../components/FeaturedPost'
import OrderPost from '../../components/OrderPost'
import Footer from '../../components/Footer'

import StyledHero from '../../components/StyledHero';
import imgHome from '../../images/home-bg.jpg'


const Home = () => {
     return (
        <div>
            <StyledHero img ={imgHome}>
            
                <Banner title="Clean Blog" subtitle="A Blog Theme by Start Bootstrap"/>
            </StyledHero>
            <FeaturedPost />
            <OrderPost />
            <Footer />
        </div>
      
    )
}
export default Home;