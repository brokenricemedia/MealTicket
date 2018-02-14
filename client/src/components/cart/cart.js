import React, { Component } from 'react';
import StackGrid from "react-stack-grid";
import axios from "axios"; 
import API from "../../utils/foodAPI";

class Cart extends Component {

    state = {
        cartData: [
            {
                id: '001',
                image: 'https://farm5.staticflickr.com/4703/26320286878_48aecce23b.jpg',
                title: 'Durian Cheesecake',
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
        AddedProductId: "",
        AddedProductTitle: "",
        AddedProductPrice: ""
    };

    // componentWillMount(){
    //     this.loadFoods();
    // }

    // loadFoods = () => {
    //     API.getFoods()
    //     .this(res =>
    //     this.setState({ cartData: res.data, addedProductTitle: "", addedProductPrice: ""})
    //     )
    //     .catch(err => console.log(err));
    // };

    handleAddedProduct = (event) => {
        this.setState({ ProductTitle: event.target.value });
        this.setState({ ProductPrice: event.target.value });
    }

    addToCart = (event) => {
        event.preventDefault();
        
        this.setState({
            AddedProductId: event.target.id,
            AddedProductTitle: event.target.title,
            AddedProductPrice: event.target.value
        });
        alert(event.target.value);
        console.log(this.state.AddedProductId);
        console.log(this.state.AddedProductTitle);
        console.log(this.state.AddedProductPrice);
        // this.addToCartDatabase();
    };

    addToCartDatabase = () => {
        console.log(this.stateAddedProductTitle)
        axios.post('/api/cart', {
            AddedProductTitle: this.state.AddedProductTitle,
            AddedProductPrice: this.state.AddedProductPrice
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
                        <h3>{cartItem.title}</h3>
                        <img src={cartItem.image} />
                        <br/><br/>
                        <h4>Item {cartItem.id}</h4> 
                        <button
                            className="submitproducttocart"
                            type="submit"
                            title={cartItem.title}
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
                    <h2>Food Menu</h2>
                    <br/><br/>
                    <StackGrid columnWidth={300}>
                        {CartDisplay}
                    </StackGrid>
                </div>
            )
        }
    }

export default Cart;
