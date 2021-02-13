import React,  { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    console.log('[ErrorBoundary][componentDidCatch] info: ', info)
    this.setState({ hasError: true, errorMessage: error });
  }

  render(){
    if(this.state.hasError) {
      return <h1>ErrorBoundaryStateMsg: {this.state.errorMessage}</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;