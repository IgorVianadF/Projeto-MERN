import userService from "../services/user.service.js"

const create = async (req, res)=>{
    try{const {name, username, email, password, avatar, background} = req.body

    if(!name||!username||!email||!password||!avatar||!background){
        res.status(400).send({message:"You must submit all fields for the registration!"})
    }

    const user = await userService.createService(req.body)

    if (!user){
        return res.status(400).send({message: "Error creating user"})
    }

    res.status(201).send({
        message:"user created succesfully",
        user:{
            id: user._id,
            name,
            username,
            email,
            avatar,
            background,
        },
    })
}catch(err){
    res.status(500).send({message: err.message})
}
}

const findAll = async (req, res)=>{
    try{const users = await userService.findAllService() 

    if(users.length===0){
        return  res.status(400).send({message: "Não há usuários registrados"})
    }

    res.send(users)}catch(err){
    res.status(500).send({message: err.message})
    }
}

const findById = async (req, res)=>{
try {const user = req.user
    res.status(200).send(user)}catch(err){
    res.status(500).send({message: err.message})
    }
}

const update = async (req, res)=>{
    try {const {name, username, email, password, avatar, background} = req.body

    if(!name&&!username&&!email&&!password&&!avatar&&!background){
        res.status(400).send({message:"You must submit at least one field for update!"})
    }
    const {id} = req
    await userService.updateService(
        id,
        name, 
        username, 
        email, 
        password, 
        avatar, 
        background
    )

    res.status(201).send({message: "User succesfully updated!"})
  } catch(err){
    res.status(500).send({message: err.message})
  }
}

const deleteUser = async (req, res)=>{
    try {const {id} = req
    await userService.deleteService(id)
    return res.status(200).send({message: "Usuário deletado com sucesso!"})
    } catch(err){
    res.status(500).send({message: err.message})
    }
}
export default {create, findAll, findById, update, deleteUser}; 
