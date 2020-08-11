import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { Comment } from 'src/app/comment.model'
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private firestore: AngularFirestore) { }

  getComments() {
    return this.firestore.collection('comments').snapshotChanges()
  }

  createComment(comment: Comment) {
    return this.firestore.collection('comments').add(comment)
  }

  deleteComment(commentId: String) {
    this.firestore.doc('comments/commentId').delete()
  }
}
