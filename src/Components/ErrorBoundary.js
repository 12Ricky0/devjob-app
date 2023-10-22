import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        // You can also log the error to an error tracking service
        console.error(error);
    }

    render() {
        if (this.state.hasError) {
            // Fallback UI for when an error occurs
            return (
                <div>
                    <div>
                        <h2>Something went wrong.</h2>
                        <p>Please try again or contact support.</p>
                    </div>
                    <button onClick={() => { window.location.href = '/' }} className="text-primary-violet text-sm font-bold bg-primary-light-violet bg-opacity-10 h-12 mx-auto my-6 w-[147px] block  rounded-[5px]" type="button">Reload</button>

                </div>
            );
        }
        return this.props.children;
    }

}

export default ErrorBoundary;