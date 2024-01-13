const models = require  ("../models")

async  function onetoone ( req , res){

    const user = await models.user.findByPk(1,{
        include:[models.address]
    });

 const address = await models.address.findByPk(1, {
    include:[models.user]
 })

 res.status(200).json({
    data : user
})

}

async  function onetomany ( req , res){

const User = await models.user.findByPk(1,{
    include : [models.post]
})

// const post = await models.post.findByPk(2,{
//     include : [models.user]
// })
 res.status(200).json({
    data : User
})

}




async  function manytomany ( req , res){

    const post = await models.post.findByPk(2 , {
        include : [ models.categories]
    })
 res.status(200).json({
    data : post
})

}


module.exports = {
    onetoone : onetoone,
    onetomany: onetomany,
    manytomany: manytomany
};