import React from 'react';
import { connect } from 'react-redux';

const CommentList = props => {
  function renderList(){
    return props.comment.map(comment => <li key={comment}>{comment}</li>);
  }

  return (
    <div>
      <ul>
        {renderList()}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { comment : state.comment};
};

export default connect(mapStateToProps)(CommentList);