import React from 'react';
import {Component} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Form extends Component {
  render() {
    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}



// import React, { Component } from 'react';
// import { FormErrors } from './FormErrors';
// import './form.css';

// class Form extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       formErrors: {email: '', password: ''},
//       emailValid: false,
//       passwordValid: false,
//       formValid: false
//     }
//   }

//   handleUserInput = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     this.setState({[name]: value},
//                   () => { this.validateField(name, value) });
//   }

//   validateField(fieldName, value) {
//     let fieldValidationErrors = this.state.formErrors;
//     let emailValid = this.state.emailValid;
//     let passwordValid = this.state.passwordValid;

//     switch(fieldName) {
//       case 'email':
//         emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
//         fieldValidationErrors.email = emailValid ? '' : ' is invalid';
//         break;
//       case 'password':
//         passwordValid = value.length >= 6;
//         fieldValidationErrors.password = passwordValid ? '': ' is too short';
//         break;
//       default:
//         break;
//     }
//     this.setState({formErrors: fieldValidationErrors,
//                     emailValid: emailValid,
//                     passwordValid: passwordValid
//                   }, this.validateForm);
//   }

//   validateForm() {
//     this.setState({formValid: this.state.emailValid && this.state.passwordValid});
//   }

//   errorClass(error) {
//     return(error.length === 0 ? '' : 'has-error');
//   }

//   render () {
//     return (
//       <form className="demoForm">
//         <h2>Sign up</h2>
//         <div className="panel panel-default">
//           <FormErrors formErrors={this.state.formErrors} />
//         </div>
//         <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
//           <label htmlFor="email">Email address</label>
//           <input type="email" required className="form-control" name="email"
//             placeholder="Email"
//             value={this.state.email}
//             onChange={this.handleUserInput}  />
//         </div>
//         <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
//           <label htmlFor="password">Password</label>
//           <input type="password" className="form-control" name="password"
//             placeholder="Password"
//             value={this.state.password}
//             onChange={this.handleUserInput}  />
//         </div>
//         <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button>
//       </form>
//     )
//   }
// }

// export default Form;