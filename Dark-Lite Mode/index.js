const ThemeButton = document.getElementById('Toggle-Button');



function ChangeBackground(color) {

    document.body.style.backgroundColor = color

};

const headdingCollor = document.getElementById('headding1'); 

ThemeButton.addEventListener('click',() => {

   const CurrentColor = document.body.style.backgroundColor;

   if(!CurrentColor || CurrentColor == 'white') {

    ChangeBackground('black')

    ThemeButton.innerText = `LiteMode`;

    headdingCollor.style.color = 'white'

   }

   else {
   ChangeBackground('white')

   ThemeButton.innerText = `DarkMode`;
   headdingCollor.style.color = 'black'
   }
})