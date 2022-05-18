const { client } = require("../config/database");

exports.registroWeb = async (req, res) => {
  res.render("registro", {
    user: req.session.username,
    page: "Registro",
    menuId: "registro",
  });
};

exports.loginWeb = async (req, res) => {
  res.render("login", {
    user: req.session.username,
    page: "Login",
    menuId: "login",
  });
};

exports.getTemps = async (req, res) => {
  // const db = database.main().catch(console.error)
  console.log(client.db().collection('temperaturas').countDocuments());
  // const findResult = client.find({}).toArray();
  // console.log("Found documents =>", findResult);
  // db.temperaturas.aggregate([{ 
  //   $match: {
  //     fecha: { 
  //       $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000), $lt:new Date() 
  //     } 
  //   }
  // }, { $group : { _id: { $dateToString: { format: "%d/%m/%Y", date: "$fecha"} }, count: { $sum: 1 }, tempMax: { $max: "$temperatura" }, tempMin: { $min: "$temperatura" } }  },
  //  { $sort: { temperatura: -1} } 
  //  ])
  
  
  // db.temperaturas.aggregate([{ $group : { _id: { $dateToString: { format: "%d/%m/%Y", date: "$fecha"} }, count: { $sum: 1 }, tempMax: { $max: "$temperatura" }, tempMin: { $min: "$temperatura" } }  },
  //  { $sort: { temperatura: -1} } 
  //  ])
  
};


