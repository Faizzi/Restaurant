import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we're serious about is food.</p>
                </div>
                <p className='mid'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo molestiae sint nam aliquid cumque adipisci vel nostrum odit repudiandae minima. Nesciunt laboriosam numquam illum cumque amet unde magni, deserunt aperiam sint recusandae, omnis, doloremque sequi ipsa quisquam sapiente. Modi minima alias recusandae blanditiis magni enim cum quod, rem illo qui.
                </p>
                <Link to={"/"}>Explore Menu <span><HiOutlineArrowNarrowRight/></span></Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About