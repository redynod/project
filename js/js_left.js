function SidebarShow() {
                if(window.innerWidth < 600 && document.getElementById('rightBar').style.display != 'block'){ 
                        document.getElementById('leftBar').style.display = "block";
                        document.getElementById('arrows').style.left = "80%";
                        document.getElementById('rt_brand').style.display = "none";
                        document.getElementById('dots').style.left = "80%";
				} else if(window.innerWidth < 600) {
					    document.getElementById('rightBar').style.display = "none";
                        document.getElementById('arrows').style.left = "50%";
                        document.getElementById('lt_brand').style.display = "block";
                        document.getElementById('dots').style.left = "50%";
				}
            };

function SidebarHide() {
                if(window.innerWidth < 600 && document.getElementById('leftBar').style.display === "block") { 
                       document.getElementById('leftBar').style.display = "none";
                       document.getElementById('arrows').style.left = "50%";
                       document.getElementById('rt_brand').style.display = "block";
                       document.getElementById('dots').style.left = "50%";
				} else if(window.innerWidth < 600) { 
                       document.getElementById('rightBar').style.display = "block";
                       document.getElementById('arrows').style.left = "20%";
                       document.getElementById('lt_brand').style.display = "none";
                       document.getElementById('dots').style.left = "20%";
				}
             };
			 
