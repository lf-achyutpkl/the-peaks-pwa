import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // log into Sentry or other logging tool.

    console.error(error);
    console.error(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
