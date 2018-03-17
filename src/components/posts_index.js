import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from "lodash";
import { fetchPosts } from "../actions";
import { Link } from "react-router-dom";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id} >
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      )
    });
  }
  
  render() {
    return (
      <div>
        <h2 className="text-xs-center">All Posts</h2>
        <div className="text-xs-center col-xs-offset-3 col-xs-6">
          <ul className="list-group">
            {this.renderPosts()}
          </ul>

          <Link className="btn btn-primary new-post-btn" to="/posts/new" >
            Add New Post
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);