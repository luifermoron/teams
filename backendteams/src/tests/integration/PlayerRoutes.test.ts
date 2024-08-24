import request from 'supertest';
import app from '../../index'; 
import server from '../../server';


describe("INTEGRATION TESTS: GET /api/players", () => {
  afterAll(() => {
    server.close();
  });

  it("should return a list of players from teamId=1 with version v1", async () => {
    const res = await request(app)
      .get("/api/players/1")
      .set("version", "v1");
    
    expect(res.status).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });
});