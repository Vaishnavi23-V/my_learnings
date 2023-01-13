import React, { Component } from 'react'
import axios from 'axios'
class PostList extends Component {
	constructor(props) {
		super(props)

		this.state = {
      posts: [], //post initialised to empty asrray
      errorMsg: ''
		}
	}
    //this method executes when the component mounts for the first time and only once in the lifecycle of the component
	componentDidMount() { // a method to make http request
		axios.get('https://jsonplaceholder.typicode.com/posts') //get method invoked
			.then(response => {
				console.log(response)
				this.setState({ posts: response.data })
			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
			})
	}

	render() {
		const { posts, errorMsg } = this.state
		return (
			<div>
				List of posts
				{posts.length //if at all there is one post return post if an empty array return null
					? posts.map(post => <div key={post.id}>{post.title}</div>)
          : null}   
        {errorMsg ? <div>{errorMsg}</div> : null}
			</div>
		)
	}
}
export default PostList


