import {toast} from "../resources/index"


//các dữ liệu dùng để hiển thị toast
const toastData = {
  success: { icon: "fas fa-check", title: toast.success, mainColor: "#50B83C"},
  error: { icon: "fas fa-times", title: toast.error, mainColor: "#DE3618"},
  warning:{ icon: "fas fa-exclamation", title: toast.warning, mainColor: "#F49342"},
  info: { icon: "fas fa-info", title: toast.info, mainColor: "#009EEB"}
}
export default toastData