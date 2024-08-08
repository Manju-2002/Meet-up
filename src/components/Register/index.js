import Header from '../Header'

import RegisterContext from '../../context/RegisterContext'

import {
  RegisterContainer,
  FormContainer,
  FormImg,
  Form,
  FormHead,
  Label,
  Input,
  Select,
  Options,
  FormBtn,
  FormErr,
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

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        updateName,
        updateTopic,
        showError,
        changeRegisterStatus,
        updateError,
      } = value

      const submitRegistration = event => {
        event.preventDefault()

        // console.log(props)
        const {history} = props
        if (name !== '' && topic !== '') {
          history.replace('/')
          changeRegisterStatus()
        } else {
          updateError()
        }
      }

      const onChangeName = event => {
        updateName(event.target.value)
      }

      const onChangeTopic = event => {
        updateTopic(event.target.value)
      }

      return (
        <div>
          <Header />
          <div>
            <RegisterContainer>
              <FormContainer>
                <FormImg
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <Form onSubmit={submitRegistration}>
                  <FormHead>Let us Join</FormHead>
                  <Label htmlFor="name">NAME</Label>
                  <Input
                    type="text"
                    value={name}
                    onChange={onChangeName}
                    placeholder="Your name"
                    id="name"
                  />
                  <Label htmlFor="topic">TOPICS</Label>
                  <Select value={topic} id="topic" onChange={onChangeTopic}>
                    {topicsList.map(each => (
                      <Options key={each.id} value={each.id}>
                        {each.displayText}
                      </Options>
                    ))}
                  </Select>
                  <FormBtn type="submit">Register Now</FormBtn>
                  {showError === true ? (
                    <FormErr>Please enter your name</FormErr>
                  ) : null}
                </Form>
              </FormContainer>
            </RegisterContainer>
          </div>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register

/** <RegisterImg
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <Form onSubmit={submitRegistration}>
                <RegisterHeading>Let us join</RegisterHeading>
                <InputContainer>
                  <Label htmlFor="name">NAME</Label>
                  <Input
                    id="name"
                    value={name}
                    type="text"
                    onChange={onChangeName}
                    placeholder="Your name"
                  />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="topic">Topics</Label>
                  <Select id="topic" value={topic} onChange={onChangeTopic}>
                    {topicsList.map(each => (
                      <option value={each.id} key={each.id}>
                        {each.displayText}
                      </option>
                    ))}
                  </Select>
                </InputContainer>
                <RegisterButton type="submit">Register Now</RegisterButton>
                {showError === true ? (
                  <ErrorMsg>Please enter your name</ErrorMsg>
                ) : (
                  ''
                )}
              </Form> */
