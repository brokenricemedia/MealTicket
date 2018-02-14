import "./about.css";
import React, { Component } from 'react';

class AboutPage extends Component {
    render() {
        return (

            <div>
                <div class="media">
                <div class="media-left">
                    <a href="#">
                    {/* <img class="media-object" src="..." alt="..."> */}
                    </a>
                </div>
                    <div class="media-body">
                    <h4 class="media-heading">Meal Ticket</h4>
                    <p>
                    Meal Ticket is a MERN stack e-Commerce web application built from scratch, that sells homemade International dishes and baked goods. Consumers can create an account to browse products and purchase. 
                    </p>
                </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;