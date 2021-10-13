const button = document.querySelector('button')

function buttonClicked(evt) {
    evt.preventDefault()
    axios.get("https://swapi.dev/api/planets?search=Alderaan")
    .then(res => {
        const resData=res.data.results[0].residents
        for(let i=0; i< resData.length; i++){
        axios.get(resData[i])
        .then(res => {
            console.log(res.data)
            let newElement=document.createElement('h2')
            let newText=document.createTextNode(res.data.name)
            newElement.appendChild(newText)
            document.querySelector('body').appendChild(newElement)
        })}
        // console.log(res.data.results[0].residents)
    })
    .catch(error =>{
        console.log(error)
    })
}

button.addEventListener('click', buttonClicked)
