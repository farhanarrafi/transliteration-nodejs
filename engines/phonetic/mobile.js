function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

function getParam(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&#]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results === null)
        return "";
    else
        return results[1];
}

function initialize_page() {
    if (getCookie("blocked") == "1") {
        document.getElementById("auto_info").innerHTML = "অ্যাপ্লিকেশানটির অপব্যবহারের কারণে আপনাকে সাময়িকভাবে নিষিদ্ধ করা হয়েছে।";
        document.getElementById("auto_info").style.color = "orange";
    } else if (get_fb_object()) {
        document.getElementById("auto_info").innerHTML = "Facebook commenting active!";
        document.getElementById("auto_info").style.color = "grey";
        var frm = document.getElementById('outputForm') || null;
        if (frm) {
            if (getParam('code')) {
                frm.action = '/fb?code=' + getParam('code');
            }
            var fb_object = get_fb_object();
            if (fb_object) {
                var input = document.createElement('input');
                input.type = 'hidden';
                input.name = 'object_id';
                input.value = fb_object;
                frm.appendChild(input);
            }
        }
    } else if (getCookie("correction") != "1") {
        document.getElementById("auto_info").innerHTML = "Auto correction disabled!";
        document.getElementById("auto_info").style.color = "orange";
    } else {
        document.getElementById("auto_info").innerHTML = "Auto correction enabled!";
        document.getElementById("auto_info").style.color = "green";
    }
    document.getElementById("action").innerHTML = '<input type="button" value="Convert" onclick="convert()"/> <input type="button" onclick="reset_all()" value="Clear">';
    if (getParam("text").length > 0) {
        document.getElementById("text").value = decodeURIComponent((getParam("text") + '').replace(/\+/g, '%20'));
        convert();
    }
}

function post_action(where) {
    if (where == 'twitter')
        window.location.href = "https://twitter.com/intent/tweet?text=" + urlencode(document.getElementById("output").value);
    else if (where == 'google')
        window.location.href = "http://www.google.com/m?q=" + urlencode(document.getElementById("output").value);
    else if (where == 'yahoo')
        window.location.href = "http://search.yahoo.com/search?p=" + urlencode(document.getElementById("output").value);
    else if (where == 'text2image') {
        var frm = document.getElementById('outputForm') || null;
        if (frm) {
            frm.action = '/text2image.html';
            document.getElementById('output').name = 'text';
            frm.submit();
        }
    }
}
eval(function (p, a, c, k, e, d) {
    e = function (c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) {
            d[e(c)] = k[c] || e(c)
        }
        k = [function (e) {
            return d[e]
        }];
        e = function () {
            return '\\w+'
        };
        c = 1
    };
    while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
        }
    }
    return p
}('1P 33(2N){10 12=6e(2N);10 1p=14.15("36");1p.34.5b(1p);11(12.1a!=23){10 $17=$1m="";10 $59="";10 $1V="";10 $1v=0;1A(x 28 12.1f){11(5e 12.1f[x]=="5i"){11($1m.1n>0){$17=$17+"<1c 18=\'26\' 1K=\'f"+$1v+"\' 16=\'"+1L.1S($1m)+"\'/>"+1H($1m).19("\\n","<1N/>");$1m="";$1v++}$1G=1t("5h");11(2M($1G))$1G=0;11($1G==1){$17=$17+"<2p 1K=\'f"+$1v+"\'>"}1h{$1V=($1V!=\'2x\')?\'2x\':\'5g\';$17=$17+"<3j 1b=\'"+$1V+"\'>"}11($1G==1){$1z="5f";1A(y 28 12.1f[x])11(12.1f[x][y]!=1O){$17=$17+"<2o 16=\'"+1L.1S(12.1f[x][y])+"\' "+$1z+"/>"+12.1f[x][y].19("\\t","")+"</2o>";$1z=""}$17=$17+"</2p>"}1h{$1z="2P";1A(y 28 12.1f[x])11(12.1f[x][y]!=1O){$17+="<3l><1c 18=\'50\' 1K=\'f"+$1v+"\' 16=\'"+1L.1S(12.1f[x][y])+"\' "+$1z+"/>"+12.1f[x][y].19("\\t","")+"</3l>";$1z=""}$17+="</3j>"}$1v++}1h 11(12.1f[x].1n>0){$1m+=12.1f[x]}}11($1m.1n)$17+="<1c 18=\'26\' 1K=\'f"+$1v+"\' 16=\'"+1L.1S($1m)+"\'/>"+1H($1m);$17+="<1N><1c 18=\\"1k\\" 1g=\\"29(5z.5m)\\" 16=\\"5l\\"/>";14.15("1a").16=12.1a;14.15("2n").1e="<13 1b=\'1d\'>2r 2s:</13><1c 18=\'1k\' 1g=\'2w()\' 16=\'2v\'/> <1c 18=\'1k\' 1g=\'1r(\\"1W\\")\' 16=\'1W\'/><13 1b=\'1d\'>2l:</13><1c 18=\'1k\' 1g=\'1r(\\"1Y\\")\' 16=\'1Y\'/> <1c 18=\'1k\' 1g=\'1r(\\"1X\\")\' 16=\'1X\'/><13 1b=\'1d\'>2j:</13><1c 18=\'1k\' 1g=\'1r(\\"2c\\")\' 16=\'2b\'/>";14.15("1q").1e="<13 1b=\'1d\'>1T:</13>"+$17.19("\\n","<1N/>");14.15("5t").1e="5r 5s: "+12.5u+" 5q";11(12.1s!=2t&&12.1s!=23&&12.1s!=1O){11(12.1s.1n>8&&12.1s.1U(0,8)=="5p:"){12.1s=12.1s.1U(8);3c(\'1R\',\'1\',3d.3g(3f 3e().3i()/38)+37,\'/1F\',\'.1C.1o\');11(1E.1Q.1y(\'1C.1o\')==-1)3c(\'1R\',\'1\',3d.3g(3f 3e().3i()/38)+37,\'/1F\')}14.15("1I").1e=12.1s}11(1t("1w")!="0"&&12.1a!=1O&&12.1a!=23)14.15("1w").1e="<13 1b=\'1d\'>20:</13>"+25(1H(12.1a))}}1P 1F(3h){11(1t("1R")=="1"){14.15("1I").1e="অ্যাপ্লিকেশানটির অপব্যবহারের কারণে আপনাকে সাময়িকভাবে নিষিদ্ধ করা হয়েছে।";14.15("1I").2d.24="2g"}1h 11(14.15("Q").16.1n){11(1t("1q")=="1"){10 1p=14.5n(\'35\');1p.18=\'Q/5o\';1p.5v=2O;1p.5w=(\'2Z\'==14.1E.5D?\'2Z://2H.27.1o\':\'5E://2q.1C.1o\')+\'/5F/1F.2X?Q=\'+5G(14.15("Q").16)+\'&5C=33\';1p.5B=\'36\';10 s=14.5x(\'35\')[0];s.34.5y(1p,s);11(3h==1)14.15("1q").1e="<13 1b=\'1d\'>1T:</13><3m 24=\'5A\'>5k 5j 53 54 55 1q 3n!</3m>";1h 14.15("1q").1e="<13 1b=\'1d\'>1T:</13><a 1g=\'1F(1);\'>56 1A 1q 3n</a>"}1h 14.15("1q").1e="<13 1b=\'1d\'>1T:</13><a 52=\'/51.2X\'>4X 4W 4Y 4Z 2q 1q!</a>";10 1a="";10 21=".b";10 1l=(14.15("Q").16).57(/\\B(\\.[58])(\\s?)/g);1A(10 i=0;i<1l.1n;i=i+3){11(1l[i-1]==""){1M=1l[i].1U(0,1l[i].1y(\' \'));1x=1l[i].1U(1l[i].1y(\' \'))}1h{1M=1l[i];1x="";21=1l[i-2]}11(1l[i-2]==".e")1a+=1M;1h 1a+=22(1M);11(1x.1n>0&&21==".e")1a+=1x;1h 11(1x.1n>0)1a+=22(1x)}14.15("1a").16=1a;11(1t("1w")!="0")14.15("1w").1e="<13 1b=\'1d\'>20:</13>"+25(1H(1a));14.15("2n").1e="<13 1b=\'1d\'>2r 2s:</13><1c 18=\'1k\' 1g=\'2w()\' 16=\'2v\'/> <1c 18=\'1k\' 1g=\'1r(\\"1W\\")\' 16=\'1W\'/><13 1b=\'1d\'>2l:</13><1c 18=\'1k\' 1g=\'1r(\\"1Y\\")\' 16=\'1Y\'/> <1c 18=\'1k\' 1g=\'1r(\\"1X\\")\' 16=\'1X\'/><13 1b=\'1d\'>2j:</13><1c 18=\'1k\' 1g=\'1r(\\"2c\\")\' 16=\'2b\'/>"}}1P 29(f){11(1t("1R")=="1"){14.15("1I").1e="অ্যাপ্লিকেশানটির অপব্যবহারের কারণে আপনাকে সাময়িকভাবে নিষিদ্ধ করা হয়েছে।";14.15("1I").2d.24="2g";1B 2t}10 $1Z="";y=f.5d;1A(i=0;i<y.1n;i++){11(y[i].1K.5a(0)==\'f\'&&(y[i].18=="26"||y[i].2P===2O||!2M(y[i].5H)))$1Z+=1L.5I(y[i].16).19("\\t","")}14.15("1a").16=($1Z);11(1t("1w")!=="2")14.15("1w").1e="<13 1b=\'1d\'>20:</13>"+25(1H(14.15("1a").16))}10 $2U=[\'ক্ষ্ম্য\',\'ঙ্ক্ষ\',\'ঙ্ঘ্য\',\'ঙ্ঘ্র\',\'ষ্ঠ্য\'];10 $2K=[\'ক্ষ্ণ\',\'ক্ষ্ব\',\'ক্ষ্ম\',\'ক্ষ্য\',\'গ্ধ্য\',\'গ্ধ্র\',\'ঙ্‌ক্ত\',\'ঙ্ক্য\',\'ঙ্খ\',\'ঙ্গ্য\',\'ঙ্ঘ\',\'ণ্ঠ্য\',\'ন্ত্র্য\',\'ন্থ্র\',\'ন্ধ্য\',\'ন্ধ্র\',\'র্ঘ্য\',\'র্থ্য\',\'র্ষ্য\',\'র্ধ্ব\',\'র্ঢ্য\',\'ষ্ক্র\',\'ষ্ট্য\',\'ষ্ট্র\',\'ষ্ঠ\',\'ষ্প্র\',\'স্থ্য\'];10 $2C=[\'ক্ট্র\',\'ক্ত্র\',\'ক্ষ\',\'ক্ষ\',\'খ্য\',\'খ্র\',\'গ্ধ\',\'গ্ন্য\',\'গ্র্য\',\'ঘ্ন\',\'ঘ্য\',\'ঘ্র\',\'ঙ্ক\',\'ঙ্গ\',\'ঙ্ম\',\'চ্ছ্ব\',\'চ্ছ্র\',\'জ্জ্ব\',\'জ্ঝ\',\'ঞ্ঝ\',\'ঢ্য\',\'ঢ্র\',\'ণ্ঠ\',\'ণ্ড্য\',\'ণ্ড্র\',\'ণ্ঢ\',\'ত্ত্ব\',\'ত্ত্য\',\'ত্থ\',\'ত্ম্য\',\'ত্র্য\',\'থ্ব\',\'থ্য\',\'থ্র\',\'দ্ঘ\',\'দ্দ্ব\',\'দ্ধ\',\'দ্ভ্র\',\'দ্র্য\',\'ধ্ন\',\'ধ্ব\',\'ধ্ম\',\'ধ্য\',\'ধ্র\',\'ন্ট্র\',\'ন্ঠ\',\'ন্ড্র\',\'ন্ত্ব\',\'ন্ত্য\',\'ন্ত্র\',\'ন্থ\',\'ন্দ্য\',\'ন্দ্ব\',\'ন্দ্র\',\'ন্ধ\',\'প্র্য\',\'ব্ধ\',\'ম্প্র\',\'ম্ব্র\',\'ম্ভ্র\',\'র্ক্য\',\'র্গ্য\',\'র্চ্য\',\'র্জ্য\',\'র্ণ্য\',\'র্ত্য\',\'র্ব্য\',\'র্ম্য\',\'র্শ্য\',\'র্হ্য\',\'র্খ\',\'র্গ্র\',\'র্ঘ\',\'র্ঝ\',\'র্ত্র\',\'র্থ\',\'র্দ্ব\',\'র্দ্র\',\'র্ধ\',\'র্শ্ব\',\'র্ষ\',\'ল্ক্য\',\'ষ্ক\',\'ষ্ট\',\'ষ্ণ\',\'ষ্প\',\'ষ্ফ\',\'ষ্ব\',\'ষ্ম\',\'ষ্য\',\'স্ক্র\',\'স্খ\',\'স্ট্য\',\'স্ট্র\',\'স্ত্ব\',\'স্ত্য\',\'স্ত্র\',\'স্থ\',\'স্প্র\',\'স্প্‌ল\'];10 $2z=[\'র্শ\',\'শ্চ\',\'শ্ছ\',\'শ্ন\',\'শ্ব\',\'শ্ম\',\'শ্য\',\'শ্র\',\'শ্ল\',\'ং\',\'ঙ\',\'ক্ক\',\'ক্ট\',\'ক্ত\',\'ক্ব\',\'ক্ম\',\'ক্য\',\'ক্র\',\'ক্ল\',\'ক্স\',\'গ্‌ণ\',\'গ্ন\',\'গ্ব\',\'গ্ম\',\'গ্য\',\'গ্র\',\'গ্ল\',\'চ্চ\',\'চ্ছ\',\'চ্ঞ\',\'চ্ব\',\'চ্য\',\'জ্জ\',\'জ্ঞ\',\'জ্ঞ\',\'জ্ব\',\'জ্য\',\'জ্র\',\'ঞ্চ\',\'ঞ্চ\',\'ঞ্ছ\',\'ঞ্ছ\',\'ঞ্জ\',\'ঞ্জ\',\'ট্ট\',\'ট্ব\',\'ট্ম\',\'ট্য\',\'ট্র\',\'ড্ড\',\'ড্ব\',\'ড্য\',\'ড্র\',\'ণ্ট\',\'ণ্ড\',\'ণ্ণ\',\'ণ্ব\',\'ণ্ম\',\'ণ্য\',\'ৎক\',\'ত্ত\',\'ত্ন\',\'ত্ব\',\'ত্ম\',\'ত্য\',\'ত্র\',\'ৎল\',\'ৎস\',\'দ্গ\',\'দ্দ\',\'দ্ব\',\'দ্ভ\',\'দ্ম\',\'দ্য\',\'দ্র\',\'ঙ্ক\',\'ন্ট\',\'ন্ড\',\'ন্ত\',\'ন্দ\',\'ন্ন\',\'ন্ব\',\'ন্ম\',\'ন্য\',\'প্ট\',\'প্ত\',\'প্ন\',\'প্প\',\'প্য\',\'প্র\',\'প্ল\',\'প্স\',\'ফ্য\',\'ফ্র\',\'ফ্ল\',\'ব্জ\',\'ব্দ\',\'ব্ব\',\'ব্ব\',\'ব্য\',\'ব্র\',\'ব্ল\',\'ভ্ব\',\'ভ্য\',\'ভ্র\',\'ম্ন\',\'ম্প\',\'ম্ফ\',\'ম্ব\',\'ম্ব\',\'ম্ভ\',\'ম্ম\',\'ম্য\',\'ম্র\',\'ম্ল\',\'য্য\',\'র্ক\',\'র্গ\',\'র্চ\',\'র্ছ\',\'র্জ\',\'র্ট\',\'র্ড\',\'র্ণ\',\'র্ত\',\'র্দ\',\'র্ন\',\'র্প\',\'র্ফ\',\'র্ব\',\'র্ভ\',\'র্ম\',\'র্য\',\'র‍্য\',\'র্ল\',\'র্স\',\'র্হ\',\'ল্ক\',\'ল্গ\',\'ল্ট\',\'ল্ড\',\'ল্প\',\'ল্ফ\',\'ল্ব\',\'ল্ভ\',\'ল্ম\',\'ল্য\',\'ল্ল\',\'স্ক\',\'স্ট\',\'স্ত\',\'স্ন\',\'স্প\',\'স্ফ\',\'স্ব\',\'স্ম\',\'স্য\',\'স্র\',\'স্ল\',\'হ্ণ\',\'হ্ন\',\'হ্ব\',\'হ্ম\',\'হ্য\',\'হ্র\',\'হ্ল\',\'ড়্গ\',\'ষ\'];10 $2V=[\'6f\',\'6g\',\'6h\',\'6d\',\'6c\'];10 $2L=[\'68\',\'69\',\'6a\',\'6b\',\'4V\',\'6i\',\'6j\',\'6q\',\'6r\',\'6s\',\'6t\',\'6p\',\'6o\',\'6k\',\'6l\',\'6m\',\'6n\',\'67\',\'66\',\'5Q\',\'5R\',\'5S\',\'5T\',\'5P\',\'5O\',\'5K\',\'5J\'];10 $2D=[\'5L\',\'5M\',\'5N\',\'5U\',\'5V\',\'62\',\'63\',\'64\',\'65\',\'61\',\'60\',\'5W\',\'5X\',\'2u\',\'5Y\',\'5Z\',\'6u\',\'4k\',\'3R\',\'3S\',\'3T\',\'3U\',\'3Q\',\'3P\',\'3L\',\'3K\',\'3M\',\'3N\',\'3O\',\'3V\',\'3W\',\'45\',\'46\',\'47\',\'43\',\'42\',\'3Y\',\'3X\',\'3Z\',\'40\',\'3J\',\'48\',\'3E\',\'3r\',\'3s\',\'3t\',\'3u\',\'3q\',\'3p\',\'3o\',\'3v\',\'3I\',\'3w\',\'3F\',\'3G\',\'3D\',\'3C\',\'3y\',\'3x\',\'3z\',\'3A\',\'3B\',\'41\',\'4U\',\'4S\',\'4T\',\'4P\',\'4M\',\'4N\',\'4x\',\'4w\',\'4i\',\'4v\',\'4r\',\'4q\',\'4o\',\'4f\',\'4Q\',\'4I\',\'4B\',\'4A\',\'4z\',\'4C\',\'4D\',\'4J\',\'4H\',\'4c\',\'4l\',\'4t\',\'4u\',\'4p\',\'4G\',\'4n\',\'4m\',\'4s\',\'4d\',\'1m\',\'4b\',\'4a\',\'4e\'];10 $2B=[\'4j\',\'4h\',\'4g\',\'4L\',\'4K\',\'4O\',\'4R\',\'4y\',\'49\',\'2m\',\'2W\',\'4F\',\'4E\',\'3H\',\'44\',\'5c\',\'6D\',\'8W\',\'8V\',\'2T\',\'8X\',\'8Y\',\'8Z\',\'8U\',\'8T\',\'8O\',\'8N\',\'8P\',\'8Q\',\'8S\',\'8R\',\'90\',\'91\',\'9a\',\'99\',\'9b\',\'9c\',\'9d\',\'98\',\'97\',\'93\',\'92\',\'94\',\'95\',\'6v\',\'96\',\'8M\',\'8L\',\'8s\',\'8r\',\'8t\',\'8u\',\'8v\',\'9f\',\'8p\',\'8k\',\'8j\',\'8l\',\'8m\',\'8o\',\'8n\',\'8w\',\'8x\',\'8H\',\'8G\',\'8I\',\'8J\',\'8K\',\'8F\',\'8E\',\'8z\',\'8y\',\'8A\',\'8B\',\'8D\',\'8C\',\'9e\',\'9S\',\'9P\',\'9O\',\'9K\',\'9V\',\'9L\',\'9M\',\'9N\',\'9U\',\'9X\',\'a2\',\'a4\',\'a3\',\'a1\',\'9Y\',\'9Z\',\'9W\',\'a0\',\'9T\',\'9I\',\'9p\',\'9o\',\'9q\',\'1N\',\'9r\',\'9s\',\'9n\',\'9J\',\'9m\',\'9h\',\'9g\',\'9i\',\'9j\',\'9l\',\'9k\',\'9t\',\'9u\',\'9E\',\'9D\',\'9z\',\'9A\',\'9y\',\'9x\',\'9v\',\'9w\',\'9B\',\'9C\',\'9H\',\'9G\',\'9F\',\'9Q\',\'9R\',\'8q\',\'8h\',\'76\',\'75\',\'77\',\'78\',\'79\',\'74\',\'73\',\'6Z\',\'6Y\',\'70\',\'71\',\'72\',\'7a\',\'7b\',\'7k\',\'7j\',\'7l\',\'7m\',\'7n\',\'7i\',\'7h\',\'7d\',\'7c\',\'7e\',\'7f\',\'7g\',\'6X\',\'6W\',\'6E\',\'8i\',\'6F\',\'6G\',\'6H\',\'6C\',\'6B\',\'6x\',\'6w\'];10 $2y=[\'6y\',\'6z\',\'2S\',\'2R\',\'6A\',\'6I\',\'x\',\'q\',\'6J\',\'6S\'];10 $2Q=[\'C\',\'C\',\'C\',\'C\',\'v\',\'f\',\'2T\',\'k\',\'S\',\'X\'];10 $2J=[\'ঋ\',\'ঐ\',\'ঔ\',\'খ\',\'ঘ\',\'ঙ\',\'চ\',\'ছ\',\'ঝ\',\'ঠ\',\'ঢ\',\'থ\',\'ধ\',\'ঢ়\',\'ৎ\',\'ঁ\',\'্\'];10 $2G=[\'অ\',\'আ\',\'ই\',\'ঈ\',\'উ\',\'ঊ\',\'এ\',\'ও\',\'ক\',\'গ\',\'চ\',\'ছ\',\'জ\',\'ঞ\',\'ট\',\'ড\',\'ণ\',\'ত\',\'দ\',\'ন\',\'প\',\'ফ\',\'ব\',\'ভ\',\'ম\',\'য\',\'র\',\'ল\',\'শ\',\'স\',\'হ\',\'ড়\',\'য়\',\'ঃ\',\'্‌\',\'উ\',\'\'];10 $2F=[\'X\',\'2f\',\'2k\',\'6R\',\'6T\',\'2W\',\'2S\',\'2R\',\'6U\',\'6V\',\'6Q\',\'6P\',\'6L\',\'6K\',\'.t\',\'.n\',\'.`\'];10 $2I=[\'o\',\'a\',\'i\',\'I\',\'u\',\'U\',\'e\',\'O\',\'k\',\'g\',\'c\',\'C\',\'j\',\'Y\',\'T\',\'D\',\'N\',\'t\',\'d\',\'n\',\'p\',\'f\',\'b\',\'v\',\'m\',\'z\',\'r\',\'l\',\'S\',\'s\',\'h\',\'R\',\'y\',\':\',\'`2i\',\'w\',\'2i\'];10 $2E=["া","ি","ী","ু","ূ","ৃ","ে","ৈ","ো","ৌ",""];10 $2A=["`a","`i","`I","`u","`U","`X","`e","`2f","`O","`2k","`o"];10 $2e=[\'6M\',\'6N\',\'6O\',\'7o\',\'7p\',\'80\',\'7Z\',\'81\',\'82\',\'83\',\'7Y\',\'7X\',\'7T\',\'7S\',\'7U\',\'7V\',\'7W\',\'84\',\'85\',\'8d\',\'8e\',\'8f\',\'8g\',\'8c\',\'8b\'];10 $2Y=[\'a\',\'87\',\'86\',\'I\',\'88\',\'89\',\'8a\',\'7R\',\'7Q\',\'7y\',\'7x\',\'7z\',\'7A\',\'7B\',\'7w\',\'7v\',\'7r\',\'7q\',\'7s\',\'7t\',\'7u\',\'7C\',\'I\',\'O\',\'U\'];10 $2h=[\'a\',\'e\',\'h\',\'k\',\'g\',\'j\',\'p\',\'f\',\'b\',\'v\',\'m\',\'l\',\'x\',\'w\',\'z\'];10 $2a=[\'A\',\'E\',\'H\',\'K\',\'G\',\'J\',\'P\',\'F\',\'B\',\'V\',\'M\',\'L\',\'X\',\'W\',\'Z\'];10 3k=[0,1,2,3,4,5,6,7,8,9,\'$\'];10 32=["০","১","২","৩","৪","৫","৬","৭","৮","৯","৳"];1P 22($Q){11($Q=="==7D==")1B"3b 3a";1h 11($Q=="==7M==")1B"39 31";1h 11($Q=="==7L==")1B"30.1C.1o";11(1E.1Q.1y(\'1C.1o\')==-1&&1E.1Q.1y(\'7N.27.1o\')==-1&&1E.1Q.1y(\'2H.27.1o\')==-1)1B"7O: 3b 3a\\7P: 39 31\\7K: 30.1C.1o";$Q=$Q.19(/(\\b)y/g,"$7J");$Q=$Q.19(/(\\b|\\.|a|e|i|o|u)7F/1D,"$7E");$Q=$Q.19(/([1J])w([^1J])/1D,"$1u$2");$Q=$Q.19(/\\7G/g,\'অ্যা\');$Q=$Q.19(/q/1D,\'k\');$Q=$Q.19(/([^1J])y([^1J]|$)/1D,"$1i$2");$Q=$Q.19(/2m([1J])/g,"2u$1");$Q=$Q.19(/\\.t/g,\'ৎ\');$Q=$Q.19(/\\.n/g,\'ঁ\');$Q=$Q.19(/([a-z])\\.([^\\.]|\\b|$)/1D,"$1।$2");$Q=1j($2e,$2Y,$Q);$Q=1j($2a,$2h,$Q);$Q=1j($2y,$2Q,$Q);$Q=$Q.19(/([7H])([7I])/1D,"$1`$2");$Q=1j($2V,$2U,$Q);$Q=1j($2L,$2K,$Q);$Q=1j($2D,$2C,$Q);$Q=1j($2B,$2z,$Q);$Q=1j($2A,$2E,$Q);$Q=1j($2F,$2J,$Q);$Q=1j($2I,$2G,$Q);$Q=1j(3k,32,$Q);1B $Q}', 62, 625, '||||||||||||||||||||||||||||||||||||||||||||||||||||text||||||||||var|if|all|div|document|getElementById|value|choice_str|type|replace|output|class|input|caption|innerHTML|choice|onclick|else||str_replace|button|splitted|str|length|com|remote|correction|post_action|info|getCookie||feedback|preview|str2|indexOf|check|for|return|banglatext|gi|location|convert|BANGLA_SUPPORTED|htmlspecialchars|auto_info|aeiou|name|base64|str1|br|null|function|hostname|blocked|encode|Corrections|substr|choice_toggle|twitter|yahoo|google|out|Preview|LastMode|classic_bangla|undefined|color|nl2br|hidden|appspot|in|correct|caps_insensitive|Text2Image|text2image|style|bn_ychar|oi|orange|insensitive|_|More|ou|Search|ng|post_status|option|select|auto|Update|Status|false|Ngg|facebook|post2fb|choice1|cnamefrom|bn2zukto|enkar|en2zukto|bn3zukto|en3zukto|bnkar|en2char|bn1char|banglatextphp|en1char|bn2char|bn4zukto|en4zukto|isNaN|data|true|checked|cnameto|Ch|ch|ks|bn5zukto|en5zukto|Ng|php|code_ychar|https|www|Text|bn_num|render|parentNode|script|server_response|3600|1000|Bangla|Islam|Jahedul|setcookie|Math|Date|new|floor|count|getTime|span|en_num|label|font|list|ntr|nty|ntw|dhr|nTr|nTh|nDr|nth|ndw|mwr|mpr|mvr|rky|rgy|bdh|pry|dhy|ndr|ndh|kt|ndy|dhw|NDh|NDr|ttw|tty|tth|NDy|NTh|jjh|Yjh|Dhy|Dhr|tmy|try|dvr|ddh|dry|dhn|rcy|ddw|dgh|kw|thw|thy|thr|dhm|Sl|spr|sth|Shf|sty|spl|rdw|SC|Sc|rgr|rS|jjw|Shw|sTr|sTy|rth|skr|rtr|rjh|stw|Shm|Shy|rgh|rkh|rhy|Sr|lky|rSh|rSw|Shk|ShT|kT|kk|skh|Shp|rdh|ShN|Sw|Sn|rmy|rSy|Sm|rwy|rdr|Sy|rNy|rty|rjy|gdhy|setting|Change|to|get|radio|settings|href|occured|while|loading|Click|split|bce|source|charAt|removeChild|km|elements|typeof|selected|choice2|bangla_supported|object|error|An|Correct|form|createElement|javascript|BLOCKED|sec|Processing|Time|elapsed_time|time_elapsed|async|src|getElementsByTagName|insertBefore|this|red|id|cb|protocol|http|ajax|encodeURIComponent|selectedIndex|decode|sthy|Shpr|kTr|ktr|kSh|ShTh|ShTr|rdhw|rDhy|Shkr|ShTy|kkh|khy|ghr|Ngk|Ngm|cCw|ghy|ghn|khr|gdh|gny|gry|rShy|rthy|kShN|kShw|kShm|kShy|ShThy|Ngghr|eval|kShmy|NgkSh|Ngghy|gdhr|Ngkt|nthr|ndhy|ndhr|rghy|ntry|NThy|Ngky|Ngkh|Nggy|Nggh|cCr|TT|Sh|Rg|chh|Chh|bh|hl|hr|ky|hN|hw|hm|hy|ph|sh|Rh|dh|aa|ae|ea|th|Dh|kh|rri|gh|jh|Th|sl|sr|lT|lg|lD|lp|lf|lk|rh|rz|rm|ry|rl|rs|lw|lv|sf|sp|sw|sm|sy|sn|st|ly|lm|ll|sk|sT|ee|eo|Oy|Oye|uya|uye|Uya|Oya|oye|Iye|Iya|Iyo|IyO|oya|Uye|author|1Oya|wa|baya|bcdfghjklmnpqrstvwyz|aeiouX_|1iy|nVisit|web|copyright|banglatextweb|Author|nCopyright|iyO|iyo|oa|IO|oe|Oa|Oe|Io|Ie|ie|ia|io|iO|Ia|Oi|ua|eya|aye|eyo|iya|iye|uu|oo|ue|Ua|Ue|ii|rv|hn|Nw|NN|Nm|Ny|tt|tk|ND|rb|DD|Tr|Dw|Dy|Dr|tn|tw|dv|dw|dm|dy|nk|dr|dd|dg|ty|tm|tr|tl|ts|Ty|Tm|gl|gr|cc|cC|cw|cY|gy|gm|kl|kr|gN|gn|gw|cy|jj|nC|YC|Yj|nj|Tw|nc|Yc|gg|jY|jw|jy|jr|nT|NT|mf|mp|mw|mb|mm|mv|mn|vy|bb|bw|by|bl|vw|my|mr|rj|rT|rC|rc|rk|rg|rD|rN|zy|ml|rn|rd|rt|bd|vr|nn|nm|ny|pT|nd|nt|rp|rf|nD|bj|pt|nw|fr|pn|ps|fy|fl|pl|pp|pr|py'.split('|'), 0, {}));

function reset_all(f) {
    var quote = getquote();
    document.getElementById("text").value = "";
    document.getElementById("output").value = quote;
    document.getElementById("preview").innerHTML = "<div class='caption'>Preview:</div>" + nl2br(htmlspecialchars(quote));
    document.getElementById("post_status").innerHTML = "<div class='caption'>Update Status:</div> <input type='button' onclick='post2fb()' value='facebook'/> <input type='button' onclick='post_action(\"twitter\")' value='twitter'/><div class='caption'>Search:</div><input type='button' onclick='post_action(\"google\")' value='google'/> <input type='button' onclick='post_action(\"yahoo\")' value='yahoo'/><div class='caption'>More:</div><input type='button' onclick='post_action(\"text2image\")' value='Text2Image'/>";
    document.getElementById("correction").innerHTML = "";
    document.getElementById("elapsed_time").innerHTML = "";
}

function get_fb_object() {
    if (getParam('fb_ref')) {
        var ctoken = getParam('ctoken');
        if (ctoken) return ctoken;
        var id = getParam('id');
        var story_fbid = getParam('story_fbid');
        var fbid = getParam('fbid');
        if (id) {
            if (story_fbid)
                return id + '_' + story_fbid;
            else if (fbid)
                return id + '_' + fbid;
            else return false;
        } else return false;
    } else return false;
}

function str_replace(search, replace, subject, count) {
    var i = 0,
        j = 0,
        temp = '',
        repl = '',
        sl = 0,
        fl = 0,
        f = [].concat(search),
        r = [].concat(replace),
        s = subject,
        ra = Object.prototype.toString.call(r) === '[object Array]',
        sa = Object.prototype.toString.call(s) === '[object Array]';
    s = [].concat(s);
    if (count) {
        this.window[count] = 0;
    }
    sl = s.length;
    for (i = 0; i < sl; i++) {
        if (s[i] === '') {
            continue;
        }
        fl = f.length;
        for (j = 0; j < fl; j++) {
            temp = s[i] + '';
            repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
            s[i] = (temp).split(f[j]).join(repl);
            if (count && s[i] !== temp) {
                this.window[count] += (temp.length - s[i].length) / f[j].length;
            }
        }
    }
    return sa ? s : s[0];
}

function urlencode(str) {
    str = (str + '').toString();
    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
}

function htmlspecialchars(string, quote_style, charset, double_encode) {
    var optTemp = 0,
        i = 0,
        noquotes = false;
    if (typeof quote_style === 'undefined' || quote_style === null) {
        quote_style = 2;
    }
    string = string.toString();
    if (double_encode !== false) {
        string = string.replace(/&/g, '&amp;');
    }
    string = string.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    var OPTS = {
        'ENT_NOQUOTES': 0,
        'ENT_HTML_QUOTE_SINGLE': 1,
        'ENT_HTML_QUOTE_DOUBLE': 2,
        'ENT_COMPAT': 2,
        'ENT_QUOTES': 3,
        'ENT_IGNORE': 4
    };
    if (quote_style === 0) {
        noquotes = true;
    }
    if (typeof quote_style !== 'number') {
        quote_style = [].concat(quote_style);
        for (i = 0; i < quote_style.length; i++) {
            if (OPTS[quote_style[i]] === 0) {
                noquotes = true;
            } else if (OPTS[quote_style[i]]) {
                optTemp = optTemp | OPTS[quote_style[i]];
            }
        }
        quote_style = optTemp;
    }
    if (quote_style & OPTS.ENT_HTML_QUOTE_SINGLE) {
        string = string.replace(/'/g, '&#039;');
    }
    if (!noquotes) {
        string = string.replace(/"/g, '&quot;');
    }
    return string;
}

function nl2br(str, is_xhtml) {
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br ' + '/>' : '<br>';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}
var base64 = new Object();
base64.settings = {
    "char62": "+",
    "char63": "/",
    "pad": "=",
    "ascii": false
};
base64.encode = function (str) {
    this.char_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" +
        this.settings.char62 + this.settings.char63;
    var output = "";
    var buf = "";
    if (str != null) {
        for (var i = 0; i < str.length; ++i) {
            var c_num = str.charCodeAt(i);
            if (this.settings.ascii)
                if (c_num >= 256)
                    throw "Not an 8-bit char.";
            var c_bin = c_num.toString(2);
            while (c_bin.length < (this.settings.ascii ? 8 : 16))
                c_bin = "0" + c_bin;
            buf += c_bin;
            while (buf.length >= 6) {
                var sextet = buf.slice(0, 6);
                buf = buf.slice(6);
                output += this.char_set.charAt(parseInt(sextet, 2));
            }
        }
    }
    if (buf) {
        while (buf.length < 6) buf += "0";
        output += this.char_set.charAt(parseInt(buf, 2));
    }
    if (this.settings.pad)
        while (output.length % (this.settings.ascii ? 4 : 8) != 0)
            output += this.settings.pad;
    return output;
}
base64.decode = function (str) {
    this.char_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" +
        this.settings.char62 + this.settings.char63;
    var output = "";
    var buf = "";
    var bits = (this.settings.ascii ? 8 : 16);
    for (var i = 0; i < str.length; ++i) {
        if (str[i] == this.settings.pad) break;
        var c_num = this.char_set.indexOf(str.charAt(i));
        if (c_num == -1) throw "Not base64.";
        var c_bin = c_num.toString(2);
        while (c_bin.length < 6) c_bin = "0" + c_bin;
        buf += c_bin;
        while (buf.length >= bits) {
            var octet = buf.slice(0, bits);
            buf = buf.slice(bits);
            output += String.fromCharCode(parseInt(octet, 2));
        }
    }
    return output;
}

function setrawcookie(name, value, expires, path, domain, secure) {
    if (typeof expires === 'string' && (/^\d+$/).test(expires)) {
        expires = parseInt(expires, 10);
    }
    if (expires instanceof Date) {
        expires = expires.toGMTString();
    } else if (typeof (expires) === 'number') {
        expires = (new Date(expires * 1e3)).toGMTString();
    }
    var r = [name + '=' + value],
        s = {},
        i = '';
    s = {
        expires: expires,
        path: path,
        domain: domain
    };
    for (i in s) {
        if (s.hasOwnProperty(i)) {
            s[i] && r.push(i + '=' + s[i]);
        }
    }
    return secure && r.push('secure'), this.window.document.cookie = r.join(';'), true;
}

function setcookie(name, value, expires, path, domain, secure) {
    return this.setrawcookie(name, encodeURIComponent(value), expires, path, domain, secure);
}

function getquote() {
    var myArray = ["তোমরা ধৈর্য ও নামাজের মাধ্যমে সাহায্য প্রার্থনা কর।\n(২:৪৫)", "ক্ষমা করা উত্তম কাজ।\n(২:২৬৩)", "ভাল জিনিসের পরিবর্তে খারাপ জিনিস দিও না।\n(৪:২)", "সে ব্যক্তি মুমিন নয় যে নিজে তৃপ্তি সহকারে আহার করে, অথচ তার প্রতিবেশী অনাহারে থাকে।\n(আল হাদিস)", "তোমার পরিবার পরিজনকে নামায পড়ার নির্দেশ দাও এবং তুমি নিজেও তা দৃঢ়তার সাথে পালন করতে থাক।\n(সূরা ত্বা-হা: ১৩২)", "পার্থিব জীবন ক্রীড়া ও কৌতুক ব্যতীত কিছুই নয়। পরকালের আবাস পরহেযগারদের জন্যে শ্রেষ্টতর। তোমরা কি বুঝ না ?\n(আল কুরআন)", "যে ব্যক্তি আল্লাহর বিরুদ্ধে মিথ্যা বলে এবং তার কাছে সত্য আগমন করার পর তাকে মিথ্যা সাব্যস্ত করে, তার চেয়ে অধিক যালেম আর কে হবে? কাফেরদের বাসস্থান জাহান্নামে নয় কি?\n(আল কুরআন)", "আমরা একমাত্র তোমারই ইবাদত করি এবং শুধুমাত্র তোমারই সাহায্য প্রার্থনা করি।\n(আল কুরআন)", "যারা ঈমান এনেছে, আল্লাহ তাদের অভিভাবক। তাদেরকে তিনি বের করে আনেন অন্ধকার থেকে আলোর দিকে। আর যারা কুফরী করে তাদের অভিভাবক হচ্ছে তাগুত। তারা তাদেরকে আলো থেকে বের করে অন্ধকারের দিকে নিয়ে যায়। এরাই হলো দোযখের অধিবাসী, চিরকাল তারা সেখানেই থাকবে।\n(২:২৫৭)", "আল্লাহ ছাড়া কোন উপাস্য নেই, তিনি চিরঞ্জীব, সবকিছুর ধারক।\n(৩:২)", "যে লোক সৎকাজের জন্য কোন সুপারিশ করবে, তা থেকে সেও একটি অংশ পাবে। আর যে লোক সুপারিশ করবে মন্দ কাজের জন্যে সে তার বোঝারও একটি অংশ পাবে। বস্তুতঃ আল্লাহ সর্ব বিষয়ে ক্ষমতাশীল।\n(৪:৮৫)", "আর তোমাদের কি হল যে, তোমরা আল্লাহর রাহে লড়াই করছ না দুর্বল সেই পুরুষ, নারী ও শিশুদের পক্ষে, যারা বলে, হে আমাদের পালনকর্তা! আমাদিগকে এই জনপদ থেকে নিষ্কৃতি দান কর; এখানকার অধিবাসীরা যে, অত্যাচারী! আর তোমার পক্ষ থেকে আমাদের জন্য পক্ষালম্বনকারী নির্ধারণ করে দাও এবং তোমার পক্ষ থেকে আমাদের জন্য সাহায্যকারী নির্ধারণ করে দাও।\n(৪:৭৫)", "এতীমদেরকে তাদের সম্পদ বুঝিয়ে দাও। খারাপ মালামালের সাথে ভালো মালামালের অদল-বদল করো না। আর তাদের ধন-সম্পদ নিজেদের ধন-সম্পদের সাথে সংমিশ্রিত করে তা গ্রাস করো না। নিশ্চয় এটা বড়ই মন্দ কাজ।\n(৪:২)", "হে আমাদের পালনকর্তা, আপনি তো জানেন আমরা যা কিছু গোপনে করি এবং যা কিছু প্রকাশ্য করি। আল্লাহর কাছে পৃথিবীতে ও আকাশে কোন কিছুই গোপন নয়।\n(১৪:৪৮)", "জালেমরা যা করে, সে সম্পর্কে আল্লাহকে কখনও বেখবর মনে করো না তাদেরকে তো ঐ দিন পর্যন্ত অবকাশ দিয়ে রেখেছেন, যেদিন চক্ষুসমূহ বিস্ফোরিত হবে।\n(১৪:৪২)", "হে ঈমানদারগণ!\n তো মাদের উপর রোজা ফরয করা হয়েছে, যেরূপ ফরজ করা হয়েছিল তোমাদের পূর্ববর্তী লোকদের উপর, যেন তোমরা পরহেযগারী অর্জন করতে পার।\n(২:১৮৩)", "মুমিনগণ!\n যদি কোন পাপাচারী ব্যক্তি তোমাদের কাছে কোন সংবাদ আনয়ন করে, তবে তোমরা পরীক্ষা করে দেখবে, যাতে অজ্ঞতাবশতঃ তোমরা কোন সম্প্রদায়ের ক্ষতিসাধনে প্রবৃত্ত না হও এবং পরে নিজেদের কৃতকর্মের জন্যে অনুতপ্ত না হও।\n(সূরা হুজুরাত:৬)", "ঘুষখোর ও ঘুষ দাতা উভয়ের উপর আল্লাহর অভিশাপ হোক!\n(বোখারি, মুসলিম)", "প্রবৃত্তির লালসা জাহান্নামকে এবং অনাকাংখিত দুঃখ কষ্ট জান্নাতকে চারদিক থেকে ঘিরে রেখেছে।\n(বোখারি, মুসলিম)", ];
    return myArray[Math.floor(Math.random() * myArray.length)];
}