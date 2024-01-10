
const { Model } = require('sequelize');
const models  = require('../models');
const Validator = require('fastest-validator') 

function save(req, res) {
  const post = {
    title: req.query.title,
    content: req.query.content,
    imageUrl: req.query.imageUrl,
    category: req.query.category,
    userId: 1,
  };

  const schema = {
    title: { type: "string", optional: false, max: "100" },
    content: { type: "string", optional: false, max: "100" },
    category: { type: "string", optional: false }
  };
  

  const v = new Validator();
  const validationResponse = v.validate(post, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation Failed",
      error: validationResponse
    });
  }

  console.log("Data to be inserted:", post);

  models.post.create(post)
    .then((result) => {
      res.status(201).json({
        message: 'Data created successfully',
        post: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Data not added',
        error: error,
      });
    });
}


function show (req , res){
  const id = req.params.id

  models.post.findByPk(id).then(result =>{
   if(result){
    res.status(200).json(result)
   }else{
    res.status(400).json({
      message: "page no found"
    })
   }
  }).catch(error => {
    res.status(500).json({
      message: "somthig wrong"
    })
  })
} 

function index (req , res){

  models.post.findAll().then(result =>{
    res.status(200).json(result)
  }).catch(error => {
    res.status(500).json({
      message: "somthig wrong"
    })
  })
}

function update (req , res){

  const id = req.params.id;
  {
    const updateData ={
      title: req.query.title,
      content: req.query.content,
      imageUrl: req.query.imageUrl,
      category: req.query.category, 
    }

    const schema = {
      title: { type: "string", optional: false, max: "100" },
      content: { type: "string", optional: false, max: "100" },
      category: { type: "string", optional: false }
    };
  
    const v = new Validator();
    const validationResponse = v.validate(updateData, schema);
  
    if (validationResponse !== true) {
      return res.status(400).json({
        message: "Validation Failed",
        error: validationResponse
      });
    }

    const userId = 1;
    models.post.update(updateData ,{where : {id:id , userId: userId}}).then(result =>{
      res.status(200).json({
        message: "Data upadte successfully",
        post : updateData
      })
    }).catch(error =>{
      res.status(500).json({
        message: "Data not added",
        post : error
      })
    })
  }
}



function delet (req , res){

  const id = req.params.id;
  const userId = 1;

  models.post.destroy({where:{id:id , userId:userId}}).then(result =>{
    res.status(200).json({
      message: "data deleted",
    })
  }).catch(error =>{
    res.status(500).json({
      message: "Data not added",
      error : error
    })
  })
}


module.exports = {
  save: save,
  show:show,
  index : index,
  update : update,
  delet : delet
};
