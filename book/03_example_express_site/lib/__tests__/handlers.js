const handlers = require("../handlers.js");

test("home page renders", () => {
  const req = {};
  const res = { render: jest.fn() };

  handlers.home(req, res);
  expect(res.render.mock.calls[0][0]).toBe("home");
});

test("about page renders with fortune", () => {
  const req = {};
  const res = { render: jest.fn() };
  handlers.about(req, res);

  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe("about");
  expect(res.render.mock.calls[0][1]).toEqual(
    expect.objectContaining({ fortune: expect.stringMatching(/\W/) })
  );
});

test("404 handler renders", () => {
  const req = {};
  const res = { render: jest.fn() };
  handlers.notFound(req, res);

  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe("404");
});

test("500 handler renders", () => {
  const err = new Error("some error");
  const req = {};
  const res = { status: 404, render: jest.fn() };
  const next = jest.fn();

  handlers.serverError(err, req, res, next);

  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe("500");
});

test("thanks page", () => {
  const req = {};
  const res = { render: jest.fn() };

  handlers.tks(req, res);

  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe("tks");
});

test("request headers echo ", () => {
  const req = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer token",
    },
  };
  const sendMock = jest.fn();
  const res = {
    type: jest.fn(),
    send: sendMock,
  };

  handlers.headers(req, res);

  expect(res.type).toHaveBeenCalledWith("text/plain");
  expect(sendMock).toHaveBeenCalledWith(
    "===== Request Headers Echo\nContent-Type: application/json\nAuthorization: Bearer token"
  );
});
