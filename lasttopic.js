
///fetch
//get
///asyncronus => async await =>syncronus


//fetch => Promise =>pendind ,resolve,reject





let fetchdata = async () => {

    let api = 'https://jsonplaceholder.typicode.com/albums'

    let res = await fetch(api)

    let data = await res.json()

    console.log(data)

    let show=document.querySelector('#datashow')
    data.map((e)=>{

        show.innerHTML+=`

        <tr>
        <td> ${e.id}</td>
        <td>${e.title}</td>
        <td>${e.body}</td>
        </tr>
        
        `
    }
)}
fetchdata();