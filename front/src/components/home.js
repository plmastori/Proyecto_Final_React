
import React, { Component } from "react";
import image1 from "../img/Principal1.jpg";
import image2 from "../img/Principal2.jpg";
import image3 from "../img/Principal3.jpg";


const Home = () => {
    return (

        <div className="fondo" id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <br></br>
            <div class="carousel-inner">
                <div class="carousel-item active">

                    <img src={image1} width="2000" height="1000" />
                </div>
                <div class="carousel-item">
                    <img src={image2} width="2000" height="1000" />
                </div>
                <div class="carousel-item">
                    <img src={image3} width="2000" height="1000" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    )
}

export default Home