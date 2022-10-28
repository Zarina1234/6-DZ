
const ROOT = document.getElementById('root')

const BtnOne = document.createElement ('button')
ROOT.append(BtnOne)
BtnOne.textContent = 'Show modal 1'
BtnOne.style.cssText = `
display: inline-block; 
box-sizing: border-box;
padding: 0 25px;
margin: 0 15px 15px 0;
outline: none;
border: 1px solid #fff;
border-radius: 50px;
height: 46px;
line-height: 46px;
font-size: 14px;
font-weight: 600;
text-decoration: none;
color: #444;
background-color: #fff;
box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
cursor: pointer;
user-select: none;
appearance: none;
touch-action: manipulation;  
vertical-align: top;
transition: box-shadow 0.2s;
position: relative;
top: 25px;
`

const BtnTwo = document.createElement ('button')
ROOT.append(BtnTwo)
BtnTwo.textContent = 'Show modal 2'
BtnTwo.style.cssText = `
display: inline-block; 
box-sizing: border-box;
padding: 0 25px;
margin: 0 15px 15px 0;
outline: none;
border: 1px solid #fff;
border-radius: 50px;
height: 46px;
line-height: 46px;
font-size: 14px;
font-weight: 600;
text-decoration: none;
color: #444;
background-color: #fff;
box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
cursor: pointer;
user-select: none;
appearance: none;
touch-action: manipulation;  
vertical-align: top;
transition: box-shadow 0.2s;
position: relative;
top: 25px;
`

const BtnThree = document.createElement ('button')
ROOT.append(BtnThree)
BtnThree.textContent = 'Show modal 3'
BtnThree.style.cssText = `
display: inline-block; 
box-sizing: border-box;
padding: 0 25px;
margin: 0 15px 15px 0;
outline: none;
border: 1px solid #fff;
border-radius: 50px;
height: 46px;
line-height: 46px;
font-size: 14px;
font-weight: 600;
text-decoration: none;
color: #444;
background-color: #fff;
box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
cursor: pointer;
user-select: none;
appearance: none;
touch-action: manipulation;  
vertical-align: top;
transition: box-shadow 0.2s;
position: relative;
top: 25px;
`

const modal = document.createElement('div')
modal.style.cssText = `
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #00000060;
position: fixed;
top: 0;
left: 0;
`


const modalWindow = document.createElement ('div')
modalWindow.innerHTML = `
<h1>I'm a window😍</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus debitis optio odit recusandae sint maxime fuga error vero nihil iure dolore iusto ea tempora, quam minima officiis impedit sit!
</p>
`

modalWindow.style.cssText = `
width: 1050px;
height: 150px;
background-color: white;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`

modal.append(modalWindow);


BtnOne.addEventListener('click', ()=> {
ROOT.append(modal)
console.log('clicked');
}
)

BtnTwo.addEventListener('click', ()=> {
ROOT.append(modal)
console.log('clicked');
}
)

BtnThree.addEventListener('click', ()=> {
ROOT.append(modal)
console.log('clicked');
}
)


const closeWindow = document.createElement('button')
closeWindow.textContent = '❎'
modalWindow.append(closeWindow)

closeWindow.style.cssText = `
width: 28px;
heght: 20px;
border: none;
background-color: #fff;
font-size: 20px;
cursor: pointer;
transform: translate(511px, -118px);
`
closeWindow.addEventListener('click', (event) => {
    modal.remove()
}
)
modal.show();
ROOT.append(modal)