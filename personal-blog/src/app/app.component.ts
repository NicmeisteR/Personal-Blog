import { Component } from '@angular/core';
import { ViewsService } from './services/views.service';

interface Article {
  _id: string,
  views: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  views;

  constructor(
    private viewsService: ViewsService,
  ) {
    this.viewsService.updateViews({ article: "blog" }).subscribe((res: any) => {
      this.views = res.views;
      console.log(this.views);
      
    });
  }

  title = 'personal-blog';
}
