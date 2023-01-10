import { sidebar } from "../resources/index"


//các dữ liệu dùng để hiển thị sidebar items
const sidebarData = [
  { icon: "fas fa-chart-pie", title: sidebar.overview, to: "/" },
  { icon: "fas fa-funnel-dollar", title: sidebar.cash, to: "/" },
  { icon: "fas fa-university", title: sidebar.savedMoney, to: "/" },
  { icon: "fas fa-shopping-bag", title: sidebar.purchase, to: "/" },
  { icon: "fas fa-cart-arrow-down", title: sidebar.sell, to: "/" },
  { icon: "fas fa-file-invoice-dollar", title: sidebar.managementInvoice, to: "/" },
  { icon: "fas fa-store-alt", title: sidebar.store, to: "/" },
  { icon: "fas fa-tools", title: sidebar.tools, to: "/" },
  { icon: "fas fa-taxi", title: sidebar.fixedAssets, to: "/" },
  { icon: "fas fa-university", title: sidebar.tax, to: "/" },
  { icon: "fas fa-tags", title: sidebar.price, to: "/" },
  { icon: "far fa-address-book", title: sidebar.sum, to: "/" },
  { icon: "fas fa-comment-dollar", title: sidebar.budget, to: "/" },
  { icon: "fas fa-chart-bar", title: sidebar.report, to: "/" },
  { icon: "fas fa-chart-line", title: sidebar.analysisFinancial, to: "/" }
]
export default sidebarData