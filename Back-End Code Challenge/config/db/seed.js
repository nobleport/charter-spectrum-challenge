const {Client} = require('pg');


const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'password',
    database: 'cinema'
})

export const insertShow = async (title, network_id, rating)=> {
    try {
        await client.connect();
        await client.query(
            `INSERT INTO "shows" ("title", "network_id", "rating")
            VALUES ($1, $2)`, [title, network_id, rating]);
            return true;
    } catch(error) {
        console.error(error.stack);
        return false
    } finally {
        await client.end()
    }
}

export const insertPackage = async (packageName, network_ids, price) => {
    try {
        await client.connect();
        await client.query(
            `INSERT INTO "shows" ("packageName", "network_ids", "price")
            VALUES ($1, $2, $3)`, [packageName, network_ids, price]);
            return true;
    } catch(error) {
        console.error(error.stack);
        return false
    } finally {
        await client.end()
    }
}

export const insertNetwork = async (name)=> {
    try {
        await client.connect();
        await client.query(
            `INSERT INTO "shows" ("name")
            VALUES ($1)`, [name]);
            return true;
    } catch(error) {
        console.error(error.stack);
        return false
    } finally {
        await client.end()
    }
}