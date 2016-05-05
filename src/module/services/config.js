'use strict';

export default class Congfig {
  constructor(){
    this.host = 'http://localhost:8080';

    this.components = {
      "textInput": {
        type: 'textInput',
        title: ''
      },
      "radio": {
        type: 'radio',
        title: '',
        options: ['']
      },
      "multi": {
        type: 'multi',
        title: '',
        options: ['']
      },
      "image": {
        type: 'image',
        title: '',
        length: 1
      }
    };
    this.API = {
      'host'    : 'http://localhost:8888',
      'token'   : '/api/v1/token',
      'user'    : '/api/v1/users',
      'question': '/api/v1/questions',
      'task'    : '/api/v1/tasks',
      'result'  : '/api/v1/results',
      'push'    : '/api/v1/push'
    }

    this.setinfo = {
      "email": {
        "title": "邮箱",
        "type": "text",
        "placeholder": "请输入email",
        "keyboardType": "email"
      },
      "password": {
        "title": "密码",
        "type": "text",
        "placeholder": "请输入密码",
        "keyboardType": "password"
      },
      "name": {
        "title": "姓名",
        "type": "text",
        "placeholder": "请输入姓名",
        "keyboardType": "text"
      },
      "gender": {
        "title": "性别",
        "type": "radio",
        "data": ["男", "女"]
      },
      "age": {
        "title": "年龄",
        "type": "radio",
        "data": ["16岁以下", "16-20岁", "21-25岁", "26-30岁", "31-35岁", "36-40岁", "41-50岁", "51岁及以上"]
      },
      "job": {
        "title": "职业",
        "type": "radio",
        "data": [
          "研究人员（科研单位/研究机构）",
          "企业/公司一般职员", "企业/公司管理者",
          "专业人士（律师、医生、老师、记者等）",
          "公务员/事业单位人员",
          "工人（如工厂工人、体力劳动者等）",
          "服务业从业者（如快递员、服务员等）",
          "农民",
          "个体经营者",
          "自由职业者",
          "家庭主妇",
          "无业/下岗/待业",
          "退休"
        ]
      },
      "industry": {
        "title": "行业",
        "type": "radio",
        "data": [
           "金融/保险/风投机构（银行/投资银行/证券交易所/保险公司/风险投资机构等）",
           "快消品行业（食品/化妆品/日用商品/烟草等）",
           "餐饮/酒店行业",
           "咨询行业（企业咨询/人力咨询公司/律师事务所/会计师事务所等）",
           "服装/饰品行业",
           "零售业",
           "通讯行业",
           "计算机行业（软件/硬件开发等）",
           "电子设备/家电/芯片/半导体行业",
           "机械/自动化/重工/汽车类行业",
           "化工/制药/医疗类行业",
           "建筑/物业/房地产行业",
           "运输/物流仓储行业",
           "能源类行业（电力/石油等）",
           "媒体/影视/旅游文化/广告类行业",
           "互联网/电子商务类行业",
           "国家机关/事业单位/科研教育机构"
        ]
      },
      "education": {
        "title": "教育程度",
        "type": "radio",
        "data": [
            "小学及以下",
            "初中",
            "高中\中专\技校",
            "大学专科",
            "本科",
            "硕士",
            "博士及以上"
        ]
      },
      "marriage": {
        "title": "婚恋状况",
        "type": "radio",
        "data": [
            "单身",
            "未婚，有固定男\女朋友",
            "已婚，无子女",
            "已婚，有子女",
            "其他"
        ]
      },
      "pc_os": {
        "title": "PC 操作系统",
        "type": "radio",
        "data": [
           "Mac OS",
           "Windows XP",
           "Windows Vista",
           "Windows 7",
           "Windows 8",
           "Windows 8.1",
           "Windows 10",
           "Linux",
           "其他"
        ]
      }
    };

  }
}
