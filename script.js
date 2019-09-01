var twrod = ["　天地灵气复苏，一个前所未有的神话时代扑面而来！\n" +
                "　　一个少年在灵气复苏的前夜重生！\n" +
                "　　我重生了，也变强了！\n" +
                "　　你们统统都别想跑！死亡如风，常伴汝身！",

            "　万界主教，传奇一生。",
            "简介： 我在黄泉有座房，家中有田又有粮。"];

var typys= ["东方玄幻",
            "篮球运动",
            "探险生存"];

var links= ["https://book.qidian.com/info/1015711046",
            "https://book.qidian.com/info/1013331592",
            "https://book.qidian.com/info/1015971704"];

var wrote= ["傅啸尘",
    "远古莱德",
    "过水看娇"];

var nums= ["8.5",
    "7.0",
    "7.0"];
var booknames =  ["这个地球有点凶",
                    "NBA万界主教",
                    "我在黄泉有座房 "];

var pics= ["https://bookcover.yuewen.com/qdbimg/349573/1013331592/180",
    "https://bookcover.yuewen.com/qdbimg/349573/1015711046/180",
    "https://bookcover.yuewen.com/qdbimg/349573/1015971704/180" ];

var coast = 0;

function sreach() {
    var text =  document.getElementById("input_style").value;
    var tise = text;
    if (tise=="admin_201"){
        document.getElementById("manes").style.display = "block";
    }
    if (tise.value!="" || tise.value!="admin_201"){
        var str = tise.value;
        titles = tise.value;
        document.getElementById("center").style.display ="none";
        document.getElementById("Book_space").style.display ="none";
       document.getElementById('top_ster').style.display = "none";
       document.getElementById("buttom").style.display = "none";
       document.getElementById("reply_bote").style.display ="none";
        document.getElementById("new_iarame").style.display =  "block";
        changetitle(text);
    }

}
function changetitle(text) {

    document.title = "搜索_\""+text+"\"_源起小说";
    var  str = document.getElementById("guanjianzi");
    str.innerText= "“"+text+"”";
    var url = "https://www.mianfeixiaoshuoyueduwang.com/index.php?c=book&a=search&keywords="+text;
    document.getElementById("ifarme_url").setAttribute('src',url);
}
var piclink = [ "src/img/Phontos/81801.jpg",
                "src/img/Phontos/81802.jpg",
                "src/img/Phontos/81803.jpg",
                "src/img/Phontos/81804.jpg"];
 /*封面推荐图片*/
var urlink = [ "https://book.qidian.com/info/1014952645",
                "https://book.qidian.com/info/1013847302",
                "https://book.qidian.com/info/1014152796",
                "https://book.qidian.com/info/1013611012"];
/*封面推荐地址*/
var cout = 0;
setInterval( function changge() {
    if (cout==0){
        document.getElementById("t4").style.background = '#ea574a';
    }
/*修改次推荐位*/
    if (coast==3){
        coast = 0;
    }else{
        document.getElementById("middle_left_pic_link").href = links[coast];
        document.getElementById("stre").innerText =  "《"+booknames[coast]+"》";

       var ket  = document.getElementById("middle_left_pic");
       ket.src = pics[coast];

        document.getElementById("booktypes").innerText  = nums[coast];
        document.getElementById("booknumber").innerText  = typys[coast];
        document.getElementById('writer').innerText  = wrote[coast]+"_著";
        document.getElementById("all_tys").innerText = twrod[coast];
        coast++;
    }
    var uls = document.getElementById("pic_side");
    var lpc  = document.getElementById("url_pic");
    uls.src = piclink[cout];
    lpc.href = urlink[cout];
    var srd = "t"+(cout+1).toString();
    document.getElementById(srd).style.background = '#4e4b4b';
    cout++;
    eartes(cout)
    if (cout==piclink.length){cout = 0;}


},2400);
function eartes(scout) {
    if (cout-1<=0){
    }else{
        var srds = "t"+(scout-1).toString();
        document.getElementById(srds).style.background = "#ea574a";
    }

}
function chick(nsa) {
    var uls = document.getElementById("pic_side");
    var lpc  = document.getElementById("url_pic");
    var colers = "t" + nsa;
    document.getElementById(colers).style.background = '#4e4b4b';
    document.getElementById(colers).style.background = '#ea574a';
    uls.src = piclink[nsa-1];
    lpc.href = urlink[nsa-1];
}
function send() {
   var a= document.getElementById('send_emali').value;
   var b = document.getElementById("send_maesge").value;
   var c = document.getElementById("textarea_input").value;
    if (a!=""&&b!=""&&c!=""){
        alert("提交成功")
        window.location.replace("index.html")
    }else{
        alert("格式错误，请重新填写！")
    }
}
















































