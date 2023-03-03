const boldyElement = document.querySelector("body");

boldyElement.addEventListener('mousemove', (event)=>{
    const xPosition = event.offsetX;
    const yPosition = event.offsetY;
    const spanElement = document.createElement('span');

    spanElement.style.left = xPosition + 'px';
    spanElement.style.top = yPosition + "px";

    const size = Math.random() * 100;
    spanElement.style.width = size + "px";
    spanElement.style.height = size + "px";
    boldyElement.appendChild(spanElement);
    
    setTimeout(()=>{
        spanElement.remove()
    }, 3000)
})