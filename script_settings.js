document.addEventListener("DOMContentLoaded", function () {
    const defLinkInput = document.getElementById("def-link");
    const defLinkBtn = document.getElementById("def-link-btn");
    const defImageBtn = document.getElementById("def-img-btn");
	
	const themeBlue = document.getElementById("theme-blue");
	const themeDark = document.getElementById("theme-dark");
	const themeOrange = document.getElementById("theme-orange");
	const themeGreen = document.getElementById("theme-green");
	const themePurple = document.getElementById("theme-purple");
	const themeRed = document.getElementById("theme-red");
	
	const navBg1 = document.getElementById("nav-bg-1");
	const navBg2 = document.getElementById("nav-bg-2");
	const navBg3 = document.getElementById("nav-bg-3");
	const navBg4 = document.getElementById("nav-bg-4");
	const headerBg = document.querySelector("header");


    const goTopBtn = document.getElementById("go-top-btn");
	const refreshBtn = document.getElementById("refresh-btn");
	
	// Load images 
	navImageInit();
	function navImageInit() {
		const settings = JSON.parse(localStorage.getItem("settings_game")) || {};
		const bg = settings.navBg || "https://github.com/hiro011/games-list/blob/1e9e4ab968e5cfc253b44d957aa79da242815288/background-img2.png?raw=true";
		headerBg.style.backgroundImage = `url("${bg}")`;
	}
	
	defImageInit();
	function defImageInit() {
		const settings = JSON.parse(localStorage.getItem("settings_game")) || {};
		const defImage = settings.defImg || "https://github.com/hiro011/games-list/blob/1e9e4ab968e5cfc253b44d957aa79da242815288/default-game.jpeg?raw=true";
		const previewDefImg = document.getElementById('previewDefImage');
		
		previewDefImg.src = defImage;
	}
	
	// initialise the theme
	themeInit();
	function themeInit(){
	  const settings = JSON.parse(localStorage.getItem("settings_game")) || {};
	  const themeValue = settings.theme || "blue";
	  
	  const body = document.getElementById('main-body');
	  
	  // Remove any existing theme classes
	  body.classList.remove('theme-green', 'theme-dark', 'theme-orange', 'theme-purple', 'theme-red');
	  
	  if (themeValue === 'blue') {
		body.classList.remove('theme-green', 'theme-dark', 'theme-orange', 'theme-purple', 'theme-red');
	  }else if (themeValue === 'green') {
		body.classList.add('theme-green');
	  } else if (themeValue === 'dark') {
		body.classList.add('theme-dark');
	  } else if (themeValue === 'orange') {
		body.classList.add('theme-orange');
	  }else if (themeValue === 'purple') {
		body.classList.add('theme-purple');
	  }else if (themeValue === 'red') {
		body.classList.add('theme-red');
	  }
	}
	
	// Set theme
	function setTheme(themeIn) {
		const settings = JSON.parse(localStorage.getItem("settings_game")) || {};
	 
		settings.theme = themeIn;
		localStorage.setItem("settings_game", JSON.stringify(settings));
		
		// Update the theme
		themeInit();
	}

	// change the theme - buttons
	themeBlue.addEventListener("click", () => setTheme("blue"));
	themeDark.addEventListener("click", () => setTheme("dark"));
	themeOrange.addEventListener("click", () => setTheme("orange"));
	themeGreen.addEventListener("click", () => setTheme("green"));
	themePurple.addEventListener("click", () => setTheme("purple"));
	themeRed.addEventListener("click", () => setTheme("red"));
	
	
	// Init default setting value
	defaultSet();
	function defaultSet() {
		const settings = JSON.parse(localStorage.getItem("settings_game")) || {};
		const defaultSettings = {
			navBg: "https://github.com/hiro011/games-list/blob/1e9e4ab968e5cfc253b44d957aa79da242815288/background-img2.png?raw=true",
			theme: "blue",
			defImg: "https://github.com/hiro011/games-list/blob/1e9e4ab968e5cfc253b44d957aa79da242815288/default-game.jpeg?raw=true",
			defLink: "https://store.steampowered.com"
		};
		
		// Fill in any missing or null values with defaults
		for (const key in defaultSettings) {
			if (settings[key] == null) {
				settings[key] = defaultSettings[key];
			}
		}

		// Save back the updated settings (if anything was missing)
		localStorage.setItem("settings_game", JSON.stringify(settings));
	}
	
	refreshBtn.addEventListener("click", function () {
		// Refresh the page
		location.reload();
	});
	
    goTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 250) {
            goTopBtn.style.display = "block";
        } else {
            goTopBtn.style.display = "none";
        } 
    });
 
	// Function to handle Enter key submission
	function handleEnterKey(event, button) {
		if (event.key === "Enter") {
			event.preventDefault(); // Prevent form submission (if in a form)
			button.click(); // Trigger the respective button's click event
		}
	}
	
	// Attach event listeners to input fields in the "Add Game" form
	defLinkInput.addEventListener("keydown", function(event) {
		handleEnterKey(event, defLinkBtn);
	});
	
	// Default link event listener
	defLinkBtn.addEventListener("click", function () {
		const DefLink = defLinkInput.value.trim();

		if (DefLink === "") {
			alert("Please enter a link!");
			return;
		}
		
		// Get existing settings or create a new one
		const settings = JSON.parse(localStorage.getItem("settings_game")) || {};

		// Update defLink
		settings.defLink = DefLink;

		// Save updated settings back to localStorage
		localStorage.setItem("settings_game", JSON.stringify(settings));
		alert(`Defualt link updated! ${DefLink}`);

		// Reset form fields
		DefLink.value = "";
	});
	
	// Default image event listener
	defImageBtn.addEventListener("click", function () {
		const imgUploadDef = document.getElementById('imageUploadDef');
		const file = imgUploadDef?.files[0];
		
		if (!file) {
			alert("Please select a new image first.");
			return;
		}

		const reader = new FileReader();
		reader.onload = function(e) {
			const imagePath = e.target.result;
			const settings = JSON.parse(localStorage.getItem("settings_game")) || {};
			settings.defImg = imagePath;
			localStorage.setItem("settings_game", JSON.stringify(settings));
			alert("Default image updated!");
		};
		reader.readAsDataURL(file);
	});

	// Navigation background event listener
	function updateNavBg(imagePath) {
		const settings = JSON.parse(localStorage.getItem("settings_game")) || {};

		settings.navBg = imagePath;
		localStorage.setItem("settings_game", JSON.stringify(settings));
		
		// Update the background
		navImageInit();
	}

	navBg1.addEventListener("click", () => updateNavBg("https://github.com/hiro011/games-list/blob/1e9e4ab968e5cfc253b44d957aa79da242815288/background-img1.png?raw=true"));
	navBg2.addEventListener("click", () => updateNavBg("https://github.com/hiro011/games-list/blob/1e9e4ab968e5cfc253b44d957aa79da242815288/background-img2.png?raw=true"));
	navBg3.addEventListener("click", () => updateNavBg("https://github.com/hiro011/games-list/blob/1e9e4ab968e5cfc253b44d957aa79da242815288/background-img3.png?raw=true"));
	navBg4.addEventListener("click", () => updateNavBg("https://github.com/hiro011/games-list/blob/1e9e4ab968e5cfc253b44d957aa79da242815288/background-img4.png?raw=true"));
	
	const imgUploadNav = document.getElementById('imageUploadNav');
	
	imgUploadNav.addEventListener('change', function(event) {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = function(e) {
				updateNavBg(e.target.result);
			};
			reader.readAsDataURL(file);
		}
	});

});
