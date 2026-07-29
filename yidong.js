document.write(`
<div class="ad">
    <h2 class="ad-ti">超级精品联盟</h2>

    <li><a class="myButton" href="https://hanxiu.aa545.club" rel="nofollow" target="_blank"><img src="/tu2/han.webp" class="nav-icon">➦</a></li>
    <li><a class="myButton" href="https://1.shu10.top" rel="nofollow" target="_blank"><img src="/tu2/lo.webp" class="nav-icon">➦</a></li>
    <li><a class="myButton" href="https://haiv1.aa545.club" rel="nofollow" target="_blank"><img src="/tu2/hai.webp" class="nav-icon">➦</a></li>
    <li><a class="myButton" href="https://91p.aa545.club" rel="nofollow" target="_blank"><img src="/tu2/19.webp" class="nav-icon">➦</a></li>
    <li><a class="myButton" href="http://i71i.com/a1fu" rel="nofollow" target="_blank"><img src="/tu2/jie.webp" class="nav-icon">➦</a></li>
    <li><a class="myButton" href="http://i71i.com/a1fe" rel="nofollow" target="_blank"><img src="/tu2/jie.webp" class="nav-icon">➦</a></li>

</div>
<style>
    .ad{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10000;
        background:#fff;
        overflow:hidden;
        clear:both;
        border-radius: 6px;
        margin: 0 0 10px 0;
        text-align: center;
        padding: 10px;
    }
    .ad-ti {
        font-size: 24px;
        margin: 5px 0 10px 0;
        color: #333;
        background-color: #FFE4E1;
        padding: 6px;
        border-radius: 60px;
    }
    .ad li{
        width:100%;
        list-style:none;
        margin-bottom: 5px;
    }

    /* ✅ 关键调整：按钮固定高度，图片居中显示 */
    .ad a.myButton{
        display: flex;
        align-items: center;
        justify-content: center; /* 水平垂直居中 */
        width:80vw;
        margin:auto;
        height: 55px;          /* 固定按钮高度 */
        color:#fff;
        background:#01AAED;
        font-size:3vw;
        text-decoration: none;
        border-radius:3px;
        padding: 0 20px;
        transition: background-color .3s;
        box-sizing: border-box;
        overflow: hidden;      /* 防止内部内容撑开 */
    }

    /* ✅ 图片居中显示，不增加按钮大小 */
    .nav-icon {
        height: 80%;            /* 占按钮高度 80%（已足够大） */
        max-height: 30px;       /* 最大不超过30px */
        width: auto;            /* 宽度等比缩放 */
        flex-shrink: 0;
        /* 移除 margin-right，因为现在只有图片没有文字 */
    }

    .ad a.myButton:hover {
        background-color: #FFE4E1;
        color: #333;
    }

    #fullScreenImage {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        height: 100%;
        object-fit: cover;
        z-index: 9999;
        background-color: rgba(192,192,192,1.9);
    }

    /* 手机端适配 */
    @media(max-width:600px) {
        .ad a.myButton {
            height: 48px;      /* 手机端按钮高度固定 */
            width:80vw;
            font-size: 3.6vw;
        }
        .nav-icon {
            height: 75%;
            max-height: 38px;
        }
        .ad-ti {
            font-size: 4.5vw;
        }
    }
</style>
`);

var img = document.createElement("img");
img.id = "fullScreenImage";
document.body.appendChild(img);