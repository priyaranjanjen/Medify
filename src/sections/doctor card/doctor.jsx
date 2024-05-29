// import React from 'react';
import style from './doctor.module.css'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import doctor1 from '../../assets/doctor/doctor1.png'
import doctor2 from '../../assets/doctor/doctor2.png'
import doctor3 from '../../assets/doctor/doctor3.png'
import doctor4 from '../../assets/doctor/doctor4.png'
import doctor5 from '../../assets/doctor/doctor5.png'


export default function DoctorSection() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 900, // screens less than 1024px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };
    
    const doctorImage = [
        {
            image: doctor1,
            name: "Dr. Ahmad Khan",
            specialisation: "Neurologist"
        },
        {
            image: doctor2,
            name: "Dr. Heena Sachdeva",
            specialisation: "Orthopadics"
        },
        {
            image: doctor3,
            name: "Dr. Ankur Sharma",
            specialisation: "Medicine"
        },
        {
            image: doctor4,
            name: "Dr. Ahmad Stevens",
            specialisation: "Neurologist"
        },
        {
            image: doctor5,
            name: "Dr. Lesley Hull",
            specialisation: "Medicine"
        }
    ];

    return (
        <div className={style.sliderWrapper}>
            <h1>Our Medical Specialist</h1>
             <div className="slider-container">
                <Slider {...settings}>
                    {
                        doctorImage.map((doc, index)=>(
                            <div key={index} className={style.card}>
                                <img src={doc.image}></img>
                                <h2>{doc.name}</h2>
                                <p>{doc.specialisation}</p>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
}
