import React from 'react';
import { Icon, Form, Input, Button, Checkbox } from 'antd';

//login form component
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasUser: ''};
    }
    //modal handle login submission
    handleLoginSubmit(e) {
        //start API request
        //stop the default action
        e.preventDefault();
        this.props.form.validateFields((err, formData) => {
            if (!err) {
                console.log('Received values of form: ', formData);
                let myFetchOptions = {method: 'GET'};
                fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=login&username=" + formData.userName + "&password=" + formData.password + "&r_userName=" + formData.r_userName + "&r_password=" + formData.r_password + "&r_confirmPassword=" + formData.r_confirmPassword, myFetchOptions)
                    .then(response => response.json())
                    .then(json => {
                        if (json !== null) {
                            console.log(json);
                            let userLogin = {userName: json.NickUserName, userId: json.UserId};
                            this.props.login(userLogin);
                            //set the modal to disappear
                            this.props.setModalVisible(false);
                        }
                        else {
                            //if json is null, username or password wrong
                            this.setState({hasUser: 'wrong username or password '});
                        }
                  });
            }
        });
    }
    render() {
        let {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleLoginSubmit.bind(this)}>
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{
                            required: true,
                            message: 'Please input your username!'
                        }],
                    })(
                        <Input prefix={<Icon type="user"
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
                        <Input prefix={<Icon type="lock"
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
                    <Button type="primary" htmlType="submit"
                            className="login-form-button">
                        Log in
                    </Button>

                </Form.Item>
            </Form>
        );
    }
}

const WrappedLoginForm = Form.create()(LoginForm);
export default WrappedLoginForm;
