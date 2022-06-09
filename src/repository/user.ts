import client from "../db.ts";

export async function search(params = {}) {
    return await client.execute('SELECT * FROM user');
}



interface InsertParams{
    name : string,
    age : number,
    sex : string 
}

export async function insert({name, age, sex}: InsertParams) {
    // @slavic, change gender => sex
    return await client.execute('INSERT INTO user(name, age, gender) VALUES(?,?)', [name, age, sex]);
}

export function update() {
}

export function remove() {
}
