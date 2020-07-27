const fs = require('fs');
const file = fs.readFileSync('../students.json', 'utf8')

const obj = JSON.parse(file);
//console.log(obj.students)

const getStudentByIndex = function(index){
return obj.students[index]
}

  const getStudentByName = function(name){
  for( const item of obj.students){
    if (item['name'] === name){
      return item;
    }
  }
  return - 1
} 

const graduateStudent = function(stuName){
  for( const item of obj.students){
    if (stuName === item['name']){
      item['term']++
    }
  }
  const backToJSON = JSON.stringify(obj);
  
  fs.writeFileSync('../students.json', backToJSON)
}








if (typeof getStudentByIndex === 'undefined') {
  getStudentByIndex = undefined;
}

if (typeof getStudentByName === 'undefined') {
  getStudentByName = undefined;
}

if (typeof graduateStudent === 'undefined') {
  graduateStudent = undefined;
}


module.exports = {
  getStudentByIndex,
  getStudentByName,
  graduateStudent,
}
