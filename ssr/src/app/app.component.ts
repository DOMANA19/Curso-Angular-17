import { Component, afterNextRender } from '@angular/core';
import { LayoutComponent } from './pages/layout/layout.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Daniel';
  constructor(){
    //Esto lo que dice es: No lo ejecutes en el servidor:
    afterNextRender(()=>{
      const result = document.querySelectorAll('*')
      console.log(result)
    })

  }
  handlerClick(ev:Event){
    console.log("click")
  }
}
