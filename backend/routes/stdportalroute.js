const express = require("express");
const { getAlldata, createstddata, updatestddata, deletestddata, getstddata, loginUser, logout, forgotPassword, updateuserRole } = require("../controllers/stdportalcontroller");
const { isAuthenticatedUser, authorisedRoles } = require("../middleware/auth");


const router = express.Router();

router.route("/allData").get(isAuthenticatedUser,authorisedRoles("admin") , getAlldata);
router.route("/new").post(createstddata);
router.route("/dashboard/:id").delete(isAuthenticatedUser ,deletestddata).get(isAuthenticatedUser ,getstddata);
router.route("/dashboard/update/:id").put(isAuthenticatedUser ,updatestddata).put(isAuthenticatedUser, authorisedRoles("admin"), updateuserRole);
router.route("/login").post(loginUser);
router.route("/dashboard/logout").get(logout);
router.route("/login/forgotpassword").post(forgotPassword);

module.exports = router;