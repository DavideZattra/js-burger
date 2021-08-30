/**
 * 
 * A. define variables
 * 
 * 
*/


let validCoupons = ['BURGERMANIA20', 'SUPERDISCOUNT20']
let buttonPriceCalculator = document.getElementById("ms_price-calculator");
let burgerName = document.getElementById("ms_burger-name");

buttonPriceCalculator.addEventListener('click',
function(){
    
    if(burgerName.value.length === 0){
        alert('Inserisci un nome')
        
    } else {

        let burgerBasePrice = 20;
    
        let addOns = document.getElementsByClassName("ingrediente-aggiuntivo")
        
        for (let i = 0; i < addOns.length; i++){
            
            if ( addOns[i].checked === true ){
                
                burgerBasePrice += 2.5;
                
            }
        }
        console.log(burgerBasePrice)

        let userCoupon = document.getElementById('ms_discount-value').value;
        console.log(userCoupon)

        if (userCoupon.length > 0){

            if (validCoupons.includes(userCoupon)){

                burgerBasePrice = burgerBasePrice * 0.8;

            } else{

                alert('inserire un coupon valido!')

            }
            
        }
        console.log(burgerBasePrice)
        document.getElementById('ms_final-price').innerHTML = '&dollar; ' + burgerBasePrice
    }


});