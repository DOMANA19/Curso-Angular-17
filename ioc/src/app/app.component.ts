import { Component, Injector, inject, runInInjectionContext } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ServiceService } from './service.service';
import { URLAPI } from './app.config';
import { DataComponent } from './data/data.component';
import { PostComponent } from './post/post.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, DataComponent, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ioc';
  constructor(
    private readonly service:ServiceService,
    private readonly injector:Injector
  ){
    console.log(service.a);
    service.a = 44;
    //console.log(service);
  }
  handlerClick(ev:Event){
    ev.stopPropagation();
    runInInjectionContext(this.injector,()=>{
      console.log(inject(URLAPI))
    })
    //console.log(inject(URLAPI))
    console.log(this.service.a);
  }
}
