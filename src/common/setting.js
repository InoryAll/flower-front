/**
 * 配置常量类
 * Created by tianrenjie on 2018/5/15
 */

class Settings {
  static initSettings() {
    this.usage = [{
      label: '爱情鲜花',
      value: 'love',
    }, {
      label: '商务用花',
      value: 'business',
    }, {
      label: '生日鲜花',
      value: 'birthday',
    }, {
      label: '友情鲜花',
      value: 'friendship',
    }, {
      label: '老师长辈',
      value: 'greetings',
    }, {
      label: '求婚婚庆',
      value: 'wedding',
    }, {
      label: '道歉鲜花',
      value: 'apology',
    }, {
      label: '探病慰问',
      value: 'sympathy',
    }, {
      label: '祝福庆贺',
      value: 'congratulation',
    }, {
      label: '祭奠',
      value: 'death',
    }];
    this.material = [{
      label: '玫瑰',
      value: 'rose',
    }, {
      label: '百合',
      value: 'lily',
    }, {
      label: '向日葵',
      value: 'sunflower',
    }, {
      label: '康乃馨',
      value: 'carnations',
    }, {
      label: '郁金香',
      value: 'tulip',
    }, {
      label: '扶郞',
      value: 'gerbera',
    }, {
      label: '马蹄莲',
      value: 'callas',
    }, {
      label: '满天星',
      value: 'babysbreath',
    }, {
      label: '草莓花束',
      value: 'strawberry',
    }];
    this.price = [{
      label: '100-200元',
      value: 'oneToTwo',
    }, {
      label: '200-300元',
      value: 'twoToThree',
    }, {
      label: '300-500元',
      value: 'threeToFive',
    }, {
      label: '500-800元',
      value: 'fiveToEight',
    }, {
      label: '800元以上',
      value: 'aboveEight',
    }];
    this.object = [{
      label: '恋人',
      value: 'lover',
    }, {
      label: '朋友',
      value: 'friend',
    }, {
      label: '父母',
      value: 'parent',
    }, {
      label: '领导',
      value: 'leader',
    }, {
      label: '老师',
      value: 'teacher',
    }, {
      label: '客户',
      value: 'customer',
    }, {
      label: '长辈',
      value: 'elder',
    }, {
      label: '病人',
      value: 'patient',
    }];
    this.holiday = [{
      label: '七夕节',
      value: 'chineseValentine',
    }, {
      label: '情人节',
      value: 'valentine',
    }, {
      label: '妇女节',
      value: 'women',
    }, {
      label: '母亲节',
      value: 'mother',
    }, {
      label: '光棍节',
      value: 'bachelor',
    }, {
      label: '圣诞节',
      value: 'christmas',
    }, {
      label: '中秋节',
      value: 'midAutumnFestival',
    }, {
      label: '感恩节',
      value: 'thanksgiving',
    }, {
      label: '父亲节',
      value: 'father',
    }, {
      label: '教师节',
      value: 'teacher',
    }];
    this.branch = [{
      label: '9枝',
      value: '9',
    }, {
      label: '11枝',
      value: '11',
    }, {
      label: '12枝',
      value: '12',
    }, {
      label: '13枝',
      value: '13',
    }, {
      label: '16枝',
      value: '16',
    }, {
      label: '19枝',
      value: '19',
    }, {
      label: '21枝',
      value: '21',
    }, {
      label: '29枝',
      value: '29',
    }, {
      label: '33枝',
      value: '33',
    }, {
      label: '36枝',
      value: '36',
    }, {
      label: '66枝',
      value: '66',
    }, {
      label: '99枝',
      value: '99',
    }, {
      label: '99以上',
      value: '99+',
    }];
    this.kind = [{
      label: '手捧花',
      value: 'hand',
    }, {
      label: '礼盒鲜花',
      value: 'gift',
    }, {
      label: '绿植发财树',
      value: 'tree',
    }, {
      label: '开业花篮',
      value: 'basket',
    }, {
      label: '巧克力花束',
      value: 'chocolate',
    }, {
      label: '桌花',
      value: 'table',
    }, {
      label: '卡通花束',
      value: 'cartoon',
    }, {
      label: '组合鲜花',
      value: 'combination',
    }, {
      label: '韩式鲜花',
      value: 'korean',
    }, {
      label: '果篮',
      value: 'fruit',
    }];
    this.color = [{
      label: '红色',
      value: 'red',
    }, {
      label: '粉色',
      value: 'pink',
    }, {
      label: '紫色',
      value: 'purple',
    }, {
      label: '黄色',
      value: 'yellow',
    }, {
      label: '白色',
      value: 'white',
    }, {
      label: '蓝色',
      value: 'blue',
    }, {
      label: '香槟色',
      value: 'champagne',
    }, {
      label: '七彩',
      value: 'colorful',
    }, {
      label: '混色',
      value: 'mixed',
    }];
    this.position = [{
      label: '正在热卖',
      value: 'hotSale',
    }, {
      label: '1F 玫瑰花',
      value: 'firstFloor',
    }, {
      label: '2F 新品上市',
      value: 'secondFloor',
    }, {
      label: '3F 礼盒鲜花',
      value: 'thirdFloor',
    }, {
      label: '4F 花篮绿植',
      value: 'forthFloor',
    }, {
      label: '天天特价',
      value: 'dailySale',
    }];
    this.status = [{
      label: '待付款',
      value: 0,
    }, {
      label: '已付款',
      value: 1,
    }, {
      label: '待发货',
      value: 2,
    }, {
      label: '待收货',
      value: 3,
    }, {
      label: '已收货',
      value: 4,
    }];
    this.type = [{
      label: '资讯',
      value: 'news',
    }, {
      label: '花语',
      value: 'flower',
    }, {
      label: '公告',
      value: 'board',
    }];
  }
  static mapLabelToValue(label) {
    let result = null;
    this.usage.map((item, index) => {
      if (item.label === label) {
        result = item.value;
      }
      return true;
    });
    this.material.map((item, index) => {
      if (item.label === label) {
        result = item.value;
      }
      return true;
    });
    this.price.map((item, index) => {
      if (item.label === label) {
        result = item.value;
      }
      return true;
    });
    this.object.map((item, index) => {
      if (item.label === label) {
        result = item.value;
      }
      return true;
    });
    this.holiday.map((item, index) => {
      if (item.label === label) {
        result = item.value;
      }
      return true;
    });
    this.branch.map((item, index) => {
      if (item.label === label) {
        result = item.value;
      }
      return true;
    });
    this.kind.map((item, index) => {
      if (item.label === label) {
        result = item.value;
      }
      return true;
    });
    this.color.map((item, index) => {
      if (item.label === label) {
        result = item.value;
      }
      return true;
    });
    return result;
  }
  static mapValueToLabel(value) {
    let result = null;
    this.usage.map((item, index) => {
      if (item.value === value) {
        result = item.label;
      }
      return true;
    });
    this.material.map((item, index) => {
      if (item.value === value) {
        result = item.label;
      }
      return true;
    });
    this.price.map((item, index) => {
      if (item.value === value) {
        result = item.label;
      }
      return true;
    });
    this.object.map((item, index) => {
      if (item.value === value) {
        result = item.label;
      }
      return true;
    });
    this.holiday.map((item, index) => {
      if (item.value === value) {
        result = item.label;
      }
      return true;
    });
    this.branch.map((item, index) => {
      if (item.value === value) {
        result = item.label;
      }
      return true;
    });
    this.kind.map((item, index) => {
      if (item.value === value) {
        result = item.label;
      }
      return true;
    });
    this.color.map((item, index) => {
      if (item.value === value) {
        result = item.label;
      }
      return true;
    });
    return result;
  }
}

export default Settings;
