import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';

interface Post{
  id:string, 
  title:string, 
  views:number
}

@Component({
  selector: 'app-pagina1',
  standalone: true,
  imports: [],
  templateUrl: './pagina1.component.html',
  styleUrl: './pagina1.component.css'
})
export class Pagina1Component {
  posts = signal<Post[]>([])
  constructor(private readonly http:HttpClient){
    this.getData();
  }
  getData(){
    this.http.get<Post[]>("https://didactic-enigma-jjgqpqq79x52p4v4-3000.app.github.dev/posts")
    .subscribe(posts=> this.posts.set(posts))
  }
}
