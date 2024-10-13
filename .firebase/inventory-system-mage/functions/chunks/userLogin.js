import { w as writable } from "./index.js";
const LOGIN = writable([
  {
    title: "Inventory System",
    description: "Mage Hardware Inc.",
    company: "Mage Inc",
    name: "Employee-Name",
    id: "Employee-Id",
    password: "Password",
    login: "Login",
    forgotpass: "Forgot Password",
    createAcc: "Create Account"
  }
]);
const FORGOTPASSWORD = writable([
  {
    title: "Inventory System",
    description: "Forgot Password?",
    company: "Mage Inc",
    name: "Department",
    id: "Employee Id",
    password: "Password",
    confirmPassword: "Confirm Password",
    createAccount: "Confirm New-password"
  }
]);
export {
  FORGOTPASSWORD as F,
  LOGIN as L
};
