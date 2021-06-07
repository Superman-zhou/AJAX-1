// *********************************************************
// getHtml.onclick = () =>{
//     const request = new XMLHttpRequest()
//     request.open('GET','/2.html')
//     request.onload = () =>{
//         // 创建div标签
//         const div = document.createElement('div')
//         // 填写div内容
//         div.innerHTML = request.response
//         // 插入到身体里
//         document.body.appendChild(div)
//     }
//     request.onerror = () => {}
//     request.send()
// }
// *********************************************************


// 把onload和onerror改用onreadystatechange
getHtml.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.html')
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            if(request.status>=200 && request.status<300){
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)     
            }else{
                alert('加载html失败')
            }
        }
    }
    request.send()
} 

getCss.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/style.css')
    request.onload = () =>{
        // 创建style标签
        const style = document.createElement('style')
        // 填写style内容
        style.innerHTML = request.response
        //插到头里面
        document.head.appendChild(style)
    }
    request.onerror = ()=>{
        console.log('失败了')
    }
    // 发送请求
    request.send()
}

getJs.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onload = () =>{
        // 创建script标签
        const script = document.createElement('script')
        // 填写script内容
        script.innerHTML = request.response
        //插到头里面
        document.body.appendChild(script)
    }
    request.onerror = ()=>{
        console.log('失败了')
    }
    // 发送请求
    request.send()
}
getXML.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/1.xml')
    request.onreadystatechange = ()=>{
        console.log('1')
        if(request.readyState===4){
            if(request.status>=200 && request.status<300){
                const dom = request.responseXML
                const text = dom.getElementsByTagName("warning")[0].textContent
                console.log(text.trim())
            }
        }       
    }
    request.send()
}
getJSON.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/1.json')
    request.onreadystatechange = () =>{
        if(request.readyState===4 && request.status===200){
            const object = JSON.parse(request.response)
            jsonName.textContent = object.name
        }
    }
    request.send()
}

let n = 2
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n}.json`)
    request.onreadystatechange = () =>{
        if(request.readyState === 4 && request.status ===200){
            const array = JSON.parse(request.response)
            array.forEach(element => {
                const li = document.createElement("li")
                li.textContent = element.id
                xxx.appendChild(li)
            });
            n += 1
        }
    }
    request.send()
} 