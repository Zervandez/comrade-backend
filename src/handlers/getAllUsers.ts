import client from "../db.ts";


export async function getAllUsers(ctx: any) {
  try {
    const users = await client.query("SELECT * FROM user");
    console.log(users);
    ctx.response.body = users;
  } catch (error) {
    console.log(error);
  }
}
