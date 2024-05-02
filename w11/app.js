import express from 'express';
import { connectToDB } from './db.js';
import bodyParser from 'body-parser'
import cors from 'cors';
import {addStudentMarks} from './controllers/addMarks.js'
import { getAllDocuments, getLessThan40, getStudsForDsbdaMoreThan20, getStudsScoredAbove25 } from './controllers/stats.js';
import { deleteStudent, displayStudent, updateMarks } from './controllers/crud.js';

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.use(cors({
  origin: '*'
}))


app.get('/', (req, res) => {
  res.send('hello world');
})

app.post('/addMarks', addStudentMarks);

app.get('/getAllDocuments', getAllDocuments);

app.get('/getStudsForDsbdaMoreThan20', getStudsForDsbdaMoreThan20)

app.patch('/updateMarks', updateMarks)

app.get('/getStudsScoredAbove25', getStudsScoredAbove25)

app.get('/getLessThan40', getLessThan40)

app.delete('/deleteStudent', deleteStudent);

app.get('/display', displayStudent)

app.listen(3000, () => {
  console.log('App running on 3000')
  connectToDB();
})