import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { useRoute } from "vue-router";

export default function useCommonLogic() {
	let intervalId;
	const weeks = ref([
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	]);
	const route = useRoute();

	onMounted(() => {
		// quickly show header date
		var myDate = new Date();
		var year = myDate.getFullYear(); // year
		var mon = myDate.getMonth() + 1; // month
		var date = myDate.getDate(); // date
		var _week = myDate.getDay();
		var h = myDate.getHours(); // hours(0-23)
		var m = myDate.getMinutes(); // minutes(0-59)
		var s = myDate.getSeconds(); // seconds

		$("#date").html(
			year +
				"-" +
				mon +
				"-" +
				date +
				" " +
				weeks.value[_week] +
				" " +
				h +
				":" +
				m +
				":" +
				s
		);

		nextTick(() => {
			$("a").click(function () {
				$(this).addClass("click");
			});
		});
		nextTick(() => {
			// nav-menu highlight
			var path = route.name.slice(0, 4);
			if (path == "home") {
				document.getElementById("Home").className += "active";
			} else if (path == "arch") {
				document.getElementById("Archives").className += "active";
			} else if (path == "abou") {
				document.getElementById("About").className += "active";
			}

			// header system info
			var agent = navigator.userAgent;
			var os;
			if (agent.indexOf("Linux") >= 0) {
				os = '<i class="fa fa-linux" aria-hidden="true"></i>';
			} else if (agent.indexOf("Windows") >= 0) {
				os = '<i class="fa fa-windows" aria-hidden="true"></i>';
			} else if (agent.indexOf("Android") >= 0) {
				os = '<i class="fa fa-android" aria-hidden="true"></i';
			} else if (agent.indexOf("Mac")) {
				os = '<i class="fa fa-apple" aria-hidden="true"></i>';
			} else {
				os = navigator.platform;
			}

			var web;
			if (agent.indexOf("Firefox") >= 0) {
				web = '<i class="fa fa-firefox"></i>';
			} else if (agent.indexOf("Opera") >= 0) {
				web = '<i class="fa fa-opera" aria-hidden="true"></i>';
			} else if (agent.indexOf("Chrome") >= 0) {
				web = '<i class="fa fa-chrome" aria-hidden="true"></i>';
			} else if (agent.indexOf("Edge") >= 0) {
				web = '<i class="fa fa-edge" aria-hidden="true"></i>';
			} else if (agent.indexOf("Safari")) {
				web = '<i class="fa fa-safari" aria-hidden="true"></i>';
			} else {
				web =
					'<i class="fa fa-internet-explorer" aria-hidden="true"></i>';
			}

			var screen_info =
				'<i class="fa fa-tv"></i>: ' +
				screen.width +
				" x " +
				screen.height;

			$("#nav-system").html(
				"web: " + web + " | " + "OS: " + os + " | " + screen_info
			);

			// header time
			intervalId = setInterval(() => {
				var myDate = new Date();
				var year = myDate.getFullYear(); // year
				var mon = myDate.getMonth() + 1; // month
				var date = myDate.getDate(); // date
				var _week = myDate.getDay();
				var h = myDate.getHours(); // hours(0-23)
				var m = myDate.getMinutes(); // minutes(0-59)
				var s = myDate.getSeconds(); // seconds

				$("#date").html(
					year +
						"-" +
						mon +
						"-" +
						date +
						" " +
						weeks.value[_week] +
						" " +
						h +
						":" +
						m +
						":" +
						s
				);
			}, 1000);

			// ascii style
			$(".category-list").addClass("ascii");
			$(".tag-list").addClass("ascii");

			// tags style
			$("#list-cloud a").wrap('<div class="ffolder small pink"></div>');
			$("#list-cloud a").width("50px");
			$("#list-cloud a").css({
				"font-size": "25px",
				color: "black",
				"text-overflow": "ellipsis",
				overflow: "hidden",
				display: "inline-block",
				"white-space": "nowrap",
			});

			$("#list-cloud a").each(function () {
				$(this).attr("title", $(this).text());
			});

			// header access
			$("#nav-access").click(() => {
				$(".fa-angle-down").toggle();
				$("#dropdown-content").toggle();
			});
		});

		onUnmounted(() => {
			clearInterval(intervalId);
		});
	});

	return {
		intervalId,
		weeks,
		route,
	};
}
