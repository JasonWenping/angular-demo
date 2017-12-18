import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  linkTitle = ['快速入口','开发资源','常见问题','服务支持'];
  links = ['账户中心','管理控制台','财务中心','价格计算器','服务协议','合作申请'];
  links2 = ['技术论坛','文档中心','SDK下载','教学视频','GitHub','QQ支持群'];
  links3 = ['账号登录','接口调用','商用咨询','技术问答'];
  links4 = ['合作咨询','提交工单','意见反馈','客服电话','4008-777-818'];
  friend_link = ['百度云','百度开发者中心','百度守住平台','百度技术学院','百度数据众包'];
}
