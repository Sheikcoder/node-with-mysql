function upload (req ,res){
    if(req.file.filename){
        res.status(200).json({
            message : "image Uploded Successfully"
        })
    }else{
        res.status(500).json({
            message: "image not uploded somthing wrong!"
        })
    }
}

module.exports ={
    upload : upload
}