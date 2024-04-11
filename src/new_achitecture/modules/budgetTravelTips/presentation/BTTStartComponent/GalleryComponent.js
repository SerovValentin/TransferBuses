import React, {useState} from 'react';
import Schloss_Charlottenburg from './images/Schloss_Charlottenburg.jpeg'
import shutterstock from "./images/shutterstock.jpg"
import Tower_Bridge from './images/Tower_Bridge.jpg'
import styles from './GalleryComponent.module.css'
import {Container} from "@material-ui/core";

const Gallery = () => {
    const img = [Schloss_Charlottenburg, shutterstock, Tower_Bridge];
    const [src, setSrc] = useState("https://upload.wikimedia.org/wikipedia/commons/1/12/Schloss_Charlottenburg_%28233558373%29.jpeg");
    const [a, setA] = useState(1);

    const nextImg = () => {
        if (a === 2) {
            setA(0);
        } else {
            setA(a + 1);
        }
        setSrc(`${img[a]}`);
    }
    const prevImg = () => {
        if (a === 0) {
            setA(2);
        } else {
            setA(a - 1);
        }
        setSrc(`${img[a]}`);
    }

    return (
        <div className={styles.gallery}>
            <h2 className={styles.sectionTitle}>The most popular cities</h2>
            {/*<div className={styles.cityDetailsMain}>*/}
            <p className={styles.cityDetailsMain}>Explore the most popular cities around the world and experience their
                unique charm and attractions!</p>
            {/*</div>*/}
            <div className={styles.navGallery}>
                <button className={styles.galBut} onClick={prevImg}>Prev</button>
                <img className={styles.image}
                     src={src} alt={"town"}/>
                <button className={styles.galBut} onClick={nextImg}>Next</button>
            </div>
        </div>
    );
};
export default Gallery;