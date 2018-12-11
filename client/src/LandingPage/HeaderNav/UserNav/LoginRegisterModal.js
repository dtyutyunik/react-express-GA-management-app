import React from 'react';
import { Tabs, Modal } from 'antd';
import WrappedRegisterForm from './RegisterForm'
import WrappedLoginForm from './LoginForm'

export default class LoginRegisterModal extends React.Component {
    handleCancel(){
        this.props.setModalVisible(false);
    }
    render(){
        return(
            <Modal title="User" visible={this.props.visible}
                   onCancel={this.handleCancel.bind(this)}
                   onOk={this.handleCancel.bind(this)}>
                <Tabs type="card">
                    <Tabs.TabPane tab='Login' key='1'>
                        <WrappedLoginForm login={this.props.login} setModalVisible={this.props.setModalVisible}/>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab='Signup' key='2'>
                        <WrappedRegisterForm setModalVisible={this.props.setModalVisible}/>
                    </Tabs.TabPane>
                </Tabs>
            </Modal>
        );
    }
}
