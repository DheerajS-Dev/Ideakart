data = {
  imgUrl: "https://m.media-amazon.com/images/I/41xgPSqzJnL.jpg",
  head1: "Superior: The Return of Race Science",
  head2: "Angela Saini's Superior: The Return of Race Science",
  details:
    "When you see how power has shaped the idea of race, then you can start to understand its meaning. For millennia, dominant societies have had the habit of believing their own people to be the best, deep down: the more powerful they become, the more power begins to be framed as natural, as well as cultural. In the twenty-first century, we like to believe that we have moved beyond Scientific racism, that most people accept race as a social construct, not a biological one. But race science is experiencing a revival, fuelled by the misuse of science by certain political groups. Even well-intentioned scientists, through their use of racial Categories in Genetics and medicine, betray their suspicion that race has some basis in biology. In truth, it is no more real than it was hundreds of years ago, when our racial hierarchies were devised by those in power. In Superior, award-winning author Angela Saini explores the concept of race, from its origins to the present day. Engaging with geneticists, anthropologists, historians and social scientists from across the globe, Superior is a rigorous, much-needed examination of the insidious and destructive nature of race science. ",
  price: "407",
  author: "Angela Saini",
  whyData:
    "Why you should read Superior: The Return of Race Science by Angela Saini",
  whyDetails:
    "This book has been written by Risto Siilasmaa, who has written books like Transforming NOKIA: The Power of Paranoid Optimism to Lead Through Colossal Change. The books are written in Business, Strategy & Management category. This book is read by people who are interested in reading books in category : Business, Strategy & Management. So, if you want to explore books similar to This book, you must read and buy this book.",
  howData:
    "How long would it take for you to read Superior: The Return of Race Science",
};

document.getElementById("my_img").src = data.imgUrl;
document.getElementById("name_book").innerText = data.head1;
document.getElementById("mini_head").innerText = data.head2;
document.getElementById("long_paragraph").innerText = data.details;
document.getElementById("price_para").innerText = "Rs. " + data.price;
document.getElementById("author_name").innerText = data.author;
document.getElementById("why_data_para").innerText = data.whyData;
document.getElementById("how_data_para").innerText = data.howData;
document.getElementById("why_details_para").innerText = data.whyDetails;
