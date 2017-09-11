# NoDBStore-fs

Storage for NoDBStore using fileSystem (syncroneously)

## Getting started

```bash
npm i nodbstore nodbstore-fs
```

```js
const NoDB = require('nodbstore')
const NoDBStorageFS = require('nodbstore-fs')

const db = new NoDB() // init db

// init storage
const fsStore = new NoDBStorageFS('Path/to/the/db/file')

db.addStore(fsStore) // add the store

// load the db from fs
db.loadFromStore(fsStore)
// or
fsStore.load()

// export db to file
fsStore.export('export/to/file')

// import db from file
fsStore.import('db/file/to/import')
``` 