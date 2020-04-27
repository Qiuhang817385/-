import React from 'react'
import './index.scss'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
function Home (props) {
  if (props.isLogin) {
    return (
      <div className="home-wrap">
        欢迎光临
      </div>
    )
  } else {
    return (
      <Redirect to='/login'></Redirect>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  isLogin: state['login_reducer'].isLogin
})

export default connect(mapStateToProps, {})(Home)

