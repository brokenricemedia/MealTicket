import React, { Component } from 'react';
import StackGrid from "react-stack-grid";
import Fooditem from "../foodItem";

class cart extends Component {
    render() {
        const style = {
            itemStyle: {
                height: "100px",
                width: "100px",
                backgroundColor: "red"
            }
         };
        return (
            <StackGrid
                columnWidth={300}
            >
            <h1>Food Product Page</h1>
                <div key="key1" >
                    <img src="https://farm5.staticflickr.com/4703/26320286878_48aecce23b.jpg" alt="Cheesecake" ></img>
                    <figcaption>Cheesecake</figcaption>
                </div>
            <div key="key2" >
                    <img src="https://farm5.staticflickr.com/4697/28413205699_44d515f2e2.jpg" alt="Tonkatsu Ramen"></img>
                    <figcaption>Tonkatsu Ramen</figcaption>
            </div>
                <div key="key3" >
                    <img src="https://farm5.staticflickr.com/4622/39481710554_57b8aedd98.jpg" alt="Risotto" ></img>
                    <figcaption>Asian-Style Risotto</figcaption>
                </div>
                <div key="key4" >
                    <img src="https://farm5.staticflickr.com/4628/25321789967_65c8e4d48b.jpg" alt="Venezuelan Arepa " ></img>
                    <figcaption>Venezuelan Arepa</figcaption>
                </div>
                <div key="key5" >
                    <img src="https://farm5.staticflickr.com/4699/28413278889_bb2e39e2a2.jpg" alt="Vietnamese Sour Soup" ></img>
                    <figcaption>Vietnamese Sour Soup</figcaption>
                </div>
                <div key="key6" >
                    <img src="https://farm5.staticflickr.com/4623/40193439091_95a96d4218.jpg" alt="Chicken Cordon Bleu" ></img>
                    <figcaption>Chicken Cordon Bleu</figcaption>
                </div>
                <div key="key7" >
                    <img src="https://farm5.staticflickr.com/4753/39295394205_a98c06296e.jpg" alt="Char Siu Chicken" ></img>
                    <figcaption>Char Siu Chicken</figcaption>
                </div>
                <div key="key8" >
                    <img src="https://farm5.staticflickr.com/4624/39295394265_de13754bc9.jpg" alt="Mexican Toast" ></img>
                    <figcaption>Mexican Toast</figcaption>
                </div>
                <div key="key9" >
                    <img src="https://farm5.staticflickr.com/4655/39295394165_fc0712c843.jpg" alt="French Onion Soup" ></img>
                    <figcaption>French Onion Soup</figcaption>
                </div>

                <div key="key10" >
                    <img src="https://farm5.staticflickr.com/4703/26320286878_48aecce23b.jpg" alt="Cheesecake" ></img>
                    <figcaption>Cheesecake</figcaption>
                </div>
                <div key="key11" >
                    <img src="https://farm5.staticflickr.com/4697/28413205699_44d515f2e2.jpg" alt="Tonkatsu Ramen"></img>
                    <figcaption>Tonkatsu Ramen</figcaption>
                </div>
                <div key="key12" >
                    <img src="https://farm5.staticflickr.com/4622/39481710554_57b8aedd98.jpg" alt="Risotto" ></img>
                    <figcaption>Asian-Style Risotto</figcaption>
                </div>
                <div key="key13" >
                    <img src="https://farm5.staticflickr.com/4628/25321789967_65c8e4d48b.jpg" alt="Venezuelan Arepa " ></img>
                    <figcaption>Venezuelan Arepa</figcaption>
                </div>
                <div key="key14" >
                    <img src="https://farm5.staticflickr.com/4699/28413278889_bb2e39e2a2.jpg" alt="Vietnamese Sour Soup" ></img>
                    <figcaption>Vietnamese Sour Soup</figcaption>
                </div>
                <div key="key15" >
                    <img src="https://farm5.staticflickr.com/4623/40193439091_95a96d4218.jpg" alt="Chicken Cordon Bleu" ></img>
                    <figcaption>Chicken Cordon Bleu</figcaption>
                </div>
                <div key="key16" >
                    <img src="https://farm5.staticflickr.com/4753/39295394205_a98c06296e.jpg" alt="Char Siu Chicken" ></img>
                    <figcaption>Char Siu Chicken</figcaption>
                </div>
                <div key="key17" >
                    <img src="https://farm5.staticflickr.com/4624/39295394265_de13754bc9.jpg" alt="Mexican Toast" ></img>
                    <figcaption>Mexican Toast</figcaption>
                </div>
                <div key="key18" >
                    <img src="https://farm5.staticflickr.com/4655/39295394165_fc0712c843.jpg" alt="French Onion Soup" ></img>
                    <figcaption>French Onion Soup</figcaption>
                </div>


            </StackGrid>
        );
    }
}

export default cart;

