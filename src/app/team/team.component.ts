import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  teamMembers = [
    // { name: 'Naledi Madlopha', title: 'Business Partner and Consultant', photoUrl: '/assets/Partner.jpg' },
    // { name: 'Andile Nyanda', title: 'CEO', photoUrl: '/assets/CEO.jpg' },
    { name: 'Moeketsi Segalo', title: 'Software Developer/Founder', photoUrl: '/assets/digitmetech1.jpg' },
    // { name: 'Thabiso Moloeli', title: 'Senior Web Developer', photoUrl: '/assets/Senior.jpg' },
    // { name: 'Sibahle Nhose', title: 'Business Administration Director', photoUrl: 'assets/Admin.jpg' },
    // { name: 'DigitMetch Name 6', title: 'Designer', photoUrl: 'assets/michael.jpg' }
  ];
}
