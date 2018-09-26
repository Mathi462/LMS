const mongoose = require('mongoose');

// const NoteSchema = mongoose.Schema({
//     title: String,
//     content: String
// }, {
//     timestamps: true
// });

const QuestionSchema = mongoose.Schema({

 		Image_path: String,
         Question: String,
		  NoOption : String,
		   Option1: String ,
		   Option2: String ,
		   Option3: String ,
		   Option4: String ,
		   Option5: String,
	       Answers: []
	   },
	   {
	       timestamps:true
	   

});

module.exports = mongoose.model('all_qus_types', QuestionSchema);