import { Component } from "react";
import axios from 'axios';

class Blogs extends Component {
    state = {
        blogs: [],
        isLoaded: false
    }
    componentDidMount() {
        axios.get('http://axm9538.uta.cloud/api/wordpress/wp-json/wp/v2/blogs')
            .then(res => 
                this.setState({
                    blogs: res.data,
                    isLoaded: true
                })
            )
            .catch(err => console.log(err));
    }
    render(){
        const { blogs, isLoaded } = this.state;
        if(isLoaded){
            return (
                <div>
                    {blogs.map(blog => (
                        <h4>{ blog }</h4>
                    ))}
                </div>
            );
        }
        return <h3>Loading...</h3>;
    }
}
 
export default Blogs;