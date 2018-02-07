const _ = require ('lodash')
const Path = require('path-parser')
const { URL } = require ('url')
const mongoose = require('mongoose')

const Search = mongoose.model('search')

module.exports = app => {
  app.get('/api/search', async (req, res) => {
    console.log('get search')
    const search = await Search.find({_user:req.user.id});
    console.log(search);
    res.send(search)
  })

  app.post('/api/search', async (req, res) => {
    console.log('post search');
    console.log(req.body);
    const search = new Search ({
      body:req.body.searchBody,
      _user:req.user.id
    })

    try {
      await search.save()
      res.send(search)
    } catch(err){
      res.status(422).send(err)
    }

  })
}
