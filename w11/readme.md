## W-1


Perform following tasks using nodejs, Expressjs and MongoDB. Following operation should be perform in Nodejs and Expressjs only.
a) Create a Database called student.
b) Create a collection called studentmarks
c) Insert array of documents in above Collection. [Document have following field:
Name, Roll_No, WAD_Marks, CC_Marks, DSBDA_Marks,CNS_Marks,AI_marks]
d) Display total count of documents and List all the documents in browser.
e) List the names of students who got more than 20 marks in DSBDA Subject in browser.
f) Update the marks of Specified students by 10.
g) List the names who got more than 25 marks in all subjects in
browser.
h) List the names who got less than 40 in both Maths and Science in browser.
i) Remove specified student document from collection.
j) Display the Students data in Browser in tabular format.
Name Roll No WAD CC AI DSBDA CNS



Routes - 
1) /addMarks - needs a array of student marks with name and roll no
2) /getAllDocuments - is a get request based on the need of d
3) /getStudsForDsbdaMoreThan20 - e 
4) /updateMarks - f
5) /getStudsScoredAbove25 - g
6) /getLessThan40 - h
7) /deleteStudent - i
8) /display - j



