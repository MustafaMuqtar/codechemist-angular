import { Component, ElementRef, Input, AfterViewInit, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
declare var videojs: any;

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class VideoPlayerComponent implements AfterViewInit, OnDestroy {

  @ViewChild('target', { static: true }) target!: ElementRef;
  @Input() videoLink!: string;
  
  options = {
    autoplay: false,
    notSupportedMessage: 'Invalid Video URL',
    fluid: true, // Enable responsiveness

  };

  player!: any;
  qualityLevels: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.readyVideojsPlayer();
  }

  readyVideojsPlayer() {
    if (this.target && this.target.nativeElement) {
      this.player = videojs(this.target.nativeElement, this.options, function () {});
      this.player.src({
        src: this.videoLink,
        type: 'video/mp4'
      });
    }
  }

  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}
