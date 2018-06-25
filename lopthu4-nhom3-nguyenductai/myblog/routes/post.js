'use strict';
var express = require('express');
var router = express.Router();

var posts = [{
  time: '15/6/2018',
  comment: 0,
  title: 'Nga - Saudi Arabia: Tiệc "5 sao" rực rỡ',
  content: 'Chủ nhà Nga bước vào World Cup 2018 với thành tích 7 trận liên tiếp không thắng và họ chịu sức ép phải khởi đầu giải đấu trước khán giả nhà bằng một màn trình diễn tốt trước Saudi Arabia vừa thua liền 3 trận. Họ trung ra một đội hình khá dày dạn kinh nghiệm trong khi Saudi Arabia có sự xuất hiện của tiền đạo Al Sahlawi, người đã ghi 16 bàn ở vòng loại để ngang bằng Robert Lewandowski.',
}, {
  time: '16/6/2018',
  comment: 0,
  title: 'Ai Cập – Uruguay: Siêu sao bất ngờ, rực sáng phút 89',
  content: 'Dù Mohamed Salah đã bình phục chấn thương vai gặp phải ở chung kết Champions League nhưng HLV Hector Cuper đã không mạo hiểm tung ngôi sao của Liverpool ra sân đá chính cho ĐT Ai Cập ngay từ đầu ở trận mở màn bảng B World Cup 2018 dù hôm nay (15/6/2018) chính là sinh nhật lần thứ 26 của Salah.',
}, {
  time: '17/6/2018',
  comment: 0,
  title: 'Argentina - Iceland: Messi hỏng penalty, "ngựa ô" gây địa chấn',
  content: 'Được đánh giá cao hơn rất nhiều, Argentina tự tin bước ra sân Otkrytiye Arena trong cuộc đối đầu với Iceland. Nhưng ông lớn xứ Nam Mỹ không lường được rằng, Iceland lại có thể gây ra nhiều khó khăn đến thế trong trận ra quân của cả hai tại World Cup 2018.',
}, {
  time: '18/6/2018',
  comment: 0,
  title: 'Đức - Mexico: Ra đòn choáng váng, chiến tích tuyệt đỉnh',
  content: 'ĐT Mexico gây bất ngờ khi nhập cuộc tự tin trước Đức. Ngay phút thứ nhất, họ ban bật rất hay, Lozano thoát xuống hay bên cánh trái, đi vào trung lộ rồi dứt điểm nhưng Boateng kịp đưa chân ngăn chặn. Nhà ĐKVĐ liền đáp trả bằng pha dứt điểm chéo góc của Werner.',
}, {
  time: '19/6/2018',
  comment: 0,
  title: 'Bỉ - Panama: Siêu phẩm mở màn, cú đúp siêu sao',
  content: 'Đội tuyển Bỉ được đánh giá rất cao tại World Cup 2018. Trận ra quân gặp đối thủ yếu như Panama là thời cơ tuyệt vời để thầy trò Roberto Martinez phô trương sức mạnh. "Quỷ đỏ" tung vào sân đội hình tối ưu với Lukaku, Hazard, De Bruyne trên hàng công.',
}, {
  time: '20/6/2018',
  comment: 0,
  title: 'Anh - Tunisia: Trọng pháo bùng nổ, vỡ òa phút bù giờ',
  content: 'ĐT Anh ra sân với đội hình tương đối "lạ mắt", nhưng lại được HLV Gareth Southgate ưa dùng. Trong sơ đồ 3-5-2, người sát cánh bên cạnh Harry Kane không phải Jamie Vardy, mà là Raheem Sterling. Trong khi đó, Tunisia khi phải đối đầu với ông lớn châu Âu, tung ra toàn bộ nguồn lực tốt nhất của mình.',
}];

// router: /post-layout/
router.get('/', function(req, res) {
  res.render('post-layout.html');
});

router.post('/', function(req, res) {
  var idx = req.body.id;
  if (idx >= 0) {
    posts.splice(idx, 1);
  };
  res.send(posts);
  res.end();
})

//router: /post-layout/post
router.get('/post', function(req, res) {
  res.send(posts);
  res.end();
});

router.post('/post', function(req, res) {
  console.log(req.body);
  posts.unshift(req.body);
  res.send(posts);
  res.end();
});

router.delete('/post', function(req, res) {
  var idx = req.body.id;
  if (idx >= 0) {
    posts.splice(idx, 1);
  };
  res.send(posts);
  res.end();
})

//router: /post-layout/post-detail
router.get('/post-detail', function(req, res) {
  res.render('post-detail.html');
});

module.exports = router;
