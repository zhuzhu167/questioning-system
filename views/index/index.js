// 数据模型
// 利用 ajax 获取数据到此处存放，之后到视图层更新页面数据
// 此处只管数据操作，执行完 return 数据，不要有其他视图操作，增加代码可读性
var url = ["../home/home.html ", "../appointment/appointment.html ", "../medicalAd/medicalAd.html ",
    "../registration/registration.html ", "../retail/retail.html ", "../report/report.html ",
    "../set/set.html ", "../charge/charge.html", "../medicine/medicine.html"
]

var urlData = {
    '首页': '../home/home.html',
    '预约管理': '../appointment/appointment.html',
    '挂号': '../medicalAd/medicalAd.html',
    '就诊': '../registration/registration.html',
    '药物零售': '../retail/retail.html',
    '报表管理': '../report/report.html',
    '设置': '../set/set.html',
    '药品管理': '../charge/charge.html',
    '收费发药': '../medicine/medicine.html',
}