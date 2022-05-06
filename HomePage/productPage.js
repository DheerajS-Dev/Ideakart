var data = JSON.parse(localStorage.getItem("products")) ;

document.getElementById("my_img").src = data.imgUrl;
document.getElementById("name_book").innerText = data.head1;
document.getElementById("mini_head").innerText = data.head2;
document.getElementById("long_paragraph").innerText = data.details;
document.getElementById("price_para").innerText = "Rs. " + data.price;
document.getElementById("author_name").innerText = data.author;
document.getElementById("why_data_para").innerText = data.whyData;
document.getElementById("how_data_para").innerText = data.howData;
document.getElementById("why_details_para").innerText = data.whyDetails;
