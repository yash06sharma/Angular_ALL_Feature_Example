import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-multiple-drag-drop',
  templateUrl: './multiple-drag-drop.component.html',
  styleUrls: ['./multiple-drag-drop.component.css']
})
export class MultipleDragDropComponent implements OnInit {

    /**@viewChild
     * use to clear the input value blank
     */
    @ViewChild("value", {static: false})

    /**ElementRef
     * used to get the element of Input box
     */
    InputVar!: ElementRef;

    /**
     * Array of data
     */
    todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

    /**
     *
     * Array of data
     */

    done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
    /**
     * To intialize
     * @return void
     */

    ngOnInit(): void {
      // throw new Error('Method not implemented.');
    }

    /**
     * Use to drop and drag the imtem
     * @param event
     *
     */
    drop(event: CdkDragDrop<string[]>) {
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
    /* Used to reset the input value
    *@return void
     */
    reset():void
    {this.InputVar.nativeElement.value = "";}

    /**
     *
     * @param data
     * @return void
     */
    getValue(data:any):void{
      console.log(data.value);
      this.todo.push(data.value);
      this.todo;
      this.reset();
    }


}
