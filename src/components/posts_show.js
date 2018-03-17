import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchPost, deletePost } from "../actions";

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }
  
  render() {
    const { post } = this.props;

    if(!post) {
      return <div>Loading..</div>;
    }

    return (
      <div>
        
        <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </button>
        <h2>{post.title}</h2>
        <b>Categories: </b> <br /> {post.categories} <br />
        <b>Content: </b> <br />{post.content}
        <hr />
        <Link to="/">Back to Index</Link>
      </div>
    );
  }
}

function mapStateToProps({posts}, ownProps) {
  return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);