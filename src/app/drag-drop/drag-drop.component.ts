import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit{
  /**Array of data */
    items = [
      { name: 'AirBook', disabled: true },
      { name: 'Lenevo' },
      { name: ' HP' },
      { name: ' Dell' },
      {name: 'Acer'},
    ];

    /** To initialize */
    ngOnInit(): void {
      // throw new Error('Method not implemented.');
    }

    /**
     * To move item
     * @param event
     */
    drop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    }
}
