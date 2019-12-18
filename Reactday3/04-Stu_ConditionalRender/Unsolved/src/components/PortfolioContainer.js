import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  renderContent=()=>{
    switch(this.state.currentPage){
      case 'Home':return< Home/> 
      case 'About':return< About/>
      case 'Blog':return< Blog/>
      case 'Contact':return< Contact/>
    }
  }
  

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
       {
         this.renderContent()
        //  this.state.currentPage=== "Home" ?< Home />: null}
        //  {this.state.currentPage==="About" ?<About />: null}
        //  {this.state.currentPage==="Blog" ?<Blog/>: null}
        // { this.state.currentPage==="Contact" ?<Contact />: null
       }
      </div>
    );
  }
}

export default PortfolioContainer;
