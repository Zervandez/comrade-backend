
import {search } from '../repository/user.ts';




export async function getAllUsers({response}: any) {
  try {
    const users = await search();
    console.log(users);
    response.body = users.rows;
   
  } catch (error) {
    console.log(error);
  }
}
