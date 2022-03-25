const express = require("express");
const router = express.Router();
const roleData = require("../../role.json");
const { getDryTalk } = require("../../tools/drytalk-generator.js")

 router.get("/", (req, res) => {
   res.render("index", { role: roleData });
 });

 router.post("/", (req, res) => {
   const dryTalk = getDryTalk(req.body);
   let disMessage;
   if (req.body.role === undefined) {
     disMessage = {
       message: "error",
       hint: "請選擇職業再送出 !",
     };
     return res.render("index", { role: roleData, disMessage: disMessage });
   }
   disMessage = {
     message: "success",
     hint: "多麼完美的幹話 !",
   };
   res.render("index", {
     role: roleData,
     dryTalk,
     tasker: req.body.role,
     disMessage: disMessage,
   });
 });

module.exports = router;
