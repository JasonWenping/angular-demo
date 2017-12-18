import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  galleryUrl = [
    {
      key:0,url:'images/73A34901F47A43249F43FAD4BBE9A01A.jpg'
    },
    {
      key:1,url:'images/C9F0106EB5F04D3295A53171CB439DDF.jpg'
    },
    {
      key:2,url:'images/E6EB2FE76B17440FA15FBA8FA8226BF1.jpg'
    },
    {
      key:3,url:'images/ED52C0039B744532BE7CF8EC6DDBD1B0.jpg'
    },
    {
      key:4,url:'images/F181EE38E04B4707A5A326E442E81D45.jpg'
    }
  ];
  link_title = [
    {
      key:0,value:'开放数据集助力AI成长 '
    },
    {
      key:1,value:'人脸硬件合作伙伴计划 '
     } ,
     {
       key:2,value:'Dumix AR开放平台全面公测 '
     },
     {
       key:3,value:'数据智能 智胜未来 '
     },
     {
       key:4,value:'图像审核钜惠上线 '
     }
  ];
}
