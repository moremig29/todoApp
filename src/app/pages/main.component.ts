import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    TagModule,
    DataViewModule,
    ButtonModule,
    BadgeModule,
    CheckboxModule,
    FormsModule,
    TooltipModule,
    OverlayPanelModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  checked: boolean = true;

  tasks = [
    {
      task: 'Esta es una tarea 1',
      date: '1975-08-19T23:15:30.000Z',
    },
    {
      task: 'Esta es una tarea 2',
      date: '1975-08-19T23:15:30.000Z',
    },
    {
      task: 'Esta es una tarea 3',
      date: '1975-08-19T23:15:30.000Z',
    },
    {
      task: 'Esta es una tarea 4',
      date: '1975-08-19T23:15:30.000Z',
    },
    {
      task: 'Esta es una tarea 5',
      date: '1975-08-19T23:15:30.000Z',
    },
    {
      task: 'Esta es una tarea 6',
      date: '1975-08-19T23:15:30.000Z',
    },
    {
      task: 'Esta es una tarea 7',
      date: '1975-08-19T23:15:30.000Z',
    },
  ];

  completeTask(idx: number) {
    console.log(idx);
  }
  editTask(idx: number) {
    console.log(idx);
  }
  deleteTask(idx: number) {
    console.log(idx);
  }
}
