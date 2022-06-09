import client from "../db.ts";

export async function search(params = {}) {
    return await client.execute('SELECT * FROM user');
}



interface InsertParams{
    name : string,
    password : string,
    mail : string,
    city : string,
    age : number,
    sex : string 
}

export async function insert({name, password, mail, city, age, sex}: InsertParams) {
    // @slavic, change gender => sex
    return await client.execute('INSERT INTO user(name, password, mail, city, age, sex) VALUES(?,?,?,?,?,?)', [name, password, mail, city, age, sex]);
}

export function update() {
}

export function remove() {
}
