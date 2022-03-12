import React , { useState } from "react";
import People from "./data";

import  { BsFillChatRightQuoteFill } from "react-icons/bs";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "./reviews.styles.scss";


function Reviews() {
    const [index, setIndex] = useState(0);
    const { name, job, imageUrl, content } = People[index];

    const nextPerson = () => {
        setIndex( index => {
            let newIndex = index + 1
            if (newIndex > People.length - 1){
                return 0;
            }
            return newIndex;
        } )
    }

    const prevPerson = () => {
        setIndex( index =>{
            let newIndex = index - 1;
            if (newIndex < 0){
                return People.length - 1;
            }
            return newIndex;
        })
    }

    const randomPerson = () => {
        let lenght = People.length
        const newIndex = Math.floor(Math.random() * lenght);
        setIndex(newIndex)
    }

    return (
        <div className="page">
            <h1>Our Reviews</h1>
            <div className="underline" />
            <div className="container">
                <div className="image-container">
                    <div className="person-image" style={ { backgroundImage: `url(${imageUrl})` } } />
                    <span className="quote-icon"><BsFillChatRightQuoteFill /></span>
                </div>
                <div className="text">
                    <h3>{name}</h3>
                    <h6>{job}</h6>
                    <p>{content}</p>
                </div>
                <div className="btns">
                    <div className="arrow">
                        <button className="prevBtn" onClick={prevPerson}><FaChevronLeft/></button>
                        <button className="nextBtn" onClick={nextPerson}><FaChevronRight/></button>
                    </div>
                    <button className="randomBtn" onClick={randomPerson}>Surprise me</button>
                </div>
            </div>
        </div>
    )
}


export default Reviews;