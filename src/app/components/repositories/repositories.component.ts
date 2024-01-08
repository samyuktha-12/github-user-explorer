import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  username: string;
  repos: any[] = [];

  constructor(private route : ActivatedRoute , private githubService :GithubService , private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.username = params['id'];
      console.log("username",this.username);
  })

  this.githubService.getRepos(this.username).subscribe({
   
    complete : () => {console.log("success!")},
    error:() => {
   
       alert("error ! try again");
      
       this.router.navigate(['searchuser']);
       
    },
    next : (repo : any = []) => {
      this.repos = repo;
     }
  })

}
}
