const request = require("supertest")("http://restapi.adequateshop.com/api");
const expect = require("chai").expect;
const AUTH = "Bearer 5a24cbb-1b29-4b0f-9cb6-1914c5ff94c0";


//describe = test scenario, it = test cases, can >1
//async bisa tidak berurutan flow nya, tidak seperti sync
//tapi menggunakan await agar bisa nunggu dulu 
describe("GET /users", function() {
    it("returns all users", async function() {
        const response = await request
        .get("/users")
        .set({ Authorization: AUTH});
        
        expect(response.status).to.eql(200);
    }
    );
}
);