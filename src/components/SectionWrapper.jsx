import React from "react";
import styles from '../styles/Global'

import assets from "../assets";
import Button from "./Button";

const SectionWrapper=({title, description, showBtn, mockupImage, banner, reverse})=>{
    // basic string "" template string ``
    return(
        <div className={`min-h-screen 
                            ${styles.section}
                            ${reverse ? styles.bgWhite : styles.bgPrimary /* if is reverse apply styles.bgWhite else styles.bgPrimary */} 
                            ${banner}`}>

            <div className={`flex items-center 
                                ${reverse ? styles.boxReverseClass : styles.boxClass /* if is recverse apply styles.reverse else style.boxClass*/} 
                                w-11/12 sm:w-full minmd:w-3/4`}>
                <div className={`
                                    ${styles.descDiv} 
                                    ${reverse ? "fadeRightMini" : "fadeLeftMini"}
                                    ${reverse ? styles.textRight : styles.textLeft}
                                `}>
                    <h1 className={`
                                    ${styles.h1Text}
                                     ${reverse ? styles.blackText : styles.whiteText}
                                `}>
                        {title}
                    </h1>
                    <p className={`
                                    ${styles.descriptionText}
                                    ${reverse ? styles.blackText : styles.whiteText}
                                `}>
                        {description}
                    </p>
                    { //we read if showBtn is true
                    showBtn &&(
                        <Button
                            assetUrl={assets.expo}
                            link="https://expo.dev/@ilidiocn/react_native_app?release-channel=default"
                        />
                    )}

                </div>
                <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
                    <img 
                        src={mockupImage} 
                        alt="mockup" 
                        className={`
                            ${reverse ? "fadeLeftMini" : "fadeRightMini"}
                            styles.sectionImg
                        `}
                    />
                </div>
            </div> 
            
            
        </div>
    )
}
export default SectionWrapper;