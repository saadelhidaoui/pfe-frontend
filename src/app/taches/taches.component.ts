import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ITask} from '../conroller/model/task';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.scss']
})
export class TachesComponent implements OnInit {

  todoForm: FormGroup;
  task: ITask [] = [];
  inprogress: ITask [] = [];
  done: ITask [] = [];
  updateId: any;
  isEditEnabled = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      task: ['', Validators.required],
    })
  }
  addTask() {
    this.task.push({
      desc: this.todoForm.value.item,
      done: false
    })
  }
  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
      );
    }
  }

  deleteTask(i: number) {
    this.task.splice(i, 1);
  }

  onEdit(item: ITask, i: number) {
    this.todoForm.controls['item'].setValue(item.desc);
    this.updateId = i;
    this.isEditEnabled = true;
  }
  deleteInProgress(i: number) {
    this.inprogress.splice(i, 1);
  }

  deleteDone(i: number) {
    this.done.splice(i, 1);
  }
}
