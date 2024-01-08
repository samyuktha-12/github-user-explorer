import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  username: string;
  fols: any[] = [];

  constructor(private route : ActivatedRoute , private githubService :GithubService , private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.username = params['id'];
      console.log("username",this.username);
  })

  this.githubService.getFollowers(this.username).subscribe({
   
    complete : () => {console.log("success!")},
    error:() => {
   
       alert("error ! try again");
      
       this.router.navigate(['searchuser']);
       
    },
    next : (fol : any = []) => {
      this.fols = fol;
     }
  })

}
}
