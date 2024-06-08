document.addEventListener("DOMContentLoaded",function(){
    const blogForm = document.getElementById("blogForm");

    blogForm.addEventListener("submit", function(event){
        event.preventDefault();
        const titleValue = document.getElementById("titleBlog").value;
        const contentValue = document.getElementById("contentBlog").value;

        fetch("http://localhost:3000"), {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title:titleValue,
                content:contentValue
            })
        }
    })
})

const blogList = document.getElementById("blogList")
const url = "http://localhost:3000"

fetch(url)
.then(function (response){
    return response.json();
})
.then (function(blogs){
    for(let i=0; i<blogs.length; i++){
        const blog = blogs[i];
        const li = document.createElement("li");
        li.innerHTML =`
        <h3>${blog.title}</h3>
        <p>${blog.content}<p>
        `
        blogList.appendChild
    }
})