import { expect, server, BASE_URL } from './setup';

// make a request to get base endpoint '/'
// and assert body message against reqested data
// describe, it pattern from Mocha
describe('Index page test', () => {
  it('gets base url', done => {
    server
      .get(`${BASE_URL}/`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal(
          'Environment variable is coming across'
        );
        done();
      });
  });
});