import request from 'supertest';
import app from '../../index'; 

describe("INTEGRATION TESTS: GET /api/teams", () => {

  it("should return a list of teams with version v1", async () => {
    const res = await request(app)
      .get("/api/teams")
      .set("version", "v1");
    
    expect(res.status).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  it("should return a list of teams with version v2", async () => {
    const res = await request(app)
      .get("/api/teams")
      .set("version", "v2");
    
    expect(res.status).toBe(200);

    expect(res.body.data).toHaveProperty('newField', 'Just an example');
    expect(res.body.data).toHaveProperty('teams');
    expect(res.body.data.teams.length).toBeGreaterThan(0);
  });
});
