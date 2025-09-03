const request = require("supertest");
const express = require("express");

const app = express();
app.get("/", (req, res) => res.send("Hello DevOps - CI/CD Pipeline works!"));

test("GET / should return hello message", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("Hello DevOps - CI/CD Pipeline works!");
});
