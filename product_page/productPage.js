var data = JSON.parse(localStorage.getItem("products")) ;

document.getElementById("my_img").src = data.imgUrl;
document.getElementById("name_book").innerText = data.head1;
document.getElementById("mini_head").innerText = data.head2;
document.getElementById("long_paragraph").innerText = data.details;
document.getElementById("price_para").innerText = "Rs. " + data.price;
document.getElementById("price_mini").innerText = "Rs. " + data.price;
document.getElementById("author_name").innerText = data.author;
document.getElementById("why_data_para").innerText = data.whyData;
document.getElementById("how_data_para").innerText = data.howData;
document.getElementById("why_details_para").innerText = data.whyDetails;
document.getElementById("pages").innerText = data.PageNos;

buy_now = document.querySelector("#orange-buy-now");
buy_now.addEventListener("click", myFunc);

buy_now1 = document.querySelector("#table-buy");
buy_now1.addEventListener("click", myFunc);

buy_now2 = document.querySelector("#clickHere");
buy_now2.setAttribute("href",data.buyNow) ;
buy_now2.addEventListener("click", myFunc);

function myFunc() {
  window.open(data.buyNow, "_blank");
}
