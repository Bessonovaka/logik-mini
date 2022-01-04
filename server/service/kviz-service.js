const KvizModel = require('../models/kviz-model');

class KvizService {
    async kvizPost(a, b, c, title) {
        const kviz = await KvizModel.create({a, b, c, title})
        return kviz;
    }

}

module.exports = new KvizService();