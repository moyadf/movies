import { Component, OnInit } from '@angular/core';
import { TopService } from 'src/app/services/top.service';

@Component({
  selector: 'app-topfive',
  templateUrl: './topfive.component.html',
  styleUrls: ['./topfive.component.css']
})
export class TopfiveComponent implements OnInit {

  constructor( private top_service : TopService) { }

  top: any = [];

  ngOnInit(): void {
    this.top_service.getTopMovies().subscribe((data:any) => {
      this.top = data.movies;

      console.log(this.top);
    })
  }

}
