import {Component} from 'react'
import Navbar from '../Navbar'
import TabItem from '../TabItem'
import PhotoItem from '../PhotoItem'
import GameOver from '../GameOver'
import './index.css'

class Game extends Component {
  state = {score: 0, timer: 60, timerImg: '', selectedTab: ''}

  timeId = 0

  componentDidMount() {
    const {imagesList, tabsList} = this.props
    this.timeId = setInterval(() => this.timerRunning(), 1000)
    this.setState({
      timerImg: imagesList[0].imageUrl,
      selectedTab: tabsList[0].tabId,
    })
  }

  componentWillUnmount() {
    clearInterval(this.timeId)
    console.log('component unmounted')
  }

  tabClicked = id => {
    this.setState({
      selectedTab: id,
    })
  }

  timerRunning = () => {
    console.log('running')
    this.setState(prevState => ({
      timer: prevState.timer - 1,
    }))
  }

  randomImage = imageId => {
    const {imagesList} = this.props
    const {timerImg} = this.state
    const id = Math.floor(Math.random() * 31)
    this.setState({
      timerImg: imagesList[id].imageUrl,
    })

    const getImageId = imagesList.filter(each => each.imageUrl === timerImg)
    if (getImageId !== undefined) {
      if (getImageId[0].id === imageId) {
        this.setState(prevState => ({
          score: prevState.score + 1,
        }))
      }
    }
  }

  onTryAgain = () => {
    const {imagesList, tabsList} = this.props
    this.setState({
      timer: 60,
      score: 0,
      timerImg: imagesList[0].imageUrl,
      selectedTab: tabsList[0].tabId,
    })
  }

  render() {
    const {imagesList, tabsList} = this.props
    const {score, timer, timerImg, selectedTab} = this.state
    const filteredImageList = imagesList.filter(
      eachPhoto => eachPhoto.category === selectedTab,
    )

    return (
      <>
        <Navbar score={score} timer={timer} />
        <div className="container">
          {timer >= 0 && (
            <>
              <div className="game-image-container">
                <img src={timerImg} alt="match" className="game-image" />
              </div>
              <div className="tabs-container">
                {tabsList.map(eachTab => (
                  <TabItem
                    tabs={eachTab}
                    key={eachTab.tabId}
                    selectedTab={selectedTab}
                    tabClicked={this.tabClicked}
                  />
                ))}
              </div>
              <ul className="thumb-img-container">
                {filteredImageList.map(eachPhoto => (
                  <PhotoItem
                    photo={eachPhoto}
                    key={eachPhoto.id}
                    randomImage={this.randomImage}
                  />
                ))}
              </ul>
            </>
          )}

          {timer < 0 && <GameOver score={score} onTryAgain={this.onTryAgain} />}
        </div>
      </>
    )
  }
}

export default Game
