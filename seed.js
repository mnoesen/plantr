const db = require('./models.js');
db.sync({force: true})
  .then(()=> {
    console.log('database has synced')
  })
  .catch(err => {
    console.log("Something went wrong")
    console.log(err)
  })
  .finally(()=> {
    db.close()
  })
