// 配置文件
module.exports = {
    promptTypeList: [{
        type: 'list',
        message: '请选择拉取的模板类型',
        name: 'type',
        choices: [{
            name: 'mobile',
            value: {
                url: '',
                gitName: 'vue-web-template',
                val: '移动端模板'
            },
            name: 'pc',
            value: {
                url: 'https://github.com/littleTreeme/vue-web-template.git',
                gitName: 'vue-web-template',
                val: 'PC端模版'
            }
        }]
    }]
}