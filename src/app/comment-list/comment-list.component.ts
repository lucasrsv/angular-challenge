import { Component, OnInit, ViewChild } from '@angular/core'
import { CommentService } from 'src/app/comment.service'
import { Comment } from 'src/app/comment.model' 

//Forms and Firebase
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms'
import * as firebase from 'firebase'

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})

export class CommentListComponent implements OnInit {

  comment: Comment
  comments: Comment[]
  commentsForm: FormGroup
  @ViewChild('fform') feedbackFormDirective

  constructor(private formBuilder: FormBuilder, private commentService: CommentService) { 
    this.createForm()
  }

  ngOnInit(): void {
    this.commentService.getComments().subscribe(data =>
      this.comments = data.map(e => {
        return {
          author: e.payload.doc.data(),
          comment: e.payload.doc.data(),
          date: e.payload.doc.data()
        } as Comment
      })
    )
  }

  createForm() {
    this.commentsForm = this.formBuilder.group({
      author: ['',  Validators.required],
      comment: ['',  Validators.required],
      date: firebase.firestore.Timestamp.now()
    })
  }

  createComment(f: NgForm) {
    this.comment = this.commentsForm.value
    this.comment.date = firebase.firestore.Timestamp.now()
    this.commentService.createComment(this.comment)
    f.resetForm()
    this.feedbackFormDirective.resetForm()
  }
}