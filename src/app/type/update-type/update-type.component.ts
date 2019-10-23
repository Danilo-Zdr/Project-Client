import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Type } from 'src/app/shared/type.model';
import { TypeService } from 'src/app/shared/type.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-type',
  templateUrl: './update-type.component.html',
  styleUrls: ['./update-type.component.css']
})
export class UpdateTypeComponent implements OnInit, OnDestroy, AfterViewInit {

  public type = new Type() ;
  public submitted = false;
  public message: string;

  constructor(
    private typeService: TypeService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.typeService.getType(id)
      .subscribe(type => this.type = type);
  }

  update(): void {
    this.submitted = true;
    this.typeService.updateType(this.type)
        .subscribe(() => this.message = 'Match Type Updated Successfully!');
  }

  delete(): void {
    this.submitted = true;
    this.typeService.deleteType(this.type.id)
        .subscribe(() => this.message = 'Match Type Deleted Successfully!');
  }

  goBack(): void {
    this.location.back();
  }

  ngAfterViewInit() {
    console.log('View loading complete.');
  }

  ngOnDestroy() {
    console.log('Destruction complete.');
  }

}
