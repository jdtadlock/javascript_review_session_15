import React, { Component } from 'react';
import { Container, Row } from '../materialize';
import axios from 'axios';

class Contact extends Component {

  state = {
    name: '',
    email: '',
    fruit: ''
  }

  submitContact = (e) => {
    e.preventDefault();

    // Get the name and the email from the form
    // console.log(this.state.email, this.state.name);
    axios.post('/info', this.state)
      .then(res => {
        console.log(res.data);
      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleRadio = (e) => {
    this.setState({
      fruit: e.target.value
    })
  }

  render() {
    return (
      <Container>
        <h2>Contact Page</h2>
        <p>{this.state.fruit}</p>
        <form className="col s12" onSubmit={this.submitContact}>
          <Row>
            <div className="input-field col s6">
              <input name="name" onChange={this.handleChange} placeholder="Name" type="text" className="validate" value={this.state.name} />
            </div>
            <div className="input-field col s6">
              <input name="email" onChange={this.handleChange} placeholder="Email" type="email" className="validate" />
            </div>
          </Row>
          <div className="input-field col s6">
            <p>
              <label htmlFor="orange">
                <span>Orange</span>
                <input id="orange" onChange={this.handleRadio} type="radio" name="fruit" value="orange" selected />
              </label>
            </p>
            <p>
              <label htmlFor="grape">
                <span>Grape</span>
                <input id="grape" onChange={this.handleRadio} type="radio" name="fruit" value="grape" />
              </label>
            </p>
            <p>
              <label htmlFor="apple">
                <span>Apple</span>
                <input id="apple" onChange={this.handleRadio} type="radio" name="fruit" value="apple" />
              </label>
            </p>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
          <i className="material-icons right">send</i>
          </button>
        </form>
      </Container>
    )
  }
}

export default Contact;