document.getElementById("registerform").addEventListener("submit", (event) => {
    event.preventDefault();
    const usename = document.getElementById("username")
    const password = document.getElementById("password")

    const loginButton = document.querySelector("#register-button")

    const storedUsername = localStorage.getItem("username")
    const storedPassword = localStorage.getItem("password")

    loginButton.onclick = () => {
      localStorage.setItem("username", usename.value)
      localStorage.setItem("password", password.value)

      alert("User Succes Registered")
      window.location.href = "indexxxx.html"

      console.log("user registered")
      console.log(eachUsers)
}
})
