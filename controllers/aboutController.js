const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports.getAbout = async (req, res) => {

    const about = await prisma.abouts.findMany({ where: {status: "show"}});
    const partnerSlider = await prisma.partner_sliders.findMany();

    if(about && partnerSlider){
        res.json({about, partnerSlider});
    }
};

