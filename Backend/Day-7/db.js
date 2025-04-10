const mongoose = require("mongoose");
//  1 we have to conncet to db...
const main = async () => {
  try {
    const Connect = await mongoose.connect(
      "mongodb://127.0.0.1:27017/myDbFirst"
    );
    console.log("Connected to DB");
    //! this is the oneWay to insert the value.
    // await Studentmodel.insertMany([
    //   { name: "arbazkhan", age: 29, city: "mumbai" },
    // ]);
    //* this is the second way to inser the value.

    // const student = new Studentmodel({
    //   name: "yusufe",
    //   age: 30,
    //   city: "mumbai,andheri",
    // });
    // await student.save();

    // ? if you want to just get the data which is store in db do this

    const StudentData = await Studentmodel.find({ city: "pune" });

    console.log(StudentData);

    await Connect.disconnect();
    console.log("Connection closed");
    // console.log(Connect);
  } catch (err) {
    console.log("Error connecting to DB");
    console.log(err);
  }
};

main();

// 2 define the structure of our documents...

// here we have to creat the model and schema and with the help of that we have to write the code in clean format...

// code-writeing no.1

/*
const Model = mongoose.model(
  "Students",
  mongoose.Schema({
    name: String,
    age: Number,
    city: String,
  })
);
*/

// code-writeing no.2

//here we have to wite to saperat the code to look clean and neit...

const studentSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    age: { type: Number, require: true },
    city: { type: String, require: true },
  },
  { versionKey: false }
);
// in this first arg -> "name of collection" and sec arg will be the sructure...
const Studentmodel = mongoose.model("student", studentSchema);

//hello
