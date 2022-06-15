
import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import router from "./routes.ts";

const app = new Application();

app.use(router.routes());

await app.listen({port:8000});



/** kontrollo mire per 404 edhe POST ne pergjithesi
 * provo me POST ne google.com ose facebook ose dikun me login
 * 
 * 
 * 
 * Handlers per Users, Events etc
 * 
 * Merru me DB se Slavic vk 
 * 
 * 
 * 
 * 
 * 
 * 
 */

