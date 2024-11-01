const request = require('supertest');
const app = require('../index');  // Adjust the path if necessary
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'fiesc',
  password: '123456',
  port: 5432,
});

beforeAll(async () => {
  await pool.query('DELETE FROM items');  // Clean up the database before each test run
});

describe('CRUD API', () => {

  // Test for the Create (POST) API
  it('should create a new item', async () => {
    const res = await request(app)
      .post('/api/items')
      .send({
        name: 'Test Item',
        description: 'This is a test item.'
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe('Test Item');
    expect(res.body.description).toBe('This is a test item.');
  });

  // Test for the Read All (GET) API
  it('should fetch all items', async () => {
    const res = await request(app).get('/api/items');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });

  // Test for the Read Single (GET) API
  it('should fetch a single item by ID', async () => {
    const res = await request(app).get('/api/items/1');
    expect(res.statusCode).toEqual(200);
  });

  // Test for the Update (PUT) API
  it('should update an item by ID', async () => {
    const res = await request(app)
      .put('/api/items/1')
      .send({
        name: 'Updated Item',
        description: 'This is an updated item.'
      });

    expect(res.statusCode).toEqual(200);
  });

  // Test for the Delete (DELETE) API
  it('should delete an item by ID', async () => {
    const res = await request(app).delete('/api/items/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Item deleted successfully!');

    // Verify the item is deleted
    const fetchRes = await request(app).get('/api/items/1');
    expect(fetchRes.statusCode).toEqual(200);
    expect(fetchRes.body.data).toBeUndefined();  // Item should not exist
  });
});

beforeAll(async () => {
    await pool.query('DELETE FROM items');
  });
  
  afterAll(async () => {
    await pool.end();  // Close the pool after all tests
  });