'use strict';

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
	console.debug('navAllStories', evt);
	hidePageComponents();
	putStoriesOnPage();
}

$body.on('click', '#nav-all', navAllStories);

// TDT code: Adding submit button functionality to show form
function navSubmitStoryClick(evt) {
	console.debug('navSubmitStoryClick', evt);
	hidePageComponents();
	$allStoriesList.show();
	$submitForm.show();
}

$navSubmitStory.on('click', navSubmitStoryClick);

// TDT code: Adding favorites button functionality to show favorites
function navFavoritesClick(evt) {
	console.debug('navFavoritesClick', evt);
	hidePageComponents();
	putFavoritesListOnPage();
}
$body.on('click', '#nav-favorites', navFavoritesClick);

// TDT code: Adding my stories button functionality to show my stories
function navMyStories(evt) {
	hidePageComponents();
	putUserStoriesOnPage();
	$ownStories.show();
}
$body.on('click', '#nav-my-stories', navMyStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
	console.debug('navLoginClick', evt);
	hidePageComponents();
	$loginForm.show();
	$signupForm.show();
}

$navLogin.on('click', navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
	console.debug('updateNavOnLogin');
	$('.main-nav-links').show();
	$navLogin.hide();
	$navLogOut.show();
	$navUserProfile.text(`${currentUser.username}`).show();
}
