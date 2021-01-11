


// 토마토 누르면 배경색 변할 수 있게 하는 코드
const buttons = document.querySelectorAll('.tomato-button')
const body = document.querySelector('body')
const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

buttons.forEach(function(button){
    button.addEventListener('click',function(){
        let hex = '#'
        for(let i=0;i<6;i++){
            const index = Math.floor(Math.random()*hexValues.length)
            hex+=hexValues[index]
        }
        body.style.backgroundColor = hex
    })
})


