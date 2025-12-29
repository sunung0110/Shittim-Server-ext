//write in node.js 24.12.0


const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const npToken = 'ias:t:1234567891011:123456789@12345678-1234-5678-1234-123456789101@STEAM:TOY';
const countryhex = '3e528c78a51b938ff965cc2b3b8f60f2a667ec45fc4c7d8f17d7bea71d1a69e2739ad09a7a6c9ca2d24cc5d4e252602daa3037dd6d538f20f49629dcb8e12f0ff965ca1dff03594c63d498f1d5e63c99';
const countrydata = Buffer.from(countryhex, 'hex');

//paste your policy in hex
const policyhex = '';
const policydata = Buffer.from(policyhex, 'hex');

//paste your userdata in hex
const userhex = '';
const userdata = Buffer.from(userhex, 'hex');


const promohex = '3e528c78a51b938ff965cc2b3b8f60f20c11670b13600bb0495061439bea4a1c2144a3ff0756b7ed9805b72abf7546a6';
const promodata = Buffer.from(promohex, 'hex');


function main(req, res) {
	var reqUrl = req.url;
	var parsedUrl = url.parse(reqUrl, true);
	
	var pathname = parsedUrl.pathname;
	console.log(pathname);
	
	if(pathname == '/') {
		if(req.method == 'GET') {
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write('get');
			res.end('end');
			console.log('GET');
			console.log(parsedUrl);
		}else if(req.method == 'POST') {
			let body = "";
			req.on("data", function (data) {
				body = body + data;
			});
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('post');
			console.log('POST');
			 req.on("end", function() {
				let postInfo = qs.parse(body);
				console.log(postInfo);
			})
			console.log(parsedUrl);
		}else {
			res.writeHead(404, {'Content-Type' : 'text/plain'});
			res.end('404 : NOT FOUND');
		}
	}else if(pathname == '/prod/crexception-prop') {
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end('{"propCheck": false, "period": 10, "ratio": 10}');
	}else if(pathname == '/ims/public/v1/link/account/platform/primary') {
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end('{"links":[{"platform_type":"STEAM","platform_user_id":"12345678910111213","guid":"12345678910111213","is_primary":true,"primary_platform_at":1234567891011,"game_data":{"guid":"12345678910111213","name":"","level":0,"date_last_login":"2025-12-01T12:00:00Z","attribute":[]}},{"platform_type":"KRPC","platform_user_id":"12345678910111213","guid":"12345678910111213","is_primary":false,"game_data":{"guid":"12345678910111213","name":"","level":0,"date_last_login":"2025-12-01T12:00:00Z","attribute":[]}}]}');
	}else if(pathname == '/toy/v2/country') {
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end('{"ip":"192.168.0.1","country-code":"KR"}');
	}else if(pathname == '/toy/sdk/terms.nx') {
		res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
		res.end('{"errorCode":0,"result":{"terms":[{"termID":304,"type":[],"optional":0,"exposureType":"NORMAL","title":"TERMS OF SERVICE AND END USER LICENSE AGREEMENT","titleReplacements":[]},{"termID":305,"type":[],"optional":0,"exposureType":"NORMAL","title":"Privacy Policy","titleReplacements":[]}]},"errorText":"성공","errorDetail":""}');
	}else if(pathname == '/toy/sdk/signInWithTicket.nx') {
		res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
		//paste your signin ticket in json
		res.end('');
	}else if(pathname == '/toy/sdk/getPromotion.nx') {
		res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
		res.write(promodata);
		res.end();
	}else if(pathname == '/toy/sdk/getUserInfo.nx') {
		res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
		res.write(userdata);
		res.end();
	}else if(pathname == '/toy/sdk/getPolicyList.nx') {
		res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
		res.write(policydata);
		res.end();
	}else if(pathname == '/toy/sdk/getCountry.nx') {
		res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
		res.write(countrydata);
		res.end();
	}else if(pathname == '/toy/sdk/enterToy.nx') {
		res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
		res.end('{"errorCode":0,"result":{"service":{"title":"Blue Archive","buildVer":"2","policyApiVer":"2","termsApiVer":"2","useTPA":0,"useGbNpsn":1,"useGbKrpc":1,"useGbArena":1,"useGbJppc":0,"useGamania":0,"useToyBanDialog":0,"grbRating":"18","networkCheckSampleRate":"3","nkMemberAccessCode":"0","useIdfaCollection":0,"useIdfaDialog":0,"useIdfaDialogNTest":0,"useNexonOTP":0,"useRegionLock":0,"usePcDirectRun":0,"useArenaCSByRegion":0,"usePlayNow":0,"methinksUsage":{"useAlwaysOnRecording":0,"useScreenshot":0,"useStreaming":0,"useSurvey":0},"livestreamUsage":{"useIM":0},"useExactAlarmActivation":0,"useCollectUserActivity":0,"userActivityDataPushNotification":{"changePoints":[],"notificationType":""},"appAppAuthLoginIconUrl":"","useGuidCreationBlk":0,"guidCreationBlkWlCo":[],"useArena2FA":0,"usePrimary":1,"platformAuthMode":0,"loginUIType":"1","nxkATL":"1","clientId":"MjcwOA","useMemberships":[101,103,110,1,104,9999],"useMembershipsInfo":{"nexonNetSecretKey":"","nexonNetProductId":"","nexonNetRedirectUri":""}},"endBanner":{},"country":"KR","idfa":{"dialog":[],"imgUrl":"","language":""},"useLocalPolicy":["0","0"],"enableLogging":false,"enablePlexLogging":false,"enableForcePingLogging":false,"userArenaRegion":1,"offerwall":{"id":0,"title":""},"useYoutubeRewardEvent":false,"gpgCycle":0,"eve":{"domain":"https://eve.nexon.com","g-api":"https://g-eve-apis.nexon.com"},"insign":{"useSimpleSignup":0,"useKrpcSimpleSignup":0,"useArenaSimpleSignup":0}},"errorText":"성공","errorDetail":""}');
	}else if(pathname == '/toy-push/live/sdk/push/policy') {
		console.log(parsedUrl);
		
		var svcID = parsedUrl.query.svcID;
		
		console.log(svcID);
		console.log(npToken);
		
		if(svcID == undefined) {
			res.writeHead(200);
			res.end();
		}else {
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.end('{"push":{"name":"토이 푸시","policies":{"1":{"enable":true,"name":"AD Push Policy (광고성 푸시 정책)"},"2":{"enable":true,"name":"Nocturnal Push Policy (야간 푸시 정책)"}}},"kind":{"name":"게임 푸시","policies":{}},"svcID":' + svcID + ',"npToken":"' + npToken + '"}');
		}
	
	}else if(pathname == '/stamp/live/v2/restore/steam') {
		res.writeHead(200, {'Content-Type': 'application/json;charset=UTF-8'});
		res.end('{"restore_stamps":[]}');
	}else if(pathname == '/stamp/live/v2/restore/mp') {
		res.writeHead(200, {'Content-Type': 'application/json;charset=UTF-8'});
		res.end('{}');
	}else if(pathname == '/stamp/live/v1/enter') {
		console.log(parsedUrl);
		
		var market_type =parsedUrl.query.market_type
		var client_id =parsedUrl.query.client_id
		
		console.log(market_type);
		console.log(client_id);
		
		res.writeHead(200, {'Content-Type': 'application/json;charset=UTF-8'});
		res.end('{"delivery_v2":true,"client_id":"' + client_id + '","market_type":"' + market_type + '"}');
	}else if(pathname == '/ias/live/public/v3/issue/ticket/by-web-token') {
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end('{"ticket":"' + npToken + '"}');
	}else if(pathname == '/ias/live/public/v2/login/link') {
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end('{"web_token":"' + npToken + '","local_session_type":"toy","local_session_user_id":"12345678910111213"}');
	}else if(pathname == '/ias/live/public/v1/issue/game-token/by-ticket') {
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end('{"game_token":"' + npToken + '"}');
	}else {
		res.writeHead(404, {'Content-Type' : 'text/plain'});
		res.end('404 : NOT FOUND');
	}
}


http.createServer(main).listen(9000, function() {
	console.log('server running at http://127.0.0.1:9000');
});