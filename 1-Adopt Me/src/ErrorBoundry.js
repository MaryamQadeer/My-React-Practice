// For code: Refer to react docs i.e. reactjs.org/docs/error-boundries
import React from "react";
import {Link, Redirect} from "@reach/router";

class ErrorBoundry extends React.Component{
    state ={
        hasError: false,
        redirect: false
    };
    static getDerivedStateFromError(){
        return {hasError:true};
    }
    componentDidCatch(error,info){
        console.log(`Error Boundary has catched the following error ${error} with the following info : ${info}`);
    }
    componentDidUpdate(){
        if(this.state.hasError){
            setTimeout(() => this.setState({redirect:true}),5000);
        }
    }
    render(){
        if(this.state.redirect){
            return <Redirect to="/" />;
        }
        if(this.state.hasError){
            return(
                <h1>THERE WAS SOME ERROR. <Link to="/">CLICK HERE</Link> TO GO BACK TO THE HOME PAGE.</h1>
            );
        }
        return this.props.children
    }
}

export default ErrorBoundry;