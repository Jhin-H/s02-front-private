import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export const styleSheet = (windowHeight, windowWidth) => {
    const wp = windowWidth / 360
    const hp = windowHeight / 640
    return StyleSheet.create({

        "wrap": {
           
            "width": windowWidth,
            "height": windowHeight,

        },
        "inner": {

            "position": "relative",
            "width": 85 % ,
            "margin" : [0 , "auto"]

        },
        "backBtn": {
            "overflow": "hidden",
            "position": "absolute",
            "width": 30,
            "height": 30,
            "top": 37,
        },
        ".backBtnIcon": {

            "width": 100 %,

        },
        "titleWrap": {
            "opacity": 1,
            "position": "absolute",
            "overflow" : "hidden",
            "width": 172,
            "height": 40,
            "top": 96
        },
        "hightlight": {

            "width": 113,
            "height": 19,
            "background": rgba(252, 242, 0, 0.9599999785423279),
            "opacity": 1,
            "position": "absolute",
            "top": 21,
        },
        "title": {

            "width": 172 ,
            "color": rgba(29, 29, 29, 1),
            "position": "absolute",
            "top": 0,
            "left": 0,
            "fontFamily": "Apple SD Gothic Neo",
            "fontWeight": 800,
            "fontSize": 33,
        },
        "form": {

            "width": 100 %,
            "position": "absolute",
            "top": 170
        },
        "inputWrap": {
            "display": "flex",
            "justifyContent": "space-between",
            "alignItems": "baseline",
            "marginBottom": 7 %,
            "position": "relative",
        },
        "label": {
            "fontFamily":" Apple SD Gothic Neo",
            "fontWeight": 700,
            "fontSize": 18,
            "lineHeight": 21,
        },
        "searchBtn": {

            "width": 22,
            "height": 22,
            "marginTop": -5,
            "position": "absolute",
            "right": 0,
        },
        "searchIcon": {

            "width": 100 % ,

        },
        "input": {
            "width": 70 %,
            "border": "none",
            "borderBottomWidth": 3,
            "borderBottomColor": "#707070",
        },
        "addBtn": {
            "position": "absolute",
            "right": 0,
            "width": 22,
            "height": 22,
            "backgroundColor": "#00878d",
            "borderRadius": 50,
            "marginTop": -5 
        },
        "addIcon": {
            "width": 80 %,
            "margin": [0 ,'auto'],
            "position": "absolute",
            "left": 0,
            "right": 0,
            "top": 1.5,
        },
        "textfield": {

            "width": 100 %,
            "height": 50 %,
            "borderRadius": 20,
            "borderWidth": 3,
            "borderColor":"#707070",
            "marginTop": 10,
            "resize": "none",
            "fontFamily": "Apple SD Gothic Neo",
            "fontSize": 14
        },


        // 인풋 포커스 시 아웃라인이 사라지는 css

        // "input":focus {

        //     "outline":"none"
        // },
        
        // "textfield" : focus{
        //     "outline": "none"
        // },

        // ------------------------------------


      

        "selectBox" : {
            
            "width": 70 %,
            "border": "none",
            "borderBottomWidth": 3,
            "borderBottomColor" : "#707070",
            
        },

        "btnWrap" : {

            "width": 85 % ,
            "position": "absolute",
            "left": 0,
            "right": 0,
            "bottom": 30,
            "margin": [0, "auto"],
            "display": "flex",
            "justifyContent": "space-between",
            "alignItems": "center",
        
        },

        "requestBtn" : {

            "width": 140,
            "height": 50,
            "backgroundColor": "#00878d",
            "borderRadius": 50,
            "textAlign": "center",
            "color": "white",
            "fontSize": 21,
            "fontWeight": 500,
            "lineHeight": 50,
            "fontFamily": "Apple SD Gothic Neo"
          },
        
          "delBtn" : {
            "width": 140,
            "height": 50,
            "background": rgba(226, 56, 56, 1),
            "borderRadius": 50,
            "color": rgba(255, 255, 255, 1),
            "fontFamily": "Apple SD Gothic Neo",
            "fontWeight": 500,
            "fontSize": 21,
            "textAlign": "center",
            "lineHeight": 50,
          }




    })
}