import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {

  tweetContent = '#OneForty4Lyfe';
  constructor() { }

  ngOnInit() {
  }

  // build the url string to redirect a user to twitters tweet button input form.
  onTweetSubmit() {
    // extract hashtags - twitter won't allow them to be included in string of text. you must pass them in a
    // separate parameter
    let hashtagList = '';
    const hashTags = this.tweetContent.match(/(#\w+)/g);
    if (hashTags) {
      hashtagList = hashTags.join(',');
      hashtagList = hashtagList.replace('#', '');
      this.tweetContent = this.tweetContent.replace(/(#\w+)/g, '');
    }
    // build the url string
    const text = 'https://twitter.com/intent/tweet?text=' + encodeURI(this.tweetContent) +
      (hashTags ? '&hashtags=' + encodeURI(hashtagList) : '');
    // redirect the user to the twitter form
    window.location.href = text;
  }
}
