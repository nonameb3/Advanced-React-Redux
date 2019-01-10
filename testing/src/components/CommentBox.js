import React, {useState} from 'react';

function CommentBox() {
  const [comment, setComment] = useState('');

  function handleChange(event) {
    setComment(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();

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

export default CommentBox;