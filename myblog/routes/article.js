var express = require('express');
var router = express.Router();

router.get('/add', function(req, res) {
    res.render('add-Article',{

    });
});

router.get('/view', function(req, res) {
    res.render('view-Article',{
        title:'從 Node.js 分裂出 Io.js 事件看開源軟體誰做主' ,
        article:'Node.js 作為伺服器程式語言的後起之秀，常用來構建和運行 Web 應用，近日卻爆出其社區出現分裂。由於對官方運營商 Joyent 公司在 Node.js 管理上的長期不滿，多位核心開發者另立門戶，創建了分支 Io.js。從 GitHub 得知，Io.js 的第一個版本（1.0.0 alpha1 版）將於 2015 年 1 月 13 日發布。\n' +
        '\n' +
        'Node.js 開源社區組織者 Mikeal Rogers 也是「另立門戶」中的一員，他說：「我們不想被另外一家公司任命的管理人員牽著鼻子走，而是想讓 Node.js 的貢獻者擁有更多的控制權，並尋求更多的共識。」\n' +
        '\n' +
        'Io.js 與 Node.js 的分離，再一次凸顯出開源項目贊助商與其開發、維護人員及公司之間的矛盾。之前也有類似的情形，CoreOS 與 Docker 分家繼而推出自己的容器引擎 Rocket，也是因為 Docker 的部分社區成員認為母公司的管理偏離了原來的方向，從而導致一個新的競爭對手產生。\n' +
        '\n' +
        '一般情況下，商業公司通過免費提供開源軟體，鼓勵用戶測試、改進原始碼，可以獲取巨額利潤。然而，這樣做的結果是，很難平衡商業公司與外部開發者、 使用者間不同的需求。雲計算公司 Joyent 是 Node 程式語言的主要用戶，在滿足其自身需求的前提下，還通過 Node.js 的廣泛傳播和推廣獲利。這樣便陷入了一個怪圈，Joyent 不可能讓每個用戶都滿意，於是便上演了前文提到的分裂。\n' +
        '\n'
    });
});

module.exports = router ;