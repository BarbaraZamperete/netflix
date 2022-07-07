import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title: any
  @ViewChild('trailer', { static: false}) trailer: ElementRef<HTMLVideoElement>
  muted: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  playVideo(){
    this.trailer.nativeElement.play()
  }
  stopVideo(){
    this.trailer.nativeElement.pause()
    this.trailer.nativeElement.currentTime = 0
  }
  // getMuted(): boolean {
  //   return this.trailer.nativeElement.muted
  // }
  toggleSound(){
    this.trailer.nativeElement.muted = !this.trailer.nativeElement.muted
    this.muted = !this.muted
  }

}
