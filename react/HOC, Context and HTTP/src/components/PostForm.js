import React, { Component } from 'react'
import axios from 'axios'
class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			userId: '', //state proprties
			title: '',
			body: ''
		}
	}
	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value }) //accept event as arguement and e.target.name(key)&e.target.value(value)
	}
	submitHandler = e => {
		e.preventDefault() //to prevent page refresh
		console.log(this.state)
		axios.post('https://jsonplaceholder.typicode.com/posts', this.state) // second argument data that has to be sent i.e this.state
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}
	render() {
		const { userId, title, body } = this.state //destructuring state properties
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="userId"
							value={userId} //destructure props & assign to value attribute
							onChange={this.changeHandler} //to track the change in input values and keep them in sync with state object
						/>
					</div>
					<div>
						<input
							type="text"
							name="title"
							value={title}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="body"
							value={body}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default PostForm
