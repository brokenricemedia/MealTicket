import React, { Component } from 'react';
import StackGrid from "react-stack-grid";
<<<<<<< HEAD
import axios from "axios"; 

class Cart extends Component {

    state = {
        cartData: [
            {
                id: '001',
                image: 'https://farm5.staticflickr.com/4703/26320286878_48aecce23b.jpg',
                title: 'Cheesecake',
                price: '$40.00', 
            },
            {
                id: '002',
                image: 'https://farm5.staticflickr.com/4697/28413205699_44d515f2e2.jpg',
                title: 'Tonkatsu Ramen',
                price: '$12.95',
            },
            {
                id: '003',
                image: 'https://farm5.staticflickr.com/4622/39481710554_57b8aedd98.jpg',
                title: 'Asian-Style Risotto',
                price: '$11.25',
            },
            {
                id: '004',
                image: 'https://farm5.staticflickr.com/4628/25321789967_65c8e4d48b.jpg',
                title: 'Venezuelan Arepa',
                price: '$9.95',
            },
            {
                id: '005',
                image: 'https://farm5.staticflickr.com/4699/28413278889_bb2e39e2a2.jpg',
                title: 'Vietnamese Sour Soup',
                price: '$14.95',
            },
            {
                id: '006',
                image: 'https://farm5.staticflickr.com/4623/40193439091_95a96d4218.jpg',
                title: 'Chicken Cordon Bleu',
                price: '$14.95',
            },    
            {
                id: '007',
                image: 'https://farm5.staticflickr.com/4753/39295394205_a98c06296e.jpg',
                title: 'Char Siu Chicken',
                price: '$6.25',
            },    
            {
                id: '008',
                image: 'https://farm5.staticflickr.com/4624/39295394265_de13754bc9.jpg',
                title: 'Mexican Toast',
                price: '$6.25',
            },
            {
                id: '009',
                image: 'https://farm5.staticflickr.com/4655/39295394165_fc0712c843.jpg',
                title: 'French Onion Soup',
                price: '$7.25',
            },             
        ],
        addedProductTitle: "",
        addedProductPrice: ""
    };


    handleAddedProduct = (event) => {
        this.setState({ ProductTitle: event.target.value });
        this.setState({ ProductPrice: event.target.value });
    }

    addToCart = (event) => {
        event.preventDefault();
        alert(event.target.value);
        this.setState({
            AddedProductId: event.target.id,
            AddedProductPrice: event.target.value,
        });
    };

    addToCartDatabase = () => {
        axios.post('', {
            AddedProductTitle: this.state.AddedProductTitle,
            AddedProductPrice: this.state.AddedProductPrice,
            })
            .then(response => {
                console.log(response, "Product Added to Cart!");
                this.setState({
                    AddedProductTitle: "",
                    AddedProductPrice: "",
                });
            })
            .catch(err => {
                console.log(err, "Cannot Add Product to Cart, Try Again");
            })
        };
        render() {
            const CartFood = this.state.cartData
            const CartDisplay = this.state.cartData.map((cartItem) => {

                return (
                    <div>
                        <h1>{cartItem.id}</h1> 
                        <img src={cartItem.image} />
                        <br/><br/>
                        <button
                            className="submitproducttocart"
                            type="submit"
                            id={cartItem.id}
                            value={cartItem.price}
                            onClick={this.addToCart}
                        >
                            Add to Cart<i className="addtoCartButton" aria-hidden="true" />
                        </button>
                        <br/><br/>
                    </div>
                )
                })
            return(
                <div>
                    <h1>The Meal Ticket</h1>
                    <h2>Product Listing</h2>
                        {CartDisplay}
                </div>
            )
        }
    }

export default Cart;
=======
import Fooditem from "../foodItem";

class cart extends Component {
    state = {
        cartItems: []
    }
    componentWillMount() {
        //axios call to the back end
        //on response, set state with array of products
    }
    addToCart = (e) => {
        e.preventDefault();
        alert(e.target.id);
    }
    // const cartItem = {
    //     this.state.cartItems.map((item) => {
    //         <div key={item.id} >
    //             <img src={item.img_url} alt="Char Siu Chicken" ></img>
    //             <figcaption>{item.title} ${item.price}</figcaption>
    //         </div>
    //     })
    //  }
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
                    <figcaption>Cheesecake $40.00</figcaption>
                    <button id="001001" onClick={this.addToCart}>Add to cart</button>
                </div>
            <div key="key2" >
                    <img src="https://farm5.staticflickr.com/4697/28413205699_44d515f2e2.jpg" alt="Tonkatsu Ramen"></img>
                    <figcaption>Tonkatsu Ramen $12.95</figcaption>
            </div>
                <div key="key3" >
                    <img src="https://farm5.staticflickr.com/4622/39481710554_57b8aedd98.jpg" alt="Risotto" ></img>
                    <figcaption>Asian-Style Risotto $11.25</figcaption>
                </div>
                <div key="key4" >
                    <img src="https://farm5.staticflickr.com/4628/25321789967_65c8e4d48b.jpg" alt="Venezuelan Arepa " ></img>
                    <figcaption>Venezuelan Arepa $8.95</figcaption>
                </div>
                <div key="key5" >
                    <img src="https://farm5.staticflickr.com/4699/28413278889_bb2e39e2a2.jpg" alt="Vietnamese Sour Soup" ></img>
                    <figcaption>Vietnamese Sour Soup $13.75</figcaption>
                </div>
                <div key="key6" >
                    <img src="https://farm5.staticflickr.com/4623/40193439091_95a96d4218.jpg" alt="Chicken Cordon Bleu" ></img>
                    <figcaption>Chicken Cordon Bleu $14.25</figcaption>
                </div>
                <div key="key7" >
                    <img src="https://farm5.staticflickr.com/4753/39295394205_a98c06296e.jpg" alt="Char Siu Chicken" ></img>
                    <figcaption>Char Siu Chicken $6.25</figcaption>
                </div>
                <div key="key8" >
                    <img src="https://farm5.staticflickr.com/4624/39295394265_de13754bc9.jpg" alt="Mexican Toast" ></img>
                    <figcaption>Mexican Toast $5.00</figcaption>
                </div>
                <div key="key9" >
                    <img src="https://farm5.staticflickr.com/4655/39295394165_fc0712c843.jpg" alt="French Onion Soup" ></img>
                    <figcaption>French Onion Soup $7.25</figcaption>
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

>>>>>>> master
