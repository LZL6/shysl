function getTop(clsName) {
    var obj = document.getElementsByClassName(clsName)[0];
    return obj.getBoundingClientRect().top;
}

function getDom(clsName) {
    var obj = document.getElementsByClassName(clsName)[0];
    return obj;
}


window.addEventListener('scroll', function () {
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;

    /*第二页动画的触发*/
    if (getTop('text1') < 900) {
        getDom('text1').classList.add('animated');
        getDom('text1').classList.add('xuanzhuan');

    }
    if (getTop('text1') < 900) {
        getDom('text3').classList.add('animated');
        getDom('text3').classList.add('xuanzhuan');

    }
    if (getTop('text1') < 900) {
        getDom('text2').classList.add('animated1');
        getDom('text2').classList.add('xuanzhuan1');

    }
    if (getTop('text1') < 900) {
        getDom('text4').classList.add('animated1');
        getDom('text4').classList.add('xuanzhuan1');

    }
    if (getTop('content_big') < 900) {
        getDom('content2_text1').classList.add('animated2');
        getDom('content2_text1').classList.add('xuanzhuan2');

    }
    if (getTop('content_big') < 900) {
        getDom('content2_text2').classList.add('animated2');
        getDom('content2_text2').classList.add('xuanzhuan2');

    }
    if (getTop('content_big') < 900) {
        getDom('content2_text3').classList.add('animated2');
        getDom('content2_text3').classList.add('xuanzhuan2');

    }
    if (getTop('content_big') < 900) {
        getDom('content2_text4').classList.add('animated2');
        getDom('content2_text4').classList.add('xuanzhuan2');

    }
    if (getTop('content3') < 800) {
        getDom('content3_text1').classList.add('animated3');
        getDom('content3_text1').classList.add('xuanzhuan');

    }
    if (getTop('content3') < 800) {
        getDom('content3_text3').classList.add('animated4');
        getDom('content3_text3').classList.add('xuanzhuan');

    }
    if (getTop('content3') < 800) {
        getDom('content3_text2').classList.add('animated5');
        getDom('content3_text2').classList.add('xuanzhuan');

    }
    if (getTop('content4') < 900) {
        getDom('content4_text1').classList.add('animated6');
        getDom('content4_text1').classList.add('xuanzhuan6');

    }
    if (getTop('content4') < 900) {
        getDom('content4_text2').classList.add('animated6');
        getDom('content4_text2').classList.add('xuanzhuan7');

    }
})