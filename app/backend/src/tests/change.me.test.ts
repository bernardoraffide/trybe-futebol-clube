import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import Users from '../database/models/UsersModel';
import  userMocked  from './mocks';

import { Response } from 'superagent';
import Matches from '../database/models/MatchesModel';
import Teams from '../database/models/TeamsModel';

chai.use(chaiHttp);

const { expect } = chai;

describe('Seu teste', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(Users, 'findOne').resolves({
      ...userMocked,
    } as Users);
  });

  after(() => {
    (Users.findOne as sinon.SinonStub).restore();
  });

  it('is testing login route', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'teste@tester.com', password: 'v1ng4d0rm41sf0rt3' });

    expect(chaiHttpResponse.status).to.be.equal(200);
  });

  it('shouldnt work', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'teste@tester.com', password: 1 });
    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.be.equal({ message: 'Incorrect email or password' });
  });

  it('shouldnt work either', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'teste@tester.com' });
    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.be.equal({ message: 'All fields must be filled' });
  });

  it('also shouldnt work', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ password: 'v1ng4d0rm41sf0rt3' });
    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.be.equal({ message: 'All fields must be filled' });
  });
});

// describe('teams test', () => {
//   let chaiHttpResponse: Response;

//   before(async () => {
//     sinon.stub(Teams, 'findOne').resolves({
//       ...userMocked,
//     } as Teams);
//   });

//   after(() => {
//     (Teams.findOne as sinon.SinonStub).restore();
//   });
// })
