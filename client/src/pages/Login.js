import React from "react";
import {Link} from "react-router-dom";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

import UserContext from '../contexts/UserContext'

const Login = () => {

  const { setLoggedIn } = React.useContext(UserContext)

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [message, setMessage] = React.useState('')

    const submit = event => {
      event.preventDefault()

      if(!email) {
        setMessage('Email field can not be empty !')
      } else {
        fetch(`/user/login`, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
        .then(data => {
          if(data.message) {
              console.log(data.message)
              setMessage(data.message)
          }
          if(data.token && data.email) {
              localStorage.setItem("myToken", data.token) //Set Token
              localStorage.setItem("myEmail", data.email) //Set Email
              setLoggedIn(data.token)
              console.log(localStorage.myToken) // Check Token if stored in localStorage
          }
        })
      }
  }
  
    return (
      <>
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <Row className="justify-content-center mb--6 mt-4">
                  <h4 className="text-white font-italic">Log In to create</h4>
                  <h4 className="text-success ml-1 font-italic">Checklists & Resources</h4>
          </Row>
          <Container className="pt-lg-7">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                      <small>Log in with</small>
                      </div>
                      <div className="text-center">
                      <Button
                          className="btn-neutral btn-icon"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                      >
                          <span className="btn-inner--icon">
                          <img
                              alt="..."
                              src={require("../assets/img/icons/common/facebook.svg")}
                          />
                          </span>
                          <span className="btn-inner--text">Facebook</span>
                      </Button>
                      <Button
                          className="btn-neutral btn-icon"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                      >
                          <span className="btn-inner--icon">
                          <img
                              alt="..."
                              src={require("../assets/img/icons/common/google.svg")}
                          />
                          </span>
                          <span className="btn-inner--text">Google</span>
                      </Button>
                      </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>Or log In with credentials</small>
                    </div>
                    <Form onSubmit={submit}>
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input 
                            className="text-blue font-weight-700"
                            placeholder="Email" 
                            type="email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className="text-blue font-weight-700"
                            placeholder="Password"
                            type="password"
                            autoComplete="off"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                          />
                        </InputGroup>
                      </FormGroup>
                      <div className="font-italic">
                        <p className='small text-danger font-weight-700'>{message}</p>
                      </div>
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id=" customCheckLogin"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor=" customCheckLogin"
                        >
                          <span>Remember me</span>
                        </label>
                      </div>
                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="primary"
                          type="submit"
                        >
                          <i className="fa fa-sign-in mr-2" />
                          Log In
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
                <Row className="mt-3">
                  <Col xs="6">
                    <a
                      className="text-light"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <small>Forgot password?</small>
                    </a>
                  </Col>
                  <Col className="text-right" xs="6">
                      <Link 
                        className="small text-light" 
                        to={"/signup"}>
                          <p className="text-white font-weight-bold">Create new account</p>
                      </Link>    
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  
}

export default Login;
