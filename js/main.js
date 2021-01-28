/// 메인 페이지 JS - main.js ////

$(function (e) { ///////////////// JQB //////////////////////
    console.log('실행');


	$('.menu_btn').click(function(){
		console.log('dd')
		$('.mob_menu').addClass('active');
		$('.mob_bg').addClass('active');
		$('.close_btn').addClass('active');
		$('.lnb_mob').addClass('active');
		$('.gnb_mob').addClass('active');
	}); ///////// click /////////////

	$('.close_btn').click(function(){
		$('.mob_menu').removeClass('active');
		$('.lnb_mob').removeClass('active');
		$('.gnb_mob').removeClass('active');
	}); ///////// click ////////////
}); ///////////////// JQB //////////////////////


function initMap() { /// 지도 보여주는 함수 //////////////////
	// 지도 깔기
	const map = new google.maps.Map(document.getElementById("map"), {
		center: {lat:38.549012, lng: 128.948546},
		zoom: 4.7
		});

	var locations = [
			['청담 SHOW ROOM', 37.52445302234015, 127.04235101146038,'+82(0)2-512-7894','11:00 - 20:00'],
			['롯데백화점 본점 7F', 37.56517737513197, 126.98135826913165,'+82(0)2-772-3765','MON - THU 10:30 - 20:00',"FRI - SUN 10:30 - 20:30"],
			['롯데면세점 명동본점 9F', 37.56838171939088, 126.98145874519447,'+82-2-759-6732','09:30 - 21:00'],
			['신세계면세점 명동본점 9F', 37.5675942370541, 126.98081235595221,'02-6370-4347','09:00 - 20:30'],
			['현대면세점 동대문점 9F', 37.574316222499945, 127.00714131884084,'02-3668-8182','10:30 - 23:00'],
			['신라면세점 서울점 B1F', 37.56379012389607, 127.00743001769042,'02-2230-5940','09:00 - 20:30'],
			['HDC 신라면세점 6F', 37.533805476259275, 126.96210429830533,'02-490-3662','SAT.SUN OFF','09:00 - 17:30'],
			['신세계면세점 강남점 1F', 37.50816018344751, 127.00569782459291,'02-6288-0688','09:00 - 20:30'],
			['현대면세점 무역센터점 10F', 37.511824336360164, 127.06055060601436,'02-2142-6448','09:00 - 20:30'],
			['롯데면세점 부산점 8F', 35.157004336948226, 129.0563537381173,'+82-51-810-2840','MONDAY OFF','TUE - THU 09:30 - 20:00','FRI - SUN 09:30 - 20:30'],
			['롯데면세점 제주점 3F', 33.49224645486054, 126.4858253298167,'+82-64-793-3134','SAT.SUN.HOLIDAY OFF','09:30 - 19:00'],
			['신라면세점 제주점 2F', 33.48771968527164, 126.48793167756556,'064-710-7314','SAT.SUN.HOLIDAY OFF','14:00 - 18:00'],
			['현대면세점 인천공항점 T1', 37.44892931413578, 126.45125718476869,'032-743-8324','06:30 - 21:30'],
			
			['沈阳恒隆广场', 41.80257192817375, 123.43423762689346],
			['哈西万达广场', 45.701972851804015, 126.59425789630477],
			['长春红旗街万达', 43.86625809087052, 125.29593618461192],
			['太原街万达广场', 41.790975959940035, 123.39853944038778],
			['大连开发区万达', 39.069446638550104, 121.83586822408596],
			['沈阳全运路万达广场店', 41.68468167872142, 123.45394934223168],
			['沈阳大悦城', 41.80305653268377, 123.47159199626616],
			['哈尔滨红博中央公园', 45.75897156040499, 126.64358408430776],
			['大连东港威尼斯水城', 38.92659932612846, 121.6854046537263],
			['盘锦 双兴南路 万达广场店', 41.106164, 122.083683],
			['哈尔滨金安国际购物广场', 46.24306090963639, 126.78115319543326],
			['杭州湖滨银泰in77', 30.252388407439796, 120.16439399783297],

			['凯德广场学府商场', 45.72133717611019, 126.6099074404811],
			['天津大悦城', 39.134587639630645, 117.17983218450514],
			['凯德MALL•新都心', 36.12230102849811, 120.4044151322488],
			['大连开发区安盛', 39.15587203607407, 121.76265407255893],
			['苏州印象城', 31.318685538929778, 120.65735895552088],
			['龙湖北京长楹天街 ', 39.92541585582887, 116.59964940875881],
			['宁波来福士', 29.882967186628512, 121.55762219908702],
			['上海新天地', 31.216590671133925, 121.47509555720748],
			['重庆龙湖时代天街', 29.537298285488646, 106.51272488744954],
			['上海环贸 iapm', 31.215969407570533, 121.45819839530789],
			['成都万象城店', 30.646402509936806, 104.1159138959931],
			['成都晶融汇', 30.65176854701062, 104.08124300181723],
			
			['鞍山大悦城 ', 41.119581875837696, 122.97881654037246],
			['龙湖重庆金沙天街', 29.554817608082317, 106.46199982822188],
			['柏威年购物中心', 38.91796830198916, 121.62706291779756]
	];

	var infowindow = new google.maps.InfoWindow();

	// 마커 이미지 변경
	var myIcon = new google.maps.MarkerImage('./images/marker.png');
	
	var marker, i;
	for (i = 0; i < locations.length; i++) {
		// 마커 for 문으로 생성
		marker = new google.maps.Marker({
				id:i,
				position: new google.maps.LatLng(locations[i][1], locations[i][2]),
				map: map,
				icon: myIcon,
		})

		// 마커 클릭 이벤트 
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				infowindow.setContent("<div class='title'>"+locations[i][0]+
									  "</div><div class='call_info'>"+locations[i][3]+
									  "</div><div class='open_close_info'>"+locations[i][4]+
									  "</div><div class='open_close_info'>"+locations[i][5]+
									  "</div><div class='open_close_info'>"+locations[i][6]+"</div>");
				infowindow.open(map, marker);
			}
		})(marker, i));
		if(marker)
		{
			marker.addListener('click', function() {
				map.setZoom(15);
				map.setCenter(this.getPosition());
			});
		}

		//오픈/클로즈 정보 마지막 줄 내용 없으면 공백
		if(locations[i][5]==undefined){
			locations[i][5] = ''
		}

		if(locations[i][6]==undefined){
			locations[i][6] = ''
		}
	} /////////// for문 ////////

	
} //////////// function /////////////////////////////////////////////
