const url = 'https://u-dang-tang-zootest.netlify.app';

function setShare(){
    var resultImg = document.querySelector('#resultImg');
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = '얼렁뚱땅 동물원 테스트';
    const shareDes = '나의 얼렁뚱땅 동물은 ' + infoList[resultAlt].name; + '';
    const shareImage = url + 'img/share-' + resultAlt + '.png';
    const shareURL = url + 'page/result-' + resultAlt + '.html';

    Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
        title: shareTitle,
        description: shareDes,
        imageUrl: shareImage,
        link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL
        },
    },
    buttons: [  
        {
        title: '나도 결과 보러가기',
        link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL
        },

        },
    ]
    });
}