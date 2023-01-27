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
    delete:"Xóa"
  },
  employee: {
    "ActionDelete": "Xóa",
    "ActionDuplicate": "Nhân bản",
    "ActionStopUse": "Ngưng sử dụng",
    "ActionCancel": "Hủy",
    "ActionKeep": "Cất",
    "ActionKeepAndContinue": "Cất và Thêm",
    "ActionUpdate": "Sửa",
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
    "GenderOther": "Khác"
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
    RequiredDepartmentID: "Mã phòng ban là bắt buộc!",
    RequiredEmployeeName: "Tên nhân viên là bắt buộc!",
    RequiredEmployeeCode: "Mã nhân viên là bắt buộc!",
    RequiredPhonenumber: "Số điện thoại là bắt buộc!",
    ConfirmEmployeeDelete: "Bạn có thực sự muấn xóa Nhân viên",
    DateOfBirthNotValid: "Ngày sinh không được lớn hơn ngày hiện tại!",
    IdentityDateNotValid: "Ngày cấp không được lớn hơn ngày hiện tại!",
    EmailNotValidate: "Email không hợp lệ!"
  }
}

export const notFoundPage = {
  "title": "Không tìm thấy trang"
}

const myResource = {
  sidebar,
  mainHeader,
  mainTitle,
  employeePage
}

export default myResource;
