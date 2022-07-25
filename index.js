// Add your code here   
function submitData(name, email) {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({name: name, email: email})
    }
        fetch("http://localhost:3000/users", configurationObject)
        .then(function (res) {
            return res.json();
        })
        .then(function (obj) {
            document.body.innerHTML = obj.id
        })
            .catch(function (error) {
                alert("Bad things! Ragnarők!");
            })
    
}
