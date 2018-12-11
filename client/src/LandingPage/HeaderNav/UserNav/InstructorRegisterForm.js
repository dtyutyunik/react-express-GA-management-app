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
        if (value && value !== form.getFieldValue('r_password')) {
            callback('two passwords are not matched!');
        } else {
            callback();
        }
    }
    //register checking password
    checkConfirm(rule, value, callback) {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['r_confirmPassword'], {force: true});
        }
        callback();
    }

    render() {
        let {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleRegisterSubmit.bind(this)}>
                <Form.Item lable="Account">
                    {getFieldDecorator('r_userName', {
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
                <Form.Item lable="password">
                    {getFieldDecorator('r_password', {
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

                <Form.Item lable="confirmpassword">
                    {getFieldDecorator('r_confirmPassword', {
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

const WrapInstructorRegisterForm = Form.create()(InstructorRegisterForm);

export default WrapInstructorRegisterForm;
