1612674, Nguyễn Minh Thông
a) Video demo & hướng dẫn sử dụng:
+ link github : 
https://github.com/nguyenminhthong2020/1612674-be 
+ link deploy (heroku) :
https://blockchain-btcn.herokuapp.com/login 
+ link youtube : 
https://www.youtube.com/watch?v=6yMe07KjvL8


b) Hướng dẫn chạy: 
+ Nếu chạy trên localhost :
cd vào thư mục 1612674 
run terminal : npm install 
run terminal : npm start

c) Một số điểm trong project :
1. Sử dụng thuật toán Proof of Work 
(folder models, 2 file block.js và block-chain.js)
2. Khi login, thông tin userInfo lưu trong cookie :
res.cookie("userInfo",...);
3. Trong folder helpers/virtual/nodeMining.js chứa code để chọn ra một 
node ngẫu nhiên trong list node để làm node miner (và nhận phần thưởng reward)
4. Ban dầu, trong hệ thống có 1 tài khoản ban đầu (trong folder config/first-block.js)
có private key là 324c9e7c840765e62042b6a2ad2935b7a2e0c256aa31dc26e8d49a3317bec822
với quy ước tổng số totalTChain là 1000000 (giống bên Bit Coin quy ước 21000000)

d) Các công nghệ sử dụng :
NodeJS (ExpressJS, Handlebars, socket.io,...). 
Dùng mô hình MVC - server side render với expressjs và hbs
Tạo key với elliptic

e) Tài liệu tham khảo : 
1) Slide bài giảng môn Các công nghệ mới trong phát triển phần mềm
https://drive.google.com/drive/u/1/folders/1DPLvauWwUp4QvIVhSlDWLLiVD_mFvBK3
2) https://github.com/morco6/Blockchain-Project-websocket
3) https://www.myetherwallet.com/create-wallet
4) https://etherscan.io/
