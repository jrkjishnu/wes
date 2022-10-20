import { notification, Button } from "antd";
import ss from './notification.module.scss';
import close from '../assets/images/close.svg';
const getNotificationStyle = type => {
  return {
    success: {
      color: "#071221",
      fontWhight: "400",
      borderRadius: " 8px",
    },
    warning: {
      color: " rgba(255, 255, 255, 0.575) ",
      borderRadius: " 8px",
    },
    error: {
      color: "#071221 ",
  
      borderRadius: " 8px",
    },
    info: {
      color: "rgba(0, 0, 0, 0.65)",
      borderRadius: " 8px",
    },
  }[type];
}
const btnClick = function () { notification.close(); };
const btn = (<Button className={ss.btn_icon} type="primary" size="small" onClick={btnClick}>
  <img src={close} alt="close" />
  </Button>);
  
const Notification = (type, message, description) => {
  notification[type]({
    message: message,
    description: description,
    style: getNotificationStyle(type),
    closeIcon: btn, duration: 3, });
}; 
export default Notification;

