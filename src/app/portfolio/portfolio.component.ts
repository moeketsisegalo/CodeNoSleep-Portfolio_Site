import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolio = {
    websites: [
      {
        name: 'MzantsiWash',
        description: 'MzantsiWash offers top-quality car washing, detailing, and various cleaning services in Pretoria. Established in 2022, we provide dustbin, carpet, domestic, event cleaning, and more, ensuring exceptional results with dedication and pride.',
        link: 'https://www.mzantsiwash.co.za',
        image: 'assets/logo.png'
      },
      {
        name: 'Website 2',
        description: 'Description of Website 2',
        link: 'https://www.website2.com',
        image: 'assets/images/website2.jpg'
      },
      {
        name: 'Website 3',
        description: 'Description of Website 3',
        link: 'https://www.website3.com',
        image: 'assets/images/website3.jpg'
      },
      // Add more websites as needed
      {
        name: 'Inventory App',
        description: 'The Inventory App is a command-line application developed in Python for managing a list of shoes in an inventory. It provides various functionalities for interacting with the inventory, such as reading the data from a file, capturing new shoe details, viewing all the shoes in a tabular format, restocking shoes, searching for a shoe by its product code, calculating the value of each item, and identifying the item with the highest quantity.',
        link: 'https://github.com/moeketsisegalo/inventory_app/blob/main/README.md',
        image: 'assets/run_app.png' // Update with actual image paths
      },
      {
        name: 'Task Manager',
        description: "The program allows user registration, task management, and report generation. Users can register, add tasks with details, view tasks, edit them, and generate reports.The program offers a seamless experience for managing tasks, enabling users to stay organized and productive.You can mark the task as complete, change the assigned username, or update the due date.To generate reports, select the option, and it will display various statistics, including the number of tasks, number of completed tasks, number of incomplete tasks, number of overdue tasks, and the percentage of incomplete tasks",
        link: 'https://github.com/moeketsisegalo/task_manager?tab=readme-ov-file',
        image: 'assets/run_app-3.png'
      },
      {
        name: 'Website 3',
        description: 'Description of Website 3',
        link: 'https://www.website3.com',
        image: 'assets/images/website3.jpg'
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }
}
