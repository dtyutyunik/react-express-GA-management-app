import React from 'react';
import { Icon, Form, Input, Button, Checkbox } from 'antd';
import { userLogin } from '../../../services/userAPIService'
//login form component
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasUser: ''
    };
  }
    //modal handle login submission
  async handleLoginSubmit(e) {
    //start API request
    //stop the default action
    e.preventDefault();
    this.props.form.validateFields(async (err, formData) => {
      if (!err) {
        console.log('Received values of form: ', formData);
          //axios api request
            const resp = await userLogin(formData);
            console.log(resp)
            if (resp !== null) {
                console.log(resp);
                let userLogin = {
                  username: resp.username
                };
                this.props.login(userLogin);
                //set the modal to disappear
                this.props.setModalVisible(false);
                } else {
                  //if json is null, username or password wrong
                  this.setState({hasUser: 'wrong username or password '});
                }
             }
      });
    }
  render() {
    let {getFieldDecorator} = this.props.form;
      return (
        <Form onSubmit={this.handleLoginSubmit.bind(this)}>
            <Form.Item>
                {getFieldDecorator('username', {
                    rules: [{
                        required: true,
                        message: 'Please input your username!'
                      }],
              })(
                 <Input prefix=
                   {<Icon type="user"
                          style={{color: 'rgba(0,0,0,.25)'}}/>}
                          placeholder="Username"/>
                  )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{
                      required: true,
                      message: 'Please input your Password!'
                      }],
                  })(
                  <Input prefix=
                   {<Icon type="lock"
                          style={{color: 'rgba(0,0,0,.25)'}}/>}
                          type="password" placeholder="Password"/>
                    )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(
                    <Checkbox>Remember me</Checkbox>
                 )}
                <span>{this.state.hasUser}</span>
                <Button type="primary"
                        htmlType="submit"
                        className="login-form-button">
                        Log in
                </Button>
                </Form.Item>
              {/*<Form.Item>
                <Button type="primary"
                        onClick={this.props.toggleToSignupTab('student')}
                > Student Signup </Button>
              </Form.Item>
              <Form.Item>
                <Button type="primary"
                        onClick={this.props.toggleToSignupTab('instructor')}
                > Instructor Signup </Button>
              </Form.Item>*/}
            </Form>
        );
    }
}

const WrappedLoginForm = Form.create()(LoginForm);
export default WrappedLoginForm;
