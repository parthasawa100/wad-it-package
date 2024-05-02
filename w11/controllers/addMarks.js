import StudentMarks from '../models/schema.js';

export const addStudentMarks = async (req, res) => {
  const {docs} = req.body;
  const parsed_docs = JSON.parse(docs);
  await StudentMarks.insertMany(parsed_docs);
  res.json("Data added")
}

