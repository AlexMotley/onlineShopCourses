import { rest } from "msw"

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    // Persist user's authentication in the session
    
    return res(
      // Respond with a 200 status code
      ctx.status(200),
    )
  }),

  rest.get("/user", (req, res, ctx) => {

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: [
          {name: "Apex",
            age: 69}
        ],
      })
    )
  }),
]