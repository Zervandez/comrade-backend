import {insert} from '../repository/user.ts'

export async function addUser({response, request}: any){
    //console.log(request);
     await response.body('ADDING USER');
     console.log('postedddd');
    //const body = await request.body();
    //console.log(body);
}