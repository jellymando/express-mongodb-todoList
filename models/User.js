const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
      type: String,
      maxlength: 50
  },
  email: {
      type: String,
      trim: true, // 띄어쓰기 없앰
      unique: 1 // 같은 값을 가지지 않게
  },
  password: {
      type: String,
      maxlength: 5
  },
  lastname: {
      type: String,
      maxlength: 50
  },
  role: {
      type: Number,
      maxlength: 5
  },
  image: String
});

const User = mongoose.model('User', userSchema);

module.exports = {User};