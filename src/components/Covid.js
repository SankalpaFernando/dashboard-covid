import React from 'react'
import './component.scss'
import {motion} from 'framer-motion'
function Covid() {
    return (
        <motion.div 
        transition={{duration:.8}}
             whileHover={{ scale: 1.1,opacity:.8 }}
        className="covid">
            <img className="img" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v868-bb-09.png?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=transparent&auto=null&fm=png&ixlib=js-2.2.1&s=c7b36ab5815d8712de4fe28c88678b36" alt=""/>
            <div
             
            className="description">
                <h1>Symptoms of Covid-19</h1>
                <p>Get a Self Check on Yourself for Covid-19</p>
                <button className="btn">Read More</button>
            </div>
        </motion.div>
    )
}

export default Covid