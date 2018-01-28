/**
 * 获取迅雷下载页面链接，适用于下载电视剧，或链接较多的情况。
 * 执行后，将结果复制到迅雷下载即可。
 * @anthor Yangzx
 */
function getThunderLinks() {
    const thunderLinks = document.querySelectorAll("anchor > a");
    const result = [];
    for (let i = 0; i < thunderLinks.length; i++) {
        result.push(thunderLinks[i].innerHTML);
    }
    console.log("----------------------------start-------------------------- \n" 
        + result.join('\n') 
        + "\n -----------------------------end----------------------------- \n");
}

getThunderLinks();
