const router = require('express').Router();

const {
    getAllMcus,
    getOneMcu,
    createOneMcu,
    deleteOneMcu,
    updateOneMcu
} = require('../controllers/McuController');

// localhost:8080/api/Mcu/allMcu
router.get('/allMcus', getAllMcus);

// localhost:8080/api/Mcu/oneMcu/:name
router.get('/oneMcu/:name', getOneMcu);

// localhost:8080/api/Mcu/createOneMcu
router.post('/createOneMcu', createOneMcu);

// localhost:8080/api/Mcu/deleteOneMcu/:name
router.delete('/deleteOneMcu/:name', deleteOneMcu);

// localhost:8080/api/Mcu/updateOneMcu/:name
router.put('/updateOneMcu/:name', updateOneMcu);

module.exports = router;