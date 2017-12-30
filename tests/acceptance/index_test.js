const request = require('supertest'),
			should = require('should');

const URL = process.env.TEST_URL;

describe('Index', function () {
    it('Test Index Works', (done) => {
        request(URL).get('/')
            .send({})
            .expect(200)
            .end(function (err, res) {
                res.body.status.should.equal('success');
                res.body.data.should.equal(true);
                done();
            });
    });
});