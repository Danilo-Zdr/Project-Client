import { Component, OnInit } from '@angular/core';
import { TypeService } from 'src/app/shared/type.service';
import { Type } from 'src/app/shared/type.model';


@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  public types: Type[];

  constructor(public typeService: TypeService) {}

  ngOnInit(): void {
     this.getTypes();
  }

  getTypes() {
    return this.typeService.getTypes()
    .subscribe(
      types => {
        console.log(types);
        this.types = types;
        });
 }
}
