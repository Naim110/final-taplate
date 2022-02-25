
  @@ -26,3 +26,11 @@ for (let i = 0; i < dataItem.length; i++) {  })
}


let elem = document.querySelector('.main-carousel');
let flkty = new Flickity( elem, {
    autoPlay: true,
    freeScroll: true
});

  106  style.css 
@@ -140,7 +140,6 @@ body {


.travel_background {
  min-height: 8000px;
  padding: 30px 0 0;
position: relative;
  background: #e9e7e7 center 0;
@@ -199,7 +198,7 @@ width: 100%;
  text-align: justify;
}
.travel_button {

cursor: pointer;
  display: table;
  margin: 37px auto 0;
  min-height: 57px;
@@ -433,24 +432,21 @@ width: 100%;
.travel_paragraph-5 {
  margin: 30px 0 0 5px;
  width: 430px;

  font-size: 1.041666rem;
  line-height: 1.2;
  text-align: justify;

}
.travel_reserve-ticket {
  cursor: pointer;
  margin: 42px 0 0 6px;
  min-height: 54px;
  padding: 0 52px;
  position: relative;
  width: 256px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  background: #232323;
  color: #e9e7e7;

  font-size: 1.302083rem;
  font-weight: 900;
  line-height: 54px;
@@ -466,7 +462,6 @@ width: 100%;
  margin: 12px 12px 0 0;
}
.travel_l-constrained {

  margin: 56px auto 0;
  position: relative;
  width: 1440px;
@@ -602,7 +597,7 @@ margin: 0 43px 0 0;
  left: 50%;
  position: absolute;
  top: 0;

cursor: pointer;
  margin-left: 40.5px;

}
@@ -698,6 +693,7 @@ margin: 0 43px 0 0;
  margin: 149px auto 0;
  position: relative;
  width: 1440px;
  padding-bottom: 5rem;
}

.travel_group-6 {
@@ -789,7 +785,7 @@ margin: 0 43px 0 0;
  float: right;
  height: 19px;
  position: relative;

cursor: pointer;
  width: 19px;

}
@@ -817,7 +813,7 @@ margin: 0 43px 0 0;
}
.travel_rectangle {
  height: 3px;
  margin: 20px auto 0;
  margin: 10px auto 0;
  background-color: #232323;

}
@@ -949,38 +945,20 @@ margin: 0 43px 0 0;
  text-align: center;
}
.travel_row-12 {

display: flex;
  margin: 47px auto 0;
  position: relative;
  width: 1296px;
}

.travel_row-12 > * {
  float: left;
  margin: 0 19px 0 0;
}
.travel_row-12 > *:last-child {
  margin-right: 0 !important;
}


.travel_wrapper-14 {
  height: 427px;
  position: relative;
  width: 434px;
}
.travel_section-8 {
  left: 50%;
  min-height: 427px;
  padding: 71px 38px 67px;
  position: absolute;
  top: 0;
  width: 392px;
  border: 3px solid #232323;

  -webkit-border-radius: 11.5px;
  -moz-border-radius: 11.5px;
  border-radius: 11.5px;
  margin-left: -175px;
}
.travel_ellipse {
  display: block;
  margin: 0 auto;
@@ -1011,7 +989,7 @@ margin: 0 43px 0 0;
  border: 3px solid #232323;
  -webkit-border-radius: 11.5px;
  -moz-border-radius: 11.5px;

cursor: pointer;
  border-radius: 11.5px;
  background: #e9e7e7;
  -moz-background-clip: padding;
@@ -1033,19 +1011,7 @@ margin: 0 43px 0 0;
  top: 34px;
  margin-left: -17px;
}
.travel_section-9 {

  min-height: 427px;
  padding: 71px 39px 67px;
  position: relative;
  width: 392px;
  border: 3px solid #232323;

  -webkit-border-radius: 11.5px;

  -moz-border-radius: 11.5px;
  border-radius: 11.5px;
}
.travel_ellipse-2 {
  display: block;
  margin: 0 auto;
@@ -1070,25 +1036,8 @@ margin: 0 43px 0 0;
  text-align: justify;
}

.travel_wrapper-15 {
  height: 427px;
  position: relative;
  width: 432px;
}

.travel_section-10 {
  left: 50%;
  min-height: 427px;
  padding: 71px 39px 67px;
  position: absolute;
  top: 0;
  width: 392px;
  border: 3px solid #232323; 
  -webkit-border-radius: 11.5px;
  -moz-border-radius: 11.5px;
  border-radius: 11.5px;
  margin-left: -216px;
}

.travel_ellipse-3 {
  display: block;

@@ -1112,6 +1061,7 @@ margin: 0 43px 0 0;
  text-align: justify;
}
.travel_arrow-3 {
  cursor: pointer;
  height: 76px;
  left: 50%;
  position: absolute;
@@ -1376,4 +1326,34 @@ transition:all 1s;
  background-color: transparent;
padding: 0px 5px;

} 
}

.my-carousel-container{
    width: 100%;
}


.travel_section-item {
  width: 20rem;
  height: 25rem;
  padding: 71px 38px 67px;
  border: 3px solid #232323;
  border-radius: 11.5px;
  margin: 1rem;
}

.accordion-button,.accordion-item{
  background-color: transparent;
  border: none;
}
.accordion-button:focus{
  box-shadow: none;
}

.accordion-button:not(.collapsed){
  color:initial;
  background-color: transparent !important
} 
 .accordion-button::after,.accordion-button:not(.collapsed)::after{
  background-image: url("./images/cross.png")
}  