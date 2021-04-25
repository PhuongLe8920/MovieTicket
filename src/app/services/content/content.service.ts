import { Injectable } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
    nav: false,
  };

  customOptionsforApp: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    // navText: ['&#8249', '&#8250;'],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
  };

  listNews = [
    {
      title: 'Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn',
      detail:
        'Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây thành phố HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!',
      img: 'assets/img/news/new1.jpg',
    },
    {
      title: '“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành',
      detail:
        'Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương tại 360 Giải Phóng!',
      img: 'assets/img/news/new2.jpg',
    },
    {
      title: 'Gái Già Lắm Chiêu V – Những cuộc đời vương giả',
      detail:
        'Bộ phim qui tụ dàn diễn viên nổi tiếng nhiều thế hệ từ Bắc tới Nam, trong đó NSND Lê Khanh, NSND Hồng Vân sẽ tái hợp và đóng cùng nữ diễn viên trẻ Kaity Nguyễn để hóa thân thành ba chị em xinh đẹp nhà họ Lý giàu sang, nổi danh',
      img: 'assets/img/news/new3.png',
    },
    {
      title:
        '6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất Hollywood',
      detail:
        'Hollywood luôn yêu thích những dự án điện ảnh với tiềm năng trở thành bom tấn. Trên con đường đó, đạo diễn là một trong những vị trí quan trọng nhất để “phù phép” cho một câu chuyện trở nên vĩ đại.',
      img: 'assets/img/news/new4.png',
    },
  ];

  listReview = [
    {
      title:
        '[Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân cảm động của Khả Như và Kiều Minh Tuấn',
      detail:
        'Như hai phần phim trước, Nắng 3 tiếp tục mang đến câu chuyện tình cha, mẹ - con đầy nước mắt của bộ ba nhân vật chính.',
      img: 'assets/img/review/review1.jpg',
    },
    {
      title: '[Review] Onward - Khi phép thuật mạnh mẽ nhất chính là tình thân',
      detail:
        'Tác phẩm mới nhất của Pixar tiếp tục là câu chuyện hài hước và cảm xúc về tình cảm gia đình.',
      img: 'assets/img/review/review2.jpg',
    },
    {
      title:
        '[Review] Gái Già Lắm Chiêu 3 - Cuộc chiến mẹ chồng - nàng dâu của giới siêu giàu xứ Huế',
      detail:
        'Tác phẩm mới nhất của bộ đôi đạo diễn Bảo Nhân và Nam Cito mang đến nhiều tiếng cười và ý nghĩa. Đừng để trailer lừa bạn như một tác phẩm nào đó nhé.',
      img: 'assets/img/review/review3.jpg',
    },
    {
      title:
        "[Review] Chị Chị Em Em - Tưởng phim tình cảm hóa ra 'hack não' muốn tung cả đầu",
      detail:
        'Bộ phim đầu tay ở vai trò đạo diễn của Kathy Uyên mang đến hàng loạt nút thắt “ảo diệu” và cảm xúc dâng trào.',
      img: 'assets/img/review/review4.jpg',
    },
  ];

  listPromotion = [
    {
      title: 'BHD 59K/VÉ CẢ TUẦN !!!',
      detail:
        'Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.',
      img: 'assets/img/promotion/pro1.jpg',
    },
    {
      title: 'TIX 1K/VÉ NGẠI CHI GIÁ VÉ',
      detail:
        'Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02 voucher thanh toán ZaloPay thả ga',
      img: 'assets/img/promotion/pro2.jpg',
    },
    {
      title: 'Sinh Nhật Mega GS',
      detail:
        'Đến hẹn lại lên, vậy là một năm nữa đã trôi qua và chúng ta lại đến tháng 8, tháng sinh nhật của Mega GS Cinemas.',
      img: 'assets/img/promotion/pro3.jpg',
    },
    {
      title: 'BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!',
      detail:
        'Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay.',
      img: 'assets/img/promotion/pro4.jpg',
    },
  ];

  listIcon = [
    {
      src: 'assets/img/icon/galaxycine.png',
      link: 'https://www.galaxycine.vn/',
      title: 'Galaxy',
    },
    {
      src: 'assets/img/icon/bhd.png',
      link: 'https://www.bhdstar.vn/',
      title: 'BHD',
    },
    {
      src: 'assets/img/icon/dongdacinema.png',
      link: 'http://ddcinema.vn/',
      title: 'Đống Đa',
    },
    {
      src: 'assets/img/icon/STARLIGHT.png',
      link: 'https://starlight.vn/',
      title: 'STARTLIGHT',
    },
    {
      src: 'assets/img/icon/cinestar.png',
      link: 'http://cinestar.com.vn/',
      title: 'Cinestar',
    },
    {
      src: 'assets/img/icon/TOUCH.png',
      link: 'https://touchcinema.com/',
      title: 'TOUCH',
    },
    {
      src: 'assets/img/icon/dcine.png',
      link: 'https://www.dcine.vn/',
      title: 'Dcine',
    },
    {
      src: 'assets/img/icon/bt.jpg',
      link: 'https://www.betacinemas.vn/home.htm',
      title: 'Beta',
    },
    {
      src: 'assets/img/icon/123go.png',
      link: 'https://webv3.123go.vn/',
      title: '123go',
    },
    {
      src: 'assets/img/icon/AGRIBANK.png',
      link: 'https://www.agribank.com.vn/',
      title: 'AGRIBANK',
    },
    {
      src: 'assets/img/icon/IVB.png',
      link: 'https://www.indovinabank.com.vn/',
      title: 'IVB',
    },
    {
      src: 'assets/img/icon/zalopay_icon.png',
      link: 'https://zalopay.vn/',
      title: 'zalopay',
    },
  ];

  listMobileSlide = [
    {
      src: 'assets/img/mobile-slide/slide1.jpg',
    },
    {
      src: 'assets/img/mobile-slide/slide2.jpg',
    },
    {
      src: 'assets/img/mobile-slide/slide3.jpg',
    },
    {
      src: 'assets/img/mobile-slide/slide4.jpg',
    },
    {
      src: 'assets/img/mobile-slide/slide5.jpg',
    },
    {
      src: 'assets/img/mobile-slide/slide6.jpg',
    },
    {
      src: 'assets/img/mobile-slide/slide7.jpg',
    },
    {
      src: 'assets/img/mobile-slide/slide8.jpg',
    },
    {
      src: 'assets/img/mobile-slide/slide9.jpg',
    },
    {
      src: 'assets/img/mobile-slide/slide10.jpg',
    },
    {
      src: 'assets/img/mobile-slide/slide11.jpg',
    },
    {
      src: 'assets/img/mobile-slide/slide12.jpg',
    },
    {
      src: 'assets/img/mobile-slide/slide13.jpg',
    },
    {
      src: 'assets/img/mobile-slide/slide14.jpg',
    },
    {
      src: 'assets/img/mobile-slide/slide15.jpg',
    },
    {
      src: 'assets/img/mobile-slide/slide16.jpg',
    },
  ]
  constructor() {}

}
