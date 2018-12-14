import React from 'react';
import { Icon, message,  Form, Input, Button } from 'antd';
import { userInstructorSignup } from '../../services/userAPIService';
import axios from 'axios';
const BASE_URL = "https://polar-refuge-58258.herokuapp.com";
// form for instructor to register
// some code snippet imported from ant design
class InstructorRegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {confirmDirty: false};
    }
    //handle registration logic
    async handleRegisterSubmit(e) {
        //stop default, start the api request
        e.preventDefault();
        this.props.form.validateFields( async (err, formData) => {
            if (!err) {
              const formDataReq = {
                          fullname: formData.fullname,
                          username: formData.username,
                          password: formData.password,
                          "auth_level": 'instructor'
              }
                console.log('Received values of form: ', formDataReq);
                //start the registration request
                const response = await axios.post(`${BASE_URL}/users/instructors`, formDataReq);
                console.log(response.data);

                if (response.data.user) {
                      if (response.data.user.fullname !== undefined) {
                        message.success(`Dear ${response.data.user.fullname}, you are successfully registered, you can log in now`);
                        //set modal to disappear
                        console.log('set modal to disappear');
                        this.props.setModalVisible(false);
                        return response.data.user;
                    }
                } else {
                   message.error(`Sorry the username has been taken`);
               }
             }
        })
    }
    //check if the passwords are correctly matched
    checkPassword(rule, value, callback) {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('two passwords are not matched!');
        } else {
            callback();
        }
    }
    //register checking password
    checkConfirm(rule, value, callback) {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm Password'], {force: true});
        }
        callback();
    }
    // if there is any kind of err such as value not equal to "general"
    // then the form won't go through
    // the final auth code will be generate by admin for one time use
    // the auth code is used for once then will be discarded
    checkAuthCode(rule, value, callback) {
      const form = this.props.form;
      if (value === "general") {
        callback();
      } else {
        callback('auth code not correct');
      }
    }

    render() {
        let {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleRegisterSubmit.bind(this)}>
                <Form.Item label="full name">
                    {getFieldDecorator('fullname', {
                        rules: [{required: true, message: 'Please enter your full name'}],
                    })
                    (<Input
                        prefix={<Icon type="user"
                                      style={{color: 'rgba(0,0,0,.25)'}}/>}
                        placeholder='Please enter your full name'/>)}
                </Form.Item>
                <Form.Item label="account username">
                    {getFieldDecorator('username', {
                        rules: [{
                           required: true,
                           message: 'Please enter your username'
                         }],
                    })
                    (<Input
                        prefix={<Icon type="user"
                                      style={{color: 'rgba(0,0,0,.25)'}}/>}
                                      placeholder='Please enter your username'/>)}
                </Form.Item>
                <Form.Item label="password">
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please enter your password'}, {
                            validator: this.checkConfirm.bind(this),
                        }],
                    })(
                        <Input prefix={<Icon type="lock"
                                             style={{color: 'rgba(0,0,0,.25)'}}/>}
                                             type='password'
                                             placeholder='Please enter your password'
                                            />)}
                </Form.Item>

                <Form.Item label="confirm password">
                    {getFieldDecorator('confirmPassword', {
                        rules: [{
                            required: true, message: 'Please confirm password!',
                        }, {
                            validator: this.checkPassword.bind(this),
                        }],
                    })(
                        <Input prefix={<Icon type="lock"
                                             style={{color: 'rgba(0,0,0,.25)'}}/>}
                                             type='password'
                                             placeholder='please enter password again'/>
                    )}
                </Form.Item>
                <Form.Item label="auth code">
                    {getFieldDecorator('authcode', {
                        rules: [{required: true, message: 'Please enter the auth code'}, {
                            validator: this.checkAuthCode.bind(this),
                        }],
                    })(
                        <Input prefix={<Icon type="lock"
                                             style={{color: 'rgba(0,0,0,.25)'}}/>}
                                             type='auth_code'
                                             placeholder='Please enter the auth code'
                                            />)}
                </Form.Item>
                <Form.Item>
                    <Button type='primary'
                            htmlType='submit'>Register</Button>
                </Form.Item>
            </Form>
        );
    }
}
const WrapInstructorRegisterForm = Form.create()(InstructorRegisterForm);
export default WrapInstructorRegisterForm;
