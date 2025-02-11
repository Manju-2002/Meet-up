import {Link} from 'react-router-dom'

import Header from '../Header'

import RegisterContext from '../../context/RegisterContext'

import {
  HomeContainer,
  Heading,
  Description,
  Button,
  Image,
  Name,
  Topic,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Home = props => {
  // console.log(props)
  const {history} = props
  const onClickRegister = () => {
    history.replace('/register')
  }

  return (
    <RegisterContext.Consumer>
      {value => {
        const {registerStatus, name, topic} = value
        // console.log(isRegistered)
        const topicName =
          topicsList[topicsList.findIndex(eachTopic => eachTopic.id === topic)]
            .displayText

        return (
          <div>
            <Header />

            {registerStatus === true ? (
              <HomeContainer>
                <Name>Hello {name}</Name>
                <Topic>Welcome to {topicName}</Topic>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            ) : (
              <HomeContainer>
                <Heading>Welcome to Meetup</Heading>
                <Description>Please register for the topic</Description>

                <Link to="/register">
                  <Button onClick={onClickRegister}>Register</Button>
                </Link>

                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            )}
          </div>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
