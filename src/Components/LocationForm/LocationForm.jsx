import React, { useState,useEffect } from "react";
import ss from "./LocationForm.module.scss";
import { Form, Input, Checkbox } from "antd";
import { Select } from "antd";
// import axios from 'axios'
// import Notification from '../../Utils/Notification.js'
import { addBooking, fetchAvailabilities } from "../../Api/countries";
import { useDispatch, useSelector } from "react-redux";

const { Option } = Select;

const LocationForm = ({locationFormData, details}) => {
  const searchSelector = useSelector(state=>state.countryReducer.region.details)
  const {regionName} = details
  const dispatch = useDispatch()
  const [form] = Form.useForm();
  const [checked, setChecked] = useState(false);
  const [phone,setPhone] = useState('')
  const onCheckboxChange =  (e) => {setChecked(e.target.checked);};
  useEffect(()=>{
    dispatch(fetchAvailabilities(searchSelector.region))
  },[])

  const onFinish = (values) => {
    values.region = regionName
 const datas = {data:values}
  dispatch(addBooking(datas))
};
  const onFinishFailed = (errorInfo) => {
    
  };
  return (
    <section className={ss.location_form}>
      <div className={ss.heading}>
      <div dangerouslySetInnerHTML={{__html:locationFormData.Title}}></div>
      <div dangerouslySetInnerHTML={{__html:locationFormData.Description}}></div>
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
              {/* <Form.Item name={[ 'name']}  label="Nome" rules={[{ required: true }]}>
                    <Input/>
                    </Form.Item> */}
              <Form.Item
                name={["firstname"]}
                rules={[{ required: true,whitespace: true ,message:`${locationFormData.Label_FirstName.replace(/[^a-zA-Z]/g,"")} is required`}]}
                id="firstnamefield"
              >
                <div className={ss.formfield}>
                  <Input type="text" name="firstname" id="firstname" required />
                  <label className={ss.label} alt="Nome" placeholder="Nome">
                    {locationFormData.Label_FirstName}
                  </label>
                </div>
              </Form.Item>
            </div>
            <div className={ss.form_box}>
              <Form.Item name={["lastname"]} rules={[{ required: true,whitespace: true,message:`${locationFormData.Label_LastName.charAt(0).toUpperCase()+locationFormData.Label_LastName.replace(/[^a-zA-Z]/g," ").toLowerCase().slice(1)} is required`}]}>
                <div className={ss.formfield}>
                  <Input type="text" name="firstname" id="firstname" required />
                  <label className={ss.label} alt="Cognome" placeholder="Cognome">
                  {locationFormData.Label_LastName}
                  </label>
                </div>
              </Form.Item>
            </div>
          </div>
          <div className={ss.form_wrap}>
            <div className={ss.form_box}>
              <Form.Item name={["email"]} rules={[{ required: true,type:"email",message: "Enter a valid email" }]}>
                <div className={ss.formfield}>
                  <Input type="text" name="email" id="email" required />
                  <label className={ss.label} alt="E-mail" placeholder="E-mail">
                  {locationFormData.Label_EMail}
                  </label>
                </div>
              </Form.Item>
            </div>
            <div className={ss.form_box}>
              <Form.Item name={["telephone"]} rules={[{ required: true,message:`${locationFormData.Label_Phone.replace(/[^a-zA-Z]/g,"")} is required` }]}>
                <div className={ss.formfield}>
                  <Input className={ss.number} type="text" name="telephone" id="telephone" pattern="[0-9]*"
                            value={phone}
                            onChange={(e) =>
                              setPhone((v) => (e.target.validity.valid ? e.target.value : v))
                            } />
                  <label className={ss.phone_num} alt="Telefono" placeholder="Telefono">
                  {locationFormData.Label_Phone}
                  </label>
                 <span className={ss.plus}>+</span>
                </div>
              </Form.Item>
            </div>
          </div>
          <div className={ss.form_wrap}>
            <div className={ss.form_box}>
              <Form.Item name={["agency"]} rules={[{ required: true,whitespace: true,message:`${locationFormData.Label_Agency.replace(/[^a-zA-Z]/g,"")} is required` }]}>
                <div className={ss.formfield}>
                  <Input type="text" name="agency" id="agency" required />
                  <label className={ss.label} alt="Azienda" placeholder="Azienda">
                  {locationFormData.Label_Agency}
                  </label>
                </div>
              </Form.Item>
            </div>
            <div className={ss.form_box}>
              <div className={ss.search_box}>
                <label>                    {locationFormData.Label_Implants}</label>
                <Form.Item initialValue="Less than 20MW" name={[ 'implants']} label='Implants' rules={[{ required: true }]}>
                    <Select onChange={() => {}}>
                      <Option value="Less than 20MW">{`Less than 20MW`}</Option>
                      <Option value="Greater than 20MW">{`Greater than 20MW`}</Option>
                    </Select>
                    </Form.Item>
              </div>
            </div>
          </div>
          <div className={ss.check_wrap}>
          <Form.Item

name="checkbox"

rules={[{required:!checked,message:checked?'':'Please accept terms and conditions'}]}>

<Checkbox checked={checked} onChange={onCheckboxChange}>

<p>{locationFormData.Privacy_Policy}</p> </Checkbox>

</Form.Item>
          </div>
          <div className={ss.btn_lg}>
            <button className={ss.btn_find}>{locationFormData.Findout_Button}</button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default LocationForm;
