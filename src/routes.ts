import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";

import { getAllUsers } from "./handlers/getAllUsers.ts";
import { getUser } from "./handlers/getUser.ts";
import { addUser } from "./handlers/addUser.ts";
import { updateUser } from "./handlers/updateUser.ts";
import { deleteUser } from "./handlers/deleteUser.ts";

const router = new Router();

router
  .get("/users", getAllUsers)
  .get("/users/1", getUser)
  .put("/users", addUser)
  .put("/users", updateUser)
  .delete("/users", deleteUser);

export default router;
