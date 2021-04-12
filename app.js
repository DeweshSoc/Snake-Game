const express = require("express");
const app = express();

app.set("view engine","ejs");

app.use("/",express.static(__dirname+"/public"));


app.get("/",(req,res)=>{
    res.render("home");
})

app.get("/doc",(req,res)=>{
  res.render("doc");
})








let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, () => {
  console.log("Sever started successfully! (local port 3000)");
});