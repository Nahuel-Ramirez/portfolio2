const urlBase = "https://api.github.com";

const getRepos = () => {
  fetch(urlBase + `/users/Nahuel-Ramirez/repos`, {
    headers: {
      accept: "application/vnd.github.v3+json",
    },
  })
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};

getRepos();

const repos = document.querySelector(".repos");
