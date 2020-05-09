import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux'

function Private ({ component: Comp, isLogin, ...rest }) {
  return (
    <Route
      {...rest}
      render={
        props => isLogin ?
          (<Comp />) :
          (<Redirect to={{
            pathname: '/login',
            state: { redirect: props.location.pathname }
          }} />)
      }
    />
  )
}
const mapStateToProps = (state, ownProps) => ({
  isLogin: state['login_reducer'].isLogin
})

export default connect(mapStateToProps, null)(Private)