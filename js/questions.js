const quizData = [
  {
    "question": "Phần của đường bộ được sử dụng cho phương tiện giao thông đường bộ đi lại là gì?",
    "options": [
      "Phần mặt đường và lề đường.",
      "Phần đường xe chạy.",
      "Phần đường xe cơ giới."
    ],
    "answer": "Phần đường xe chạy."
  },
  {
    "question": "Làn đường là gì?",
    "options": [
      "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
      "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có đủ chiều rộng cho xe chạy an toàn.",
      "Là đường cho xe ô tô chạy, dừng, đỗ an toàn."
    ],
    "answer": "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có đủ chiều rộng cho xe chạy an toàn."
  },
  {
    "question": "Khổ giới hạn của đường bộ được hiểu như thế nào là đúng?",
    "options": [
      "Khổ giới hạn của đường bộ là khoảng trống có kích thước giới hạn về chiều rộng, chiều cao của đường bộ để các xe, bao gồm cả hàng hoá xếp trên xe đi qua được an toàn và được xác định theo quy chuẩn, tiêu chuẩn kỹ thuật của đường bộ.",
      "Là khoảng trống có kích thước giới hạn về chiều rộng của đường, cầu, bến phà, hầm trên đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.",
      "Là khoảng trống có kích thước giới hạn về chiều cao của cầu, bến phà, hầm trên đường bộ để các xe đi qua được an toàn."
    ],
    "answer": "Khổ giới hạn của đường bộ là khoảng trống có kích thước giới hạn về chiều rộng, chiều cao của đường bộ để các xe, bao gồm cả hàng hoá xếp trên xe đi qua được an toàn và được xác định theo quy chuẩn, tiêu chuẩn kỹ thuật của đường bộ."
  },
  {
    "question": "Dải phân cách được lắp đặt để làm gì?",
    "options": [
      "Để phân chia các làn đường dành cho xe cơ giới và xe thô sơ trên đường cao tốc.",
      "Để phân chia phần đường xe chạy thành hai chiều riêng biệt hoặc để phân chia phần đường dành cho xe cơ giới và xe thô sơ hoặc của nhiều loại xe khác nhau trên cùng một chiều đường.",
      "Để phân tách phần đường xe chạy và hành lang an toàn giao thông."
    ],
    "answer": "Để phân chia phần đường xe chạy thành hai chiều riêng biệt hoặc để phân chia phần đường dành cho xe cơ giới và xe thô sơ hoặc của nhiều loại xe khác nhau trên cùng một chiều đường."
  },
  {
    "question": "Vạch kẻ đường là gì?",
    "options": [
      "Là báo hiệu đường bộ để hỗ trợ cảnh báo nguy hiểm cho người tham gia giao thông đường bộ.",
      "Là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.",
      "Là báo hiệu cho người tham gia giao thông đường bộ về các thông tin của đường bộ.",
      "Cả ba ý trên."
    ],
    "answer": "Là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại."
  },
  {
    "question": "Người điều khiển phương tiện tham gia giao thông đường bộ được hiểu như thế nào là đúng?",
    "options": [
      "Là người điều khiển xe cơ giới, người điều khiển xe thô sơ, người điều khiển xe máy chuyên dùng.",
      "Là người được giao nhiệm vụ hướng dẫn giao thông trên đường bộ.",
      "Cả hai ý trên."
    ],
    "answer": "Là người điều khiển xe cơ giới, người điều khiển xe thô sơ, người điều khiển xe máy chuyên dùng."
  },
  {
    "question": "Người lái xe được hiểu như thế nào là đúng?",
    "options": [
      "Là người điều khiển xe cơ giới.",
      "Là người điều khiển xe thô sơ.",
      "Là người điều khiển xe máy chuyên dùng."
    ],
    "answer": "Là người điều khiển xe cơ giới."
  },
  {
    "question": "Trong nhóm các phương tiện giao thông đường bộ dưới đây, nhóm phương tiện nào là xe cơ giới?",
    "options": [
      "Xe ô tô; máy kéo; xe mô tô hai bánh; xe mô tô ba bánh; xe gắn máy; xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng; xe đạp, xe đạp máy, xe đạp điện.",
      "Xe ô tô; rơ moóc được kéo bởi xe ô tô; sơ mi rơ moóc được kéo bởi ô tô đầu kéo; xe chở người bốn bánh có gắn động cơ; xe chở hàng bốn bánh có gắn động cơ; xe mô tô, xe gắn máy và các loại xe tương tự."
    ],
    "answer": "Xe ô tô; rơ moóc được kéo bởi xe ô tô; sơ mi rơ moóc được kéo bởi ô tô đầu kéo; xe chở người bốn bánh có gắn động cơ; xe chở hàng bốn bánh có gắn động cơ; xe mô tô, xe gắn máy và các loại xe tương tự."
  },
  {
    "question": "Trong nhóm các phương tiện giao thông đường bộ dưới đây, nhóm phương tiện nào là xe thô sơ?",
    "options": [
      "Xe đạp, xe đạp máy, xe đạp điện; xe xích lô; xe lăn dùng cho người khuyết tật; xe vật nuôi kéo và các loại xe tương tự.",
      "Xe đạp (kể cả xe đạp máy, xe đạp điện), xe gắn máy, xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng.",
      "Xe ô tô, máy kéo, rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô, máy kéo."
    ],
    "answer": "Xe đạp, xe đạp máy, xe đạp điện; xe xích lô; xe lăn dùng cho người khuyết tật; xe vật nuôi kéo và các loại xe tương tự."
  },
  {
    "question": "Phương tiện giao thông đường bộ gồm những loại nào?",
    "options": [
      "Phương tiện giao thông cơ giới đường bộ.",
      "Phương tiện giao thông thô sơ đường bộ, xe máy chuyên dùng và các loại xe tương tự.",
      "Cả hai ý trên."
    ],
    "answer": "Cả hai ý trên."
  },
  {
    "question": "Người tham gia giao thông đường bộ gồm những đối tượng nào?",
    "options": [
      "Người điều khiển, người được chở trên phương tiện tham gia giao thông đường bộ.",
      "Người điều khiển, dẫn dắt vật nuôi trên đường bộ; người đi bộ trên đường bộ.",
      "Cả hai ý trên."
    ],
    "answer": "Cả hai ý trên."
  },
  {
    "question": "Người điều khiển phương tiện tham gia giao thông đường bộ gồm những đối tượng nào dưới đây?",
    "options": [
      "Người điều khiển xe cơ giới, người điều khiển xe thô sơ.",
      "Người điều khiển xe máy chuyên dùng.",
      "Cả hai ý trên."
    ],
    "answer": "Cả hai ý trên."
  },
  {
    "question": "Người điều khiển giao thông đường bộ được hiểu như thế nào là đúng?",
    "options": [
      "Là người điều khiển phương tiện tham gia giao thông đường bộ.",
      "Là Cảnh sát giao thông và người được giao nhiệm vụ hướng dẫn giao thông trên đường bộ.",
      "Là người tham gia giao thông đường bộ."
    ],
    "answer": "Là Cảnh sát giao thông và người được giao nhiệm vụ hướng dẫn giao thông trên đường bộ."
  },
  {
    "question": "Hành vi nào dưới đây bị nghiêm cấm?",
    "options": [
      "Sử dụng xe đạp đi trên các tuyến quốc lộ.",
      "Rải vật sắc nhọn, đổ chất gây trơn trượt trên đường bộ.",
      "Cả hai ý trên."
    ],
    "answer": "Rải vật sắc nhọn, đổ chất gây trơn trượt trên đường bộ."
  },
  {
    "question": "Hành vi đưa xe cơ giới, xe máy chuyên dùng tham gia giao thông đường bộ nào dưới đây bị cấm?",
    "options": [
      "Không có chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường.",
      "Hết niên hạn sử dụng.",
      "Cả hai ý trên."
    ],
    "answer": "Cả hai ý trên."
  },
  {
    "question": "Tổ chức đua xe được phép thực hiện khi nào?",
    "options": [
      "Trên đường phố không có người qua lại.",
      "Được người dân ủng hộ.",
      "Được cơ quan có thẩm quyền cấp phép."
    ],
    "answer": "Được cơ quan có thẩm quyền cấp phép."
  },
  {
    "question": "Hành vi đua xe trái phép bị xử lý như thế nào?",
    "options": [
      "Chỉ bị nhắc nhở.",
      "Tùy theo mức độ của hành vi vi phạm có thể bị xử lý hành chính hoặc xử lý hình sự."
    ],
    "answer": "Tùy theo mức độ của hành vi vi phạm có thể bị xử lý hành chính hoặc xử lý hình sự."
  },
  {
    "question": "Người điều khiển phương tiện tham gia giao thông đường bộ mà trong máu hoặc hơi thở có nồng độ cồn có bị nghiêm cấm không?",
    "options": [
      "Bị nghiêm cấm.",
      "Không bị nghiêm cấm.",
      "Không bị nghiêm cấm, nếu nồng độ cồn trong máu ở mức nhẹ, có thể điều khiển phương tiện tham gia giao thông."
    ],
    "answer": "Bị nghiêm cấm."
  },
  {
    "question": "Theo Luật Phòng chống tác hại của rượu, bia, đối tượng nào dưới đây bị cấm sử dụng rượu, bia khi tham gia giao thông?",
    "options": [
      "Người điều khiển xe ô tô, xe mô tô, xe đạp, xe gắn máy.",
      "Người được chở trên xe cơ giới.",
      "Cả hai ý trên."
    ],
    "answer": "Người điều khiển xe ô tô, xe mô tô, xe đạp, xe gắn máy."
  },
  {
    "question": "Hành vi giao xe ô tô, mô tô cho người nào sau đây tham gia giao thông đường bộ bị nghiêm cấm?",
    "options": [
      "Người chưa đủ tuổi theo quy định.",
      "Người không có giấy phép lái xe.",
      "Người có giấy phép lái xe nhưng đã bị trừ hết 12 điểm.",
      "Cả ba ý trên."
    ],
    "answer": "Cả ba ý trên."
  },
  {
    "question": "Hành vi nào sau đây bị nghiêm cấm?",
    "options": [
      "Điều khiển xe cơ giới lạng lách, đánh võng, rú ga liên tục khi tham gia giao thông trên đường.",
      "Xúc phạm, đe dọa, cản trở, chống đối hoặc không chấp hành hiệu lệnh, hướng dẫn, yêu cầu kiểm tra, kiểm soát của người thi hành công vụ về bảo đảm trật tự, an toàn giao thông đường bộ.",
      "Cả hai ý trên."
    ],
    "answer": "Cả hai ý trên."
  },
  {
    "question": "Các hành vi nào sau đây bị cấm đối với phương tiện tham gia giao thông đường bộ?",
    "options": [
      "Cải tạo xe ô tô loại khác thành xe ô tô chở người phục vụ mục đích quốc phòng, an ninh.",
      "Cải tạo trái phép; cố ý can thiệp làm sai lệch chỉ số trên đồng hồ báo quãng đường đã chạy của xe ô tô; cắt, hàn, tẩy xóa, đục sửa, đóng lại trái phép số khung, số động cơ của xe cơ giới, xe máy chuyên dùng."
    ],
    "answer": "Cải tạo trái phép; cố ý can thiệp làm sai lệch chỉ số trên đồng hồ báo quãng đường đã chạy của xe ô tô; cắt, hàn, tẩy xóa, đục sửa, đóng lại trái phép số khung, số động cơ của xe cơ giới, xe máy chuyên dùng."
  },
  {
    "question": "Hành vi nào sau đây bị cấm?",
    "options": [
      "Lắp đặt, sử dụng thiết bị âm thanh, ánh sáng trên xe cơ giới, xe máy chuyên dùng gây mất trật tự, an toàn giao thông đường bộ.",
      "Cản trở người, phương tiện tham gia giao thông trên đường bộ; ném gạch, đất, đá, cát hoặc vật thể khác vào người, phương tiện đang tham gia giao thông trên đường bộ.",
      "Cả hai ý trên."
    ],
    "answer": "Cả hai ý trên."
  },
  {
    "question": "Việc sản xuất, sử dụng, mua, bán trái phép biển số xe có bị nghiêm cấm hay không?",
    "options": [
      "Không bị nghiêm cấm.",
      "Bị nghiêm cấm.",
      "Bị nghiêm cấm tuỳ trường hợp."
    ],
    "answer": "Bị nghiêm cấm."
  },
  {
    "question": "Khi điều khiển phương tiện tham gia giao thông, những hành vi nào dưới đây bị nghiêm cấm?",
    "options": [
      "Thay đổi tốc độ của xe nhiều lần.",
      "Điều khiển phương tiện sau 23 giờ trong ngày.",
      "Lạng lách, đánh võng, rú ga liên tục."
    ],
    "answer": "Lạng lách, đánh võng, rú ga liên tục."
  },
  {
    "question": "Có bao nhiêu nhóm biển báo hiệu đường bộ?",
    "options": [
      "Ba nhóm: Biển báo cấm, biển báo nguy hiểm và biển hiệu lệnh.",
      "Bốn nhóm: Biển báo cấm, biển báo nguy hiểm, biển hiệu lệnh và biển phụ.",
      "Năm nhóm: Biển báo cấm, biển báo nguy hiểm, biển hiệu lệnh, biển chỉ dẫn, biển phụ."
    ],
    "answer": "Năm nhóm: Biển báo cấm, biển báo nguy hiểm, biển hiệu lệnh, biển chỉ dẫn, biển phụ."
  },
  {
    "question": "Tại nơi có vạch kẻ đường hoặc tại nơi mà người đi bộ, xe lăn của người khuyết tật đang qua đường, người điều khiển phương tiện tham gia giao thông phải thực hiện như thế nào?",
    "options": [
      "Giảm tốc độ và nhường đường cho người đi bộ, xe lăn của người khuyết tật qua đường đảm bảo an toàn.",
      "Quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn cho người đi bộ, xe lăn của người khuyết tật qua đường.",
      "Quan sát, tăng tốc độ và điều khiển phương tiện nhanh chóng đi qua."
    ],
    "answer": "Quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn cho người đi bộ, xe lăn của người khuyết tật qua đường."
  },
  {
    "question": "Người điều khiển xe mô tô phải phải quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn trong các trường hợp nào dưới đây?",
    "options": [
      "Đường hẹp, đường vòng, đường quanh co, đường đèo, dốc.",
      "Nơi cầu, cống hẹp, đập tràn, đường ngầm, hầm chui, hầm đường bộ.",
      "Trời mưa, gió, sương, khói, bụi, mặt đường trơn trượt, lầy lội, có nhiều đất đá, vật liệu rơi vãi ảnh hưởng đến an toàn giao thông đường bộ.",
      "Cả ba ý trên."
    ],
    "answer": "Cả ba ý trên."
  },
  {
    "question": "Khi hiệu lệnh của người điều khiển giao thông trái với tín hiệu đèn giao thông hoặc biển báo hiệu đường bộ thì người tham gia giao thông đường bộ phải chấp hành báo hiệu đường bộ nào dưới đây?",
    "options": [
      "Theo hiệu lệnh của người điều khiển giao thông.",
      "Theo tín hiệu đèn giao thông.",
      "Theo biển báo hiệu đường bộ."
    ],
    "answer": "Theo hiệu lệnh của người điều khiển giao thông."
  },
  {
    "question": "Khi ở một vị trí vừa có biển báo hiệu đặt cố định vừa có biển báo hiệu tạm thời mà hai biển có ý nghĩa khác nhau, người tham gia giao thông đường bộ phải chấp hành hiệu lệnh của biển báo hiệu nào?",
    "options": [
      "Biển báo hiệu đặt cố định.",
      "Biển báo hiệu tạm thời.",
      "Theo quyết định của người tham gia giao thông nhưng phải bảo đảm an toàn."
    ],
    "answer": "Biển báo hiệu tạm thời."
  },
  {
    "question": "Tại nơi đường giao nhau, khi đèn điều khiển giao thông có tín hiệu màu vàng, người điều khiển phương tiện tham gia giao thông phải chấp hành như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Dừng lại trước vạch dừng; trường hợp đang đi trên vạch dừng hoặc đã đi qua vạch dừng mà tín hiệu đèn màu vàng thì được đi tiếp; trường hợp tín hiệu đèn màu vàng nhấp nháy, người điều khiển phương tiện tham gia giao thông đường bộ được đi nhưng phải quan sát, giảm tốc độ hoặc dừng lại nhường đường cho người đi bộ, xe lăn của người khuyết tật qua đường hoặc các phương tiện khác.",
      "Tăng tốc độ nhanh chóng vượt qua nút giao.",
      "Quan sát, giảm tốc độ, từ từ vượt qua nút giao."
    ],
    "answer": "Dừng lại trước vạch dừng; trường hợp đang đi trên vạch dừng hoặc đã đi qua vạch dừng mà tín hiệu đèn màu vàng thì được đi tiếp; trường hợp tín hiệu đèn màu vàng nhấp nháy, người điều khiển phương tiện tham gia giao thông đường bộ được đi nhưng phải quan sát, giảm tốc độ hoặc dừng lại nhường đường cho người đi bộ, xe lăn của người khuyết tật qua đường hoặc các phương tiện khác."
  },
  {
    "question": "Người lái xe trên đường cần chấp hành quy định về tốc độ tối đa như thế nào?",
    "options": [
      "Chỉ lớn hơn tốc độ tối đa cho phép khi đường vắng.",
      "Chỉ lớn hơn tốc độ tối đa cho phép khi vào ban đêm.",
      "Không vượt quá tốc độ tối đa cho phép."
    ],
    "answer": "Không vượt quá tốc độ tối đa cho phép."
  },
  {
    "question": "Phương tiện tham gia giao thông đường bộ di chuyển với tốc độ thấp hơn phải đi như thế nào?",
    "options": [
      "Đi về bên trái theo chiều đi của mình.",
      "Đi về bên phải theo chiều đi của mình.",
      "Đi ở bất cứ bên nào nhưng phải bấm đèn cảnh báo nguy hiểm để báo hiệu cho các phương tiện khác."
    ],
    "answer": "Đi về bên phải theo chiều đi của mình."
  },
  {
    "question": "Trên một chiều đường có vạch kẻ phân làn đường, người lái xe cơ giới, xe máy chuyên dùng phải điều khiển xe đi trên làn đường nào?",
    "options": [
      "Đi trên làn đường bên phải trong cùng.",
      "Đi trên làn đường bên trái.",
      "Đi ở bất cứ làn nào nhưng phải bảo đảm tốc độ cho phép."
    ],
    "answer": "Đi trên làn đường bên phải trong cùng."
  },
  {
    "question": "Người lái xe phải giảm tốc độ, có tín hiệu rẽ phải và đi sát về bên phải của phần đường xe chạy trong các trường hợp nào dưới đây?",
    "options": [
      "Khi xe chạy phía trước có tín hiệu vượt xe khác.",
      "Khi phía trước có xe chạy ngược chiều.",
      "Khi xe sau xin vượt nếu đủ điều kiện an toàn.",
      "Khi xe sau có tín hiệu vượt bên phải."
    ],
    "answer": "Khi xe sau xin vượt nếu đủ điều kiện an toàn."
  },
  {
    "question": "Vượt xe là gì?",
    "options": [
      "Là tình huống giao thông trên đường mà mỗi chiều đường xe chạy chỉ có một làn đường dành cho xe cơ giới, xe đi phía sau di chuyển sang bên trái để di chuyển lên trước xe phía trước.",
      "Là tình huống giao thông trên đường có từ hai làn đường dành cho xe cơ giới cùng chiều trở lên được phân biệt bằng vạch kẻ đường, xe đi phía sau di chuyển lên trước xe phía trước theo quy tắc sử dụng làn đường."
    ],
    "answer": "Là tình huống giao thông trên đường mà mỗi chiều đường xe chạy chỉ có một làn đường dành cho xe cơ giới, xe đi phía sau di chuyển sang bên trái để di chuyển lên trước xe phía trước."
  },
  {
    "question": "Người lái xe được phép vượt xe trên cầu hẹp có một làn đường, đường cong có tầm nhìn bị hạn chế hay không?",
    "options": [
      "Được phép vượt khi đường vắng.",
      "Không được phép vượt.",
      "Được phép vượt khi có việc gấp."
    ],
    "answer": "Không được phép vượt."
  },
  {
    "question": "Muốn vượt xe phía trước, người lái xe mô tô phải có tín hiệu như thế nào dưới đây để bảo đảm an toàn?",
    "options": [
      "Bấm còi liên tục để xe phía trước biết xe mình xin vượt.",
      "Rú ga liên tục để xe phía trước biết xe mình xin vượt.",
      "Báo hiệu nhấp nháy bằng đèn chiếu sáng phía trước hoặc còi."
    ],
    "answer": "Báo hiệu nhấp nháy bằng đèn chiếu sáng phía trước hoặc còi."
  },
  {
    "question": "Khi lái xe trong khu đông dân cư, khu vực cơ sở khám bệnh, chữa bệnh trừ các khu vực có biển cấm sử dụng còi, người lái xe được sử dụng còi trong thời gian nào?",
    "options": [
      "Từ 22 giờ ngày hôm trước đến 05 giờ ngày hôm sau.",
      "Từ 05 giờ đến 22 giờ.",
      "Từ 23 giờ ngày hôm trước đến 05 giờ sáng hôm sau."
    ],
    "answer": "Từ 05 giờ đến 22 giờ."
  },
  {
    "question": "Người lái xe sử dụng đèn như thế nào khi đi trên các đoạn đường qua khu đông dân cư có hệ thống chiếu sáng đang hoạt động?",
    "options": [
      "Chỉ bật đèn chiếu xa (đèn pha).",
      "Bật đèn chiếu xa (đèn pha) khi đường vắng, bật đèn chiếu gần (đèn cốt) khi có xe đi ngược chiều.",
      "Chỉ bật đèn chiếu gần (đèn cốt)."
    ],
    "answer": "Chỉ bật đèn chiếu gần (đèn cốt)."
  },
  {
    "question": "Khi điều khiển phương tiện tham gia giao thông, hành vi nào sau đây bị cấm?",
    "options": [
      "Dùng tay cầm và sử dụng điện thoại hoặc thiết bị điện tử khác.",
      "Chỉ được chở người trên thùng xe ô tô chở hàng trong trường hợp chở người đi làm nhiệm vụ cứu nạn, cứu hộ, phòng, chống thiên tai, dịch bệnh hoặc thực hiện nhiệm vụ khẩn cấp."
    ],
    "answer": "Dùng tay cầm và sử dụng điện thoại hoặc thiết bị điện tử khác."
  },
  {
    "question": "Người lái xe không được vượt xe khác khi gặp trường hợp nào dưới đây?",
    "options": [
      "Trên cầu hẹp có một làn đường; nơi đường giao nhau, đường bộ giao nhau cùng mức với đường sắt; khi gặp xe ưu tiên.",
      "Trên cầu có từ 02 làn xe trở lên.",
      "Trên đường có 02 làn đường được phân chia làn bằng vạch kẻ nét đứt."
    ],
    "answer": "Trên cầu hẹp có một làn đường; nơi đường giao nhau, đường bộ giao nhau cùng mức với đường sắt; khi gặp xe ưu tiên."
  },
  {
    "question": "Nơi nào cấm quay đầu xe?",
    "options": [
      "Ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, gầm cầu vượt, ngầm.",
      "Tại nơi đường bộ giao nhau cùng mức với đường sắt, đường hẹp, đường dốc, đoạn đường cong tầm nhìn bị che khuất, trên đường cao tốc, trong hầm đường bộ, trên đường một chiều.",
      "Cả hai ý trên."
    ],
    "answer": "Cả hai ý trên."
  },
  {
    "question": "Trước khi cho xe chuyển hướng, người lái xe phải làm gì để bảo đảm an toàn giao thông?",
    "options": [
      "Phải quan sát, bảo đảm khoảng cách an toàn với xe phía sau.",
      "Giảm tốc độ và có tín hiệu báo hướng rẽ.",
      "Chuyển dần sang làn gần nhất với hướng rẽ.",
      "Khi bảo đảm an toàn, không gây trở ngại cho người và phương tiện khác mới được chuyển hướng.",
      "Cả ba ý trên."
    ],
    "answer": "Cả ba ý trên."
  },
  {
    "question": "Khi chuyển làn đường, người lái xe phải bật đèn tín hiệu báo rẽ như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Khi bắt đầu chuyển làn đường.",
      "Trước khi thay đổi làn đường.",
      "Sau khi thay đổi làn đường."
    ],
    "answer": "Trước khi thay đổi làn đường."
  },
  {
    "question": "Người điều khiển phương tiện tham gia giao thông không được dừng xe, đỗ xe ở những vị trí nào sau đây?",
    "options": [
      "Trên miệng cống thoát nước, miệng hầm của đường điện thoại, điện cao thế, chỗ dành riêng cho xe chữa cháy lấy nước.",
      "Trong phạm vi an toàn của đường sắt.",
      "Cả hai ý trên."
    ],
    "answer": "Cả hai ý trên."
  },
  {
    "question": "Người điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy có được phép sử dụng xe để kéo hoặc đẩy các phương tiện khác khi tham gia giao thông không?",
    "options": [
      "Được phép.",
      "Nếu phương tiện được kéo, đẩy có khối lượng nhỏ hơn phương tiện của mình.",
      "Tùy trường hợp.",
      "Không được phép."
    ],
    "answer": "Không được phép."
  },
  {
    "question": "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi nào sau đây không được phép?",
    "options": [
      "Buông cả hai tay; đứng, nằm trên xe điều khiển xe; sử dụng chân chống hoặc vật khác quệt xuống đường khi xe đang chạy.",
      "Chở tối đa hai người phía sau khi chở người bệnh đi cấp cứu, áp giải người có hành vi vi phạm pháp luật, trẻ em dưới 12 tuổi và người già yếu hoặc người khuyết tật."
    ],
    "answer": "Buông cả hai tay; đứng, nằm trên xe điều khiển xe; sử dụng chân chống hoặc vật khác quệt xuống đường khi xe đang chạy."
  },
  {
    "question": "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi nào sau đây không được phép?",
    "options": [
      "Buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống hoặc vật khác quệt xuống đường khi xe đang chạy.",
      "Sử dụng xe để chở người hoặc hàng hóa; để chân chạm xuống đất khi khởi hành.",
      "Đội mũ bảo hiểm; chạy xe đúng tốc độ quy định và chấp hành đúng quy tắc giao thông đường bộ.",
      "Chở người ngồi sau dưới 16 tuổi."
    ],
    "answer": "Buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống hoặc vật khác quệt xuống đường khi xe đang chạy."
  },
  {
    "question": "Người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông đường bộ không được thực hiện hành vi nào sau đây?",
    "options": [
      "Mang, vác vật cồng kềnh.",
      "Bám, kéo hoặc đẩy các phương tiện khác.",
      "Dùng tay cầm điện thoại hoặc các thiết bị điện tử khác.",
      "Ý 1 và ý 2."
    ],
    "answer": "Ý 1 và ý 2."
  },
  {
    "question": "Người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông đường bộ có được bám, kéo hoặc đẩy các phương tiện khác không?",
    "options": [
      "Được phép.",
      "Được bám trong trường hợp phương tiện của mình bị hỏng.",
      "Được kéo, đẩy trong trường hợp phương tiện khác bị hỏng.",
      "Không được phép."
    ],
    "answer": "Không được phép."
  },
  {
    "question": "Người lái xe, người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy phải thực hiện quy định nào dưới đây?",
    "options": [
      "Đội mũ bảo hiểm theo đúng quy chuẩn kỹ thuật quốc gia và cài quai đúng quy cách.",
      "Người lái xe phải đội mũ bảo hiểm, người được chở trên xe không nhất thiết phải đội mũ bảo hiểm.",
      "Phải đội mũ bảo hiểm nhưng không nhất thiết phải cài quai."
    ],
    "answer": "Đội mũ bảo hiểm theo đúng quy chuẩn kỹ thuật quốc gia và cài quai đúng quy cách."
  },
  {
    "question": "Người lái xe mô tô hai bánh, xe gắn máy được phép chở tối đa hai người trong những trường hợp nào?",
    "options": [
      "Chở người bệnh đi cấp cứu; áp giải người có hành vi vi phạm pháp luật; trẻ em dưới 12 tuổi; người già yếu hoặc người khuyết tật.",
      "Người đã uống rượu, bia; người trong cơ thể có chất ma tuý.",
      "Cả hai ý trên."
    ],
    "answer": "Chở người bệnh đi cấp cứu; áp giải người có hành vi vi phạm pháp luật; trẻ em dưới 12 tuổi; người già yếu hoặc người khuyết tật."
  },
  {
    "question": "Người lái xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy không được thực hiện các hành vi nào dưới đây?",
    "options": [
      "Đi xe dàn hàng ngang; buông cả hai tay.",
      "Sử dụng xe để kéo, đẩy xe khác, vật khác, dẫn dắt vật nuôi, mang, vác và chở vật cồng kềnh; chở người đứng trên xe, giá đèo hàng hoặc ngồi trên tay lái; xếp hàng hóa trên xe quá giới hạn quy định.",
      "Ngồi về một bên điều khiển xe; đứng, nằm trên xe điều khiển xe; thay người lái xe khi xe đang chạy; quay người về phía sau để điều khiển xe hoặc bịt mắt điều khiển xe; sử dụng chân chống hoặc vật khác quệt xuống đường khi xe đang chạy.",
      "Cả ba ý trên."
    ],
    "answer": "Cả ba ý trên."
  },
  {
    "question": "Người lái xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy không được thực hiện các hành vi nào sau đây?",
    "options": [
      "Đi xe dàn hàng ngang; đi xe vào phần đường dành cho người đi bộ và phương tiện khác.",
      "Sử dụng ô, thiết bị âm thanh, trừ thiết bị trợ thính.",
      "Cả hai ý trên."
    ],
    "answer": "Cả hai ý trên."
  },
  {
    "question": "Người lái xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy không được thực hiện hành vi nào sau đây?",
    "options": [
      "Đi trên phần đường, làn đường quy định, chấp hành hiệu lệnh của người điều khiển giao thông, đèn tín hiệu giao thông.",
      "Đi xe dàn hàng ngang, đi xe vào phần đường dành cho người đi bộ.",
      "Cả hai ý trên."
    ],
    "answer": "Đi xe dàn hàng ngang, đi xe vào phần đường dành cho người đi bộ."
  },
  {
    "question": "Người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông đường bộ có được sử dụng ô khi trời mưa hay không?",
    "options": [
      "Được sử dụng.",
      "Chỉ người ngồi sau được sử dụng.",
      "Không được sử dụng.",
      "Được sử dụng nếu không có áo mưa."
    ],
    "answer": "Không được sử dụng."
  },
  {
    "question": "Người được chở trên xe mô tô có được kéo theo người đang điều khiển xe đạp hay không?",
    "options": [
      "Chỉ được phép nếu cả hai đội mũ bảo hiểm.",
      "Không được phép.",
      "Chỉ được thực hiện trên đường vắng."
    ],
    "answer": "Không được phép."
  },
  {
    "question": "Trường hợp người được chở trên xe mô tô, xe gắn máy, các loại xe tương tự xe mô tô và các loại xe tương tự xe gắn máy không đội \"mũ bảo hiểm cho người đi mô tô, xe máy\" hoặc không cài quai đúng quy cách (trừ trường hợp chở người bệnh đi cấp cứu, trẻ em dưới 06 tuổi, áp giải người có hành vi vi phạm pháp luật) thì việc xử phạt vi phạm hành chính được quy định như thế nào?",
    "options": [
      "Không bị xử phạt chỉ bị nhắc nhở.",
      "Người được chở không bị xử phạt, chỉ xử phạt người điều khiển xe mô tô, xe gắn máy.",
      "Người được chở bị xử phạt, không xử phạt người điều khiển xe mô tô, xe gắn máy.",
      "Xử phạt cả người điều khiển và người được chở trên xe mô tô, xe gắn máy."
    ],
    "answer": "Xử phạt cả người điều khiển và người được chở trên xe mô tô, xe gắn máy."
  },
  {
    "question": "Trong các trường hợp dưới đây, để bảo đảm an toàn khi tham gia giao thông, người lái xe mô tô cần thực hiện như thế nào?",
    "options": [
      "Phải đội mũ bảo hiểm theo đúng quy chuẩn kỹ thuật quốc gia và cài quai đúng quy cách, không sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính).",
      "Phải đội mũ bảo hiểm khi trời mưa gió hoặc trời quá nắng; có thể sử dụng ô, điện thoại di động, thiết bị âm thanh nhưng phải bảo đảm an toàn.",
      "Phải đội mũ bảo hiểm khi cảm thấy mất an toàn giao thông hoặc khi chuẩn bị di chuyển quãng đường xa."
    ],
    "answer": "Phải đội mũ bảo hiểm theo đúng quy chuẩn kỹ thuật quốc gia và cài quai đúng quy cách, không sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính)."
  },
  {
    "question": "Thứ tự xuống phà như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Xe thô sơ, người đi bộ xuống trước, xe cơ giới, xe máy chuyên dùng xuống sau.",
      "Xe cơ giới, xe máy chuyên dùng xuống trước, xe thô sơ, người đi bộ xuống sau.",
      "Xe cơ giới, xe thô sơ xuống trước, xe máy chuyên dùng, người đi bộ xuống sau."
    ],
    "answer": "Xe cơ giới, xe máy chuyên dùng xuống trước, xe thô sơ, người đi bộ xuống sau."
  },
  {
    "question": "Khi lái xe trong đô thị và khu đông dân cư trong thời gian từ 22 giờ ngày hôm trước đến 05 giờ ngày hôm sau, nếu cần vượt một xe khác, người lái xe phải báo hiệu như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Chỉ được báo hiệu bằng còi.",
      "Phải báo hiệu bằng cả còi và đèn.",
      "Chỉ được báo hiệu bằng đèn."
    ],
    "answer": "Chỉ được báo hiệu bằng đèn."
  },
  {
    "question": "Khi điều khiển xe chạy trên đường, biết có xe sau xin vượt, nếu đủ điều kiện an toàn người điều khiển phương tiện phải làm gì?",
    "options": [
      "Tăng tốc độ và ra hiệu cho xe sau vượt, không được gây trở ngại cho xe xin vượt.",
      "Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.",
      "Cho xe đi sát về bên trái của phần đường xe chạy và ra hiệu cho xe sau vượt, không được gây trở ngại cho xe xin vượt."
    ],
    "answer": "Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt."
  },
  {
    "question": "Trên đường không phân chia thành hai chiều xe chạy riêng biệt, người điều khiển phương tiện tham gia giao thông đường bộ phải tránh xe đi ngược chiều như thế nào để bảo đảm an toàn?",
    "options": [
      "Giảm tốc độ và cho xe đi về bên phải theo chiều xe chạy của mình.",
      "Một trong hai xe phải dừng lại cho xe kia đi qua mới được đi.",
      "Tăng tốc độ, cho xe đi về bên phải theo chiều xe chạy của mình để nhanh chóng vượt qua."
    ],
    "answer": "Giảm tốc độ và cho xe đi về bên phải theo chiều xe chạy của mình."
  },
  {
    "question": "Khi tránh xe đi ngược chiều, các xe phải nhường đường như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Nơi đường hẹp chỉ đủ cho một xe chạy và có chỗ tránh xe thì xe nào ở gần chỗ tránh hơn phải vào vị trí tránh, nhường đường cho xe đi ngược chiều.",
      "Xe xuống dốc phải nhường đường cho xe lên dốc.",
      "Xe có chướng ngại vật phía trước phải nhường đường cho xe không có chướng ngại vật phía trước.",
      "Cả ba ý trên."
    ],
    "answer": "Cả ba ý trên."
  },
  {
    "question": "Người lái xe phải làm gì để bảo đảm an toàn khi lái xe trên đường cong có tầm nhìn bị hạn chế?",
    "options": [
      "Quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn.",
      "Đi sang làn đường của xe ngược chiều để mở rộng tầm nhìn và vượt xe khác.",
      "Cho xe đi sát bên phải làn đường, bật tín hiệu báo hiệu để vượt bên phải xe khác."
    ],
    "answer": "Quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn."
  },
  {
    "question": "Tại nơi đường giao nhau, người lái xe đang đi trên đường không ưu tiên, đường nhánh phải nhường đường như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Nhường đường cho xe đi ở bên phải mình tới.",
      "Nhường đường cho xe đi ở bên trái mình tới.",
      "Nhường đường cho xe đi trên đường ưu tiên hoặc đường chính từ bất kỳ hướng nào tới."
    ],
    "answer": "Nhường đường cho xe đi trên đường ưu tiên hoặc đường chính từ bất kỳ hướng nào tới."
  },
  {
    "question": "Tại nơi đường giao nhau có báo hiệu đi theo vòng xuyến, người lái xe phải nhường đường như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Nhường đường cho xe đi đến từ bên phải.",
      "Nhường đường cho xe đi đến từ bên trái.",
      "Không phải nhường đường."
    ],
    "answer": "Nhường đường cho xe đi đến từ bên trái."
  },
  {
    "question": "Tại nơi đường giao nhau không có báo hiệu đi theo vòng xuyến, người điều khiển phương tiện phải nhường đường như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Phải nhường đường cho xe đi đến từ bên phải.",
      "Xe báo hiệu xin đường trước, xe đó được đi trước.",
      "Phải nhường đường cho xe đi đến từ bên trái."
    ],
    "answer": "Phải nhường đường cho xe đi đến từ bên phải."
  },
  {
    "question": "Người lái xe phải nhanh chóng giảm tốc độ ,  đi sát lề đường bên phải hoặc dừng lại để nhường đường cho các loại xe nào dưới đây?",
    "options": [
      "Xe chữa cháy của Cảnh sát phòng cháy, chữa cháy và cứu nạn, cứu hộ và xe chữa cháy của các lực lượng khác; xe của lực lượng quân sự, công an và kiểm sát; đoàn xe có xe Cảnh sát giao thông dẫn đường; xe cứu thương; xe hộ đê không có tín hiệu ưu tiên theo quy định.",
      "Xe ưu tiên gồm xe chữa cháy của Cảnh sát phòng cháy, chữa cháy và cứu nạn, cứu hộ và xe chữa cháy của các lực lượng khác được huy động đi làm nhiệm vụ chữa cháy; xe của lực lượng quân sự, công an và kiểm sát đi làm nhiệm vụ khẩn cấp; đoàn xe có xe Cảnh sát giao thông dẫn đường; xe cứu thương đi làm nhiệm vụ cấp cứu; xe hộ đê đi làm nhiệm vụ; xe đi làm nhiệm vụ cứu nạn, cứu hộ, khắc phục sự cố thiên tai, dịch bệnh hoặc xe đi làm nhiệm vụ trong tình trạng khẩn cấp theo quy định của pháp luật; đoàn xe tang.",
      "Xe ô tô, xe máy, đoàn xe đang diễu hành có tổ chức có báo tín hiệu xin vượt bằng còi và đèn."
    ],
    "answer": "Xe ưu tiên gồm xe chữa cháy của Cảnh sát phòng cháy, chữa cháy và cứu nạn, cứu hộ và xe chữa cháy của các lực lượng khác được huy động đi làm nhiệm vụ chữa cháy; xe của lực lượng quân sự, công an và kiểm sát đi làm nhiệm vụ khẩn cấp; đoàn xe có xe Cảnh sát giao thông dẫn đường; xe cứu thương đi làm nhiệm vụ cấp cứu; xe hộ đê đi làm nhiệm vụ; xe đi làm nhiệm vụ cứu nạn, cứu hộ, khắc phục sự cố thiên tai, dịch bệnh hoặc xe đi làm nhiệm vụ trong tình trạng khẩn cấp theo quy định của pháp luật; đoàn xe tang."
  },
  {
    "question": "Khi có tín hiệu của xe ưu tiên, người và phương tiện tham gia giao thông đường bộ phải tuân thủ quy định nào dưới đây?",
    "options": [
      "Giảm tốc độ, đi sát lề đường bên phải hoặc dừng lại để nhường đường.",
      "Tăng tốc độ và đi sát lề đường bên phải để nhường đường.",
      "Giảm tốc độ, đi sát lề đường bên trái để nhường đường."
    ],
    "answer": "Giảm tốc độ, đi sát lề đường bên phải hoặc dừng lại để nhường đường."
  },
  {
    "question": "Khi đang lái xe, phía trước có một xe Cảnh sát giao thông không phát tín hiệu ưu tiên, người lái xe có được phép vượt hay không?",
    "options": [
      "Không được vượt.",
      "Được phép vượt ở phần đường dành cho người đi bộ qua đường.",
      "Được vượt khi bảo đảm an toàn."
    ],
    "answer": "Được vượt khi bảo đảm an toàn."
  },
  {
    "question": "Khi đang lái xe, phía trước có một xe cứu thương đang phát tín hiệu ưu tiên, người lái xe có được phép vượt hay không?",
    "options": [
      "Không được vượt.",
      "Được vượt khi đang đi trên cầu.",
      "Được phép vượt khi đi qua nơi giao nhau có ít phương tiện cùng tham gia giao thông.",
      "Được vượt khi bảo đảm an toàn."
    ],
    "answer": "Không được vượt."
  },
  {
    "question": "Khi tới đường ngang không có người gác, chắn đường bộ, chuông, đèn tín hiệu, người tham gia giao thông đường bộ phải làm gì để bảo đảm an toàn?",
    "options": [
      "Dừng lại về bên phải đường của mình, trước vạch dừng xe và quan sát hai phía, khi không có phương tiện giao thông đường sắt tới mới được đi qua.",
      "Quan sát hai phía, khi không có phương tiện giao thông đường sắt tới thì nhanh chóng đi qua.",
      "Dừng lại khoảng cách tối thiểu 3 mét tính từ ray đường sắt gần nhất, khi không có phương tiện giao thông đường sắt tới thì nhanh chóng đi qua."
    ],
    "answer": "Dừng lại về bên phải đường của mình, trước vạch dừng xe và quan sát hai phía, khi không có phương tiện giao thông đường sắt tới mới được đi qua."
  },
  {
    "question": "Tại đường ngang, cầu chung đường sắt, khi có hiệu lệnh của nhân viên gác chắn, đèn đỏ sáng nhấp nháy, chuông kêu, chắn đường bộ đang dịch chuyển hoặc đã đóng, người tham gia giao thông đường bộ phải làm gì để bảo đảm an toàn?",
    "options": [
      "Dừng lại về bên trái đường của mình, trước vạch dừng xe.",
      "Dừng lại giữa đường của mình, trước vạch dừng xe.",
      "Dừng lại về bên phải đường của mình, trước vạch dừng xe."
    ],
    "answer": "Dừng lại về bên phải đường của mình, trước vạch dừng xe."
  },
  {
    "question": "Người tham gia giao thông đường bộ phải dừng lại về bên phải đường của mình trước vạch dừng xe tại đường ngang, cầu chung đường sắt khi có báo hiệu nào dưới đây?",
    "options": [
      "Hiệu lệnh của nhân viên gác chắn.",
      "Đèn đỏ sáng nhấp nháy, chuông kêu.",
      "Chắn đường bộ đang dịch chuyển hoặc đã đóng.",
      "Cả ba ý trên."
    ],
    "answer": "Cả ba ý trên."
  },
  {
    "question": "Người điều khiển phương tiện tham gia giao thông trong hầm đường bộ ngoài việc phải tuân thủ các quy tắc giao thông còn phải thực hiện những quy định nào dưới đây?",
    "options": [
      "Xe cơ giới, xe máy chuyên dùng phải bật đèn chiếu gần; xe thô sơ phải bật đèn hoặc có vật phát sáng báo hiệu; không dừng xe, đỗ xe trong hầm đường bộ; trường hợp gặp sự cố kỹ thuật hoặc bất khả kháng khác buộc phải dừng xe, đỗ xe, người lái xe, người điều khiển xe máy chuyên dùng phải đưa xe vào vị trí dừng xe, đỗ xe khẩn cấp, nếu không di chuyển được, phải có báo hiệu bằng đèn khẩn cấp và đặt biển hoặc đèn cảnh báo về phía sau xe khoảng cách bảo đảm an toàn.",
      "Xe cơ giới, xe máy chuyên dùng phải bật đèn chiếu xa; được dừng xe, đỗ xe khi cần thiết.",
      "Phải cho xe chạy trên một làn đường và chỉ chuyển làn ở nơi được phép; được quay đầu xe, lùi xe khi cần thiết."
    ],
    "answer": "Xe cơ giới, xe máy chuyên dùng phải bật đèn chiếu gần; xe thô sơ phải bật đèn hoặc có vật phát sáng báo hiệu; không dừng xe, đỗ xe trong hầm đường bộ; trường hợp gặp sự cố kỹ thuật hoặc bất khả kháng khác buộc phải dừng xe, đỗ xe, người lái xe, người điều khiển xe máy chuyên dùng phải đưa xe vào vị trí dừng xe, đỗ xe khẩn cấp, nếu không di chuyển được, phải có báo hiệu bằng đèn khẩn cấp và đặt biển hoặc đèn cảnh báo về phía sau xe khoảng cách bảo đảm an toàn."
  },
  {
    "question": "Người điều khiển phương tiện tham gia giao thông đường bộ phải quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn trong các trường hợp nào dưới đây?",
    "options": [
      "Có báo hiệu cảnh báo nguy hiểm hoặc có chướng ngại vật trên đường; chuyển hướng xe chạy hoặc tầm nhìn bị hạn chế.",
      "Nơi cầu, cống hẹp, đập tràn, đường ngầm, hầm chui, hầm đường bộ; có vật nuôi đi trên đường hoặc chăn thả ở ven đường.",
      "Điểm dừng xe, đỗ xe trên đường bộ có khách đang lên, xuống xe.",
      "Cả ba ý trên."
    ],
    "answer": "Cả ba ý trên."
  },
  {
    "question": "Người lái xe được phép vượt xe khác về bên phải trong trường hợp nào dưới đây?",
    "options": [
      "Xe phía trước có tín hiệu rẽ trái hoặc đang rẽ trái hoặc khi xe chuyên dùng đang làm việc trên đường mà không thể vượt bên trái.",
      "Xe phía trước đang đi sát lề đường bên trái.",
      "Cả hai ý trên."
    ],
    "answer": "Cả hai ý trên."
  },
  {
    "question": "Khi có xe xin vượt, người lái xe mô tô xử lý như thế nào nếu đủ điều kiện an toàn cho xe phía sau vượt?",
    "options": [
      "Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.",
      "Lái xe vào lề đường bên trái và giảm tốc độ để xe phía sau vượt qua, không được gây trở ngại đối với xe xin vượt.",
      "Tăng tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua."
    ],
    "answer": "Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt."
  },
  {
    "question": "Những trường hợp nào dưới đây không được đi trên đường cao tốc, trừ người, phương tiện giao thông đường bộ và thiết bị phục vụ việc quản lý, bảo trì đường cao tốc?",
    "options": [
      "Xe máy chuyên dùng có tốc độ thiết kế nhỏ hơn tốc độ tối thiểu quy định đối với đường cao tốc, xe chở người bốn bánh có gắn động cơ, xe chở hàng bốn bánh có gắn động cơ, xe mô tô, xe gắn máy, các loại xe tương tự xe mô tô, xe gắn máy, xe thô sơ, người đi bộ.",
      "Xe máy chuyên dùng có tốc độ thiết kế lớn hơn tốc độ tối thiểu quy định đối với đường cao tốc.",
      "Xe ô tô và xe máy chuyên dùng có tốc độ thiết kế lớn hơn 80 km/h."
    ],
    "answer": "Xe máy chuyên dùng có tốc độ thiết kế nhỏ hơn tốc độ tối thiểu quy định đối với đường cao tốc, xe chở người bốn bánh có gắn động cơ, xe chở hàng bốn bánh có gắn động cơ, xe mô tô, xe gắn máy, các loại xe tương tự xe mô tô, xe gắn máy, xe thô sơ, người đi bộ."
  },
  {
    "question": "Theo quy định về độ tuổi, người đủ bao nhiêu tuổi trở lên thì được cấp giấy phép lái xe mô tô hai bánh có dung tích xi lanh đến 125 cm3 và xe ô tô chở người đến 8 chỗ (không kể chỗ của người lái xe); xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế đến 3.500 kg?",
    "options": [
      "16 tuổi.",
      "17 tuổi",
      "18 tuổi."
    ],
    "answer": "18 tuổi."
  },
  {
    "question": "Người đủ 16 tuổi đến dưới 18 tuổi chỉ được điều khiển các loại xe nào dưới đây?",
    "options": [
      "Xe mô tô hai bánh có dung tích xi-lanh đến 125 cm3.",
      "Xe gắn máy.",
      "Xe ô tô chở người đến 08 chỗ (không kể chỗ của người lái xe); xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế đến 3.500 kg; các loại xe ô tô quy định cho giấy phép lái xe hạng B kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
      "Cả ba ý trên."
    ],
    "answer": "Xe gắn máy."
  },
  {
    "question": "Người có Giấy phép lái xe mô tô hạng A1 không được phép điều khiển loại xe nào dưới đây?",
    "options": [
      "Xe mô tô hai bánh có dung tích xi-lanh 125 cm3 hoặc có công suất động cơ điện đến 11 kW.",
      "Xe mô tô ba bánh.",
      "Cả hai ý trên."
    ],
    "answer": "Xe mô tô ba bánh."
  },
  {
    "question": "Người có Giấy phép lái xe mô tô hạng A1 được cấp sau ngày 01/01/2025 được phép điều khiển loại xe nào dưới đây?",
    "options": [
      "Xe mô tô hai bánh có dung tích xi-lanh đến 125 cm3 hoặc có công suất động cơ điện đến 11 kW.",
      "Xe mô tô ba bánh.",
      "Cả hai ý trên."
    ],
    "answer": "Cả hai ý trên."
  },
  {
    "question": "Người có Giấy phép lái xe mô tô hạng A được phép điều khiển loại xe nào dưới đây?",
    "options": [
      "Xe mô tô hai bánh có dung tích xi-lanh đến 125 cm3 hoặc có công suất động cơ điện đến 11 kW.",
      "Xe mô tô hai bánh có dung tích xi-lanh trên 125 cm3 hoặc có công suất động cơ điện trên 11 kW.",
      "Cả hai ý trên."
    ],
    "answer": "Cả hai ý trên."
  },
  {
    "question": "Người lái xe khi tham gia giao thông đường bộ phải đảm bảo các điều kiện nào dưới đây?",
    "options": [
      "Phải đủ tuổi, sức khỏe theo quy định của pháp luật; có giấy phép lái xe đang còn điểm, còn hiệu lực phù hợp với loại xe đang điều khiển do cơ quan có thẩm quyền cấp (trừ người lái xe gắn máy).",
      "Phải là người đứng tên trong đăng ký xe.",
      "Cả hai ý trên."
    ],
    "answer": "Phải đủ tuổi, sức khỏe theo quy định của pháp luật; có giấy phép lái xe đang còn điểm, còn hiệu lực phù hợp với loại xe đang điều khiển do cơ quan có thẩm quyền cấp (trừ người lái xe gắn máy)."
  },
  {
    "question": "Khi tham gia giao thông đường bộ, người lái xe phải mang theo các giấy tờ gì?",
    "options": [
      "Chứng nhận đăng ký xe hoặc bản sao Chứng nhận đăng ký xe có chứng thực kèm bản gốc giấy tờ xác nhận của tổ chức tín dụng, chi nhánh ngân hàng nước ngoài còn hiệu lực trong trường hợp xe đang được thế chấp tại tổ chức tín dụng, chi nhánh ngân hàng nước ngoài.",
      "Giấy phép lái xe phù hợp với loại xe đang điều khiển; chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường đối với xe cơ giới theo quy định của pháp luật; chứng nhận bảo hiểm bắt buộc trách nhiệm dân sự của chủ xe cơ giới.",
      "Trường hợp các giấy tờ nêu trên đã được tích hợp vào tài khoản định danh điện tử thì việc xuất trình, kiểm tra có thể thực hiện thông qua tài khoản định danh điện tử.",
      "Cả ba ý trên."
    ],
    "answer": "Cả ba ý trên."
  },
  {
    "question": "Người có giấy phép lái xe chưa bị trừ hết 12 điểm, được phục hồi điểm giấy phép lái xe trong trường hợp nào sau đây?",
    "options": [
      "Không được phục hồi.",
      "Được phục hồi đủ 12 điểm, nếu không bị trừ điểm trong thời hạn 12 tháng từ ngày bị trừ điểm gần nhất."
    ],
    "answer": "Được phục hồi đủ 12 điểm, nếu không bị trừ điểm trong thời hạn 12 tháng từ ngày bị trừ điểm gần nhất."
  },
  {
    "question": "Người có giấy phép lái xe đã bị trừ hết điểm phải làm gì để phục hồi điểm giấy phép lái xe?",
    "options": [
      "Không vi phạm pháp luật trật tự, an toàn giao thông đường bộ trong thời gian 12 tháng kể từ ngày bị trừ hết điểm.",
      "Sau thời hạn ít nhất là 06 tháng kể từ ngày bị trừ hết điểm, người có phép lái xe được tham gia kiểm tra nội dung kiến thức pháp luật về trật tự, an toàn giao thông đường bộ theo quy định, có kết quả đạt yêu cầu thì được phục hồi đủ 12 điểm.",
      "Cả hai ý trên."
    ],
    "answer": "Sau thời hạn ít nhất là 06 tháng kể từ ngày bị trừ hết điểm, người có phép lái xe được tham gia kiểm tra nội dung kiến thức pháp luật về trật tự, an toàn giao thông đường bộ theo quy định, có kết quả đạt yêu cầu thì được phục hồi đủ 12 điểm."
  },
  {
    "question": "Trách nhiệm của tổ chức, cá nhân đứng tên trong giấy chứng nhận đăng ký xe khi chưa thực hiện thu hồi chứng nhận đăng ký xe, biển số xe được quy định như thế nào?",
    "options": [
      "Tiếp tục chịu trách nhiệm của chủ xe.",
      "Không chịu trách nhiệm sau khi đã chuyển nhượng, trao đổi, tặng, cho."
    ],
    "answer": "Tiếp tục chịu trách nhiệm của chủ xe."
  },
  {
    "question": "Trên đường bộ, trong khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên, xe mô tô hai bánh, ô tô chở người đến 28 chỗ không kể chỗ của người lái xe tham gia giao thông với tốc độ khai thác tối đa cho phép là bao nhiêu?",
    "options": [
      "60 km/h.",
      "50 km/h.",
      "40 km/h."
    ],
    "answer": "60 km/h."
  },
  {
    "question": "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới, xe mô tô hai bánh, ô tô chở người đến 28 chỗ không kể chỗ của người lái xe tham gia giao thông với tốc độ khai thác tối đa cho phép là bao nhiêu?",
    "options": [
      "60 km/h.",
      "50 km/h.",
      "40 km/h."
    ],
    "answer": "50 km/h."
  },
  {
    "question": "Trên đường bộ ngoài khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên (trừ đường cao tốc) loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 70 km/h?",
    "options": [
      "Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
      "Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
      "Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
      "Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc."
    ],
    "answer": "Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động)."
  },
  {
    "question": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 60 km/h?",
    "options": [
      "Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
      "Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
      "Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
      "Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc."
    ],
    "answer": "Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động)."
  },
  {
    "question": "Người lái xe phải giảm tốc độ thấp hơn tốc độ tối đa cho phép đến mức cần thiết, chú ý quan sát và chuẩn bị sẵn sàng những tình huống có thể xảy ra để phòng ngừa tai nạn trong các trường hợp nào dưới đây?",
    "options": [
      "Gặp biển báo nguy hiểm và cảnh báo trên đường.",
      "Gặp biển chỉ dẫn trên đường.",
      "Gặp biển báo hết mọi lệnh cấm.",
      "Gặp biển báo hết hạn chế tốc độ tối đa cho phép."
    ],
    "answer": "Gặp biển báo nguy hiểm và cảnh báo trên đường."
  },
  {
    "question": "Khi gặp xe buýt đang dừng đón, trả khách, người điều khiển xe mô tô phải xử lý như thế nào dưới đây?",
    "options": [
      "Tăng tốc độ để nhanh chóng vượt qua xe buýt.",
      "Quan sát, giảm tốc độ đi qua xe buýt hoặc dừng lại để bảo đảm an toàn."
    ],
    "answer": "Quan sát, giảm tốc độ đi qua xe buýt hoặc dừng lại để bảo đảm an toàn."
  },
  {
    "question": "Việc sử dụng xe mô tô, xe gắn máy, xe thô sơ để vận chuyển hành khách, hàng hóa phải thực hiện các quy định nào dưới đây để đảm bảo an toàn giao thông?",
    "options": [
      "Kiểm tra điều kiện bảo đảm an toàn của xe trước khi tham gia giao thông đường bộ; mang đủ giấy tờ theo quy định của pháp luật.",
      "Kiểm tra việc sắp xếp hàng hóa bảo đảm an toàn; không chở quá số người, chở hành lý, hàng hoá vượt quá khối lượng cho phép hoặc vượt quá khổ giới hạn của xe.",
      "Cả hai ý trên."
    ],
    "answer": "Cả hai ý trên."
  },
  {
    "question": "Những hành vi nào sau đây thể hiện là người có văn hóa giao thông?",
    "options": [
      "Luôn tuân thủ pháp luật về trật tự, an toàn giao thông đường bộ, nhường nhịn và giúp đỡ người khác.",
      "Đi nhanh, vượt đèn đỏ nếu không có lực lượng Công an.",
      "Bấm còi và nháy đèn liên tục để cảnh báo xe khác.",
      "Tránh nhường đường để đi nhanh hơn."
    ],
    "answer": "Luôn tuân thủ pháp luật về trật tự, an toàn giao thông đường bộ, nhường nhịn và giúp đỡ người khác."
  },
  {
    "question": "Khái niệm về văn hóa giao thông được hiểu như thế nào là đúng?",
    "options": [
      "Là sự hiểu biết và chấp hành nghiêm chỉnh pháp luật về giao thông, là ý thức trách nhiệm với cộng đồng khi tham gia giao thông.",
      "Là sự tôn trọng, nhường nhịn, giúp đỡ và ứng xử có văn hóa giữa những người tham gia giao thông với nhau.",
      "Cả hai ý trên."
    ],
    "answer": "Cả hai ý trên."
  },
  {
    "question": "Người lái xe không điều khiển xe đi đúng làn đường quy định, phóng nhanh, vượt ẩu, vượt đèn đỏ, đi vào đường cấm được coi là hành vi nào trong các hành vi dưới đây?",
    "options": [
      "Là thiếu văn hóa giao thông, vi phạm pháp luật về trật tự, an toàn giao thông đường bộ.",
      "Là thiếu văn hóa giao thông."
    ],
    "answer": "Là thiếu văn hóa giao thông, vi phạm pháp luật về trật tự, an toàn giao thông đường bộ."
  },
  {
    "question": "Người lái xe có văn hóa giao thông khi tham gia giao thông đường bộ phải đáp ứng các điều kiện nào dưới đây?",
    "options": [
      "Hiểu biết và chấp hành nghiêm chỉnh pháp luật về giao thông đường bộ; có ý thức trách nhiệm với cộng đồng khi tham gia giao thông; tôn trọng, nhường nhịn, giúp đỡ và ứng xử có văn hóa với những người cùng tham gia giao thông.",
      "Điều khiển xe vượt quá tốc độ, đi không đúng làn đường."
    ],
    "answer": "Hiểu biết và chấp hành nghiêm chỉnh pháp luật về giao thông đường bộ; có ý thức trách nhiệm với cộng đồng khi tham gia giao thông; tôn trọng, nhường nhịn, giúp đỡ và ứng xử có văn hóa với những người cùng tham gia giao thông."
  },
  {
    "question": "Người lái xe mô tô có văn hóa giao thông khi tham gia giao thông phải tuân thủ những quy định nào dưới đây?",
    "options": [
      "Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; đội mũ bảo hiểm đúng quy chuẩn kỹ thuật quốc gia, cài quai đúng quy cách.",
      "Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông.",
      "Điều khiển xe và đội mũ bảo hiểm ở nơi có biển báo bắt buộc đội mũ bảo hiểm."
    ],
    "answer": "Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; đội mũ bảo hiểm đúng quy chuẩn kỹ thuật quốc gia, cài quai đúng quy cách."
  },
  {
    "question": "Trong các hành vi dưới đây, người lái xe có văn hóa giao thông phải ứng xử như thế nào?",
    "options": [
      "Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; dừng, đỗ xe đúng nơi quy định; đã uống rượu, bia thì không lái xe.",
      "Điều khiển xe đi trên phần đường, làn đường có ít phương tiện giao thông; dừng xe, đỗ xe ở nơi thuận tiện hoặc theo yêu cầu của hành khách, của người thân.",
      "Dừng và đỗ xe ở nơi thuận tiện cho việc chuyên chở hành khách và giao nhận hàng hóa; sử dụng ít rượu, bia thì có thể lái xe."
    ],
    "answer": "Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; dừng, đỗ xe đúng nơi quy định; đã uống rượu, bia thì không lái xe."
  },
  {
    "question": "Khi tham gia giao thông việc sử dụng còi xe nên dùng như thế nào để thể hiện là người có văn hóa giao thông?",
    "options": [
      "Chỉ bấm còi khi thật sự cần thiết, không bấm còi liên tục hoặc kéo dài, sử dụng còi với mức âm lượng theo quy định.",
      "Bấm còi liên tục để các xe khác nhường đường.",
      "Bấm còi to khi đi qua khu vực đông dân cư.",
      "Không cần dùng còi, tránh gây tiếng ồn là văn minh."
    ],
    "answer": "Chỉ bấm còi khi thật sự cần thiết, không bấm còi liên tục hoặc kéo dài, sử dụng còi với mức âm lượng theo quy định."
  },
  {
    "question": "Người điều khiển phương tiện tham giao thông đường bộ gây ra tai nạn giao thông đường bộ, người liên quan đến vụ tai nạn giao thông đường bộ có trách nhiệm gì dưới đây?",
    "options": [
      "Dừng ngay phương tiện, cảnh báo nguy hiểm, giữ nguyên hiện trường, trợ giúp người bị nạn và báo tin cho cơ quan Công an, cơ sở khám bệnh, chữa bệnh.",
      "Ở lại hiện trường vụ tai nạn giao thông đường bộ cho đến khi người của cơ quan Công an đến, trừ trường hợp phải đi cấp cứu, đưa người bị nạn đi cấp cứu hoặc xét thấy bị đe dọa đến tính mạng, sức khỏe nhưng phải đến trình báo ngay cơ quan Công an, Ủy ban nhân dân nơi gần nhất.",
      "Cung cấp thông tin xác định danh tính về bản thân, người liên quan đến vụ tai nạn giao thông đường bộ và thông tin liên quan của vụ tai nạn giao thông đường bộ cho cơ quan có thẩm quyền.",
      "Cả ba ý trên."
    ],
    "answer": "Cả ba ý trên."
  },
  {
    "question": "Người có mặt tại nơi xảy ra vụ tai giao thông đường bộ có trách nhiệm gì dưới đây?",
    "options": [
      "Giúp đỡ, cứu chữa kịp thời người bị nạn; báo tin ngay cho cơ quan Công an, cơ sở khám bệnh, chữa bệnh hoặc Ủy ban nhân dân nơi gần nhất; tham gia bảo vệ hiện trường; tham gia bảo vệ tài sản của người bị nạn; cung cấp thông tin liên quan về vụ tai nạn theo yêu cầu của cơ quan có thẩm quyền.",
      "Chụp lại hình ảnh vụ tai nạn (nếu có thiết bị ghi hình) và nhanh chóng rời khỏi hiện trường vụ tai nạn."
    ],
    "answer": "Giúp đỡ, cứu chữa kịp thời người bị nạn; báo tin ngay cho cơ quan Công an, cơ sở khám bệnh, chữa bệnh hoặc Ủy ban nhân dân nơi gần nhất; tham gia bảo vệ hiện trường; tham gia bảo vệ tài sản của người bị nạn; cung cấp thông tin liên quan về vụ tai nạn theo yêu cầu của cơ quan có thẩm quyền."
  },
  {
    "question": "Trong đoạn đường hai chiều tại khu đông dân cư đang ùn tắc, người điều khiển xe mô tô có văn hóa giao thông sẽ lựa chọn cách xử lý tình huống nào dưới đây?",
    "options": [
      "Cho xe lấn sang làn ngược chiều để nhanh chóng thoát khỏi nơi ùn tắc.",
      "Điều khiển xe trên vỉa hè để nhanh chóng thoát khỏi nơi ùn tắc.",
      "Kiên nhẫn tuân thủ hướng dẫn của người điều khiển giao thông hoặc tín hiệu đèn giao thông, di chuyển trên đúng phần đường bên phải theo chiều đi, nhường đường cho các phương tiện đi ngược chiều."
    ],
    "answer": "Kiên nhẫn tuân thủ hướng dẫn của người điều khiển giao thông hoặc tín hiệu đèn giao thông, di chuyển trên đúng phần đường bên phải theo chiều đi, nhường đường cho các phương tiện đi ngược chiều."
  },
  {
    "question": "Khi điều khiển xe mô tô tay ga xuống đường dốc dài, độ dốc cao, người lái xe cần thực hiện các thao tác nào dưới đây để bảo đảm an toàn?",
    "options": [
      "Giữ tay ga ở mức độ phù hợp, sử dụng phanh trước và phanh sau để giảm tốc độ.",
      "Nhả hết tay ga, tắt động cơ, sử dụng phanh trước và phanh sau để giảm tốc độ.",
      "Sử dụng phanh trước để giảm tốc độ kết hợp với tắt chìa khóa điện của xe."
    ],
    "answer": "Giữ tay ga ở mức độ phù hợp, sử dụng phanh trước và phanh sau để giảm tốc độ."
  },
  {
    "question": "Khi điều khiển xe trên đường vòng người lái xe cần phải làm gì để bảo đảm an toàn?",
    "options": [
      "Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng coi, đèn; giảm tốc độ tới mức cần thiết, về số thấp và thực hiện quay vòng với tốc độ phù hợp với bán kính cong của đường vòng.",
      "Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng còi, đèn; tăng tốc để nhanh chóng qua đường vòng và giảm tốc độ sau khi qua đường vòng."
    ],
    "answer": "Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng coi, đèn; giảm tốc độ tới mức cần thiết, về số thấp và thực hiện quay vòng với tốc độ phù hợp với bán kính cong của đường vòng."
  },
  {
    "question": "Khi điều khiển xe qua đường sắt, người lái xe cần phải thực hiện các thao tác nào dưới đây để bảo đảm an toàn?",
    "options": [
      "Khi có chuông báo hoặc thanh chắn đã hạ xuống, người lái xe phải dừng xe tạm thời đúng khoảng cách an toàn, kéo phanh tay nếu đường dốc hoặc phải chờ lâu.",
      "Khi không có chuông báo hoặc thanh chắn không hạ xuống, người lái xe cần phải quan sát nếu thấy đủ điều kiện an toàn thì về số thấp, tăng ga nhẹ và không thay đổi số trong quá trình vượt qua đường sắt để tránh động cơ chết máy cho xe cho vượt qua.",
      "Cả hai ý trên."
    ],
    "answer": "Cả hai ý trên."
  },
  {
    "question": "Trong các loại nhiên liệu dưới đây, loại nhiên liệu nào giảm thiểu ô nhiễm môi trường?",
    "options": [
      "Xăng và dầu diesel.",
      "Xăng sinh học và khí sinh học.",
      "Ý 1 và ý 2."
    ],
    "answer": "Xăng sinh học và khí sinh học."
  },
  {
    "question": "Các biện pháp tiết kiệm nhiên liệu khi chạy xe?",
    "options": [
      "Bảo dưỡng xe theo định kỳ và có kế hoạch lộ trình trước khi xe chạy.",
      "Kiểm tra áp suất lốp theo quy định và chạy xe với tốc độ phù hợp với tình trạng mặt đường và mật độ giao thông trên đường.",
      "Cả hai ý trên."
    ],
    "answer": "Cả hai ý trên."
  },
  {
    "question": "Khi tầm nhìn bị hạn chế bởi sương mù hoặc mưa to, người lái xe phải thực hiện các thao tác nào để bảo đảm an toàn?",
    "options": [
      "Tăng tốc độ, chạy gần xe trước, nhìn đèn hậu để định hướng.",
      "Giảm tốc độ, chạy cách xa xe trước với khoảng cách an toàn, bật đèn sương mù và đèn chiếu gần.",
      "Tăng tốc độ, bật đèn pha vượt qua xe chạy trước."
    ],
    "answer": "Giảm tốc độ, chạy cách xa xe trước với khoảng cách an toàn, bật đèn sương mù và đèn chiếu gần."
  },
  {
    "question": "Khi đèn pha của xe đi ngược chiều gây chói mắt, làm giảm khả năng quan sát trên đường, người lái xe xử lý như thế nào dưới đây để bảo đảm an toàn?",
    "options": [
      "Giảm tốc độ, giữ vững tay lái, nhìn chếch sang lề đường bên phải.",
      "Bật đèn pha chiếu xa và giữ nguyên tốc độ.",
      "Tăng tốc độ, bật đèn pha đối diện xe phía trước."
    ],
    "answer": "Giảm tốc độ, giữ vững tay lái, nhìn chếch sang lề đường bên phải."
  },
  {
    "question": "Để đạt được hiệu quả phanh cao nhất, người lái xe mô tô phải sử dụng các kỹ năng như thế nào dưới đây?",
    "options": [
      "Sử dụng phanh trước.",
      "Sử dụng phanh sau.",
      "Giảm hết ga, sử dụng đồng thời cả phanh sau và phanh trước."
    ],
    "answer": "Giảm hết ga, sử dụng đồng thời cả phanh sau và phanh trước."
  },
  {
    "question": "Khi đang lái xe mô tô hoặc ô tô, nếu có nhu cầu sử dụng điện thoại để nhắn tin hoặc gọi điện, người lái xe phải thực hiện như thế nào trong các tình huống nêu dưới đây?",
    "options": [
      "Giảm tốc độ để bảo đảm an toàn với xe phía trước và sử dụng điện thoại để liên lạc.",
      "Giảm tốc độ để dừng xe ở nơi cho phép sau đó sử dụng điện thoại để liên lạc.",
      "Tăng tốc độ để cách xa xe phía sau và sử dụng điện thoại để liên lạc."
    ],
    "answer": "Giảm tốc độ để dừng xe ở nơi cho phép sau đó sử dụng điện thoại để liên lạc."
  },
  {
    "question": "Những thói quen nào dưới đây khi điều khiển xe mô tô tay ga tham gia giao thông dễ gây tai nạn nguy hiểm?",
    "options": [
      "Sử dụng còi.",
      "Phanh đồng thời cả phanh trước và phanh sau.",
      "Chỉ sử dụng phanh trước."
    ],
    "answer": "Chỉ sử dụng phanh trước."
  },
  {
    "question": "Khi điều khiển xe mô tô quay đầu, người lái xe cần thực hiện như thế nào để bảo đảm an toàn?",
    "options": [
      "Bật tín hiệu báo rẽ trước khi quay đầu, từ từ giảm tốc độ đến mức có thể dừng lại.",
      "Chỉ quay đầu xe tại những nơi được phép quay đầu.",
      "Quan sát an toàn các phương tiện tới từ phía trước, phía sau, hai bên đồng thời nhường đường cho xe từ bên phải và phía trước đi tới.",
      "Cả ba ý trên."
    ],
    "answer": "Cả ba ý trên."
  },
  {
    "question": "Tay ga trên xe mô tô hai bánh có tác dụng gì dưới đây?",
    "options": [
      "Để điều khiển xe chạy về phía trước.",
      "Để điều tiết công suất động cơ qua đó điều khiển tốc độ của xe.",
      "Để điều khiển xe chạy lùi.",
      "Ý 1 và ý 2."
    ],
    "answer": "Ý 1 và ý 2."
  },
  {
    "question": "Gương chiếu hậu của xe mô tô hai bánh có tác dụng gì dưới đây?",
    "options": [
      "Để quan sát an toàn phía bên trái khi chuẩn bị rẽ trái.",
      "Để quan sát an toàn phía bên phải khi chuẩn bị rẽ phải.",
      "Để quan sát an toàn phía sau của bên trái và bên phải trước khi chuyển hướng.",
      "Để quan sát an toàn phía trước cả bên trái và bên phải trước khi chuyển hướng."
    ],
    "answer": "Để quan sát an toàn phía sau của bên trái và bên phải trước khi chuyển hướng."
  },
  {
    "question": "Để bảo đảm an toàn khi tham gia giao thông, người lái xe mô tô hai bánh cần điều khiển tay ga như thế nào?",
    "options": [
      "Tăng ga thật mạnh, giảm ga từ từ.",
      "Tăng ga thật mạnh, giảm ga thật nhanh.",
      "Tăng ga từ từ, giảm ga thật nhanh.",
      "Tăng ga từ từ, giảm ga từ từ."
    ],
    "answer": "Tăng ga từ từ, giảm ga thật nhanh."
  },
  {
    "question": "Để tránh đổ, ngã khi điều khiển xe mô tô hai bánh ở nơi đường xấu, nhỏ và hẹp, người lái xe cần xử lý như thế nào?",
    "options": [
      "Đi ở tốc độ thấp, quan sát liên tục khoảng cách từ 05 m đến 10 m phía trước để điều chỉnh sớm hướng di chuyển.",
      "Trong quá trình di chuyển không nên dùng phanh trước tránh làm khóa bánh dẫn hướng.",
      "Không được lắc người sang trái hoặc phải nhiều, trọng tâm cơ thể cần trùng với trọng tâm của xe.",
      "Cả ba ý trên."
    ],
    "answer": "Cả ba ý trên."
  }
];
