-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: storydb
-- ------------------------------------------------------
-- Server version	5.7.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `categoryid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_vietnamese_ci NOT NULL,
  PRIMARY KEY (`categoryid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Truyện Cổ tích Việt Nam'),(2,'Truyện Cổ tích Thế giới'),(3,'Truyện Dân gian'),(4,'Truyện ngụ ngôn'),(5,'Truyện cười');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comment` (
  `commentid` int(11) NOT NULL AUTO_INCREMENT,
  `storyid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `content` mediumtext COLLATE utf8_vietnamese_ci NOT NULL,
  `create_at` datetime NOT NULL,
  PRIMARY KEY (`commentid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `story`
--

DROP TABLE IF EXISTS `story`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `story` (
  `storyid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(250) COLLATE utf8_vietnamese_ci NOT NULL,
  `categoryid` int(11) NOT NULL,
  `image` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `content` longtext COLLATE utf8_vietnamese_ci NOT NULL,
  `description` longtext COLLATE utf8_vietnamese_ci NOT NULL,
  `totalstar` int(11) NOT NULL,
  `totalvote` int(11) NOT NULL,
  PRIMARY KEY (`storyid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `story`
--

LOCK TABLES `story` WRITE;
/*!40000 ALTER TABLE `story` DISABLE KEYS */;
INSERT INTO `story` VALUES (1,'Anh chàng chăn lợn',2,'http://doctruyencotich.vn/upload/images/20170510/truyen-co-tich-andersen-anh-chang-chan-lon.jpg','Ngày xưa, có một hoàng tử rất nghèo chỉ có một giang sơn nhỏ hẹp. Tuy nhiên, giang sơn ấy nhỏ thì nhỏ thật, nhưng cũng đủ để cho chàng kén được một người vợ và lúc này chính là lúc chàng đang muốn tìm người làm bạn trăm năm.\r\n\r\n \r\n\r\nChàng rất sẵn sàng hỏi công chúa con hoàng đế : \"Nàng có bằng lòng kết duyên với ta không ?\" Chàng rất có thể làm thế, vì danh tiếng của chàng vang lừng khắp vùng và có thể đến hàng trăm công chúa nghe chàng hỏi như thế sẽ trả lời : \"Vâng\"\r\n\r\n \r\n\r\nNhưng đây lại là con gái hoàng đế ! Các bạn hãy nghe đầu đuôi câu chuyện :\r\n\r\n \r\n\r\nTrên mộ vua cha mọc một cây hồng. Trời ! Cây hồng mới đẹp làm sao ! Cứ năm năm nó mới ra hoa một lần, lại chỉ mọc có một đóa, nhưng đó là một đóa hồng thơm dịu đến nỗi chỉ ngửi hoa thôi cũng đủ quên hết ưu phiền. Hoàng tử lại còn có một con họa mi hót hay tuyệt vời. Từ cái cổ họng nhỏ xíu của nó phát ra những khúc điệu thánh thót. Con gái hoàng đế nghe họ đồn vậy muốn có cả hoa hồng và họa mi. Hoàng tử bèn đặt cả hai thứ vào hai tráp bạc gửi biếu nàng.\r\n\r\n \r\n\r\nHoàng đế cho đem những thứ ấy đến cho ngài xem trong đại điện, nơi công chúa đang chơi trò tiếp khách với các cung nữ. Vừa nhìn thấy những tráp bạc, nàng vỗ tay hoan hỉ reo lên :\r\n\r\n \r\n\r\n- Ước gì được con mèo con thì thú quá !\r\n\r\n \r\n\r\nNhưng người ta lại lôi cây hồng ra trước.\r\n\r\n \r\n\r\nCác cung nữ rú lên :\r\n\r\n \r\n\r\n- Ố ! Đẹp quá !\r\n\r\n \r\n\r\nHoàng đế nói :\r\n\r\n \r\n\r\n- Đẹp, chưa đủ, phải nói là tuyệt mỹ mới xứng.\r\n\r\n \r\n\r\nNhưng công chúa chạy ra ngửi hoa và phụng phịu nói :\r\n\r\n \r\n\r\n- Ồ ! Tâu phụ vương, hoa thật chứ không phải hoa giả !\r\n\r\n \r\n\r\nBọn nịnh thần phụ hoạ :\r\n\r\n \r\n\r\n- Ôi chao ! Hoa hồng thật !\r\n\r\n \r\n\r\nHoàng đế phán :\r\n\r\n \r\n\r\n- Hãy xem cái tráp kia đựng gì đã, rồi hãy bực mình cũng chưa vội.\r\n\r\n \r\n\r\nNgười ta mở tráp cho con họa mi ra. Nó cất tiếng ca thánh thót, hay không còn chê vào đâu được.\r\n\r\n \r\n\r\nBọn cung nữ nói bằng một thứ tiếng Pháp rất dở như họ thường dùng :\r\n\r\n \r\n\r\n- Charmant ! Merveilleux ! (Dễ thương quá ! Tuyệt quá !)\r\n\r\n \r\n\r\nMột lão nịnh thần tán : \r\n\r\n \r\n\r\n- Con chim này làm hạ thần nhớ lại đến cái hộp đựng thuốc bào có máy hát của cố hoàng hậu, giống như hệt, từ giọng cho đến điệu.\r\n\r\n \r\n\r\n- Đúng lắm ! Đúng lắm ! Hoàng đế nói rồi òa lên khóc như một đứa trẻ con.\r\n\r\n \r\n\r\nCông chúa nói :\r\n\r\n \r\n\r\n- Không thể tin đây lại là một con họa mi thật.\r\n\r\n \r\n\r\nNhững người đem chim đến vội tâu :\r\n\r\n \r\n\r\n- Thưa đúng là chim thật đấy ạ !\r\n\r\n \r\n\r\n- Thế thì cho nó bay đi thôi !\r\n\r\n \r\n\r\nVà nàng kiên quyết không cho hoàng tử vào cung.\r\n\r\n \r\n\r\nNhưng chàng không hề nản lòng. Chàng lấy phẩm nâu và phẩm đen bôi lên mặt, kéo mũ sụp xuống tận mắt, giả vờ đi khập khiễng, bước vào trình diện và nói :\r\n\r\n \r\n\r\n- Thánh thượng vạn tuế ! Cúi xin thánh thượng cho kẻ bầy tôi vào hầu hạ trong hoàng cung.\r\n\r\n \r\n\r\n- Có nhiều người xin việc quá rồi. Nhưng ta cần một người chăn lợn, nhà ngươi có làm được việc ấy không ?\r\n\r\n \r\n\r\nHoàng tủ nhận chăn lợn. Người ta cho chàng một căn buồng tồi tàn gần chuồng lợn. Chàng cặm cụi suốt ngày và ngay tối đầu tiên chàng đã làm xong một cái nồi xin xắn có gắn đầy nhạc. Mỗi khi đặt nồi lên bếp, nhạc rung lên một điệu khúc cổ xưa của nước Đức.\r\n\r\n \r\n\r\nAch ! du lieber Augustin !\r\n\r\nAlles ist vack, vack, vack !\r\n\r\n( Ô này ! Augustin thân mến ơi ! mọi việc đều như ý, như ý, như ý! )\r\n\r\n \r\n\r\nNhưng kỳ diệu nhất là mỗi khi thò ngón tay vào đám hơi bốc ở nồi ra thì lập tức ngửi ngay thấy mùi tất cả các món ăn đang xào nấu trên tất cả các bếp trong kinh thành.\r\n\r\n \r\n\r\nNhất định là cái nồi ấy khác xa một bông hồng !\r\n\r\n \r\n\r\nCông chúa cùng tất cả các cung nữ đi chơi qua nghe thấy tiếng nhạc, dừng lại nghe và mê tít, vì nàng cũng biết chơi bản nhạc ấy.\r\n\r\n \r\n\r\nAch ! du lieber Augustin !\r\n\r\n \r\n\r\nNhưng phải nói thật: nàng chỉ biết chơi có mỗi một câu ấy, và chỉ biết đánh đàn kiểu mổ cò thôi. Công chúa thốt lên :\r\n\r\n \r\n\r\n- Chính là cái điệu khúc ta đã thuộc. Tên chăn lợn chẳng phải là người ngu đần đâu. Hãy vào hỏi hắn ta xem cái đàn của hắn ta đáng giá bao nhiêu tiền.\r\n\r\n \r\n\r\nMột cung nữ chui vào chuồng lợn, trước khi vào chuồng không quên đi guốc, rồi hỏi :\r\n\r\n \r\n\r\n- Cái nồi này anh lấy bao nhiêu tiền ?\r\n\r\n \r\n\r\n- Tôi lấy mười cái hôn của công chúa.\r\n\r\n \r\n\r\nCung nữ kêu lên :\r\n\r\n \r\n\r\n- Trời ơi là trời !\r\n\r\n \r\n\r\n- Không lấy kém đâu.\r\n\r\n \r\n\r\nCông chúa hỏi:\r\n\r\n \r\n\r\n- Hắn ta bảo sao ?\r\n\r\n \r\n\r\nCung nữ đáp:\r\n\r\n \r\n\r\n- Con chẳng dám nhắc lại đâu. Khiếp lắm !\r\n\r\n \r\n\r\n- Nói thầm cho ta hay vậy.\r\n\r\n \r\n\r\nNgười cung nữ tuân lệnh.\r\n\r\n \r\n\r\n- Quân thô tục.\r\n\r\n \r\n\r\nCông chúa kêu lên và bỏ đi. Nàng đi chưa được mười bước, nhạc lại bắt đầu thánh thót ngân vang:\r\n\r\n \r\n\r\nAch ! du lieber Augustin !\r\n\r\nAlles ist vack, vack, vack !\r\n\r\n \r\n\r\n- Chạy lại hỏi hắn ta có bằng lòng nhận mười cái hôn của các cung nữ không ?\r\n\r\n \r\n\r\nChàng chăn lợn trả lời:\r\n\r\n \r\n\r\n- Không, xin cảm ơn ! Mười cái hôn của công chúa kia, không thì xin cứ để nồi đấy cho tôi.\r\n\r\n \r\n\r\nCông chúa nói:\r\n\r\n \r\n\r\n- Bướng bỉnh thật ! Thôi đành, các người đứng vây lấy ta, đừng để ai trông thấy.\r\n\r\n \r\n\r\nCác cung nữ quây tròn lại và căng váy ra. Chàng chăn lợn được mười cái hôn, còn công chúa thì được cái nồi.\r\n\r\n \r\n\r\nMọi người đều vui sướng. Người ta đem cái nồi ra chơi suốt buổi tối. Không còn một bếp nào trong kinh thành giữ bí mật được nữa. Từ quan thị vệ cho đến các thợ giày, ai ăn gì họ đều biết cả. Các cung nữ thích quá, vừa vỗ tay vừa nhảy cẫng lên.\r\n\r\n \r\n\r\n- Chúng mình biết hết: ai sẽ là người ăn xúp với hạnh nhân hay trứng tráng, ai là người sẽ ăn thịt quay và món bột nấu với sữa. Tuyệt thật !\r\n\r\n \r\n\r\n- Đúng thế. Quan giám thị trong cung phụ hoạ.\r\n\r\n \r\n\r\nCông chúa dặn thêm :\r\n\r\n \r\n\r\n- Cốt nhất là không được bép xép gì vì ta là con gái hoàng đế, nghe chưa ?\r\n\r\n \r\n\r\nTất cả các cung nữ đồng thanh:\r\n\r\n \r\n\r\n- Trời sẽ giữ mồm giữ miệng cho chúng con !\r\n\r\n \r\n\r\nChàng chăn lợn, tức là hoàng tử mà mọi người tưởng là một anh chăn lợn chính cống, không để một ngày giờ trôi qua mà không sáng chế ra một thứ gì mới.\r\n\r\n \r\n\r\nChàng gọt được một cái Cơrêxen rất xinh. (Crécelle : một thứ nhạc cụ bằng gỗ hình tròn, có các thanh gỗ to nhỏ, khi quay có một cái cần đập vào các thanh gỗ phát ra tiếng)\r\n\r\n \r\n\r\nKhi quay, cái Cơrêxen ấy phát ra nào là điệu valse, nào điệu phi ngựa, điệu ponka, tóm lại, đủ các điệu nhảy trên đời.\r\n\r\n \r\n\r\nCông chúa đi qua, phải thốt ra :\r\n\r\n \r\n\r\n- Hay quá đi mất ! Ta chưa từng được nghe thứ nhạc mê ly ấy bao giờ. Vào hỏi hắn ta xem cái vật ấy đáng giá bao nhiêu; nhưng lần này thế nào thì thế, ta cũng không hôn hắn đâu đấy.\r\n\r\n \r\n\r\nNgười cung nữ vào hỏi rồi trở ra trả lời :\r\n\r\n \r\n\r\n- Lần này anh ta đòi một trăm cái hôn.\r\n\r\n \r\n\r\nCông chúa nói :\r\n\r\n \r\n\r\n- Điên ! - và nàng bỏ đi.\r\n\r\n \r\n\r\nNhưng đi chưa được mười bước công chúa đã dừng lại phán :\r\n\r\n \r\n\r\n- Phải khuyến khích nghệ thuật. Ta là con gái Hoàng đế. Vào bảo hắn là ta sẽ ban cho hắn mười cái hôn như hôm qua, còn bao nhiêu thì cung nữ của ta sẽ hôn cho đủ số.\r\n\r\n \r\n\r\nCung nữ giẫy nẩy:\r\n\r\n \r\n\r\n- Hôn cái anh chàng thô lỗ ấy à ?\r\n\r\n \r\n\r\nCông chúa nói:\r\n\r\n \r\n\r\n- Thì đã làm sao ? Đến ta đây cũng còn hôn được huống chi các ngươi là bề tôi do ta nuôi cho ăn và trả tiền !\r\n\r\n \r\n\r\nNgười cung nữ lại quay vào chuồng lợn. Chàng chăn lợn khăng khăng :\r\n\r\n \r\n\r\n- Một trăm cái hôn của công chúa, không thì ai giữ lấy của người ấy.\r\n\r\n \r\n\r\nCông chúa truyền:\r\n\r\n \r\n\r\n- Đứng quây lấy ta.\r\n\r\n \r\n\r\nCác cung nữ đứng lại thành vòng tròn và chàng chăn lợn bắt đầu hôn.\r\n\r\n \r\n\r\nHoàng đế đang đứng trên bao lơn trông ra, tự hỏi :\r\n\r\n \r\n\r\n- Có chuyện gì gần chuồng lợn thế kia ?\r\n\r\n \r\n\r\nNgài dụi mắt và đeo kính vào.\r\n\r\n \r\n\r\n- À! Bọn cung nữ đùa nghịch. Phải ra xem bọn chúng đùa nghịch gì mới được! Hoàng đế đi giày băng túp vào, xuống thang gác rõ nhanh.\r\n\r\n \r\n\r\nXuống đến sân, ngài rón rén lại gần. Thật ra làm thế cũng bằng thừa vì các cung nữ còn đang mải đếm từng cái hôn để gã chăn lợn khỏi hôn quá số được hưởng.\r\n\r\n \r\n\r\nHọ không biết có hoàng đế đi tới. Ngài kiễng chân nhìn vào và kêu lên :\r\n\r\n \r\n\r\n- Thế này là thế nào ?\r\n\r\n \r\n\r\nRồi ngài rút giày băng rúp quật bọn cung nữ túi bụi.\r\n\r\n \r\n\r\nChàng chăn lợn đang hôn đến cái thứ tám mươi sáu thì hoàng đế cáu tiết hét:\r\n\r\n \r\n\r\n- Cút ngay !\r\n\r\n \r\n\r\nThế là chàng chăn lợn và công chúa bị đuổi ra khỏi vương quốc.\r\n\r\n \r\n\r\nTrời mưa như trút nước. Công chúa òa lên khóc.\r\n\r\n \r\n\r\nNàng than vãn:\r\n\r\n \r\n\r\n- Khổ thân cho tôi ! Sao tôi chẳng lấy chàng hoàng tử đáng yêu có hay hơn không ?\r\n\r\n \r\n\r\nChàng chăn lợn chạy nấp sau một gốc cây, lau sạch phẩm nâu và phẩm đen trên mặt, cởi bỏ bộ quần áo xấu xí ra, trở lại chỗ công chúa trong bộ quần áo hoàng tử của mình và nói :\r\n\r\n \r\n\r\n- Ta đến đây cốt để nói cho công chúa biết là ta rất khinh công chúa. Công chúa không muốn yêu một hoàng tử thật thà phúc hậu, công chúa không hiểu giá trị của bông hồng lẫn họa mi, nhưng vì một vật nhỏ mọn mà công chúa hôn một tên chăn lợn ! Cho đáng kiếp !\r\n\r\n \r\n\r\nChàng lập tức quay về nước mình, vào nhà và khóa chặt cửa lại. Công chúa đến trước cửa nhà chàng hát mãi:\r\n\r\n \r\n\r\nAch ! du lieber Augustin !\r\n\r\nAlles ist vack, vack, vack !\r\n\r\n \r\n\r\nNhưng chẳng có hiệu quả.\r\n\r\n \r\n\r\nHoàng tử chẳng mở cửa.\r\n\r\n \r\n\r\n--HẾT--','Anh chàng chăn lợn kể về chàng hoàng tử nghèo vì muốn lấy được công chúa mà chấp nhận làm người chăn lợn. Hoàng tử tự sáng chế nhiều vật phẩm để lấy lòng và muốn công chúa yêu mình....Nhưng công chúa chỉ yêu vật phẩm kia và không chấp nhận anh chàng chăn lợn xấu xí... Và rồi đến lúc công chúa nhận ra thì đã quá muộn . Mời các bạn và các em cùng đọc truyện cổ tích này nhé.',0,0),(2,'Sự tích con Ve Sầu',1,'http://doctruyencotich.vn/upload/images/20180316/cicadamc.jpg','Ở làng nọ có hai anh em trai, cha mẹ đều mất sớm. Người em còn bé, vì vậy mọi công việc đều đến tay anh, lo toan trong nghèo khó, nhưng người anh hết lòng thương yêu em. Trồng lúa không đủ ăn, họ thường phải sống bằng hái rau, măng, củ mài trên rừng, bắt cá dưới suối. Công việc nặng nhọc anh giành phần mình; trong bữa ăn anh nhường em phần ngon. Mỗi lần đánh được cá, khi ăn anh phần em khúc giữa, còn mình chỉ ăn đầu và đuôi cá. Thấy anh đối xử với mình thường xuyên như vậy, thời gian trôi đi đã để lại cho em những suy nghĩ ích kỷ, vì em chưa bao giờ được ăn đầu cá và đuôi cá, cậu sinh nghi, cho rằng anh mình chả thương yêu gì mình.\r\n\r\n \r\n\r\nNhư thường lệ, hôm ấy hai anh em lên rừng đào củ mài, anh đào bới còn em nhặt củ. Hố đào càng sâu, càng được củ to. Thế nhưng không may anh mất thăng bằng, ngã cắm đầu xuống hố, hai chân chổng ngược lên trời. Hố hẹp lại sâu cho nên anh không tài nào nhúc nhích được, anh nói vọng lên:\r\n\r\n \r\n\r\nSự tích con Ve Sầu - Đọc truyện cổ tích Việt Nam hay chọn lọc\r\n\r\nSự tích con Ve Sầu - Đọc truyện cổ tích Việt Nam hay chọn lọc\r\n\r\n \r\n\r\n– Em ơi! cứu anh với, kéo anh lên, anh ngạt thở chết mất.\r\n\r\n \r\n\r\nLúc này người em mới đem những điều nghi ngờ bấy lâu nay nói ra, được dịp trả thù anh:\r\n\r\n“Hua pia quất choòi ải, hua pia cá choòi ải”\r\n\r\n(Đầu cá quất giúp anh, đầu cá mo giúp anh).\r\n\r\n \r\n\r\nMặc dầu vậy anh vẫn cố gắng nói với em:\r\n\r\n“Hua pia quất nhắng vạy dú xa, hua pia cá nhắng vạy dú khỉnh”\r\n\r\n(Đầu cá quất còn trên gác bếp, đầu cá mo còn ở trong trạn).\r\n\r\n \r\n\r\nNghe thấy anh bảo vậy, người em liền cắm đầu chạy một mạch về nhà để ăn, mặc cho anh kêu gào thảm thiết dưới hố sâu.\r\n\r\nĐến nhà, người em lao ngay vào gác bếp lấy đầu cá quất ra ăn, nhưng đầu cá toàn là xương, khô cứng như que củi, nó chịu không thể nào nhai nổi. Sau đó người em chạy lại trạn bát lấy đầu cá mo, trong đầu nó hình dung đây là món ăn béo bổ mà trước đây anh nó vẫn thường ăn, nhưng nó đã nhầm, cả hai đầu cá đều như nhau. Cho đến lúc này người em mới hiểu tình cảm của anh trai giành cho mình là tất cả những điều tốt đẹp nhất.\r\n\r\n \r\n\r\nNgười em chạy ngay lên rừng, bị ngã sấp, ngã ngửa để cứu lấy người anh. Nhưng trời ơi! Muộn mất rồi. Người anh bị ngạt thở, đã chết cứng từ lâu. Người em hối hận, thương anh, nó kêu khóc thảm thiết bên cạnh hố củ mài. Nó nhịn ăn, nhịn uống, khóc ròng rã hàng tháng trời, người gầy khô đét lại, mắt lồi ra mà chết.\r\n\r\n \r\n\r\nNgười anh chết biến thành cây cổ thụ to, còn em biến thành con ve sầu suốt ngày bám vào thân cây. Cứ đến ngày giáp hạt, mùa đào củ mài, con ve lại nhớ đến anh mình, kêu râm ran suốt ngày như tiếng gọi: “Anh, anh, anh…”, “mình gầy xác ve mắt lồi ra là vậy”.\r\n\r\n \r\n\r\n__HẾT__','Ở làng nọ có hai anh em trai, cha mẹ đều mất sớm. Người em còn bé, vì vậy mọi công việc đều đến tay anh, lo toan trong nghèo khó, nhưng người anh hết lòng thương yêu em. Trồng lúa không đủ ăn, họ thường phải sống bằng hái rau, măng, củ mài trên rừng, bắt cá dưới suối. Công việc nặng nhọc anh giành phần mình; trong bữa ăn anh nhường em phần ngon. Mỗi lần đánh được cá, khi ăn anh phần em khúc giữa, còn mình chỉ ăn đầu và đuôi cá. Thấy anh đối xử với mình thường xuyên như vậy, thời gian trôi đi đã để lại cho em những suy nghĩ ích kỷ, vì em chưa bao giờ được ăn đầu cá và đuôi cá, cậu sinh nghi, cho rằng anh mình chả thương yêu gì mình.',0,0),(3,'Nàng tiên cóc',1,'http://doctruyencotich.vn/upload/images/20161212/nang-tien-coc.jpg','Ngày xưa, có hai vợ chồng nông dân hiếm hoi, cầu Trời khấn Phật mãi người vợ mới có thai, nhưng đến khi sinh ra, không phải là người mà lại là một con cóc.\r\n\r\n \r\n\r\nCon cóc lớn lên, biết nói tiếng người, song hình thù sần sùi, xấu xí, khiến cha mẹ nó lấy làm buồn phiền, thường than thở với nhau: “Vợ chồng mình già cả, hiếm hoi, tưởng sinh được mụn con nối dòng, trông nom đỡ đần mình, ngờ đâu oan gia nghiệp báo lại sinh ra cóc, còn trông mong gì nữa”!\r\n\r\n \r\n\r\nCóc nghe thấy thế, khuyên cha mẹ đừng lo. Rồi ngay hôm sau cóc nhảy đi coi ruộng cho cha mẹ, và từ khi nó trông nom đồng áng thì chẳng có ai lấy trộm lúa ruộng nhà nó như trước nữa.\r\n\r\n \r\n\r\nMột hôm, có mấy thư sinh đi qua ruộng nó, dẫm lên lúa, bỗng nghe có tiếng lanh lảnh như giọng con gái bảo rằng: “Xin các cậu đi cho có ý tứ kẻo làm nát lúa nhà em”. Lũ thư sinh nhìn vào ruộng lúa, chẳng thấy ai, chỉ thấy một con cóc đang ngồi đó. Tiếng nói dịu ngọt làm cho một anh trong bọn đâm ra có cảm tình. Chàng thư sinh này bấy lâu đọc sách đạo thần tiên, tin tưởng có sự mầu nhiệm ở đời, nên về nhà nói với cha mẹ xin hỏi cóc làm vợ.\r\n\r\n \r\n\r\nBan đầu cha mẹ thư sinh tưởng con mình hóa dại, song anh ta cứ một mực đòi lấy cóc làm vợ cho kỳ được, nếu không thì thề quyết chẳng lấy ai. Người cha bèn kiếm cớ từ khước, bảo chỉ có một mình anh ta là con trai, cưới cóc về có sinh ra được con cái để nối dòng không? Thư sinh tin là sẽ có sự nhiệm màu xảy đến trong ngày cưới cóc về, Tiên Phật sẽ giúp cho cóc thành người có đức hạnh, nhan sắc hơn đời. Thấy con đã nhất quyết như vậy, cha mẹ anh ta cũng đành phải chiều theo, đem trầu cau đi hỏi cóc.\r\n\r\n \r\n\r\nĐến ngày cưới, bên nhà trai mang đủ lễ vật, đồ nữ trang, quần áo cho cô dâu như người thường, chàng rể hy vọng Tiên Phật hóa phép cho cóc thành một cô gái xinh tươi như chàng vẫn mộng tưởng. Cả hai họ cũng trông mong như vậy, nhưng đến khi rước dâu, mọi người phải tức cười và xấu hổ vì đưa đón một con cóc nhảy về nhà chồng.\r\n\r\n \r\n\r\nCha mẹ chồng vừa rầu, phiền cho con trai, vừa chua xót vì con dâu cóc, liền cấp ruộng cho đôi lứa đi ở riêng. Thư sinh cũng buồn lòng, cặm cụi học hành, nghiên cứu các khoa học thần bí, hy vọng gỡ rối cho gia đình, nhất là đối với cha mẹ già đang khát khao có cháu bế. Cóc thì siêng năng công việc ở nhà, thức khuya dậy sớm khuyên chồng chăm chỉ bút nghiên.\r\n\r\n \r\n\r\nMột hôm, anh cho cóc hay tin mình được bổ đi dạy ở trường tỉnh, ngỏ thật rằng mình không thể đưa vợ đi theo nếu vợ vẫn giữ lốt cóc. Từ ngày cưới về anh ta đã chịu biết bao lời chế diễu của hàng xóm, bè bạn. Hơn nữa, cha mẹ vẫn thúc dục anh lấy thêm vợ khác để có con nối nghiệp tông đường. Cóc lặng yên nghe chồng than thở, khuyên chồng chớ nên quá buồn phiền, và xin phép hôm sau về nhà thăm cha mẹ.\r\n\r\n \r\n\r\nSáng ngày, cóc đi theo chồng, được một quãng thì nhảy vào một cái bụi bên đường. Thư sinh dừng bước lại thì thấy ở bụi cây đi ra một cô gái xinh đẹp lạ lùng, quá sức ước mong của anh bấy lâu. Anh sung sướng ngẩn ngơ nhìn người vợ đẹp lại gần, say đắm ngắm nghía vợ từ đầu đến chân rồi thiết tha xin vợ từ đây cứ giữ hình người. Biết là vợ đã trút lốt cóc ra trong bụi, anh ta kiếm cớ đi lùi lại sau rồi chạy lẻn đến bụi tìm lốt cóc mà dấu vào mình.\r\n\r\n \r\n\r\nĐến nhà, cha mẹ thư sinh mừng rỡ thấy con dâu cóc đã hóa ra người xinh đẹp, dịu dàng. Anh chồng hân hoan thừa lúc mọi người không để ý đến, đem lốt da cóc bỏ vào bếp lửa cho tiêu tan. Hai vợ chồng ở lại nhà cha mẹ cả đôi bên luôn mấy ngày, vui vẻ tiệc tùng liên tiếp rồi mới trở về nhà.\r\n\r\n \r\n\r\nTrên đường về vợ kiếm cớ vào bụi cây để tìm lại lốt cũ, không thấy, chồng mới cho hay là mình đã lấy đốt đi rồi. Vợ đành phải giữ nguyên hình người để về với chồng.\r\n\r\n \r\n\r\nHai vợ chồng ăn ở với nhau đằm thắm vui vẻ, vợ sinh được nhiều con cái, chồng học thi đỗ cao làm nên chức lớn, sống một đời sung sướng.\r\n\r\n \r\n\r\n-- Hết --\r\n\r\n ','Ngày xưa, có hai vợ chồng nông dân hiếm hoi, cầu Trời khấn Phật mãi người vợ mới có thai, nhưng đến khi sinh ra, không phải là người mà lại là một con cóc.',0,0),(4,'Sự tích chuột chù',2,'http://doctruyencotich.vn/upload/images/20170610/su-tich-chuot-chu.jpg','Ngày xưa, xưa ơi là xưa, lúc các cô tiên còn hay xuống trần gian dạo chơi, chuột chù vốn là vật nuôi làm cảnh của một cô tiên. Lông nó lúc ấy trắng và thơm mùi hoa lan vì suốt ngày nó chỉ biết ăn hoa và củ lang mà thôi.\r\n\r\nThế rồi một hôm chuột chù theo cô tiên xuống trần gian chơi. Chợ đông người quá, các hàng ăn thì lại rất thơm ngon. Chuột chù ngạc nhiên, say mê dí mũi vào ngửi và kêu lên ầm ĩ: “Thích, thích, thích”. Nó cứ sy mê mà không để ý đến cô tiên, dần dần nó tuột lại phía sau mà không hay biết.\r\n\r\n \r\n\r\nTruyện cổ tích thế giới chọn lọc hấp dẫn\r\n\r\nĐọc truyện cổ tích thế giới: Sự tích chuột chù\r\n\r\nKhi trời sụp tối, chợ đã tan, nó mới biết mình bị lạc. Nó ngơ ngác tìm cô tiên rồi sợ phát khóc khi thấy một bầy mèo đi tới. Nó vội vàng bỏ chạy, dũi cả đất bùn nơi cống rãnh lên người để ẩn nấp. Càng lúc nó càng chui sâu xuống đất, đào thành cái hang để trốn trong đó.\r\n\r\n \r\n\r\nMấy ngày sau, đói quá, nó mới mon men bò ra chợ để hy vọng gặp lại chủ của mình. Mấy ngày vùi trong bùn đất nên nó đi đến đâu, mọi người bịt mũi dạt ra đến đấy. Ngay cả cô tiên, chủ của nó thấy vậy cũng bay lên cao, không nhận ra nó nữa. Lông nó trở nên đen thui, mùi hôi thật kinh khủng, khác hẳn ngày xưa. Thế là các cô tiên đi mất, từ đó chuột chù ở lại trần gian bơ vơ, phải tự tìm thức ăn và bị mọi người xua đuổi.\r\n\r\n \r\n\r\n__ HẾT __','Mời các bạn và các em cùng đọc truyện cổ tích thế giới đặc sắc \"Sự tích chuột chù\", các em có biết tại sao chuột chù vừa đen nhẻm vừa xấu xí, lại có mùi hôi \"rình\" khiến con người xa lánh không? Câu chuyện dưới đây sẽ giúp các bạn có được câu trả lời nhé!!!!',0,0);
/*!40000 ALTER TABLE `story` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(250) COLLATE utf8_vietnamese_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','admin'),(2,'hoang','hoang');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-23  2:28:57
