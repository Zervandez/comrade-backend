import { Client } from "https://deno.land/x/mysql@v2.10.2/mod.ts";




  const client = await new Client().connect({
      hostname: "127.0.0.1",
      username: "root",
      db: "dbco",
      password: "Haffenstadt!",

      //idleTimeout: 0
    });




// We export the Client instance to use it for CRUD (in the /handlers/)
export default client;