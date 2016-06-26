import { Component,Directive } from '@angular/core';
import{DonutComponent} from './donut';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html', 
  directives:[DonutComponent]
})
export class AppComponent {
  items:Array<{name:string,count:number,color:string}>=[
    {name:'Orange',count:50,color:'orange'},
    {name:'Apple',count:25,color:'red'},
    {name:'Pear',count:15,color:'green'}
  ];
  centerText={name:"Total",value:this.items.map(x=>x.count).reduce((x,y)=>x+y)};
  title = 'app works!';
}
