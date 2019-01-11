import React, {useState} from 'react';
import { connect } from 'react-redux';
import { SaveComment } from 'actions';

function CommentBox(props) {
  const [comment, setComment] = useState('');

  function handleChange(event) {
    setComment(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    props.SaveComment(comment);
    setComment('');
  };

  return(
    <form onSubmit={handleSubmit}>
      <h4>Add comment</h4>
      <textarea onChange={handleChange} value={comment}/>
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  );
};

export default connect(null, {SaveComment})(CommentBox);