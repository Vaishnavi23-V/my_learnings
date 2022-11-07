import React from 'react'

const withCounter = (WrappedComponent, incrementNumber) => {
	class WithCounter extends React.Component {
		constructor(props) {
			super(props)

			this.state = { //count state
				count: 0
			}
		}
		incrementCount = () => {    //count functionality
			this.setState(prevState => {
				return { count: prevState.count + incrementNumber }
			})
		}
    render() {
			return (
				<WrappedComponent
          count={this.state.count} //state passed as props
          incrementCount={this.incrementCount} //method passed as props
				/>
			)
		}
	}
	return WithCounter
}
export default withCounter