import client from "../db.ts";

export async function search(params = {}) {
  return await client.execute("SELECT * FROM user");
}

interface InsertParams {
  uid: number;
  name: string;
  password: string;
  mail: string;
  city: string;
  age: number;
  sex: string;
}

export async function insert(
  { uid, name, password, mail, city, age, sex }: InsertParams,
) {
  return await client.execute(
    "INSERT INTO user(id, name, password, mail, city, age, sex) VALUES(?,?,?,?,?,?,?)",
    [uid, name, password, mail, city, age, sex],
  );
}

export function update() {
}

export function remove() {
}
