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
            await db.run("update setting set value = :value where name = :name", {":name": 'DispatchersTableUpdateInterval', ":value": seconds})
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
            await db.run("update setting set value = :value where name = :name", {":name": 'DrcTableUpdateInterval', ":value": seconds})
      });
}


export async function getDispatchersUser(){
    return await open({
        filename: './db/settings.db',
        driver: sqlite3.Database
      }).then(async (db) => {
            const result = await db.get("select value from setting where name = ?", "DispatchersUser")
            if (result){
                return result.value
            }
      });
}


export async function setDispatchersUser(user){
    return await open({
        filename: './db/settings.db',
        driver: sqlite3.Database
      }).then(async (db) => {
            await db.run("update setting set value = :value where name = :name", {":name": 'DispatchersUser', ":value": user})
      });
}

export async function getAllGroups(){
    return await open({
        filename: './db/settings.db',
        driver: sqlite3.Database
      }).then(async (db) => {
            const result = await db.all("select * from 'group'")
            return result
      });
}