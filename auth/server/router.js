const router = app =>{
  app.get('/', (req,res) => {
    res.send([
      'oj1','ol2','oj3'
    ])
  })
}

module.exports = router