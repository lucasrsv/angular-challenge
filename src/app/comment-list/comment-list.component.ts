import { Component, OnInit } from '@angular/core'
import { CommentService } from 'src/app/comment.service'
import { Comment } from 'src/app/comment.model' 

//Forms
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms'
import { Form } from '../form.model'

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  comment: Comment
  comments: Comment[]
  commentsForm: FormGroup
  form: Form

  constructor(private formBuilder: FormBuilder, private commentService: CommentService) { 
    this.createForm()
  }

  ngOnInit(): void {
    this.commentService.getComments().subscribe(data =>
      this.comments = data.map(e => {
        return {
          author: e.payload.doc.data(),
          comment: e.payload.doc.data(),
        } as Comment
      })
    )
  }

  createForm() {
    this.commentsForm = this.formBuilder.group({
      author: '',
      comment: ''
    })
  }

  createComment(f: NgForm) {
    this.comment = {
      author:'',
      comment:''
    }
    
    this.form = this.commentsForm.value
    this.comment = this.form
    this.commentService.createComment(this.comment)
    f.resetForm()
  }
  
  deleteComment(id: string) {
    this.commentService.deleteComment(id)
  }

}
