import React from 'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        console.log('Child Constructor');
    }

    componentDidMount() {
        console.log('Child component did mount');
    }

    render() {
        const { name, location } = this.props;
        const { count } = this.state;

        const incBtnHandler = () => {
            this.setState({
                count: this.state.count + 1
            })
        }

        console.log('Child Render');

        return (
            <div className='flex flex-col m-4 p-2 border rounded-md gap-2'>
                <h1>Class Based Component</h1>

                <div className='flex gap-2 justify-between items-center'>
                    <h2>Count : {count}</h2>

                    <button className='border rounded-md p-1' onClick={incBtnHandler}>
                        Increse
                    </button>
                </div>

                <p>Name: {name}</p>
                <p>Place: {location}</p>
            </div>
        )
    }
}

export default UserClass;