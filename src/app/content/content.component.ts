import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  quikeVisit= [
    {
      title:'开发者快速接入百度AI只需五步轻松搞定',
      tag:'新手引导'
    },
    {
      title:'百度启动[燎原计划]助力开发者共创AI未来',
      tag:'上线快报'
    },
    {
      title:'理解与交互技术UNIT玩转“人机对话”',
      tag:'新闻资讯'
    },
    {
      title:'百度AI有奖调研3分钟领100元礼品卡',
      tag:'精彩活动'
    }];
  ctitle = ['全球领先的AI服务','全面开放的行业生态','丰富易用的解决方案','成功为客户提供业务新动力','助力生态伙伴 共赢AI未来','全线产品免费开放，等你加入'];
  
  items1 = ['语音识别','语音合成','语音唤醒','文字识别','人脸识别'];
  items2 =['语言处理技术','文本审核','理解与交互技术UNIT','机器翻译','智能营销'];
  s_title = ['','','','','','',''];
  s_note = ['','','','','','',''];
  c_name = [
  {
    logo:'images/pongcar_logo.png',
    cname:'PONY CARD'
  },
  {
    logo:'images/18183_logo.png',
      cname:'18183'
  },
  {
    logo:'images/bm_logo.png',
    cname:'白描'
  },
  {
    logo:'images/ks_logo.png',
    cname:'卡斯数据'
  },
  {
    logo:'images/xm_logo.png',
    cname:'熊猫看书'
  },
  {
    logo:'images/lg_logo.png',
    cname:'拉勾网'
  },
  {
    logo:'images/more_logo.png',
    cname:''
  }];
  
  c_info = [
  {
    photo:'images/ponycar.png',
    name:'刘逸洵',
    job:'PONY CAR CEO',
    intro:'    PonyCar 作为共享出行行业率先引进 AI 技术的企业，引进百度 AI 人脸识别功能，不仅完善平台用户身份认证体系， 极大增强了整个平台的风控能力，也能辅助交管部门监测，很荣幸和百度AI 站在一起，为数亿有证无车的用户提供舒适安全的共享出行服务。'
  },
  {
    photo:'images/18183.png',
    name:'刘辉',
    job:'18183 CEO',
    intro:'    畅玩网络引进百度AI技术平台，将文字识别、图片审核等智能内容审核方案运用到平台运作中，不仅极大地确保了平台的稳定发展，净化了内容信息，远离违规风险，同时也大大节省了人力。期待能与百度AI一起，为用户打造更加纯净健康、内容丰富的网络游戏平台。'
  },
  {
    photo:'images/bm.png',
    name:'陶新乐',
    job:'白描 开发者',
    intro:'    白描是一款专注于OCR识别的效率工具，借助百度文字识别及翻译能力，已经具备准确高效的文字识别、批量文字识别、表格识别和识别后的翻译功能，有着良好的用户体验，广受用户好评，被各媒体广泛推荐，被网友称为“准确率高到没有朋友的文字识别 OCR APP”。'
  },
  {
    photo:'images/ks.png',
    name:'李若飞',
    job:'卡思数据 VP',
    intro:'    卡思数据平台是国内唯一的视频全网大数据开放平台，通过引入百度AI自然语言处理技术分析视频节目的用户互动数据，从关键词和情感分析两个角度对节目进行舆情分析，让节目创作团队更了解观众的兴趣点以及对节目的看法，更清晰高效的指导节目的研发和运营。'
  },
  {
    photo:'images/xm.png',
    name:'何健秋',
    job:'熊猫看书 VP',
    intro:'    熊猫看书作为一个阅读内容平台，通过引进百度AI语音合成技术实现了对内容的重新解读，通过语音朗读的方式让用户获得了新的内容消费场景， 让阅读更轻松，多种音色 离在线切换都更好的满足了用户多种碎片化场景下的阅读需求。'
  },
  {
    photo:'images/lg.png',
    name:'马德龙',
    job:'拉勾网 CEO',
    intro:'    拉勾将百度 AI 的人脸识别功能应用到招聘者身份审核中，实现了AI技术和招聘场景的深度结合，提升了信息审核效率和安全性。作为国内领先的互联网人力资源综合平台，和百度AI一起，为平台上的25万企业用户和1500万互联网求职者提供保障。'	
  },
  {
  
  }
  
  
  ];
  
  paragraph = [
  {
    author:'技术资源',
    description:'专属的定期培训、技术支持，及新产品内测体验，还将有机会参与百度AI主题沙龙。'
  },
  {
    author:'品牌共建',
    description:'获得百度AI的品牌赋能推广，及专有的营销渠道推广，助力您创造品牌价值。'
  },
  {
    author:'成就客户',
    description:'获得定制化需求支持及入驻平台展现机会，引领行业升级，携手成就客户并推进AI生态的建设与发展。'
  }
  ];
  
  solution = [
  {
    img:'images/solution1.jpg',
    s_title:'人脸核身',
    s_note:'快速完成身份核实，确保【真人】为【本人】'
  },
  {
    img:'images/solution2.jpg',
    s_title:'人脸会场签到',
    s_note:'参会人员邀请注册刷年、刷脸签到、与会人员统计管理平台`'
  },
  {
    img:'images/solution3.jpg',
    s_title:'人脸会员识别',
    s_note:'人脸注册、人脸自动补货签到、与会人员统计管理平台'
  },{
    img:'images/solution4.jpg',
    s_title:'人脸闸机',
    s_note:'参会人员邀请注册刷年、刷脸签到、与会人员统计管理平台'
  },{
    img:'images/solution5.jpg',
    s_title:'智能电销',
    s_note:'参会人员邀请注册刷年、刷脸签到、与会人员统计管理平台'
  },{
    img:'images/solution6.jpg',
    s_title:'机器人视觉',
    s_note:'参会人员邀请注册刷年、刷脸签到、与会人员统计管理平台'
  },{
    img:'images/solution7.jpg',
    s_title:'对话式机器人',
    s_note:'参会人员邀请注册刷年、刷脸签到、与会人员统计管理平台'
  },
  {
    img:'images/solution8.jpg',
    s_title:'智慧家庭',
    s_note:'参会人员邀请注册刷年、刷脸签到、与会人员统计管理平台'
  },
  {
    img:'images/solution9.jpg',
    s_title:'智能语音处理',
    s_note:'参会人员邀请注册刷年、刷脸签到、与会人员统计管理平台'
  }]
  
  
  partner = ['images/c1.jpg','images/c2.jpg','images/c3.jpg','images/c4.jpg','images/c5.jpg','images/c6.jpg','images/c7.jpg','images/c8.jpg'];
}
