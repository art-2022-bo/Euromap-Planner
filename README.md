# Backend and Frontend Template

Latest version: https://git.chalmers.se/courses/dit342/group-00-web

This template refers to itself as `group-00-web`. In your project, use your group number in place of `00`.

## Project Structure

| File        | Purpose           | What you do?  |
| ------------- | ------------- | ----- |
| `server/` | Backend server code | All your server code |
| [server/README.md](server/README.md) | Everything about the server | **READ ME** carefully! |
| `client/` | Frontend client code | All your client code |
| [client/README.md](client/README.md) | Everything about the client | **READ ME** carefully! |
| [docs/LOCAL_DEPLOYMENT.md](docs/LOCAL_DEPLOYMENT.md) | Local production deployment | Deploy your app local in production mode |

## Requirements

The version numbers in brackets indicate the tested versions but feel free to use more recent versions.
You can also use alternative tools if you know how to configure them (e.g., Firefox instead of Chrome).

* [Git](https://git-scm.com/) (v2) => [installation instructions](https://www.atlassian.com/git/tutorials/install-git)
  * [Add your Git username and set your email](https://docs.github.com/en/get-started/git-basics/setting-your-username-in-git)
    * `git config --global user.name "YOUR_USERNAME"` => check `git config --global user.name`
    * `git config --global user.email "email@example.com"` => check `git config --global user.email`
  * > **Windows users**: We recommend to use the [Git Bash](https://www.atlassian.com/git/tutorials/git-bash) shell from your Git installation or the Bash shell from the [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to run all shell commands for this project.
* [Chalmers GitLab](https://git.chalmers.se/) => Login with your **Chalmers CID** choosing "Sign in with" **Chalmers Login**. (contact [support@chalmers.se](mailto:support@chalmers.se) if you don't have one)
  * DIT342 course group: https://git.chalmers.se/courses/dit342
  * [Setup SSH key with Gitlab](https://docs.gitlab.com/user/ssh/#generate-an-ssh-key-pair)
    * Create an SSH key pair `ssh-keygen -t ed25519 -C "email@example.com"` (skip if you already have one)
    * Add your public SSH key to your Gitlab profile under https://git.chalmers.se/-/user_settings/ssh_keys
    * Make sure the email you use to commit is registered under https://git.chalmers.se/-/profile/emails
  * Checkout the [Backend-Frontend](https://git.chalmers.se/courses/dit342/group-00-web) template `git clone git@git.chalmers.se:courses/dit342/group-00-web.git`
* [Server Requirements](./server/README.md#Requirements)
* [Client Requirements](./client/README.md#Requirements)

## Getting started

```bash
# Clone repository
git clone git@git.chalmers.se:courses/dit342/group-00-web.git

# Change into the directory
cd group-00-web

# Setup backend
cd server && npm install
npm run dev

# Setup frontend
cd client && npm install
npm run serve
```

> Check out the detailed instructions for [backend](./server/README.md) and [frontend](./client/README.md).

## Visual Studio Code (VSCode)

Open the `server` and `client` in separate VSCode workspaces or open the combined [backend-frontend.code-workspace](./backend-frontend.code-workspace). Otherwise, workspace-specific settings don't work properly.

## System Definition (MS0)

### Purpose

The purpose of the system is to allow the users to search for different art/historical museums in the capital of an EU country
of their choice. This will help the user in viewing different museums in the capitals during their travel since all the
necessary information related to the museum will also be displayed to the user. The user can select specific museums and add them to their wishlist after creating and logging in to their accounts. The user can update/view thier wishlist after logging in. The user can also leave reviews about any of the musems (which will be displayed to other users) and rate the website out of five stars.


### Advanced features -  Intelligent Travel Planner
### Summary: 


Currently in our system, we are displaying the map of Europe to the user. In this, all the countries are selectable and when the user selects the country, different art and historical museums are displayed to the user. In this list, the user can select the different museums and add them to their wishlist. The wishlist option is only accessible if the user has created an account and is logged in. Additionally, the user can also leave reviews on the website (rating it out of 5 stars) and leave reviews on any of the museums. These reviews will also be displayed to other users. 


### The advance feature workflow will be: 
The user can select museum(s) that they want to visit on a particular day. 
Based on the user’s location (user will input this info) and the museums, the system will give the user an estimated travel time and the total travel distance.
The user can then select a travel mode (ie walking, car, bus).
Based on this travel mode, and the opening/closing hours of the selected museums and the traffic on the specific date and time - an optimised travel plan is presented to the user.
The user can also save a travel plan in their accounts.


### Backend Enhancement:
Integration of routes and distance calculation API’s.
Also processes opening/closing time of museums and aligns them according to the user’s availability.
Users can now pick a travel mode.
Users can store their travel plan and retrieve it.
New algorithm layer is implemented ( to calculate the optimised travel plan of the user)

### Frontend Enhancement:
Interactive museum trip planner UI - the user can select museums, select travel mode, save their travel plan, choose a date and a travel plan is generated.
Real-time travel mode selection - The user can re-select their travel mode at any location.
A new section in the UI is shown to display the user’s saved travel plans.


### Pages

- A map of Europe is displayed to the user where all the countries are clickable.
- The user can click on a specific country and then are prompted to select either art museums or historical museums.
- The user can also bookmark any museums that they want to visit which will then be added to the user's wishlist.
- The user can create and/or login to their account to view their wishlist. 


### Entity-Relationship (ER) Diagram

![ER Diagram](./images/er_diagram.png)

## Teaser (MS3)

![Teaser](./images/teaser.png)
