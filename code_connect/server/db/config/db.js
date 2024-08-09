// const mongoose = require('mongoose');
// const db = config.get('mongoURI');
// const connectDB = async () => {
//   try {
//     await mongoose.connect(db, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false
//     });
//     console.log('MongoDB Connected...');
//   } catch (err) {
//     console.error(err.message);
//     // Exit process with failure
//     process.exit(1);
//   }
// };
// module.exports = connectDB;


const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/code-connect');

module.exports = mongoose.connection;
