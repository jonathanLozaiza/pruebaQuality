const Company = require("../models/company");

//create Company
exports.createCompany = async (req,res) => {
    const {name} = req.body;
    try{
        const newCompany = await Company.create({
            name
        },{fields:[
            "name"
        ]});
        
        if(newCompany){
            res.status(200).json({
                msg:"Company created successfully",
                data:newCompany
            })
        }
    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
}

//update Company
exports.updateCompany = async (req,res) => {
    const {id} = req.params;
    const {name} = req.body;
    try{
        let company = await Company.findOne({
            where:{
                id_company:id
            }
        });
        
        if(!company){
            res.status(404).json({
                msg:"Company not found",
                data:{}
            })
        }

        company = await company.update({
            name
        });

        res.status(200).json({
            msg:"Company updated successfully",
            data:company
        })
    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
}

//delete a Company
exports.deleteCompany = async (req,res) => {
    const {id} = req.params;
    try{
        const deleteRowCount = await Company.destroy({
            where:{
                id_company:id
            }
        })
        res.status(200).json({
            msg:"Company deleted successfully",
            data: deleteRowCount
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:"something goes wrong",
            error
        })
    }
}

//get one Company
exports.getOneCompany = async (req,res)=>{
    const {id} = req.params;
    try{
        const company = await Company.findOne({
            where:{
                id_company:id
            }
        });
        res.status(200).json({
            company
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:"something goes wrong",
            error
        })
    }
}

//get Companys
exports.getCompanys = async (req,res)=>{
    try{
        const companys = await Company.findAll({
            order:[
                ['id_company','DESC']
            ]
        })
        res.json({
            data:companys
        })
    }catch(error){
        res.status(500).json({
            msg:"something goes wrong",
            error
        })
    }
}