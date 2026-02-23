document.addEventListener("userDataReady", function (event) {
  const data = JSON.parse(event.detail.jsonText);
  const contactsDiv = document.getElementById("contacts");
  const template = document.getElementById("user-card-template");

  data.forEach((user) => {
    const clone = template.content.cloneNode(true);

    const img = clone.querySelector("img");
    img.src = user.avatar;
    img.alt = `${user.firstName} ${user.lastName}`;

    clone.querySelector(
      "h1"
    ).textContent = `${user.firstName} ${user.lastName}`;
    clone.querySelector(".email").textContent = user.email;
    clone.querySelector(".phone span").textContent = user.phoneNumber;

    const addressDiv = clone.querySelector(".address");
    addressDiv.children[0].textContent = user.address.streetAddress;
    addressDiv.children[1].textContent = `${user.address.zipCode} ${user.address.city}`;
    addressDiv.children[2].textContent = user.address.country;

    const homepageLink = clone.querySelector(".homepage a");
    homepageLink.href = user.homepage;
    homepageLink.textContent = user.homepage;

    contactsDiv.appendChild(clone);
  });
});

fetchUserData();
