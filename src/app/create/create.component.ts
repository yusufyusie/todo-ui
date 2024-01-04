import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  // formTask! : FormGroup;
  constructor(private formBuider: FormBuilder,
              private _todoService: TodoService) { }


  formTask = this.formBuider.group({
      name: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      issues: this.formBuider.array([])
    });
  
    get issues() {
      return this.formTask.get('issues') as FormArray;
    }
  
  
    addIssues() {
      this.issues.push(this.formBuider.control(''));
    }
  
  
    deleteIssue(index: number) {
      this.issues.removeAt(index);
    }
  
  onSubmit() {
    if(this.formTask.valid){
      const formdata = this.formTask.value;
      this._todoService.createTodo(formdata).subscribe((data:any) =>{
          console.log(data);
      });
    }
  }
}

