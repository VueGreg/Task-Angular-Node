import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-edition-task',
  imports: [ MatFormFieldModule, MatLabel, MatInputModule, FormsModule, ReactiveFormsModule, MatError, RouterLink],
  templateUrl: './edition-task.component.html',
  styleUrl: './edition-task.component.scss'
})
export class EditionTaskComponent {

  formBuilder = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);

  formulare = this.formBuilder.group(
    { 
      text: ["", [Validators.required, Validators.minLength(5)]]
    }
  )

  onAddTask()
  {
    if (this.formulare.valid) {
      this.http
        .post("http://localhost:3000/tasks", this.formulare.value)
        .subscribe(response => this.router.navigateByUrl("/"))
    }
  }

}
