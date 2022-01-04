const kvizService = require('../service/kviz-service');

class kvizController {
    async postKviz (req, res, next) {
        try {
            const {title, a, b, c} = req.body;
            const kvizData = await kvizService.kvizPost(a, b, c, title);
            return res.json(kvizData);
        } catch (e) {
            next(e)
        }
    }

}

module.exports = new kvizController();