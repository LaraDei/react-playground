import React from 'react';


class HelloWorld extends React.Component {
    state = {
        name: 'world',
      };
    render() {
        return (
            <div className='HelloWorld'>
                <p>Hello, {this.state.name}!</p>
                <button onClick={() => this.setState({ name: 'friend' })}>
                Friend
                </button>
                <button onClick={() => this.setState({ name: 'React' })}>
                React
                </button>
                <button  onClick={() => this.setState({ name: 'world' })}>
                World
                </button>
            </div>
        )
    }
}

export default HelloWorld