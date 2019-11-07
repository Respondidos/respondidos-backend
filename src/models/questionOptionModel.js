const mongoose = require('../config/mongoConnection')

const questionOptionSchema = new mongoose.Schema({
  text: String,
  isCorrect: Boolean
}, {
  _id: false
})

module.exports = mongoose.model('QuestionOption', questionOptionSchema)

// {
//   info: {
//     name: 'nome do quiz'
//   },
//   questions: [
//     { 
//       header: 'quem descobriu o brasil',
//       options: [
//         {
//           text: 'bolsonaro',
//           isCorrect: 'false'
//         },
//         {
//           text: 'cabral',
//           isCorrect: 'true'
//         },
//         {
//           text: 'lula livre',
//           isCorrect: 'false'
//         },
//         {
//           text: 'machado de assis',
//           isCorrect: 'false'
//         }
//       ]
//     },
//      { 
//         header: 'eh o papa?',
//         options: [
//           {
//             text: 'nao sei',
//             isCorrect: 'false'
//           },
//           {
//             text: 'o argentino',
//             isCorrect: 'true'
//           },
//           {
//             text: 'lula',
//             isCorrect: 'false'
//           },
//           {
//             text: 'padre fabio de melo',
//             isCorrect: 'false'
//           }
//         ]
//       },
//   ]
// }