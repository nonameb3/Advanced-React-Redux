import React, {useState} from 'react';
import { connect } from 'react-redux';
import { SaveComment, FetchComments } from 'actions';

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
    <div>
      <form onSubmit={handleSubmit}>
      <h4>Add comment</h4>
      <textarea onChange={handleChange} value={comment}/>
      <div>
        <button>Submit Comment</button>
      </div>
      </form>
      <button className="fectComment" onClick={()=>props.FetchComments()}>Fetch Comment</button>
    </div>
    
  );
};

export default connect(null, {SaveComment, FetchComments})(CommentBox);