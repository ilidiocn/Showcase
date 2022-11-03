import React from "react";
import styles from '../styles/Global'

import assets from "../assets";

const SectionWrapper=({title, description, showBtn, mockupImage, banner})=>{
    // basic string "" template string ``
    return(
        <div className={`min-h-screen ${styles.section, styles.bgWhite, banner}`}>

            <div className={`flex item-center ${styles.boxClass}`}>
                <div className={`${styles.descDiv} fadeLeftMini`}>

                </div>
            </div> 
            <h1>{title}</h1>
            <h1>{description}</h1>
            <img src={mockupImage} alt="mockup"/>
        </div>
    )
}
export default SectionWrapper;