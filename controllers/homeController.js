const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports.getHomePage = async (req, res) => {

    const homeSlider= await prisma.homepage_sliders.findMany();
    const partnerSlider = await prisma.partner_sliders.findMany();

    if(homeSlider && partnerSlider){
        res.json({homeSlider, partnerSlider});
    }

};

