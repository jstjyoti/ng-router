import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramSubscription : Subscription;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.activeRoute.snapshot.params['id'],
      name: this.activeRoute.snapshot.params['name']
    };

    this.paramSubscription = this.activeRoute.params.subscribe((params: Params) => {
      this.user.id = params.id;
      this.user.name = params.name;
    }); // cleaning subscription happens whenever component destroyed automatically for route subscription
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }


}
