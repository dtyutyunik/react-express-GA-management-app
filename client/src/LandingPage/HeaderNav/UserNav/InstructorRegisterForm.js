import React from 'react';
import { Icon, Message,  Form, Input, Button } from 'antd';
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
        this.props.form.validateFields((err, formData) => {
            if (!err) {
                console.log('Received values of form: ', formData);
                //start the registration request
                // const response = await
                //     if (response) {
                //         message.success("successful registered");
                //         //set modal to disappear
                //         this.props.setModalVisible(false);
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
    // if there is any kind of err such as value not equal to "general"
    // then the form won't go through
    // the final auth code will be generate by admin for one time use
    // the auth code is used for once then will be discarded
    checkAuthCode(rule, value, callback) {
      const form = this.props.form;
      if (value === "general") {
        callback('auth correct');
      } else {
        callback('auth code not correct');
      }
    }

    render() {
        let {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleRegisterSubmit.bind(this)}>
                <Form.Item label="full name">
                    {getFieldDecorator('fullName', {
                        rules: [{required: true, message: 'Please enter your full name'}],
                    })
                    (<Input
                        prefix={<Icon type="user"
                                      style={{color: 'rgba(0,0,0,.25)'}}/>}
                        placeholder='Please enter your full name'/>)}
                </Form.Item>
                <Form.Item label="account username">
                    {getFieldDecorator('userName', {
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

                <Form.Item label="confirmpassword">
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
