import React from 'react';
import {connect} from 'react-redux';

// Higher order component
export default ChildComponent => {
  class ComposedComponent extends React.Component{
    componentDidMount(){
      this.shouldLogin();
    }

    componentDidUpdate(){
      this.shouldLogin();
    }

    shouldLogin(){
      if(!this.props.auth){
        this.props.history.push('/');
      }
    };

    render(){
      return(
        <ChildComponent {...this.props}/>
      );
    }
  };

  function MapStateToProps(state){
    return{auth: state.auth};
  };

  return connect(MapStateToProps)(ComposedComponent);
};