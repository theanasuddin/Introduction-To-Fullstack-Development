function setCookies() {
  // TODO: Get form values. getElementById() might be useful here.
  const text1 = document.getElementById("text1").value;
  const text2 = document.getElementById("text2").value;
  const checkbox = document.getElementById("checkbox").checked;

  // TODO: Set cookie for each form value.
  document.cookie = `text1=${text1}; path=/`;
  document.cookie = `text2=${text2}; path=/`;
  document.cookie = `checkbox=${checkbox}; path=/`;
}
