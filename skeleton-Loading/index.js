const template = document.querySelector("#card-template")
const cards = document.querySelector(".cards");

for (let index = 0; index < 15; index++) {
    cards.append(template.content.cloneNode(true))

}

fetch("https://jsonplaceholder.typicode.com/posts")
.then(resp=>resp.json())
.then(posts => {
    cards.innerHTML = ''
    posts.forEach(post => {
      const div = template.content.cloneNode(true)
      div.querySelector('[data-img]').innerHTML = `<img
                            src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721779200&semt=ais_user" />`
      div.querySelector('[data-title]').textContent = post.title
      div.querySelector('[data-content]').textContent = post.body
      cards.append(div)
    })
})