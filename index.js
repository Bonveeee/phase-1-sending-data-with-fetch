// Add your code here
let formData = {
    name: "Steve",
    email: "steve@steve.com",
};


function submitData(name , email) {

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com",
        }),
    };

   return  fetch("http://localhost:3000/users", configurationObject)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.body.innerHTML += `<p>${data.id}</p>`;
        })
        .catch((error) => {
            alert("Ooops!error");
            console.log(error.message);
            document.body.innerHTML += `<p>${error.message}</p>`;
        });
}