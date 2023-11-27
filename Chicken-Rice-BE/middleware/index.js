module.exports = {
    verifyToken : require("./auth.middleware").varifyToken,
    verifyPermission : require("./auth.middleware").verifyPermission,
    validateId:require("./validateId.middleware").validateId,
    bodyFieldIdvalidate:require("./validateId.middleware").customFieldIdvalidator
}