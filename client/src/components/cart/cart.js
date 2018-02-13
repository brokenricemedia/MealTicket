import React, { Component } from 'react';
import StackGrid from "react-stack-grid";

class cart extends Component {
    state = {
        cartData: []
    };

    constructor(props){
        super(props);

        this.handleProductTitle = this.handleProductTitle.bind(this);
        this.handleProductPrice = this.handleProductPrice.bind(this);

        this.setState({
            AddedProductTitle: "",
            AddedProductPrice: "",
        });

        handleProductTitle(event){
            this.setState({ ProductTitle: event.target.value });
            this.setState({ ProductPrice: event.target.value });
        };
    };

    addToCart = (event) => {
        e.preventDefault();
        alert(e.target.id);
        this.setState({
            AddedProductTitle: event.target.value,
            AddedProductPrice: event.target.value,
        });
    };

    axios.post('<https://atl-meal-ticket.herokuapp.com/>', {
        AddedProductTitle: this.state.AddedProductTitle,
        AddedProductPrice: this.state.AddedProductPrice,
        })
        .then(response => {
            console.log(response, "Product Added to Cart!");
        })
        .catch(err => {
            console.log(err, "Cannot Add Product to Cart, Try Again");
        });

        this.setState({
            AddedProductTitle: "",
            AddedProductPrice: "",
        });
    });
};

    // const cartData = {
    //     this.state.cartData.map((item) => {
    //         <div key={item.id} >
    //             <img src={item.img_url} alt="Char Siu Chicken" ></img>
    //             <figcaption>{item.title} ${item.price}</figcaption>
    //         </div>
    //     })
    //  };

    <button
        className="submitproducttocart"
        type="submit"
        onClick={this.addToCart}
    >
        Submit to Cart<i className="addtoCartButton" aria-hidden="true" />
    </button>       

class addedProducts extends Component {
    constructor(props){
        super(props);

        this.state = {
            productsAdded: "",
        };

        componentDidMount(){
            fetch('<https://atl-meal-ticket.herokuapp.com/>')
            .then(results => {
                return results.json();
            });
        
            data.map((productAddedToCart) => {
                return(
                    <div key={item.id}>
                        <img src={item.image}></img>
                        <h3 className="title">{item.title}</h3>
                        <h2 className="price">${item.price}</h2>
                    </div>
                )
            });

            this.setState({ productsAdded: productsAdded });

            render(){
              return(
                  <div className="productsAddedContainer">
                    <h6>Cart</h6>
                    {this.state.productsAdded}
                  </div>
              )  
            };
        };
    };
};

export default cart;

