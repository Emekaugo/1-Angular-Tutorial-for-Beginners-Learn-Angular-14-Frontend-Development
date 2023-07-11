import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    var date: Date = new Date(this.route.snapshot.params['date']);
    console.log(date);
  }

  tasks: Task[] = [
    new Task('visit ann'),
    new Task('call dad'),
    new Task('go to gym'),
    new Task('shop for food'),
    new Task('wash dishes'),
  ];

  add(newTask: string) {
    // alert(newTask)
    this.tasks.push(new Task(newTask));
  }

  remove(existingTask: Task) {
    var userConfirmed = confirm(
      `Are you show you want to remove\n "${existingTask.title}" ?`
    );

    if (userConfirmed) {
      // this.tasks.splice(this.tasks.indexOf(existingTask), 1);
      this.tasks = this.tasks.filter((task) => task != existingTask);
    }
  }

  // toggleAsDone(task: Task) {
  //   // alert('"The task: "' + task.title + '" is done"');
  //   task.isDone = !task.isDone;
  // }
}

class Task {
  constructor(public title: string) {}

  toggleAsDone() {
    this.isDone = !this.isDone;
  }

  public isDone = false;
}
