import React from 'react';
import {  Form, Input, Button, Row, Col, Tooltip, Icon, Select } from 'antd';
import axios from 'axios';
import './StudentEdit.scss'
const BASE_URL = "https://still-ridge-45074.herokuapp.com";
const FormItem = Form.Item;
const Option = Select.Option;

class StudentEditForm extends React.Component{
  constructor(props){
    super(props);
    const fullname = `${props.studentProfile.fullname}`;
    const email =  `${props.studentProfile.email}`;
    const phone = `${props.studentProfile.phone}`;
    this.state={
     confirmDirty: false,
     formData: {
       fullname,
       email,
       phone
     }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
  const{ name, value } = e.target;
  this.setState({
    [name]:value
    })
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll( async (err, values) => {
     if (!err) {
       this.setState({
         formData: values
       })
       await this.props.updateStudentProfile(values);
       this.props.setView('0');
     }
   });
  }
  async putStudentEdit(passtu){
    const putStudent = await axios.put(`${BASE_URL}/students/${this.props.studentProfile.id}`,passtu)
  }

  render (){
     const { getFieldDecorator } = this.props.form;
     const formItemLayout = {
         labelCol: {
           xs: { span: 22 },
           sm: { span: 4 },
         },
         wrapperCol: {
           xs: { span: 22 },
           sm: { span: 10 },
         },
       };
       const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 22,
          offset: 2,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

     return(
       <Form onSubmit={this.handleSubmit}
             className="student-edit-form"
         >
         <FormItem
         {...formItemLayout}
         label={(
           <span>
             Full Name
             <Tooltip title="What do you want others to call you?">
               <Icon type="question-circle-o" />
             </Tooltip>
           </span>
         )}
       >
         {getFieldDecorator('fullname', {
           rules: [{ required: true, message: 'Please input your fullname!', whitespace: true }],
         })(
           <Input />
         )}
       </FormItem>
       <FormItem
         {...formItemLayout}
         label="E-mail"
       >
       {getFieldDecorator('email', {
          rules: [{
            type: 'email', message: 'The input is not valid E-mail!',
          }, {
            required: false, message: 'Please input your E-mail!',
          }],
        })(
          <Input />
        )}
       </FormItem>
         <FormItem
          {...formItemLayout}
          label="Phone Number"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">Complete Edit</Button>
      </FormItem>
      </Form>
     )
   }
}
const StudentEdit = Form.create()(StudentEditForm);
export default StudentEdit;
