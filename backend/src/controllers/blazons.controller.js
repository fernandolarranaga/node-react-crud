const blazonCtrl = {};

const Blazon = require('../models/Blasones');

blazonCtrl.getBlazons = async (req, res) => {
    const blazones = await Blazon.find();
    res.json(blazones);
};

blazonCtrl.createBlazon = async (req, res) => {
    const { title, description,img } = req.body;
    const newBlazon = new Blazon({
        title,
        description,
        img
    
    });
    await newBlazon.save();
    res.json('New Blazon added');
};

blazonCtrl.getBlazon = async (req, res) => {
    const blason = await Blazon.findById(req.params.id);
    res.json(blason);
}

blazonCtrl.deleteBlazon = async (req, res) => {
    await Blazon.findByIdAndDelete(req.params.id)
    res.json('Blazon Deleted');
}

blazonCtrl.updateBlazon = async (req, res) => {
    const { title, description, img} = req.body;
    await Blazon.findByIdAndUpdate(req.params.id, {
        title,
        description,
        img
    
    });
    res.json('Blazon Updated');
}

module.exports = blazonCtrl;