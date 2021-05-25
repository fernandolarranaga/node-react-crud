const { Router } = require('express');
const router = Router();

const { getBlazons, createBlazon, getBlazon, deleteBlazon, updateBlazon } = require('../controllers/blazons.controller');

router.route('/')
    .get(getBlazons)
    .post(createBlazon);

router.route('/:id')
    .get(getBlazon)
    .delete(deleteBlazon)
    .put(updateBlazon);

module.exports = router;
