import React,{Component} from "react";
import Navbar from "./Navbar";
import "./Home.css";
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

class Contact extends  Component{
  constructor(props) {
    super(props); 
   this.state = {
    name: '',
    email:'',
    message:'',
    }
  }

  onNameChange(event) {
	  this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST",
      url:"http://localhost:3002/send",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: "", email: "", message: ""})
  }


    render(){
  return (
    <div className="contact">
      <Navbar />
      <div className="contact2" id="contact">
  <div className="container">
    <div className="row contact-container">
      <div className="col-lg-12">
        <div className="card card-shadow border-0 mb-4">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-box p-4">
                <h4 className="title">Contact </h4>
                           
                <form id="contact-form"
                  onSubmit={this.handleSubmit.bind(this)}
                   method="POST"
                   action="send"
                  >
        
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input
                         className="form-control"
                          type="text"
                           placeholder="name"
                           id="name"
                           value={this.state.name} onChange={this.onNameChange.bind(this)}
                           required
                           />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input className="form-control"
                         type="text"
                          placeholder="email"
                          id="email"
                          value={this.state.email} onChange={this.onEmailChange.bind(this)} 
                          required
                          />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-3">
                        <input
                         className="form-control"
                          type="text"
                           placeholder="message"
                           id="message"
                           value={this.state.message} onChange={this.onMessageChange.bind(this)}                    
                           required
                           />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <button
                       type="submit"   
                        className="btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3">
                          <span> Send  <i className="fa fa-paper-plane"></i></span></button>
                    </div>
                  </div>
                </form>
                
              </div>
            </div>
            <div className="col-lg-4 bg-image" >

              <div className="detail-box p-4">
                <h5 className="text-white font-weight-light mb-3">ADDRESS</h5>
                <p className="text-white op-7">Srbija
                  <br></br>Beograd </p>
                <h5 className="text-white font-weight-light mb-3 mt-4">Write a message...</h5>
                <p className="text-white op-7">Portfolio
                  <br></br> Zaklina</p>
                <div className="round-social light">
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="ml-0 text-decoration-none text-white border border-white rounded-circle">
                    <i className="fa fa-facebook"></i></a>
                  <a href="https://mobile.twitter.com/"  target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white border border-white rounded-circle">
                    <i class="fa fa-twitter"></i></a>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white border border-white rounded-circle">
                    <i className="fa fa-youtube"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>      
        </div>
      
         
        );
    }

  }
export default Contact;

