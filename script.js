

const getData = () => {
    console.log('getData()');
};

const scrollToEndPage = () => {
    let d = document.documentElement;
    let scrollHeight = d.scrollHeight;ļ
    let scrollTop = d.scrollTop;
    let clientHeight = d.clientHeight;
    let sumScrollTopClientHeight = scrollTop + clientHeight;
    console.log(clientHeight);
    console.log(scrollTop);
    console.log(scrollHeight);

    console.log(sumScrollTopClientHeight);

    getData();
};

window.addEventListener('scroll', scrollToEndPage);
