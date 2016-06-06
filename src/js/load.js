//获取ls存储js脚本
var scriptStore = null;
var incognito = false;//是否为无痕模式

var load_hash = document.getElementById('load-js').getAttribute('hash');
var load_js   = document.getElementById('load-js').getAttribute('load-js');

var key = 'ScriptStore';
try {
	scriptStore = localStorage[key];
} catch(e) {
	incognito = true;
}

var scriptStoreObj = undefined != scriptStore ? JSON.parse(scriptStore) : null;
var hash = undefined != scriptStore ? scriptStoreObj.hash : null;
var script = undefined != scriptStore ? scriptStoreObj.scripts : null;

if(undefined == scriptStore || hash != load_hash || script == '' || hash == 'dev') {
	//获取指定js脚本
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var responseText = xmlhttp.responseText;

			scriptStoreObj = {
				hash: load_hash,
				scripts: responseText
			}

			if(incognito == false && hash != 'dev') {
				localStorage[key] = JSON.stringify(scriptStoreObj);
			}

		}
	}
	xmlhttp.open("GET", load_js + "?hash=" + load_hash, false);
	xmlhttp.send();
}

var hm = document.createElement("script");
hm.text = scriptStoreObj.scripts;
var s = document.getElementsByTagName("head")[0];
s.appendChild(hm, s);
