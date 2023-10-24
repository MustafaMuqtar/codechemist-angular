import { Component, ElementRef, Inject, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
declare var videojs: any;

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
  encapsulation: ViewEncapsulation.None

})

export class VideoPlayerComponent implements OnInit {



  @ViewChild('target', { static: true }) target!: ElementRef;

  @Input() videoLink!: string;

  options = {

    autoplay: false,

    notSupportedMessage: 'Invalid Video URL', // to change the default message

  }

  player!: any;

  qualityLevels: any;



  constructor() { }



  ngOnInit(): void {

  }



  ngAfterViewInit(): void {

    this.readyVideojsPlayer()

  }



  readyVideojsPlayer() {

    this.player = videojs(this.target.nativeElement, this.options, function () { });

    this.player.src({

      src: this.videoLink,

      type: 'video/mp4'

    })

  }



  ngOnDestroy() {

    if (this.player) {

      this.player.dispose();

    }

  }

}



