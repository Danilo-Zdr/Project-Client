import { Component, OnInit } from '@angular/core';
import { TypeService } from 'src/app/shared/type.service';
import { Type } from 'src/app/shared/type.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-type',
  templateUrl: './create-type.component.html',
  styleUrls: ['./create-type.component.css']
})
export class CreateTypeComponent {

  public type = new Type();
  public submitted = false;

  constructor(
    private typeService: TypeService,
    private location: Location
  ) { }

  newType(): void {
    this.submitted = false;
    this.type = new Type();
  }

 addType() {
    this.submitted = true;
    this.save();
    window.location.reload();
 }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    this.typeService.addType(this.type)
    .subscribe();
  }
}
