// 加载先前安装的 puppeteer
const puppeteer = require('puppeteer')

async function getPic() {
    // 创建chrome实例
    const browser = await puppeteer.launch({ headless: false })
    // 打开一个新的选项卡
    const page = await browser.newPage()
    // 设置页面宽高
    page.setViewport({
        width: 1920,
        height: 2000
    })
    await page.goto('https://baidu.com')
    // 在当前目录下生成nd.png截图
    await page.screenshot({ path: 'nd.png' })
    // 最后，关闭浏览器
    await browser.close()
}

getPic()