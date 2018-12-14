import React from 'react';
import { Icon, message,  Form, Input, Button } from 'antd';
import axios from 'axios';
// form for student to register
// code snippet imported from ant design
const BASE_URL = "https://polar-refuge-58258.herokuapp.com";
class StudentRegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {confirmDirty: false};
    }
    //handle registration logic
    async handleRegisterSubmit(e) {
        //stop default, start the api request
        e.preventDefault();
        this.props.form.validateFields(async (err, formData) => {
            if (!err) {
              const formDataReq = {
                fullname: formData.fullname,
                username: formData.username,
                password: formData.password,
                "auth_level": 'student'
              }
                //start the registration request
              console.log('Received values of form: ', formDataReq);
              const response = await axios.post(`${BASE_URL}/users/students`, formDataReq);
              console.log(response.data.user);
                 if (response.data.user) {
                       message.success(`Hello ${response.data.user.fullname}! you are successfully registered,
                         please login now`);
                       //set modal to disappear
                       this.props.setModalVisible(false);
              } else {
                message.error(`Sorry, Username has been taken, please try a new one`)
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
            form.validateFields(['confirmPassword'], {force: true});
        }
        callback();
    }

    render() {
        let { getFieldDecorator } = this.props.form;
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
                        rules: [{required: true, message: 'Please enter your username'}],
                    })
                    (<Input
                        prefix={<Icon type="user"
                                      style={{color: 'rgba(0,0,0,.25)'}}/>}
                        placeholder='Please enter your username'/>)}
                </Form.Item>

                <Form.Item label="password">
                    {getFieldDecorator('password', {
                        rules: [{required: true,
                                 message: 'Please enter your password'}, {
                                 validator: this.checkConfirm.bind(this),
                        }],
                    })(
                        <Input prefix={<Icon type="lock"
                                             style={{color: 'rgba(0,0,0,.25)'}}/>}
                                             type='password'
                                             placeholder='Please enter your password'/>)}
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

                <Form.Item>
                    <Button type='primary'
                            htmlType='submit'>Register</Button>
                </Form.Item>
            </Form>
        );
    }
}
const WrapStudentRegisterForm = Form.create()(StudentRegisterForm);

export default WrapStudentRegisterForm;
