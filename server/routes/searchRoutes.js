const _ = require ('lodash')
const Path = require('path-parser')
const { URL } = require ('url')
const mongoose = require('mongoose')

const Search = mongoose.model('search')

module.exports = app => {
  app.get('/api/search', async (req, res) => {
    console.log('get search')
    const search = await Search.find({_user:req.user.id});
    res.send(search)
  })

  app.post('/api/search', async (req, res) => {
    console.log('post search');
    const { body } = req.body;
    const search = new Search ({
      body,
      _user:req.user.id
    })

    try {
      await search.save()
      res.send(user)
    } catch(err){
      res.status(422).send(err)
    }

  })
}
