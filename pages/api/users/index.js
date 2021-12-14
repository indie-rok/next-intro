import nc from "next-connect";
import User from "../../../models/User";

export default nc()
  .get((req, res) => {
    res.send([{ name: "manu" }, { name: "Marta" }, { name: "Claudia" }]);
  })
  .post((req, res) => {
    res.send([{ working: true }]);
  });
