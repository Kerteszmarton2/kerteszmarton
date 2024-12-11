function App(){               // App function eleje
    return React.createElement(                                     //Visszaad és létrehoz egy elemet
        "div",                                                      //Az elemen belül megjelenít egy div-et
        {
            className:"border"                                      //Add a divnek egy border nevű classt
        },
        "Doboz",
        React.createElement(BoxComponent),                          //Létrehozza ide a box komponenst
    )}

    function BoxComponent(props){                                   //box komponens eleje props értékkel.

        return React.createElement(                                 //Visszaad és létrehoz egy elemet
            "div",                                                  //Az elemen belül megjelenít egy div-et
     
            {
     
                style:{                                             //Stílust adunk meg a divnek
                    width:"200px",
                    height:"200px",
                    backgroundColor:"red",
     
                },
                className:"p-2 m-5 rounded",                         //Classt is adunka divnek
            }
        )}
ReactDOM.render (React.createElement(App),  document.getElementById("app-container")); //Rendereli az app function tartalmát a html "app-container" id-je  helyére.
            
          
         
   