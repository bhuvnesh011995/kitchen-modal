exports.create_error = (status,message)=>{
    let error = new Error(message)
    error.status = status
    return error
}