import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { UserModule } from '../src/user.module';
import { randomUUID } from 'node:crypto';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('CreateUser Controller', () => {
    it('should create a new user', () => {
      return request(app.getHttpServer()).post('/CreateUser').expect(201).send({
        id: randomUUID(),
      });
    });

    it('should not create a new user if the id is not string', () => {
      return request(app.getHttpServer()).post('/CreateUser').expect(500).send({
        id: 12,
      });
    });
  });

  describe('GetUser Controller', () => {
    it('should get an user by id', () => {
      return request(app.getHttpServer())
        .get('/GetUser/10cc7d41-51c5-41dc-b3fa-482edc12a658')
        .expect({
          id: '10cc7d41-51c5-41dc-b3fa-482edc12a658',
          options: [],
        })
        .expect(200);
    });
  });

  describe('CreateOption Controller', () => {
    it('should create a new option', () => {
      return request(app.getHttpServer())
        .post('/CreateOption/55c54fe6-7bb7-4866-8f05-80dde063e806')
        .send({
          options: 'new option',
        })
        .expect(201);
    });

    it('should not create a new option if the body is not a string', () => {
      return request(app.getHttpServer())
        .post('/CreateOption/55c54fe6-7bb7-4866-8f05-80dde063e806')
        .send({
          options: 32,
        })
        .expect(500);
    });
  });

  describe('ChangeOption Controller', () => {
    it('should change a current option', () => {
      return request(app.getHttpServer())
        .put('/ChangeUserOption')
        .send({
          id: '1ba6ebd7-2a47-467a-a956-75bdf0762132',
          options: 'changed option',
        })
        .expect(200);
    });
    it('should not change a current option if then type os not string', () => {
      return request(app.getHttpServer())
        .put('/ChangeUserOption')
        .send({
          options: 32,
        })
        .expect(500);
    });
  });

  describe('RemoveUserOption Controller', () => {
    it('should remove an option ', () => {
      return request(app.getHttpServer())
        .delete('/RemoveUserOption')
        .send({
          id: '1ba6ebd7-2a47-467a-a956-75bdf0762132',
        })
        .expect(200);
    });
  });

  describe('Increment vote Controller', () => {
    it('should Increment vote option', () => {
      return request(app.getHttpServer())
        .put('/Vote')
        .send({
          id: '13ed158d-a3a8-4b9f-a4d3-d7292d503c86',
        })
        .expect(200);
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
