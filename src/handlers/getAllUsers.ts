import client from "../db.ts";


// deno-lint-ignore no-explicit-any
export async function getAllUsers(ctx: any) {
  try {
    const users = await client.query("SELECT * FROM user");
    console.log(users);
    ctx.response.body = users;
    const r = new Response();
    r.body;
  } catch (error) {
    console.log(error);
  }
}
