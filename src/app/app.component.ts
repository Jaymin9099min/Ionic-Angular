import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {InstagramService} from './instagram.service';
import {debounce, takeWhile} from 'rxjs/operators';
import {Post} from './instagram';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private instagramService: InstagramService) {}

  title = 'instagram';
  isActive = true;
  post: Post;
  pos: number;
  page: number;
  totalData = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: Event) {
    if (document.documentElement.scrollHeight - (document.documentElement.scrollTop || document.body.scrollTop) <= 700 && this.totalData === this.post.results.length)   {
        this.page++;
        this.loadPost(this.page);
    }
  }

  ngOnInit() {
    this.page = 1;
    this.loadPost(this.page);
  }

  loadPost(page: number): void {
    this.instagramService.getPost(page, 2).subscribe((res: Post) => {
      if (this.post) {
        res.results.forEach(data => this.post.results.push(data));
      } else {
        this.post = res;
      }
      this.totalData = this.post.results.length;
    });

  }

  ngOnDestroy() {
    this.isActive = false;
  }
}
