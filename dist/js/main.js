$(document).ready(function(){
	debugger;
	/*var slideNavflag=0;*/
/*$( ".dropdown-toggle" ).click(function() {
	console.log("HI");
		if(slideNavflag==0){

			$(".dropdown-menu").animate( { marginLeft : "0px"});
			slideNavflag=1;
		}
		else{
			$(".dropdown-menu").animate( { marginLeft : "-30px"});
			slideNavflag=0;
		}
  
});
*/
// code for the geo chart in dashboard
/*google.load("visualization", "1", {packages:["geochart"]});
      google.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {

        var data = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Germany', 200],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700]
        ]);

        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }
//code for the graph plg-in

var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
		var lineChartData = {
			labels : ["January","February","March","April","May"],
			datasets : [
				{
					label: "My First dataset",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "#DB4437",
					pointColor : "#DB4437",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{
					label: "My Second dataset",
					fillColor : "rgba(151,187,205,0.2)",
					strokeColor : "#4285F4",
					pointColor : "#4285F4",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{
					label: "My Second dataset",
					fillColor : "rgba(151,187,205,0.2)",
					strokeColor : "#F4B400",
					pointColor : "#F4B400",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]

		}
		var doughnutData = [
				{
					value: 300,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Red"
				},
				{
					value: 50,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Green"
				},
				{
					value: 100,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Yellow"
				},
				{
					value: 40,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "Grey"
				},
				{
					value: 120,
					color: "#4D5360",
					highlight: "#616774",
					label: "Dark Grey"
				}

			];

		var ctx = document.getElementById("canvas").getContext("2d");
		window.myLine = new Chart(ctx).Line(lineChartData, {responsive: true});
		var ctx = document.getElementById("chart-area").getContext("2d");
		window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
*/
		//code for the slide effect in buttons
		/*$('.htmlCodeDisplay').click(function(){

			    $("#menu1").animate({left: "-106%",},500);
			    $("#menu2").animate({right: "0%",height:"100%",},500);		
		});
		$('.htmlExmp').click(function(){
			$("#menu1").animate({left: "0%",},500);
			    $("#menu2").animate({right: "-106%",height:"200px"},500);
		});*/
/*======================================================*/
		//code for the page load

		$(".sideNavFild li a").click(function(){
			var pagePath = $(this).attr('data-path');
			$('.mainContenur').load(pagePath);
		});

		
		$(".flotPanButt .fabButton").hover(function(){
			$(".flotPanBar").css('display','inline-block');
			$(".flotPanBar").animate({width:"97.5%"});
			
			
		});
		$(".flotPanButt .flotPanBar").mouseout(function(){
			$(".flotPanBar").animate({width:"0%"},function(){
				$(".flotPanBar").css('display','none');
			});
			
			
		});
		/*-------------code for the FBA speed Dile hover----------------*/

			$(".fabSpeedDialButton").hover(function(){
				/*$(".tweet").animate("transform","translateY(0%)");
				$(".faceB").animate("transform","translateY(0%)");
				$(".gPlus").animate("transform","translateY(0%)");*/
				/*$(".fabSpeedDialButton").addClass("animate");*/
				/*$('.gPlus').transition({ y: '0%' });
				$('.tweet').transition({ y: '0%' });
				$('.faceB').transition({ y: '0%' });*/
				/*$('.gPlus i').transition({ y: '0%' });
				$('.tweet i').transition({ y: '0%' });
				$('.faceB i').transition({ y: '0%' });*/

			});
			$(".fabSpeedDialButton").mouseout(function(){
				/*$(".tweet").animate("transform","translateY(160%)");
				$(".faceB").animate("transform","translateY(300%)");
				$(".gPlus").animate("transform","translateY(405%)");*/
				
				/*$('.gPlus').transition({ y: '405%' });
				$('.tweet').transition({ y: '160%' });
				$('.faceB').transition({ y: '300%' });*/
				/*$('.gPlus i').transition({ y: '405%' });
				$('.tweet i').transition({ y: '160%' });
				$('.faceB i').transition({ y: '300%' });*/
			});



});