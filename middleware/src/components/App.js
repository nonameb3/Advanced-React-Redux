import React from 'react';
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthLogin} from 'actions';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

function App(props) {
  function randerHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Pots a Comment</Link>
        </li>
        <li>
          {randerButton()}
        </li>
      </ul>
    );
  }

  function randerButton() {
    const loginText = props.auth? 'Logout' : 'Login';
    return (
      <button onClick={()=>props.AuthLogin(!props.auth)}>
        {loginText}
      </button>
    ); 
  }

  return (
    <div>
      {randerHeader()}
      <Route path="/post" component={CommentBox}/>
      <Route path="/" exact component={CommentList}/>
    </div>
  );
};

function MapStateToProps(state){
  return{auth:state.auth};
}

export default connect(MapStateToProps,{AuthLogin})(App);
