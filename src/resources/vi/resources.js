export const toast = {
  success: "Thành công!",
  error: "Lỗi!",
  warning: "Cảnh báo!",
  info: "Thông tin!"
}

export const sidebar = {
  'overview': "Tổng quan",
  'cash': "Tiền mặt",
  'savedMoney': "Tiền gửi",
  'purchase': "Mua hàng",
  'sell': "Bán hàng",
  "managementInvoice": "Quản lý hóa đơn",
  "store": "Kho",
  "tools": "Công cụ dụng cụ",
  "fixedAssets": "Tài sản cố định",
  "tax": "Thuế",
  "price": "Giá thành",
  "sum": "Tổng hợp",
  "budget": "Ngân sách",
  "report": "Báo cáo",
  "analysisFinancial": "Phân tích tài chính"
}

export const mainHeader = {
  "companyName": "Công ty tnhh sản xuất - thương mại - dịch vụ qui phúc",
  "avatarName": "Ảnh đại diện mặc định",
  "defaultUserName": "Nguyễn Văn Mạnh"
}

export const mainTitle = {
  "employee": {
    "title": "Nhân viên",
    "createNewEmployee": "Thêm mới nhân viên"
  }
}

export const employeePage = {
  controller: {
    inputPlaceholder: "Tìm theo mã, tên nhân viên",
    deleteList: "Thực hiện xóa hàng loạt",
    delete: "Xóa",
    confirmDeleteListEmployee: "Bạn có muấn xóa toàn bộ danh sách nhân viên đã chọn không?"
  },
  employee: {
    "ActionDelete": "Xóa",
    "ActionDuplicate": "Nhân bản",
    "ActionStopUse": "Ngưng sử dụng",
    "ActionCancel": "Hủy",
    "ActionKeep": "Cất",
    "ActionKeepAndContinue": "Cất và Thêm",
    "ActionUpdate": "Cất",
    "Info": "Thông tin nhân viên",
    "Create": "Thêm mới nhân viên",
    "IsCustomer": "Là khách hàng",
    "IsManufacture": "Là nhà cung cấp",
    "EmployeeId": "Mã nhân viên",
    "EmployeeCode": "Mã nhân viên",
    "FirstName": "Họ",
    "LastName": "Tên",
    "EmployeeName": "Tên nhân viên",
    "Gender": "Giới tính",
    "DateOfBirth": "Ngày sinh",
    "PhoneNumber": {
      "Title": "ĐT di động",
      "Subtitle": "Điện thoại di động"
    },
    "Email": "Email",
    "Address": "Địa chỉ",
    "IdentityNumber": {
      "Title": "Số CMND",
      "Subtitle": "Số chứng minh nhân dân"
    },
    "IdentityDate": "Ngày cấp",
    "IdentityPlace": "Nơi cấp",
    "JoinDate": "Ngày bắt đầu làm",
    "MartialStatus": "",
    "EducationalBackground": "",
    "QualificationId": "",
    "DepartmentId": "Mã phòng ban",
    "PositionId": "Mã vị trí",
    "WorkStatus": "Trạng thái làm việc",
    "PersonalTaxCode": "",
    "Salary": "Lương",
    "TelephoneNumber": {
      "Title": "ĐT cố định",
      "Subtitle": "Điện thoại cố định"
    },
    "BankAccountNumber": "Tài khoản ngân hàng",
    "BankName": "Tên ngân hàng",
    "BankBranchName": {
      "Title": "Chi nhánh TK ngân hàng",
      "Subtitle": "Chi nhánh tài khoản ngân hàng"
    },
    "BankProvinceName": "",
    "EmployeePosition": "Chức danh",
    "PositionCode": "Mã chức danh",
    "PositionName": "Chức danh",
    "DepartmentCode": "Mã phòng ban",
    "DepartmentName": "Tên phòng ban",
    "QualificationName": "",
    "GenderName": "Giới tính",
    "EducationalBackgroundName": "",
    "MartialStatusName": "",
    "CreatedDate": "Ngày tạo",
    "CreatedBy": "Người tạo",
    "ModifiedDate": "Ngày chỉnh sửa",
    "ModifiedBy": "Người chỉnh sửa",
    "Functions": "Chức năng",
    "GenderMale": "Nam",
    "GenderFemale": "Nữ",
    "GenderOther": "Khác",
    "Index": "STT"
  },
  pagination: {
    "total": "Tổng số",
    "records": "Bản ghi",
    "recordPerPage": "bản ghi trên một trang",
    "prev": "Trước",
    "next": "Sau"
  },
  employeeNotify: {
    GetNewEmployeeCodeFailed: "Không lấy được mã nhân viên mới.",
    GetDepartmentsFailed: "Không lấy danh sách phòng ban.",
    GetEmployeesFailed: "Không lấy danh sách nhân viên.",

    ConfirmEmployeeDelete: "Bạn có thực sự muấn xóa Nhân viên",

    CreateNewEmployeeSuccess: "Thêm mới nhân viên thành công.",
    CreateNewEmployeeFailed: "Thêm mới nhân viên thất bại",
    UpdateEmployeeSuccess: "Cập nhật nhân viên thành công.",
    UpdateEmployeeFailed: "Cập nhật nhân viên thất bại",
    DeleteEmployeeSuccess: "Xóa nhân viên thành công.",
    DeleteEmployeeFailed: "Xóa nhân viên thất bại",
    DeleteListEmployeeSuccess: "Xóa danh sách nhân viên thành công.",
    DeleteListEmployeeFailed: "Xóa danh sách nhân viên thất bại",
    ExportExcelEmployeeListSuccess: "Xuất excel thành công",
    ExportExcelEmployeeListFailed: "Xuất excel thất bại",

    /** 11 */   DateOfBirthNotValid: "Ngày sinh không được lớn hơn ngày hiện tại.",
    /** 9  */   IdentityDateNotValid: "Ngày cấp không được lớn hơn ngày hiện tại.",
    EmailNotValidate: "Email không hợp lệ.",

    /** 13 */   RequiredDepartmentID: "Mã phòng ban là bắt buộc.", // departmentId      required
    /** 12 */   RequiredPositionID: "Mã chức danh là bắt buộc.", //  positionId     required
    /** 14 */   RequiredEmployeeName: "Tên nhân viên là bắt buộc.", // employeeName     required
    /** 15 */   RequiredEmployeeCode: "Mã nhân viên là bắt buộc.", // employeeCode      required
    RequiredPhonenumber: "Số điện thoại là bắt buộc.", // phonenumber      required

    /**  */    LengthEmployeeNameIsnotvalid: "Tên nhân viên không được quá 100 ký tự.",//employeeName > 100
    /**  */    LengthEmployeeCodeIsnotvalid: "Mã nhân viên không được quá 20 ký tự.",//employeeCode > 20
    /** 6 */   LengthPhonenumberIsnotvalid: "Số điện thoại không được quá 50 ký tự.",//phoneNumber > 50

    /** 10 */  LengthIdentityNumberIsnotvalid: "Độ dài số chứng minh nhân dân không được vượt quá 25 ký tự.", //identityNumber > 25
    /** 8 */   LengthIdentityPlaceIsnotvalid: "Độ dài nơi cấp chứng minh nhân dân không được vượt quá 255 ký tự.", //identityPlace > 255
    /** 7 */   LengthAddressIsnotvalid: "Độ dài địa chỉ không được vượt quá 255 ký tự.", //address > 255
    /** 5 */   LengthTelephoneNumberIsnotvalid: "Độ dài số điện thoại cố định không được quá 50 ký tự.",//telehoneNumber > 50
    /** 4 */   LengthEmailNotValidate: "Độ dài email không được vượt quá 100 ký tự.",//email > 100
    /** 3 */   LengthBankAccountNumberIsnotvalid: "Độ dài số tài khoản ngân hàng không được quá 50 ký tự.",//bankAccountNumber > 50
    /** 2 */   LengthBankNameIsnotvalid: "Độ dài tên ngân hàng không được quá 255 ký tự.",//bankAccountName > 255
    /** 1 */   LengthBankBranchNameIsnotvalid: "Độ dài chi nhánh ngân hàng không được quá 255 ký tự.",//bankBranchName > 255
  }
}
// <div class="input__error_messenger"></div>
export const notFoundPage = {
  "title": "Không tìm thấy trang"
}

const myResource = {
  toast,
  sidebar,
  mainHeader,
  mainTitle,
  employeePage
}

export default myResource;
