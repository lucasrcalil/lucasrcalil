window.onload = function () {
  const birthdate = "2000-06-25";
  const birthDateObj = new Date(birthdate);
  const today = new Date();

  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDiff = today.getMonth() - birthDateObj.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDateObj.getDate())
  ) {
    age--;
  }

  document.getElementById("result").innerText = `${age} anos`;
};
