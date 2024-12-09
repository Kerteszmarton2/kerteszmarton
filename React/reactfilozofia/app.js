const btn =document.createElement('button');
btn.onclick=function(){
    alert("Ez egy natív kód");
}
btn.innerHTML="Natív gomb";
document.getElementById("native-button-container").appendChild(btn);



const gomb =React.createElement(
    'button',
    {
    onClick: function() {
            alert('Klikk esemény történt');
        },
    
    },
"React"
);

ReactDOM.render(gomb, document.getElementById('react-button-container'));