const { menu } = require('../data/database')

let about={
    lorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use", 
    lorem2:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}

const controller = {
    index:(req,res)=>{
        res.render('index',{menu , about})
    },
    detalle:(req,res)=>{
        let platoID= +req.params.id;
        let plato=menu.find(plato => plato.id === platoID )

        res.render('detalleMenu',{
            plato
        })
    }
}

module.exports= controller;