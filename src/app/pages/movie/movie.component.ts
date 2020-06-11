import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.model';
import { NgForm } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  
  file:File;
  myReader:FileReader;
  image: any;

  movie = new MovieModel();

  public titleValidation = "Please enter a text greater than 5 characters";
  public descValidation = "Please enter a text greater than 50 characters";

  constructor( private movies_service : MoviesService, private router : Router ) { }

  ngOnInit(): void {
  }

  changeListener($event: { target: any; }) : void {
    this.readThis($event.target);
  }

  readThis (inputValue: any) : void {
    this.file = inputValue.files[0];
    this.myReader = new FileReader();

    this.myReader.onloadend = (e) => {
      this.image = this.myReader.result;
      this.movie.image = this.image;
    }
    
    this.myReader.readAsDataURL(this.file);
  }

  saveMovie( form: NgForm ) {

    if( form.invalid ) {
      return Object.values( form.controls ).forEach( control => {
        control.markAsTouched();
      });

    }

    Swal.fire({
      title: 'Record created successfully',
      icon: 'success',
      showConfirmButton: true,
    }).then((resp) => {
      if (resp.value) {
        this.movies_service.addMovie(this.movie).subscribe(
          resp => {
            console.log(resp);
          }
        )
      }
      
      this.router.navigateByUrl('home');
      
    });

    
  }

}
