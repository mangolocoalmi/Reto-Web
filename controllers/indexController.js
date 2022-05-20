const sensor = require('../model/temperaturas');

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
  const Result = await sensor.aggregate([{ $group : { _id: { $dateToString: { format: "%d/%m/%Y", date: "$fecha"} }, count: { $sum: 1 }, tempMax: { $max: "$temperatura" }, tempMin: { $min: "$temperatura" } }  }, { $sort: { temperatura: -1} } ])
  res.render('estadisticas', {user: req.session.username, menuId: 'estadisticas', result: Result});
  // console.log("Found documents =>", Result);

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


