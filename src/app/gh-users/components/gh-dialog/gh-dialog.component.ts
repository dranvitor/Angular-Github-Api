import { Component, OnInit } from '@angular/core';
import { GhRepository } from '../../models/ghRepository';
import { GhUser } from '../../models/ghUser';
import { GhApiService } from '../../services/gh-api.service';

@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent implements OnInit {

  username: string = ''
  user: GhUser | null = null
  repository: GhRepository[] = [];


  constructor(
    private ghService: GhApiService
  ) { }

  ngOnInit(): void {
    this.ghService.findUser(this.username).subscribe(
      (gUser) => {
        this.user = gUser
        this.ghService.findRepository(this.username).subscribe (
          (gRepository) => {
            this.repository = gRepository || []  
        }
        )
      }
    )
  }
}
