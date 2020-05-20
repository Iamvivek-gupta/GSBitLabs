import { Component } from '@angular/core';
import { ShareService } from './share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service:ShareService){
    this.getData()
  }
  title = 'project';
  items;
  data;
  batters;
  id;
  type;
  name;
  dat;
  products;
  toppings
  header = ["id", "type", "name", "batter", "topping"]
  getData(){
    this.service.getdata().subscribe(dt =>{
      this.items = dt
      this.data = this.items.items.item
      
       this.products = this.data.map(item => {
        this.id = item.id;
        this.type = item.type
        this.name = item.name
        this.toppings = item.topping
        this.batters = item.batters.batter
        console.log(this.batters);
        
      });
      return this.products;
      
      
    })
  }
}
