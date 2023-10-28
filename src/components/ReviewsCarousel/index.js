import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewId: 0}

  getReviewDetails = activeReview => {
    const {imgUrl, username, companyName, description} = activeReview
    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} />
        <p className="user-name">{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeReviewId} = this.state

    if (activeReviewId > 0) {
      this.setState(prevState => ({
        activeReviewId: prevState.activeReviewId - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const {activeReviewId} = this.state

    if (activeReviewId < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewId: prevState.activeReviewId + 1,
      }))
    }
  }

  render() {
    const {activeReviewId} = this.state
    const {reviewsList} = this.props
    const activeReview = reviewsList[activeReviewId]
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="reviews-container">
          <button
            type="button"
            className="button"
            data-testid="leftArrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              alt="left arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            />
          </button>
          {this.getReviewDetails(activeReview)}
          <button
            type="button"
            className="button"
            data-testid="rightArrow"
            onClick={this.onClickRightArrow}
          >
            <img
              alt="right arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
