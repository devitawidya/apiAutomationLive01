const request = require("supertest")("https://reqres.in/api");
const expect = require("chai").expect;
const {USER_DATA} = require("../data/userData");

describe("GET /users", function() {
    it("create new user", async function() {
        const response = await request
            .post("/users")
            .send({
                "name": USER_DATA.name,
                "job": USER_DATA.job
            });
        
        expect(response.status).to.eql(201);
        expect(response.body.name).to.eql(USER_DATA.name);
        expect(response.body.job).to.eql(USER_DATA.job);
    }
    );
}
);