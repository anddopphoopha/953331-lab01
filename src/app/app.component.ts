import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'SE311'
  courseName = 'Component-Based Software Development'
  students = [
    {
      id: 1,
      studentId: 562110507,
      name: 'Prayuth',
      surname: 'Tu',
      gpa: 4.00
    },
    {
      id: 2,
      studentId: 562110509,
      name: 'Pu',
      surname: 'Praya',
      gpa: 2.22
    },
  ]

  averageGpa() {
    let sum = 0;
    for (let student of this.students) {
      sum += student.gpa
    }
    return sum/this.students.length
  }
}
