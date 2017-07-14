const SMS = require('../lib')

const sms = new SMS({
  AccessKeyId: '123',
  AccessKeySecret: '123'
})

sms.send({
  Format: 'JSON',
  TemplateParam: '{"code":"1234"}',
  PhoneNumbers: '13516534108',
  SignName: '看看传播',
  TemplateCode: 'SMS_42353328',
  RegionId: "cn-beijing"
}).then((result) => {
  console.log(result)
}).catch(err => {
  console.log(err)
})
