import StudentMarks from '../models/schema.js';

export const updateMarks = async (req, res) => {
  const {roll_no} = req.body;
  const result = await StudentMarks.findOneAndUpdate(
    {roll_no: roll_no}, 
    {$inc: {dsbda_marks: 10, wad_marks: 10, cc_marks: 10}},
     {new: true})
  res.json("Updated succesfully");
}

export const displayStudent = async (req, res) => {
  const students = await StudentMarks.find({});
  var html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Table UI</title>
      <style>tr, td, th {border: 1px solid black; }</style>
  </head>
  <body>
      <table border="1">
        <tr>
            <th>ID</th>
            <th>Roll No</th>
            <th>Name</th>
            <th>wad_marks</th>
            <th>cc_marks</th>
            <th>cns_marks</th>
        </tr>

   `;

  for(const stud of students) {
    html += `<tr> <td>${stud._id}</td> <td>${stud.roll_no}</td> <td>${stud.name}</td> <td>${stud.wad_marks}</td> <td>${stud.cc_marks}</td> <td>${stud.dsbda_marks}</td> <td>${stud.cns_marks}</td> </tr>`
  }

  html += ` </table>
  </body>
  </html>
`;
  res.send(html)
}


export const deleteStudent = async (req, res) => {
  await StudentMarks.findOneAndDelete({roll_no : req.body.roll_no})
  res.send('done')
}