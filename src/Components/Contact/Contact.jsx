import React, { useState } from "react";
import ss from "./contact.module.scss";
import { Row, Col } from "antd";
 import contact from "../../assets/images/contact.png";
import { Form, Input, Checkbox } from "antd";
// import axios from 'axios'
// import Notification from '../../Utils/Notification.js'
import { addContact } from "../../Api/countries"; 
import { useDispatch } from "react-redux";
// import { component } from "../../Utils/component";
const Contact = ({contactData}) => {

  // const contactSelector = useSelector(state => state.pageDataReducer.page.data.data[0].attributes.Blocks)
  // const [contactData,setContactData] = useState()
  // useEffect(()=>{
  //   const data = component(contactSelector)
  //   setContactData(data[3])
  // },[contactSelector])

  const [form] = Form.useForm();
  const [checked, setChecked] = useState(false);
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch()
  const onCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };

  const onFinish = (values) => {
    form.resetFields();
    setChecked(false);
    setPhone('')
    const formData = { data: values }
    dispatch(addContact(formData))
    // axios.post(`${process.env.REACT_APP_API_URL}/api/contacts`, formData,
    //   { headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` } })
    //   .then(response => {
    //     Notification('success', 'Submitted Successsfully')
    //   }).catch((error) => {
    //     Notification('error', 'Something went wrong!!!', 'Please Try Again')
    //   })
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section className={ss.contact}>
      {contactData && <div className={ss.container}>
        <div className={ss.black_bg}>
          <Row middle="xs">
            <Col sm={24} md={24} lg={12}>
              <div className={ss.img_box}>
                <div
                  className={ss.contact_img}
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  
{      contactData.Image.data?<img src={`${process.env.REACT_APP_API_URL}${contactData.Image.data.attributes.url}`} alt="contact" />
:<img src={contact} alt="Contact"/>}
                </div>
                <div id="contact"></div>
              </div>
            </Col>
            <Col sm={24} md={24} lg={12}>
              <div className={ss.heading} dangerouslySetInnerHTML={{__html:contactData.Title}}>
              </div>
              <div className={ss.discp}>
                <p>
                  {contactData.Description}
                </p>
              </div>
              <div className={ss.contact_form}>
                <Form
                  form={form}
                  name="nest-messages"
                  className={ss.form_group}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <div className={ss.form_wrap}>
                    <div className={ss.form_box}>
                      <Form.Item
                        name={["firstname"]}
                        rules={[
                          { required: true, message: `${contactData.Label_FirstName.replace(/[^a-zA-Z]/g,"")} is required`, whitespace: true },
                        ]}
                      >
                        <div className={ss.formfield}>
                          <Input
                            type="text"
                            name="firstname"
                            id="firstname"
                            label="Nome"
                            required
                          />
                          <label className={ss.label} alt="Nome" placeholder="Nome">
                          {contactData.Label_FirstName}
                          </label>
                        </div>
                      </Form.Item>
                    </div>
                    <div className={ss.form_box}>
                      <Form.Item
                        name={["lastname"]}
                        rules={[
                          { required: true, message: `${contactData.Label_LastName.charAt(0).toUpperCase()+contactData.Label_LastName.replace(/[^a-zA-Z]/g," ").toLowerCase().slice(1)} is required`, whitespace: true },
                        ]}
                      >
                        <div className={ss.formfield}>
                          <Input
                            type="text"
                            name="lastname"
                            id="lastname"
                            required
                          />
                          <label className={ss.label} alt="Cognome" placeholder="Cognome">
                          {contactData.Label_LastName}

                          </label>
                        </div>
                      </Form.Item>
                    </div>
                  </div>
                  <div className={ss.form_wrap}>
                    <div className={ss.form_box}>
                      <Form.Item
                        name={["email"]}
                        rules={[
                          {
                            required: true,
                            type: "email",
                            message: "Enter a valid email",
                            whitespace: true
                          },
                        ]}
                      >
                        <div className={ss.formfield}>
                          <Input
                            type="text"
                            name="email"
                            id="email"
                            required
                          />
                          <label className={ss.label} alt="E-mail" placeholder="E-mail">
                          {contactData.Label_EMail}

                          </label>
                        </div>
                      </Form.Item>
                    </div>
                    <div className={ss.form_box}>
                      <Form.Item
                        name={["phone"]}
                      // rules={[
                      //   { required: true, message: "Phone is required" },
                      // ]}
                      >
                        <div className={ss.formfield}>
                          <Input className={ss.number}
                            type="text"
                            name="phone"
                            id="phone"
                            pattern="[0-9]*"
                            value={phone}
                            onChange={(e) =>
                              setPhone((v) => (e.target.validity.valid ? e.target.value : v))
                            }
                          />
                          <label className={ss.phone_num} alt="Telefono" placeholder="Telefono">
                          {contactData.Label_Phone}

                          </label>
                          <span className={ss.plus}>+</span>
                        </div>
                      </Form.Item>
                    </div>
                  </div>
                  <div className={ss.check_wrap}>
                    <Form.Item
                      name="checkbox"
                      rules={[
                        {
                          required: !checked,
                          message: checked
                            ? ""
                            : "Please accept terms and conditions",
                        },
                      ]}
                    >
                      <Checkbox checked={checked} onChange={onCheckboxChange}>
                        <p>
                        {contactData.Privacy_Policy}

                        </p>{" "}
                      </Checkbox>
                    </Form.Item>
                  </div>
                  <div className={ss.btn_lg}>
                    <button className={ss.btn_submit}>
                    {contactData.Submit_Button}
                    </button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </div>}
    </section>
  );
};

export default Contact;
