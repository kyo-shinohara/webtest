/*更新しないのに最新っぽく見せてる奴*/
var element = document.getElementById("Dammyright");
tyr=new Date().getFullYear()
nn.innerHTML='<p>'+tyr+'年 made by Bpptstrap4.5</p>';

/*IE警告*/
var IEMessage = document.getElementById("ie-message");
var userAgent = window.navigator.userAgent.toLowerCase();
if(userAgent.indexOf('msie') != -1 ||
  userAgent.indexOf('trident') != -1) {
    IEMessage.style.display = "block";
}else {}