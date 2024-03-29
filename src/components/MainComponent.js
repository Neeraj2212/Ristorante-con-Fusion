import React, { Component } from "react"
import Dishdetail from "./DishdetailComponent"
import Menu from "./MenuComponent"
import Header from "./HeaderComponent"
import Footer from "./FooterComponent"
import About from "./AboutComponent"
import Contact from "./contactComponent"
import Home from "./HomeComponent"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { Switch, Route, Redirect, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import {
  postComment,
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders,
  postFeedback
} from "../redux/ActionCreators"

import { actions } from "react-redux-form"

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes())
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"))
  },
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
  postFeedback: (values) => dispatch(postFeedback(values))
})

class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes()
    this.props.fetchComments()
    this.props.fetchPromos()
    this.props.fetchLeaders()
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishErrMess={this.props.dishes.errMess}
          promotion={
            this.props.promotions.promotions.filter(
              (promo) => promo.featured
            )[0]
          }
          promoLoading={this.props.promotions.isLoading}
          promoErrMess={this.props.promotions.errMess}
          leader={
            this.props.leaders.leaders.filter((leader) => leader.featured)[0]
          }
          leaderErrMess={this.props.leaders.errMess}
          leaderLoading={this.props.leaders.isLoading}
        />
      )
    }

    const DishWithId = ({ match }) => {
      return (
        <Dishdetail
          dish={
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
        />
      )
    }

    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames='page'
            timeout={300}
          >
            <Switch>
              <Route path='/Ristorante-con-Fusion/home' component={HomePage} />
              <Route
                exact
                path='/Ristorante-con-Fusion/menu'
                component={() => <Menu dishes={this.props.dishes} />}
              />
              <Route
                path='/Ristorante-con-Fusion/menu/:dishId'
                component={DishWithId}
              ></Route>

              <Route
                exact
                path='/Ristorante-con-Fusion/aboutus'
                component={() => (
                  <About
                    leaders={this.props.leaders.leaders}
                    errMess={this.props.leaders.errMess}
                    isLoading={this.props.leaders.isLoading}
                  />
                )}
              />
              <Route
                exact
                path='/Ristorante-con-Fusion/contactus'
                component={() => (
                  <Contact
                    resetFeedbackForm={this.props.resetFeedbackForm}
                    postFeedback={this.props.postFeedback}
                  />
                )}
              />
              <Redirect to='/Ristorante-con-Fusion/home' />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
