import React from 'react'
import Banner from "../../components/Banner"
import Form from "../../components/Form"
import Footer from "../../components/Footer"
import StyledHero from "../../components/StyledHero"
import imgContact from "../../images/contact-bg.jpg"
const Contact = () => {
    return (
      <>
          <StyledHero img={imgContact} >
            
            <Banner title="Contact Me" subtitle="Have questions? I have answers."/>
            </StyledHero>
        {/* <Form /> */}
        
        <Footer />
      </>
    )
}
export default Contact;