const NoDB = require('nodbstore')
const fs = require('fs')

/**
 * Module Storage for nodbStore using fs (syncroneously)
 */
class NoDBStorageFS extends NoDB.Storage {
  
  constructor(dbPath){
    super()
    this.dbPath = dbPath
  }
  
  init(){
    if (!fs.existsSync(this.dbPath)) {
      this.export(this.dbPath)
    }
  }

  write(json){
    this.export(this.dbPath,json)
  }

  load(){
    this.import(this.dbPath)
  }

  /**
   * import the database from a file 
   * @param string dbPath path of the db file
   */
  import(dbPath){
    this.nodb.loadJson(fs.readFileSync(dbPath))
  }

  /**
   * export the database to a file
   * @param string dbPath path to the export file
   * @param string json data that will be exprted (used for this.write) ! dont fill it if you dont no what you do
   */
  export(dbPath, json = this.nodb.toJson()){
    fs.writeFileSync(dbPath, json)
  }
}

module.exports = NoDBStorageFS