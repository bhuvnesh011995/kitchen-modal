module.exports = app=>{
    require("./user.route")(app)
    require("./role.route")(app)
    require("./auth.route")(app)
    require("./category.route")(app)
    require("./recipe.route")(app)
    require("./fixed.route")(app)
    require("./product.route")(app)
    require("./qrbuildertable.route")(app)
    require("./language.route")(app)
    require("./currency.route")(app)
    require("./allOrder.route")(app)
}