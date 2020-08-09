import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Form } from '../shared/form'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  commentsForm: FormGroup
  form: Form

  constructor(private formBuilder: FormBuilder) { 
    this.createForm()
  }

  ngOnInit(): void {
  }

  createForm() {
    this.commentsForm = this.formBuilder.group({
      author: '',
      comment: ''
    })
  }

  onSubmit() {
    this.form = this.commentsForm.value
  }

}
