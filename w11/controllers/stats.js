import StudentMarks from '../models/schema.js';

export const getAllDocuments = async (req, res) => {
  const result = await StudentMarks.find({});
  const count = await StudentMarks.find({}).countDocuments();
  var data = `Count of students ${count} <br/><br/> ` ;
  for(const stud of result) {
    data += `${stud.name} - ${stud.roll_no}<br/>`
  }
  // res.json({students: result, count: count})
  res.send(data)
}

// List the names of students who got more than 20 marks in DSBDA Subject in browser.
export const getStudsForDsbdaMoreThan20 = async (req, res) => {
  const result = await StudentMarks.find({'dsbda_marks' : {$gt: 20}});
  var data = "";
  for(const stud of result) {
    data += `${stud.name} - ${stud.roll_no}<br/>`
  }
  res.send(data)

}

export const getStudsScoredAbove25 = async (req, res ) => {
  const result = await StudentMarks.find({
    wad_marks: {$gt: 25},
    cns_marks: {$gt: 25},
    dsbda_marks: {$gt: 25},
    cc_marks: {$gt: 25},
  });

  var data = "";
  for(const stud of result) {
    data += `${stud.name} - ${stud.roll_no}<br/>`;
  }
  res.send(data);
}

export const getLessThan40 = async (req, res) => {
  const result = await StudentMarks.find({
    wad_marks: {$lt: 40},
    cc_marks: {$lt: 40},
  })
  var data = "";
  for(const stud of result) {
    data += `${stud.name} - ${stud.roll_no}<br/>`;
  }
  res.send(data);
}
