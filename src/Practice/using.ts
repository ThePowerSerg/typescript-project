
class DatabaseConnection {
    constructor() { console.log("Connection opened") }
    query(sql: string) { console.log(`Running: ${sql}`) }
    close() { console.log("Connection closed manually") }
    [Symbol.dispose]() { console.log("Connection closed automatically") }
}

function m() {
    using db = new DatabaseConnection() //opened here
    db.query("SELECT * FROM users")
} //automatically closes


//await using for async resources
class FileHandler {
    async [Symbol.asyncDispose]() {
        console.log("File closed")
    }
}

async function main() {
    await using file = new FileHandler()
    // file is automatically closed when main() exits
}
/*
Key benefits:

No need to remember to call .close() or .dispose() manually
Resource is always cleaned up even if an error is thrown
Cleaner than try/finally blocks
Before using — the old way:
*/
const db = new DatabaseConnection()
try {
    db.query("SELECT * FROM users")
} finally {
    db.close()  // had to remember this manually
}
//It's most useful for resources like database connections, file handles, or network sockets that need cleanup.

