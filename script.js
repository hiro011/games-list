document.addEventListener("DOMContentLoaded", function () {
    const addGameBtn = document.getElementById("add-game-btn");
    const gameNameInput = document.getElementById("game-name");
    const gameLinkInput = document.getElementById("game-link");
    const gameCategorySelect = document.getElementById("game-category");
    const toggleFormBtn = document.getElementById("toggle-form-btn");
    const addGameForm = document.getElementById("add-game");
	const imageUpload = document.getElementById('imageUpload');
    const previewImage = document.getElementById('previewAddImage');
	
	const closeFormButton = document.querySelectorAll('.close-btn'); 

    const editGameForm = document.getElementById("edit-game");
	const editGameBtn = document.getElementById('edit-game-btn');
    const editNameInput = document.getElementById('edit-name');
    const editLinkInput = document.getElementById('edit-link');
    const editImageUpload = document.getElementById('editImageUpload');
    const previewEditImage = document.getElementById('previewEditImage');
    const toggleEditForm = document.querySelectorAll(".edit-btn");

    const goTopBtn = document.getElementById("go-top-btn");
	const refreshBtn = document.getElementById("refresh-btn");
    const searchInput = document.getElementById("search-input");
	const overlay = document.getElementById('overlay');
	
	const GameImgForm = document.getElementById('show-game');
	const showGameImg = document.querySelectorAll('.show-image'); 

	const exportGameForm = document.getElementById("export-game");
	const deleteGameForm = document.getElementById("delete-game");
    const deleteButton = document.getElementById("delete-b"); 
    const headerBg = document.querySelector("header");


	// Create hidden file input for JSON import
	const importInput = document.createElement('input');
	importInput.type = 'file';
	importInput.accept = '.json';
	importInput.style.display = 'none';
	document.body.appendChild(importInput);

	// Import button event listener
	document.getElementById('import-btn').addEventListener('click', () => {
	  importInput.click();
	});
	
	// Handle file selection
	importInput.addEventListener('change', (event) => {
	  const file = event.target.files[0];
	  if (!file) return;

	  const reader = new FileReader();
	  reader.onload = (e) => {
		try {
		  const importedGames = JSON.parse(e.target.result);
		  let games = JSON.parse(localStorage.getItem('games')) || [];

		  // Merge imported games, avoiding duplicates by ID
		  importedGames.forEach((importedGame) => {
			const existingIndex = games.findIndex((game) => game.id === importedGame.id);
			if (existingIndex > -1) {
			  // Update existing game
			  games[existingIndex] = importedGame;
			} else {
			  // Add new game
			  games.push(importedGame);
			}
			// Add to UI
			addGameToList(
			  importedGame.id,
			  importedGame.imgPath,
			  importedGame.name,
			  importedGame.link,
			  importedGame.category
			);
		  });

		  // Save merged games to localStorage
		  localStorage.setItem('games', JSON.stringify(games));

		  // Update game ID counter
		  const maxId = Math.max(...games.map((game) => game.id), 5);
		  localStorage.setItem('gameId', maxId + 1);

		  // Update UI counts
		  updateGameCounts();

		  // Reset file input
		  importInput.value = '';
		} catch (error) {
		  alert('Error importing JSON: Invalid file format');
		  console.error(error);
		}
	  };
	  reader.readAsText(file);
	});
	
	// show export popup
	document.getElementById('export-btn').addEventListener('click', () => {
		exportGameForm.style.display = 'block';
		overlay.style.display = 'block';
		document.getElementById("export-b").focus();
		document.body.classList.add('overlay-active'); 
	});
	//hide export popup
	document.getElementById('cancel-e').addEventListener('click', () => {
		hideForms();
	});
	
	// export the data
	document.getElementById('export-b').addEventListener('click', () => {
	  const games = JSON.parse(localStorage.getItem('games')) || [];
	  const jsonStr = JSON.stringify(games, null, 2);
	  const blob = new Blob([jsonStr], { type: 'application/json' });
	  const url = URL.createObjectURL(blob);
	  const a = document.createElement('a');
	  a.href = url;
	  a.download = 'games-list.json';
	  a.click();
	  URL.revokeObjectURL(url);
	});

    // Track currently editing game
	let currentEditingGame = null;

    // Load saved games/ Initialize
    loadGames();
	updateGameCounts(); // Call this after loading games
 // Load images
        navImageInit();
        function navImageInit() {
                const settings = JSON.parse(localStorage.getItem("settings_game")) || {};
                const bg = settings.navBg || "https://github.com/hiro011/games-list/blob/1e9e4ab968e5cfc253b44d957aa79da242815288/background-img2.png?raw=true";
                headerBg.style.backgroundImage = `url("${bg}")`;
        }
        
        // initialise the theme
        themeInit();
        function themeInit(){
          const settings = JSON.parse(localStorage.getItem("settings_game")) || {};
          const themeValue = settings.theme || "blue";
          
          const body = document.getElementById('main-body');
          
          // Remove any existing theme classes
          body.classList.remove('theme-green', 'theme-dark', 'theme-orange', 'theme-purple');
          
          if (themeValue === 'blue' || themeValue == '') {
                body.classList.remove('theme-green', 'theme-dark', 'theme-orange', 'theme-purple');
          }
          
          // Add the selected theme
          if (themeValue === 'green') {
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
        
	// Show delete popup form 
	function showDeletePopup() {
		deleteGameForm.style.display = 'block';
		overlay.style.display = 'block';
		document.getElementById("delete-b").focus();
		document.body.classList.add('overlay-active'); 
	};
	
	// Show add popup form 
	toggleFormBtn.addEventListener('click', () => {
		addGameForm.style.display = 'block';
		overlay.style.display = 'block';
		gameNameInput.focus();
		document.body.classList.add('overlay-active'); 
	});

	// show game popup images
    function openImgPopup(imageSrc) {
		document.getElementById('previewGameImage').src = imageSrc;
		GameImgForm.style.display = 'block';
		overlay.style.display = 'block';
		document.body.classList.add('overlay-active');
    }
	
	showGameImg.forEach(img => {
		img.addEventListener('click', function() {
            openImgPopup(this.src);
        });
    });

    // Close the popup form 
    closeFormButton.forEach(button => {
        button.addEventListener('click', hideForms);  
    });
    overlay.addEventListener('click', () => { hideForms(); });
	
	function hideForms() {
        addGameForm.style.display = 'none';
        editGameForm.style.display = 'none';
		exportGameForm.style.display = 'none';
		deleteGameForm.style.display = 'none';
		GameImgForm.style.display = 'none';
        overlay.style.display = 'none';
		document.body.classList.remove('overlay-active');
		
		editNameInput.value = '';
        editLinkInput.value = '';
        editImageUpload.value = '';
		previewEditImage.src = '';

        currentEditGame = null;
    }
	
	// Load stored image on page load
    document.addEventListener('DOMContentLoaded', function() {
        const storedImage = localStorage.getItem('uploadedImage');
        if (storedImage) {
            previewImage.src = storedImage;
        }
    });
		
	document.addEventListener('keydown', function(event) {
		if (event.key === 'Escape') {
			hideForms(); 
		}
	});

    // image preview
    imageUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
              previewImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            previewImage.src = ""; // Clear preview if no file selected
        }
    });
	
	editImageUpload.addEventListener('change', function(event) {
         const file = event.target.files[0];
         if (file) {
             const reader = new FileReader();
             reader.onload = function(e) {
                 previewEditImage.src = e.target.result;
             };
             reader.readAsDataURL(file);
         } else {
             // reset to the original image if file input cleared
             if (currentEditingGame) {
                 previewEditImage.src = currentEditingGame.imgPath;
             } else {
                 previewEditImage.src = "";
             }
         }
     });
	
	// search filtering function  
    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const allGameItems = document.querySelectorAll(".game-list li"); 

        allGameItems.forEach(gameLi => {
            // Make sure the gameLi has the dataset attribute
            const gameName = gameLi.dataset.gameName ? gameLi.dataset.gameName.toLowerCase() : '';

            // Check if the game name includes the search term
            const isMatch = gameName.includes(searchTerm);

            // Show or hide the list item based on match
            gameLi.style.display = isMatch ? 'flex' : 'none';
        });
    }

    // search input event listener
    searchInput.addEventListener("input", handleSearch); // triggers on any change
	
	document.getElementById("clear-search").addEventListener("click", function () {
		searchInput.value = '';
		handleSearch();
	});
	refreshBtn.addEventListener("click", function () {
		// Refresh the page
		location.reload();
	});
	
    goTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

       window.addEventListener("scroll", function () {
                const navBar = document.getElementById("nav-bar");
                const settings = JSON.parse(localStorage.getItem("settings_game")) || {};
                const bg = settings.navBg || "https://github.com/hiro011/games-list/blob/1e9e4ab968e5cfc253b44d957aa79da242815288/background-img2.png?raw=true"; 
        if (window.scrollY > 250) {
            goTopBtn.style.display = "block";
        } else {
            goTopBtn.style.display = "none";
        }
                if (window.scrollY > 130) {
                        navBar.style.position = "fixed";
                        navBar.style.backgroundImage = `url("${bg}")`;
        } else {
                        navBar.style.position = "static";
                        navBar.style.backgroundImage = "none";
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
	gameNameInput.addEventListener("keydown", function(event) {
		handleEnterKey(event, addGameBtn);
	});
	gameLinkInput.addEventListener("keydown", function(event) {
		handleEnterKey(event, addGameBtn);
	});

	// Attach event listeners to input fields in the "Edit Game" form
	editNameInput.addEventListener("keydown", function(event) {
		handleEnterKey(event, editGameBtn);
	});
	editLinkInput.addEventListener("keydown", function(event) {
		handleEnterKey(event, editGameBtn);
	});

	// Add game event
	addGameBtn.addEventListener("click", function () {
		const name = gameNameInput.value.trim();
		let link = gameLinkInput.value.trim();
		const category = gameCategorySelect.value;
		const reader = new FileReader();
		const file = imageUpload.files[0];
		const settings = JSON.parse(localStorage.getItem("settings_game")) || {};
		const defImage = settings.defImg || "https://github.com/hiro011/my-games/blob/main/default-game.jpeg?raw=true";
		const defLnk = settings.defLink || "https://store.steampowered.com";
		
		if (name === "") {
			alert("Please enter a game name!");
			return;
		}
		
		if (link === "") {
			link = defLnk;
		}
		
		// Ensure gameId is unique and persistent
		let gameId = localStorage.getItem("gameId") ? Number(localStorage.getItem("gameId")) : 5;
		let imgPath = "";
		
		// Handle image upload
		if (file) {
			reader.onload = function (event) {
				imgPath = event.target.result;
			addGameToList(gameId, imgPath, name, link, category);
			saveGame(gameId, imgPath, name, link, category);
			};
			
			reader.readAsDataURL(file);
		} else { 
			imgPath = defImage; // defualt image
			addGameToList(gameId, imgPath, name, link, category);
			saveGame(gameId, imgPath, name, link, category);
		}
		// Instead of storing Base64, save the file path or filename
		// let imgPath = file ? `images/${file.name}` : "images/default-game.jpeg";
		
		// addGameToList(gameId, imgPath, name, link, category);
		// saveGame(gameId, imgPath, name, link, category);

		// Increment and store new gameId
		gameId++;
		localStorage.setItem("gameId", gameId);
		updateGameCounts();
		
		// Reset form fields
		gameNameInput.value = "";
		gameLinkInput.value = "";
		addGameForm.style.display = 'none';
		overlay.style.display = 'none';
		previewImage.src = "";
		imageUpload.value = '';
		document.body.classList.remove('overlay-active'); 
	});

    function addGameToList(id, imgPath, name, link, category) {
        const list = document.querySelector(`#${category} .game-list`);
        const li = document.createElement("li");
		
		li.dataset.gameId = id; // Store the game ID
		li.dataset.gameName = name; // Keep game name
        li.dataset.gameCategory = category;

		li.innerHTML = `
			<div class="game-image">
				<img class="show-image" src="${imgPath}" alt="${name}">
			</div>
			<div class="game-names">
				<a href="${link}" target="_blank">${name}</a>
			</div>
			
			<div class="game-btn">
				<select class="move-dropdown">
					<option value="">Move to...</option>
					<option value="playing">Playing</option>
					<option value="plan-to">Plan To</option>
					<option value="on-hold">On Hold</option>
					<option value="maybe">Maybe</option>
					<option value="completed">Completed</option>
				</select>
				<button class="edit-btn">✏️</button>
				<button class="delete-btn">🗑</button>
			</div>
			`;
		   
		list.prepend(li);  // Adds the new game at the start of the list

        // Attach event listener for image popup to the newly created image
        const gameImage = li.querySelector('.game-image img');
		const gameNameToShow = li.querySelector('.game-names a').textContent;
		const gameNameText = document.querySelector('#show-game h2');

        if (gameImage) {
            gameImage.addEventListener('click', function() {

			if (gameNameText) { // Check if the element exists
				gameNameText.textContent = gameNameToShow;
			} else {
				console.error("Popup heading element '#delete-game h3' not found!");
			}
                openImgPopup(this.src);
            });
        }
		
		// move dropdown listener
        li.querySelector(".move-dropdown").addEventListener("change", function (e) {
            const newCategory = e.target.value;
			if (newCategory) {
                removeGame(id);
                addGameToList(id, imgPath, name, link, newCategory);
                saveGame(id, imgPath, name, link, newCategory);
                li.remove();
				updateGameCounts(); // Update counts after moving
            }
			e.target.value = "";
        });
		
		// Edit game 
		li.querySelector(".edit-btn").addEventListener("click", function() {
            const currentId = li.dataset.gameId; 
            const currentName = li.querySelector('.game-names a').textContent; 
            const currentLink = li.querySelector('.game-names a').href;
            const currentImgPath = li.querySelector('.game-image img').src;
            const currentCategory = li.dataset.gameCategory; 
			
			currentEditingGame = {
                id: currentId,
                imgPath: currentImgPath,
                name: currentName,
                link: currentLink,
                category: currentCategory 
            };
			
            // Populate edit form with current values
            editNameInput.value = currentName;
            editLinkInput.value = currentLink;
            previewEditImage.src = currentImgPath;
			editImageUpload.value = '';

            // Show edit form
            editGameForm.style.display = 'block';
            overlay.style.display = 'block';
			editNameInput.focus();
			document.body.classList.add('overlay-active');
        });
		
		// Delete game		
        li.querySelector(".delete-btn").addEventListener("click", function () {
			const gameNameToDelete = li.querySelector('.game-names a').textContent;
			const popupHeading = document.querySelector('#delete-game h3');

			if (popupHeading) { // Check if the element exists
				popupHeading.textContent = `Are you sure you want to delete "${gameNameToDelete}"?`;
			} else {
				console.error("Popup heading element '#delete-game h3' not found!");
			}
			showDeletePopup();
			
			const deleteButton = document.getElementById("delete-b");
			const cancelButton = document.getElementById("cancel-b");

			// Define handler functions
			const handleDelete = () => {
				removeGame(id); 
				li.remove();
				hideForms();
                updateGameCounts(); // Update counts after deleting
			};

			const handleCancel = () => {
				hideForms();
			};

			// Add listeners that only fire once per popup display
			deleteButton.addEventListener('click', handleDelete, { once: true });
			cancelButton.addEventListener('click', handleCancel, { once: true });
        });
		
        handleSearch(); // Re-apply search filter after adding
        updateGameCounts(); // Update counts after adding to list
    }
	
	// Function to update the game counts in the UI
    function updateGameCounts() {
        const playingCountSpan = document.getElementById('playing-count');
        const planToCountSpan = document.getElementById('plan-to-count');
        const onHoldCountSpan = document.getElementById('on-hold-count');
        const maybeCountSpan = document.getElementById('maybe-count');
        const completedCountSpan = document.getElementById('completed-count');
        const totalCountSpan = document.getElementById('total-count');

        const playingCount = document.getElementById('playing-list').children.length;
        const planToCount = document.getElementById('plan-to-list').children.length;
        const onHoldCount = document.getElementById('on-hold-list').children.length;
        const maybeCount = document.getElementById('maybe-list').children.length;
        const completedCount = document.getElementById('completed-list').children.length;
        const totalCount = playingCount + planToCount + onHoldCount + completedCount + maybeCount;

        playingCountSpan.textContent = playingCount;
        planToCountSpan.textContent = planToCount;
        onHoldCountSpan.textContent = onHoldCount;
        maybeCountSpan.textContent = maybeCount;
        completedCountSpan.textContent = completedCount;
        totalCountSpan.textContent = totalCount;
    }
	
	// Event listener for the edit form submission
	editGameBtn.addEventListener('click', function() {
		if (!currentEditingGame) return;
		
		const newName = editNameInput.value.trim();
		let newLink = editLinkInput.value.trim();
		const file = editImageUpload.files[0];
		
		if (!newName) {
			alert("Please enter a game name!");
			return;
		}
		// Default link if empty
         if (newLink === "") {
             newLink = "https://store.steampowered.com";
         }
		 
		// Determine the image path
        let newImgPath = currentEditingGame.imgPath; // Keep old image by default
        if (file) {
            newImgPath = `images/${file.name}`;
        }

        updateGame(currentEditingGame, newImgPath, newName, newLink);
	});
	
	// Update a game in the list and localStorage
	function updateGame(oldGame, newImg, newName, newLink) {
        const gameLiElement = document.querySelector(`.game-list li[data-game-id='${oldGame.id}']`);
        // Check if the element was actually found in the DOM
        if (gameLiElement) {
            // Update the dataset for search functionality
            gameLiElement.dataset.gameName = newName;

            // Find the image and link elements 
            const imgElement = gameLiElement.querySelector('.game-image img');
            const linkElement = gameLiElement.querySelector('.game-names a');

            // Update the image source and alt text
            if (imgElement) {
                imgElement.src = newImg;
                imgElement.alt = newName; // Update alt text for accessibility
            }

            // Update the link href and text content
            if (linkElement) {
                linkElement.href = newLink;
                linkElement.textContent = newName;
            }
        } else {
            console.error(`Game element with ID ${oldGame.id} not found in the DOM for updating.`);
            // If this happens often, your old method might be safer,
        }

        // Update the game in localStorage
        let games = JSON.parse(localStorage.getItem("games")) || [];
        games = games.map(game => {
            if (game.id === Number(oldGame.id)) {
                return { ...game, imgPath: newImg, name: newName, link: newLink };
            }
            return game;
        });
        localStorage.setItem("games", JSON.stringify(games));

        // Re-apply the current search filter  
        handleSearch();

        // Close the edit form and reset state
        hideForms();
        currentEditingGame = null;
    }
    
	function saveGame(id, imgPath, name, link, category) {
		let games = JSON.parse(localStorage.getItem("games")) || [];
        // Check if game already exists
        const existingIndex = games.findIndex(game => game.id === id);
        if (existingIndex > -1) {
            games[existingIndex] = { id, imgPath, name, link, category };
        } else {
            games.push({ id, imgPath, name, link, category });
        }
        localStorage.setItem("games", JSON.stringify(games));
	}

    function removeGame(id) {
        let games = JSON.parse(localStorage.getItem("games")) || [];
        games = games.filter(game => game.id !== id);
        localStorage.setItem("games", JSON.stringify(games));
		handleSearch();
		updateGameCounts();
    }
	
	function loadGames() {
		let games = JSON.parse(localStorage.getItem("games")) || [];
		document.getElementById('playing-list').innerHTML = '';
        document.getElementById('plan-to-list').innerHTML = '';
        document.getElementById('on-hold-list').innerHTML = '';
        document.getElementById('maybe-list').innerHTML = '';
        document.getElementById('completed-list').innerHTML = '';

		games.forEach(game => {
            // Ensure valid data before adding
            if (game && game.id != null && game.name && game.category) {
                 addGameToList(game.id, game.imgPath || "https://github.com/hiro011/my-games/blob/main/default-game.jpeg?raw=true", game.name, game.link || "#", game.category);
            } else {
                console.warn("Skipping invalid game data from localStorage:", game);
            }
        });
        updateGameCounts(); // Call updateGameCounts here
	}

});
