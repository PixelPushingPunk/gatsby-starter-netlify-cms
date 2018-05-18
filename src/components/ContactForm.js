import React from "react";
import { navigateTo } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => navigateTo('/thanks/'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
          netlify
        >
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>

          <div className="field">
            <div className="control">
              <label>
                Your name:<br />
                <input className="input is-medium" type="text" name="name" onChange={this.handleChange}/>
              </label>
            </div>
          </div>
        
          <div className="field">
            <div className="control">
              <label>
                Your phone:<br />
                <input className="input is-medium" type="text" name="phone" onChange={this.handleChange}/>
              </label>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label>
                Your email:<br />
                <input className="input is-medium" type="text" name="email" onChange={this.handleChange}/>
              </label>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label>
                Message:<br />
                <textarea className="textarea is-medium" name="message" onChange={this.handleChange}/>
              </label>
            </div>
          </div>

          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}
