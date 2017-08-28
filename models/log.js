import mogoose from 'mongoose'

let log = mogoose.Schema({
  methods: String,
  path: String
})
let Log = mogoose.model(log)