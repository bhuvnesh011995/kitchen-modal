const {promisify} = require("util")
const {unlink} = require("fs")
const path = require("path")
let deleteFiles = promisify(unlink)


exports.deleteFile = async files=>{
    try {
        if(Array.isArray(files)){
            for(let file of files){
                let fullpath = path.join(__dirname,"../public",file)
                await deleteFiles(fullpath)
                console.log("file Deleted " +file)
            }
        }else{
            let fullpath = path.join(__dirname,"../public",files)
            await deleteFiles(fullpath) 
            console.log("file Deleted " +files)
        }
        return true
    } catch (error) {
        console.log(error)
        console.log("error occured while deleting file")
        return false
    }
}