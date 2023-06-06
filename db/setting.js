import sqlite3 from 'sqlite3'
import { open } from 'sqlite'


export async function getDispatchersTableUpdateInterval(){
    return await open({
        filename: './db/settings.db',
        driver: sqlite3.Database
      }).then(async (db) => {
            const result = await db.get("select value from setting where name = ?", "DispatchersTableUpdateInterval")
            if (result){
                return Number(result.value)
            }
            return 60
      });
}

export async function setDispatchersTableUpdateInterval(seconds){
    return await open({
        filename: './db/settings.db',
        driver: sqlite3.Database
      }).then(async (db) => {
            await db.exec("update setting set value = ? where name = ?", (seconds, 'DispatchersTableUpdateInterval'))
      });
}

export async function getDrcTableUpdateInterval(){
    return await open({
        filename: './db/settings.db',
        driver: sqlite3.Database
      }).then(async (db) => {
            const result = await db.get("select value from setting where name = ?", "DrcTableUpdateInterval")
            if (result){
                return Number(result.value)
            }
            return 300
      });
}

export async function setDrcTableUpdateInterval(seconds){
    return await open({
        filename: './db/settings.db',
        driver: sqlite3.Database
      }).then(async (db) => {
            const result = await db.exec("update setting set value = ? where name = 'DrcTableUpdateInterval'", seconds)
            if (result){
                return Number(result.value)
            }
            return 300
      });
}
