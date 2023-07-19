/* eslint-disable*/

const subappPageA = "pages/index/index"; 
const subappPageb = 'pages/index2/index'; 


const config = {
  event : {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    'app:componentDidShow' : (arg) => {
      console.log('subapp 启动');
      console.log('持续检测用户当前订单是否偏离导航，触发安全机制。');
    },
    'app:componentDidHide' : (arg) => {
      console.log('subapp 启动');
      console.log('推入后台暂停检测');
    },
  },
};

const subPackages = [
  {
    root : 'doraSubappExample',
    name : 'doraSubappExample',
    pages : [
      subappPageA, 
    ],
  },
];

const AppPHHbirdWechatMP = {
  ...config,
  subPackages : subPackages,
};

const AppPHHbirdAlipayMP = {
  ...config,
  subPackages : subPackages
};

const AppPHHbirdBaiduMP = {
  ...config,
  subPackages : subPackages
};

const AppPHHbirdH5 = {
  ...config,
  subPackages : subPackages //放入子包
};

if (process.env.APPNAME === 'myBaiduApp') {
  module.exports = AppPHHbirdBaiduMP;
} else if (process.env.APPNAME === 'myWechatApp') {
  module.exports = AppPHHbirdWechatMP;
} else if (process.env.APPNAME === 'myAlipayApp') {
  module.exports = AppPHHbirdAlipayMP;
} else if (process.env.APPNAME === 'myH5App') {
  module.exports = AppPHHbirdH5;
} else {
  module.exports = {};
}
 