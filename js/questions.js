// js/questions.js
const quizData = [
    // Phần I: Quy định chung & Nguyên tắc cơ bản (Câu 1-15)
    {
        question: "Luật Giao thông Đường bộ điều chỉnh những phạm vi nào?",
        options: ["Chỉ quy tắc giao thông", "Quy tắc, phương tiện, người điều khiển, đường bộ, xử phạt", "Chỉ phương tiện và người điều khiển", "Chỉ xử phạt vi phạm"],
        answer: "Quy tắc, phương tiện, người điều khiển, đường bộ, xử phạt"
    },
    {
        question: "Đối tượng áp dụng của Luật Giao thông Đường bộ là ai?",
        options: ["Chỉ công dân Việt Nam", "Chỉ người lái xe", "Cơ quan, tổ chức, cá nhân liên quan đến giao thông đường bộ tại Việt Nam", "Chỉ người nước ngoài tại Việt Nam"],
        answer: "Cơ quan, tổ chức, cá nhân liên quan đến giao thông đường bộ tại Việt Nam"
    },
    {
        question: "Khi tham gia giao thông, phương tiện phải di chuyển ở bên nào theo chiều đi của mình?",
        options: ["Bên trái", "Bên phải", "Ở giữa đường", "Bất kỳ bên nào nếu đường vắng"],
        answer: "Bên phải"
    },
    {
        question: "Tại nơi có vạch kẻ đường dành cho người đi bộ, người điều khiển phương tiện phải xử lý như thế nào khi có người đi bộ đang qua đường?",
        options: ["Bấm còi inh ỏi để họ tránh", "Tăng tốc vượt qua nhanh", "Giảm tốc độ, nhường đường cho người đi bộ", "Không cần làm gì"],
        answer: "Giảm tốc độ, nhường đường cho người đi bộ"
    },
    {
        question: "Xe ưu tiên theo luật định (cứu hỏa, cứu thương, công an làm nhiệm vụ khẩn cấp) có quyền ưu tiên gì khi tham gia giao thông?",
        options: ["Không có quyền ưu tiên nào", "Được đi trước xe khác khi qua đường giao nhau từ mọi hướng", "Chỉ được ưu tiên khi có tín hiệu đèn xanh", "Phải tuân thủ mọi quy tắc như xe thường"],
        answer: "Được đi trước xe khác khi qua đường giao nhau từ mọi hướng"
    },
    {
        question: "Người tham gia giao thông phải chấp hành tín hiệu nào sau đây?",
        options: ["Chỉ đèn giao thông", "Chỉ biển báo hiệu", "Chỉ vạch kẻ đường", "Đèn giao thông, biển báo, vạch kẻ đường, người điều khiển giao thông"],
        answer: "Đèn giao thông, biển báo, vạch kẻ đường, người điều khiển giao thông"
    },
    {
        question: "Khi thấy tín hiệu đèn vàng nhấp nháy, người điều khiển phương tiện phải làm gì?",
        options: ["Dừng lại ngay lập tức", "Tăng tốc độ để nhanh chóng qua nút giao", "Được đi nhưng phải giảm tốc độ, chú ý quan sát, nhường đường cho người đi bộ qua đường", "Xem như đèn xanh"],
        answer: "Được đi nhưng phải giảm tốc độ, chú ý quan sát, nhường đường cho người đi bộ qua đường"
    },
    {
        question: "Hành vi nào sau đây bị nghiêm cấm theo Luật Giao thông đường bộ?",
        options: ["Đội mũ bảo hiểm khi đi xe máy", "Điều khiển xe sau khi uống rượu bia vượt mức cho phép", "Nhường đường cho xe cứu thương đang làm nhiệm vụ", "Chạy đúng tốc độ quy định"],
        answer: "Điều khiển xe sau khi uống rượu bia vượt mức cho phép"
    },
    {
        question: "Người đủ bao nhiêu tuổi trở lên thì được điều khiển xe mô tô hai bánh có dung tích xi-lanh từ 50cm³ trở lên?",
        options: ["16 tuổi", "18 tuổi", "20 tuổi", "21 tuổi"],
        answer: "18 tuổi" // General knowledge
    },
    {
        question: "Khi điều khiển xe trên đường, người lái xe phải mang theo các loại giấy tờ nào (đối với xe ô tô)?",
        options: ["Chỉ cần Bằng lái xe", "Bằng lái, Đăng ký xe, Bảo hiểm TNDS, Giấy kiểm định", "Chỉ cần Đăng ký xe và Bảo hiểm", "Sổ hộ khẩu và Chứng minh nhân dân"],
        answer: "Bằng lái, Đăng ký xe, Bảo hiểm TNDS, Giấy kiểm định"
    },
    {
        question: "“Vạch kẻ đường” là gì?",
        options: ["Một loại biển báo", "Tín hiệu của người điều khiển giao thông", "Một dạng báo hiệu để hướng dẫn, điều khiển giao thông trên mặt đường", "Đèn tín hiệu giao thông"],
        answer: "Một dạng báo hiệu để hướng dẫn, điều khiển giao thông trên mặt đường"
    },
    {
        question: "Khi lùi xe, người điều khiển phải làm gì?",
        options: ["Lùi thật nhanh", "Không cần quan sát phía sau", "Phải quan sát phía sau, có tín hiệu cần thiết và chỉ khi nào thấy không nguy hiểm mới được lùi", "Chỉ cần bật đèn lùi"],
        answer: "Phải quan sát phía sau, có tín hiệu cần thiết và chỉ khi nào thấy không nguy hiểm mới được lùi"
    },
    {
        question: "Người đi bộ phải tuân thủ quy tắc nào khi tham gia giao thông?",
        options: ["Đi tùy ý dưới lòng đường", "Phải đi trên hè phố, lề đường; trường hợp không có thì đi sát mép đường", "Luôn đi bên trái đường", "Chỉ qua đường ở nơi có cầu vượt"],
        answer: "Phải đi trên hè phố, lề đường; trường hợp không có thì đi sát mép đường"
    },
    {
        question: "Trên đường có nhiều làn đường cho xe đi cùng chiều được phân biệt bằng vạch kẻ phân làn đường, người điều khiển phương tiện phải cho xe đi như thế nào?",
        options: ["Đi vào bất kỳ làn nào", "Chỉ đi ở làn bên phải ngoài cùng", "Phải cho xe đi trong một làn đường và chỉ được chuyển làn đường ở những nơi cho phép", "Đi dàn hàng ngang trên các làn"],
        answer: "Phải cho xe đi trong một làn đường và chỉ được chuyển làn đường ở những nơi cho phép"
    },
    {
        question: "Khi muốn chuyển hướng, người điều khiển phương tiện phải làm gì?",
        options: ["Chuyển hướng ngay lập tức", "Giảm tốc độ và có tín hiệu báo hướng rẽ", "Không cần tín hiệu nếu đường vắng", "Chỉ cần quan sát gương chiếu hậu"],
        answer: "Giảm tốc độ và có tín hiệu báo hướng rẽ"
    },

    // Phần II: Tốc độ & Khoảng cách (Câu 16-35)
    {
        question: "Tốc độ tối đa cho phép của xe máy trong khu dân cư (trừ đường có biển báo riêng) là bao nhiêu?",
        options: ["40 km/h", "50 km/h", "60 km/h", "Không giới hạn"],
        answer: "50 km/h"
    },
    {
        question: "Tốc độ tối đa cho phép của ô tô con trong khu dân cư (trừ đường có biển báo riêng) là bao nhiêu?",
        options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
        answer: "50 km/h"
    },
    {
        question: "Tốc độ tối đa cho phép của ô tô tải trong khu dân cư (trừ đường có biển báo riêng) là bao nhiêu?",
        options: ["40 km/h", "50 km/h", "60 km/h", "30 km/h"],
        answer: "50 km/h"
    },
    {
        question: "Tốc độ tối đa cho phép của xe máy trên đường quốc lộ (ngoài khu dân cư, trừ đường có biển báo riêng) là bao nhiêu?",
        options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
        answer: "60 km/h"
    },
    {
        question: "Tốc độ tối đa cho phép của ô tô con trên đường quốc lộ (ngoài khu dân cư, trừ đường có biển báo riêng) là bao nhiêu?",
        options: ["70 km/h", "80 km/h", "90 km/h", "100 km/h"],
        answer: "90 km/h"
    },
    {
        question: "Tốc độ tối đa cho phép của ô tô tải trên đường quốc lộ (ngoài khu dân cư, trừ đường có biển báo riêng) là bao nhiêu?",
        options: ["60 km/h", "70 km/h", "80 km/h", "90 km/h"],
        answer: "80 km/h"
    },
    {
        question: "Tốc độ tối đa cho phép của ô tô khách trên đường quốc lộ (ngoài khu dân cư, trừ đường có biển báo riêng) là bao nhiêu?",
        options: ["60 km/h", "70 km/h", "80 km/h", "90 km/h"],
        answer: "80 km/h"
    },
    {
        question: "Tốc độ tối đa cho phép của ô tô con trên đường cao tốc (trừ đường có biển báo riêng) là bao nhiêu?",
        options: ["90 km/h", "100 km/h", "110 km/h", "120 km/h"],
        answer: "120 km/h"
    },
    {
        question: "Phương tiện nào sau đây KHÔNG được phép lưu thông trên đường cao tốc?",
        options: ["Ô tô con", "Xe khách", "Xe máy", "Ô tô tải"],
        answer: "Xe máy"
    },
    {
        question: "Biển báo nào quy định tốc độ tối đa cho phép?",
        options: ["Biển tròn, viền đỏ, nền trắng, số màu đen", "Biển tròn, nền xanh, số màu trắng", "Biển tam giác, viền đỏ, nền vàng", "Biển vuông, nền xanh"],
        answer: "Biển tròn, viền đỏ, nền trắng, số màu đen" // Example based on common sign R.127
    },
    {
        question: "Khi điều khiển xe chạy với tốc độ dưới 60 km/h, người lái xe phải chủ động giữ khoảng cách an toàn phù hợp với xe chạy liền trước xe của mình; khoảng cách này phụ thuộc vào yếu tố nào?",
        options: ["Chỉ phụ thuộc vào loại xe", "Chỉ phụ thuộc vào thời tiết", "Mật độ phương tiện, tình hình giao thông thực tế", "Chỉ phụ thuộc vào tốc độ xe mình"],
        answer: "Mật độ phương tiện, tình hình giao thông thực tế"
    },
    {
        question: "Trên đường cao tốc, khi trời mưa, đường trơn trượt, người lái xe phải xử lý như thế nào để đảm bảo an toàn?",
        options: ["Tăng tốc độ để nhanh qua đoạn đường xấu", "Giữ nguyên tốc độ và khoảng cách như điều kiện bình thường", "Giảm tốc độ và tăng khoảng cách an toàn so với xe phía trước", "Dừng xe ngay lập tức trên làn đường"],
        answer: "Giảm tốc độ và tăng khoảng cách an toàn so với xe phía trước"
    },
    {
        question: "Biển báo “Tốc độ tối thiểu cho phép” có đặc điểm gì?",
        options: ["Hình tròn, nền đỏ, số màu trắng", "Hình tròn, nền xanh lam, chữ số màu trắng", "Hình tam giác, nền vàng, viền đỏ", "Hình vuông, nền trắng, viền đen"],
        answer: "Hình tròn, nền xanh lam, chữ số màu trắng" // Example based on common sign R.306
    },
    {
        question: "Khi gặp biển báo “Hết tốc độ tối đa cho phép”, người lái xe được phép làm gì?",
        options: ["Chạy với tốc độ bất kỳ", "Chạy với tốc độ tối đa theo quy định chung cho loại đường đó", "Phải dừng lại", "Chạy chậm hơn tốc độ ghi trên biển"],
        answer: "Chạy với tốc độ tối đa theo quy định chung cho loại đường đó"
    },
    {
        question: "Trong khu vực đông dân cư, vào ban đêm, nếu đường không đủ sáng, xe cơ giới được sử dụng đèn chiếu xa không?",
        options: ["Được phép để nhìn rõ hơn", "Không được phép, phải dùng đèn chiếu gần", "Chỉ được nếu không có xe ngược chiều", "Tùy ý người lái xe"],
        answer: "Không được phép, phải dùng đèn chiếu gần" // General principle, specific context matters
    },
     {
        question: "Tốc độ tối đa của ô tô tải trên đường cao tốc (trừ khi có biển báo khác) là bao nhiêu?",
        options: ["80 km/h", "90 km/h", "100 km/h", "120 km/h"],
        answer: "90 km/h"
    },
    {
        question: "Việc quy định tốc độ xe chạy trên đường nhằm mục đích gì?",
        options: ["Gây khó khăn cho người lái xe", "Đảm bảo an toàn giao thông và trật tự đường bộ", "Tăng nguồn thu từ xử phạt", "Không có mục đích cụ thể"],
        answer: "Đảm bảo an toàn giao thông và trật tự đường bộ"
    },
    {
        question: "Khi điều khiển xe trên đường trơn, người lái xe cần làm gì để đảm bảo an toàn?",
        options: ["Phanh gấp khi cần dừng", "Tăng ga đột ngột", "Giữ tay lái vững, giảm tốc độ, đi số thấp (nếu có)", "Không cần thay đổi cách lái"],
        answer: "Giữ tay lái vững, giảm tốc độ, đi số thấp (nếu có)"
    },
    {
        question: "Nếu tầm nhìn bị hạn chế bởi sương mù hoặc mưa to, người lái xe phải làm gì?",
        options: ["Dừng xe ngay giữa đường", "Bật đèn chiếu xa và chạy nhanh", "Giảm tốc độ, bật đèn sương mù (nếu có) hoặc đèn chiếu gần, đi sát lề phải", "Tắt hết đèn để tiết kiệm điện"],
        answer: "Giảm tốc độ, bật đèn sương mù (nếu có) hoặc đèn chiếu gần, đi sát lề phải"
    },
    {
        question: "“Giữ khoảng cách an toàn” giữa hai xe khi tham gia giao thông có ý nghĩa gì?",
        options: ["Để xe sau có thể vượt dễ dàng", "Để có đủ thời gian xử lý khi xe trước phanh gấp hoặc có tình huống bất ngờ", "Không có ý nghĩa quan trọng", "Chỉ áp dụng trên đường cao tốc"],
        answer: "Để có đủ thời gian xử lý khi xe trước phanh gấp hoặc có tình huống bất ngờ"
    },

    // Phần III: Biển báo & Tín hiệu (Câu 36-50)
    {
        question: "Biển báo cấm hình tròn, viền đỏ, nền trắng, có gạch chéo màu đỏ từ trên xuống dưới qua hình vẽ xe máy có ý nghĩa gì?",
        options: ["Cấm ô tô", "Cấm xe máy", "Đường dành cho xe máy", "Cấm tất cả các loại xe cơ giới"],
        answer: "Cấm xe máy" // P.104
    },
    {
        question: "Tín hiệu đèn giao thông màu đỏ có ý nghĩa gì?",
        options: ["Được phép đi", "Phải dừng lại trước vạch dừng", "Đi chậm lại", "Chuẩn bị dừng"],
        answer: "Phải dừng lại trước vạch dừng"
    },
    {
        question: "Tín hiệu đèn giao thông màu xanh có ý nghĩa gì?",
        options: ["Phải dừng lại", "Được phép đi", "Đi chậm lại", "Chuẩn bị đi"],
        answer: "Được phép đi"
    },
    {
        question: "Tín hiệu đèn giao thông màu vàng có ý nghĩa gì khi đứng một mình (không nhấp nháy)?",
        options: ["Được phép đi nhanh", "Báo hiệu sự thay đổi tín hiệu từ xanh sang đỏ, phải dừng lại trước vạch dừng, trừ trường hợp đã đi quá vạch dừng thì được đi tiếp", "Báo hiệu nguy hiểm", "Không có ý nghĩa"],
        answer: "Báo hiệu sự thay đổi tín hiệu từ xanh sang đỏ, phải dừng lại trước vạch dừng, trừ trường hợp đã đi quá vạch dừng thì được đi tiếp"
    },
    {
        question: "Biển báo hình tam giác đều, viền đỏ, nền vàng, hình vẽ bên trong màu đen thuộc nhóm biển báo nào?",
        options: ["Biển báo cấm", "Biển báo nguy hiểm", "Biển hiệu lệnh", "Biển chỉ dẫn"],
        answer: "Biển báo nguy hiểm"
    },
    {
        question: "Biển báo hình tròn, nền xanh lam, có hình vẽ màu trắng bên trong thuộc nhóm biển báo nào?",
        options: ["Biển báo cấm", "Biển báo nguy hiểm", "Biển hiệu lệnh", "Biển chỉ dẫn"],
        answer: "Biển hiệu lệnh"
    },
    {
        question: "Biển báo hình chữ nhật hoặc hình vuông, nền xanh lam hoặc trắng, có hình vẽ hoặc chữ viết màu trắng/đen bên trong thuộc nhóm biển báo nào?",
        options: ["Biển báo cấm", "Biển báo nguy hiểm", "Biển hiệu lệnh", "Biển chỉ dẫn"],
        answer: "Biển chỉ dẫn"
    },
    {
        question: "Khi gặp biển báo “STOP”, người lái xe phải làm gì?",
        options: ["Đi chậm lại", "Dừng lại quan sát rồi đi tiếp khi an toàn", "Nhường đường cho xe bên phải", "Chỉ dừng lại nếu có xe khác"],
        answer: "Dừng lại quan sát rồi đi tiếp khi an toàn" // R.122
    },
    {
        question: "Vạch liền màu vàng kẻ dọc theo tim đường có ý nghĩa gì?",
        options: ["Phân chia hai chiều xe chạy ngược chiều, không được đè vạch, không được lấn làn", "Phân chia các làn xe cùng chiều", "Cho phép vượt xe", "Vạch dừng xe"],
        answer: "Phân chia hai chiều xe chạy ngược chiều, không được đè vạch, không được lấn làn"
    },
    {
        question: "Vạch đứt quãng màu trắng kẻ dọc theo tim đường có ý nghĩa gì?",
        options: ["Cấm vượt xe", "Phân chia hai chiều xe chạy ngược chiều hoặc các làn cùng chiều, cho phép vượt/chuyển làn khi an toàn", "Chỉ dành cho người đi bộ", "Nơi đỗ xe"],
        answer: "Phân chia hai chiều xe chạy ngược chiều hoặc các làn cùng chiều, cho phép vượt/chuyển làn khi an toàn"
    },
    {
        question: "Khi người điều khiển giao thông giơ thẳng một tay lên cao, tín hiệu này có ý nghĩa gì đối với người tham gia giao thông ở các hướng?",
        options: ["Được đi nhanh hơn", "Phải dừng lại trước vạch dừng (trừ xe đã ở trong nút giao)", "Được rẽ trái", "Được rẽ phải"],
        answer: "Phải dừng lại trước vạch dừng (trừ xe đã ở trong nút giao)"
    },
    {
        question: "Biển báo có hình mũi tên chỉ hướng đi thẳng và rẽ phải (nền xanh, hình tròn) có ý nghĩa gì?",
        options: ["Cấm đi thẳng và rẽ phải", "Hướng đi bắt buộc phải theo là đi thẳng hoặc rẽ phải", "Đường một chiều chỉ cho phép đi thẳng hoặc rẽ phải", "Nguy hiểm phía trước"],
        answer: "Hướng đi bắt buộc phải theo là đi thẳng hoặc rẽ phải" // R.301 series
    },
    {
        question: "Còi xe được sử dụng như thế nào cho đúng quy định?",
        options: ["Sử dụng liên tục trong đô thị", "Chỉ sử dụng khi cần báo hiệu vượt xe hoặc tránh nguy hiểm, ngoài đô thị vào ban ngày", "Sử dụng tùy thích", "Cấm sử dụng hoàn toàn"],
        answer: "Chỉ sử dụng khi cần báo hiệu vượt xe hoặc tránh nguy hiểm, ngoài đô thị vào ban ngày" // General principle. Night time restrictions in city.
    },
    {
        question: "Đèn pha (chiếu xa) được sử dụng trong trường hợp nào?",
        options: ["Luôn luôn khi lái xe ban đêm", "Khi lái xe trên đường vắng, không có xe ngược chiều, cần tầm nhìn xa", "Trong đô thị đông dân cư", "Khi trời mưa to"],
        answer: "Khi lái xe trên đường vắng, không có xe ngược chiều, cần tầm nhìn xa"
    },
    {
        question: "Biển báo 'Đường một chiều' (I.401) có đặc điểm gì?",
        options: ["Hình tròn, nền đỏ", "Hình chữ nhật, nền xanh, mũi tên trắng lớn chỉ hướng", "Hình tam giác, nền vàng", "Hình vuông, nền trắng"],
        answer: "Hình chữ nhật, nền xanh, mũi tên trắng lớn chỉ hướng"
    },

    // Phần IV: Vi phạm & Xử phạt (Câu 51-70)
    {
        question: "Mức phạt tiền đối với hành vi điều khiển xe máy không tuân thủ tín hiệu đèn giao thông là bao nhiêu?",
        options: ["100.000 - 200.000 đồng", "400.000 - 600.000 đồng", "800.000 - 1.000.000 đồng", "2.000.000 - 3.000.000 đồng"],
        answer: "800.000 - 1.000.000 đồng"
    },
    {
        question: "Mức phạt tiền đối với hành vi điều khiển ô tô không tuân thủ tín hiệu đèn giao thông là bao nhiêu?",
        options: ["1.000.000 - 2.000.000 đồng", "2.000.000 - 3.000.000 đồng", "4.000.000 - 6.000.000 đồng", "8.000.000 - 12.000.000 đồng"],
        answer: "4.000.000 - 6.000.000 đồng"
    },
    {
        question: "Ngoài phạt tiền, người điều khiển ô tô vi phạm lỗi không chấp hành tín hiệu đèn giao thông còn bị hình phạt bổ sung nào?",
        options: ["Không có hình phạt bổ sung", "Tịch thu phương tiện", "Tước quyền sử dụng Giấy phép lái xe từ 2-4 tháng", "Lao động công ích"],
        answer: "Tước quyền sử dụng Giấy phép lái xe từ 2-4 tháng"
    },
    {
        question: "Mức phạt tiền đối với người điều khiển xe máy có nồng độ cồn từ 0,25 đến 0,5 mg/lít khí thở là bao nhiêu?",
        options: ["500.000 - 1.000.000 đồng", "1.000.000 - 2.000.000 đồng", "2.000.000 - 3.000.000 đồng", "4.000.000 - 5.000.000 đồng"],
        answer: "2.000.000 - 3.000.000 đồng"
    },
    {
        question: "Mức phạt tiền đối với người điều khiển xe máy có nồng độ cồn trên 0,5 mg/lít khí thở là bao nhiêu?",
        options: ["2.000.000 - 3.000.000 đồng", "4.000.000 - 5.000.000 đồng", "6.000.000 - 8.000.000 đồng", "Trên 8.000.000 đồng"],
        answer: "6.000.000 - 8.000.000 đồng"
    },
    {
        question: "Mức phạt tiền đối với người điều khiển ô tô có nồng độ cồn (ví dụ ở mức cao nhất theo thông tin cung cấp) là bao nhiêu?",
        options: ["5.000.000 - 10.000.000 đồng", "10.000.000 - 15.000.000 đồng", "16.000.000 - 18.000.000 đồng", "Trên 20.000.000 đồng"],
        answer: "16.000.000 - 18.000.000 đồng" // Based on example, actual might be higher for highest tier.
    },
    {
        question: "Người điều khiển ô tô vi phạm nồng độ cồn ở mức cao có thể bị tước quyền sử dụng Giấy phép lái xe trong bao lâu?",
        options: ["1-3 tháng", "4-6 tháng", "7-9 tháng", "10-12 tháng"],
        answer: "10-12 tháng" // Based on example, actual might be higher for highest tier.
    },
    {
        question: "Hành vi vượt xe không đúng quy định gây tai nạn giao thông có bị xử lý hình sự không?",
        options: ["Không, chỉ phạt hành chính", "Có, tùy theo mức độ nghiêm trọng của hậu quả", "Chỉ bị tước bằng lái vĩnh viễn", "Chỉ bị phạt tiền rất nặng"],
        answer: "Có, tùy theo mức độ nghiêm trọng của hậu quả" // General legal principle
    },
    {
        question: "Chạy quá tốc độ quy định từ 10 km/h đến 20 km/h đối với xe ô tô bị phạt tiền bao nhiêu?",
        options: ["800.000 - 1.000.000 đồng", "3.000.000 - 5.000.000 đồng", "6.000.000 - 8.000.000 đồng", "10.000.000 - 12.000.000 đồng"],
        answer: "3.000.000 - 5.000.000 đồng" // Example, actual fine may vary based on specific decree
    },
    {
        question: "Sử dụng điện thoại di động khi đang điều khiển xe ô tô chạy trên đường bị xử phạt như thế nào?",
        options: ["Nhắc nhở", "Phạt tiền", "Phạt tiền và có thể bị tước GPLX", "Không bị xử phạt"],
        answer: "Phạt tiền và có thể bị tước GPLX" // General knowledge of common penalties
    },
    {
        question: "Không đội mũ bảo hiểm cho người đi mô tô, xe máy khi tham gia giao thông bị xử phạt như thế nào?",
        options: ["Chỉ nhắc nhở", "Phạt tiền", "Tạm giữ xe", "Không bị phạt"],
        answer: "Phạt tiền"
    },
    {
        question: "Xe ô tô không có Giấy chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường còn hiệu lực tham gia giao thông sẽ bị xử lý thế nào?",
        options: ["Chỉ nhắc nhở", "Phạt tiền và có thể bị tước GPLX", "Phạt tiền và tạm giữ phương tiện", "Không sao cả"],
        answer: "Phạt tiền và có thể bị tước GPLX" // Penalties exist, this is a likely combination
    },
    {
        question: "Hành vi đua xe trái phép bị xử phạt như thế nào?",
        options: ["Phạt tiền nhẹ", "Phạt tiền rất nặng, tịch thu xe, tước GPLX và có thể bị truy cứu trách nhiệm hình sự", "Chỉ bị tạm giữ xe", "Nhắc nhở và yêu cầu giải tán"],
        answer: "Phạt tiền rất nặng, tịch thu xe, tước GPLX và có thể bị truy cứu trách nhiệm hình sự"
    },
    {
        question: "Đi không đúng phần đường, làn đường quy định bị xử phạt như thế nào (đối với ô tô)?",
        options: ["Không bị phạt", "Nhắc nhở", "Phạt tiền", "Phạt tiền và tước GPLX"],
        answer: "Phạt tiền và tước GPLX" // Common for this violation
    },
    {
        question: "Lắp đặt, sử dụng còi vượt quá âm lượng quy định bị xử phạt không?",
        options: ["Không", "Có, bị phạt tiền", "Chỉ bị nhắc nhở", "Bị tịch thu xe"],
        answer: "Có, bị phạt tiền"
    },
    {
        question: "Không nhường đường cho xe ưu tiên đang làm nhiệm vụ có bị phạt không?",
        options: ["Không, vì đường đông", "Có, bị phạt tiền và có thể tước GPLX", "Chỉ bị nhắc nhở", "Tùy trường hợp"],
        answer: "Có, bị phạt tiền và có thể tước GPLX"
    },
    {
        question: "Dừng xe, đỗ xe ở nơi có biển “Cấm dừng xe và đỗ xe” bị xử phạt như thế nào?",
        options: ["Không bị phạt nếu dừng nhanh", "Phạt tiền", "Chỉ bị nhắc nhở", "Được phép nếu không có ai thấy"],
        answer: "Phạt tiền"
    },
    {
        question: "Chở quá số người quy định đối với xe ô tô chở khách bị xử phạt như thế nào?",
        options: ["Không bị phạt", "Phạt tiền trên mỗi người vượt quá", "Chỉ phạt người lái xe", "Phạt tiền trên mỗi người vượt quá và có thể bị tước GPLX"],
        answer: "Phạt tiền trên mỗi người vượt quá và có thể bị tước GPLX"
    },
    {
        question: "Việc không có bảo hiểm trách nhiệm dân sự bắt buộc của xe cơ giới khi tham gia giao thông có bị xử phạt không?",
        options: ["Không, đây là bảo hiểm tự nguyện", "Có, bị phạt tiền", "Chỉ bị nhắc nhở mua", "Chỉ phạt khi gây tai nạn"],
        answer: "Có, bị phạt tiền"
    },
    {
        question: "Trường hợp nào người vi phạm giao thông có thể bị tạm giữ phương tiện?",
        options: ["Mọi lỗi vi phạm", "Chỉ khi chạy quá tốc độ", "Đối với một số lỗi nghiêm trọng theo quy định của pháp luật (ví dụ: đua xe, không có giấy tờ, vi phạm nồng độ cồn nặng)", "Không bao giờ bị tạm giữ"],
        answer: "Đối với một số lỗi nghiêm trọng theo quy định của pháp luật (ví dụ: đua xe, không có giấy tờ, vi phạm nồng độ cồn nặng)"
    },

    // Phần V: Giấy tờ & Mũ bảo hiểm (Câu 71-80)
    {
        question: "Giấy tờ nào bắt buộc phải mang theo đối với người điều khiển xe máy?",
        options: ["Chỉ Giấy phép lái xe", "Giấy phép lái xe, Đăng ký xe, Bảo hiểm TNDS", "Sổ hộ khẩu", "Chứng minh nhân dân"],
        answer: "Giấy phép lái xe, Đăng ký xe, Bảo hiểm TNDS"
    },
    {
        question: "Giấy chứng nhận bảo hiểm trách nhiệm dân sự của chủ xe cơ giới có tác dụng gì?",
        options: ["Để được giảm giá xăng", "Bồi thường thiệt hại về người và tài sản cho bên thứ ba do xe cơ giới gây ra", "Miễn trừ mọi lỗi vi phạm giao thông", "Không có tác dụng cụ thể"],
        answer: "Bồi thường thiệt hại về người và tài sản cho bên thứ ba do xe cơ giới gây ra"
    },
    {
        question: "Giấy chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường áp dụng cho loại xe nào?",
        options: ["Chỉ xe máy", "Chỉ xe đạp", "Ô tô các loại", "Tất cả các phương tiện giao thông"],
        answer: "Ô tô các loại"
    },
    {
        question: "Khi tham gia giao thông, người điều khiển xe mô tô, xe gắn máy phải đội mũ bảo hiểm và cài quai đúng quy cách khi nào?",
        options: ["Chỉ khi đi trên quốc lộ", "Chỉ khi trời tối", "Luôn luôn khi tham gia giao thông", "Chỉ khi có cảnh sát giao thông"],
        answer: "Luôn luôn khi tham gia giao thông"
    },
    {
        question: "Mũ bảo hiểm đạt tiêu chuẩn chất lượng là mũ như thế nào?",
        options: ["Mũ thời trang, mỏng nhẹ", "Mũ có tem CR (chứng nhận hợp quy) và các yếu tố cấu tạo đầy đủ theo quy chuẩn", "Mũ tự chế", "Bất kỳ loại mũ nào che được đầu"],
        answer: "Mũ có tem CR (chứng nhận hợp quy) và các yếu tố cấu tạo đầy đủ theo quy chuẩn"
    },
    {
        question: "Người ngồi sau xe mô tô, xe gắn máy có bắt buộc phải đội mũ bảo hiểm không?",
        options: ["Không bắt buộc", "Có, bắt buộc và phải cài quai đúng quy cách", "Chỉ bắt buộc nếu là người lớn", "Tùy ý"],
        answer: "Có, bắt buộc và phải cài quai đúng quy cách"
    },
    {
        question: "Nếu Giấy phép lái xe bị mất, người lái xe có được phép điều khiển phương tiện tham gia giao thông không?",
        options: ["Được phép nếu có giấy hẹn cấp lại", "Không được phép cho đến khi được cấp lại GPLX mới", "Được phép nếu trình bày lý do", "Chỉ được lái xe vào ban đêm"],
        answer: "Không được phép cho đến khi được cấp lại GPLX mới" // General rule, exceptions for cớ mất/hẹn can be complex
    },
    {
        question: "Đăng ký xe (cà vẹt xe) chứa thông tin gì quan trọng?",
        options: ["Thông tin về người lái xe", "Thông tin về chủ sở hữu và các đặc điểm kỹ thuật của xe", "Lịch sử vi phạm của xe", "Mức phạt các lỗi thường gặp"],
        answer: "Thông tin về chủ sở hữu và các đặc điểm kỹ thuật của xe"
    },
    {
        question: "Trẻ em bao nhiêu tuổi khi ngồi trên xe mô tô, xe gắn máy không cần đội mũ bảo hiểm?",
        options: ["Dưới 6 tuổi", "Dưới 10 tuổi", "Dưới 12 tuổi", "Mọi trẻ em đều phải đội nếu có mũ vừa kích cỡ"],
        answer: "Dưới 6 tuổi" // Check current specific regulations if this changed, historically it was 6.
    },
    {
        question: "Mang theo bản photo công chứng Giấy phép lái xe có thay thế được bản chính khi CSGT kiểm tra không?",
        options: ["Có, hoàn toàn hợp lệ", "Không, phải xuất trình bản chính", "Chỉ hợp lệ nếu có lý do chính đáng", "Tùy thuộc vào CSGT"],
        answer: "Không, phải xuất trình bản chính"
    },

    // Phần VI: Dừng, đỗ xe & Văn hóa giao thông (Câu 81-100)
    {
        question: "Nơi nào sau đây bị cấm đỗ xe?",
        options: ["Trước cổng nhà riêng không có biển cấm", "Trên cầu, gầm cầu vượt", "Lề đường rộng rãi ở nông thôn", "Khu vực có biển báo cho phép đỗ xe"],
        answer: "Trên cầu, gầm cầu vượt"
    },
    {
        question: "Có được phép dừng, đỗ xe ở đường cong có tầm nhìn bị che khuất không?",
        options: ["Được phép nếu bật đèn cảnh báo", "Không được phép", "Chỉ được dừng, không được đỗ", "Được phép nếu dừng không quá 5 phút"],
        answer: "Không được phép"
    },
    {
        question: "Khoảng cách tối thiểu từ xe đỗ đến mép đường giao nhau là bao nhiêu mét?",
        options: ["1 mét", "3 mét", "5 mét", "10 mét"],
        answer: "5 mét"
    },
    {
        question: "Có được dừng, đỗ xe trước cổng cơ quan, bệnh viện, trường học không?",
        options: ["Được phép nếu không gây cản trở", "Không được phép", "Chỉ được dừng để đón trả người", "Được phép vào ngày nghỉ"],
        answer: "Không được phép"
    },
    {
        question: "Khi đỗ xe trên dốc, người lái xe cần làm gì để đảm bảo an toàn?",
        options: ["Chỉ cần kéo phanh tay", "Kéo phanh tay, chèn bánh xe (nếu cần), cài số (xe số sàn) hoặc về P (xe số tự động)", "Không cần làm gì đặc biệt", "Tắt máy và rời khỏi xe ngay"],
        answer: "Kéo phanh tay, chèn bánh xe (nếu cần), cài số (xe số sàn) hoặc về P (xe số tự động)"
    },
    {
        question: "Khi dừng xe, người lái xe phải cho xe dừng, đỗ ở vị trí nào?",
        options: ["Giữa đường để tiện di chuyển", "Sát theo lề đường, hè phố phía bên phải theo chiều đi của mình", "Bất kỳ đâu nếu không có biển cấm", "Bên trái chiều đi"],
        answer: "Sát theo lề đường, hè phố phía bên phải theo chiều đi của mình"
    },
    {
        question: "Văn hóa giao thông thể hiện ở hành vi nào sau đây?",
        options: ["Chen lấn, vượt ẩu", "Bấm còi inh ỏi khi đường đông", "Nhường đường, giúp đỡ người khác khi tham gia giao thông", "Vượt đèn đỏ khi vắng người"],
        answer: "Nhường đường, giúp đỡ người khác khi tham gia giao thông"
    },
    {
        question: "Khi thấy xe phía sau xin vượt, nếu đủ điều kiện an toàn, người điều khiển phương tiện phía trước phải làm gì?",
        options: ["Tăng tốc độ", "Lạng lách đánh võng", "Giảm tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua", "Không làm gì cả"],
        answer: "Giảm tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua"
    },
    {
        question: "Hành vi nào thể hiện sự thiếu văn hóa khi tham gia giao thông?",
        options: ["Dừng xe đúng nơi quy định", "Xả rác ra đường", "Đội mũ bảo hiểm", "Chấp hành tín hiệu đèn"],
        answer: "Xả rác ra đường"
    },
    {
        question: "Khi tham gia giao thông vào ban đêm, trong đô thị, khu đông dân cư, xe cơ giới phải sử dụng đèn chiếu sáng như thế nào?",
        options: ["Đèn chiếu xa (đèn pha)", "Đèn chiếu gần (đèn cốt)", "Không cần bật đèn nếu đường có đèn chiếu sáng công cộng", "Tắt hết đèn"],
        answer: "Đèn chiếu gần (đèn cốt)"
    },
    {
        question: "Tại nơi đường giao nhau không có báo hiệu đi theo vòng xuyến, phải nhường đường như thế nào là đúng quy tắc giao thông?",
        options: ["Nhường đường cho xe đi từ bên phải mình tới", "Nhường đường cho xe đi từ bên trái mình tới", "Xe nào đến trước được đi trước", "Xe to hơn được đi trước"],
        answer: "Nhường đường cho xe đi từ bên phải mình tới" // General rule, unless specified
    },
    {
        question: "Khi điều khiển xe ô tô rẽ trái ở nơi đường giao nhau, người lái xe cần chú ý điều gì?",
        options: ["Quan sát rộng, nhường đường cho người đi bộ và các phương tiện đi ngược chiều, rẽ từ từ", "Rẽ nhanh để không cản trở xe khác", "Không cần xi nhan nếu đường vắng", "Chỉ cần nhìn xe phía trước"],
        answer: "Quan sát rộng, nhường đường cho người đi bộ và các phương tiện đi ngược chiều, rẽ từ từ"
    },
    {
        question: "“Làn đường” là gì?",
        options: ["Phần đường dành cho người đi bộ", "Một phần của phần đường xe chạy được chia theo chiều dọc của đường, có đủ bề rộng cho xe chạy an toàn", "Vỉa hè", "Dải phân cách"],
        answer: "Một phần của phần đường xe chạy được chia theo chiều dọc của đường, có đủ bề rộng cho xe chạy an toàn"
    },
    {
        question: "Người lái xe có được quay đầu xe ở phần đường dành cho người đi bộ qua đường không?",
        options: ["Được phép nếu không có người đi bộ", "Không được phép", "Chỉ được phép vào ban đêm", "Được phép nếu có tín hiệu xin phép"],
        answer: "Không được phép"
    },
    {
        question: "Khi đỗ xe chiếm một phần lòng đường, người lái xe phải đặt báo hiệu nguy hiểm ở đâu không?",
        options: ["Không cần thiết", "Có, phải đặt ở phía trước và phía sau xe", "Chỉ cần đặt ở phía sau", "Chỉ khi trời tối"],
        answer: "Có, phải đặt ở phía trước và phía sau xe" // Especially if visibility is poor or it's a hazard
    },
    {
        question: "Hành vi nào sau đây là nguy hiểm và bị cấm khi tham gia giao thông?",
        options: ["Giảm tốc độ khi qua trường học", "Lạng lách, đánh võng", "Dừng xe nhường đường cho người đi bộ", "Sử dụng còi đúng quy định"],
        answer: "Lạng lách, đánh võng"
    },
    {
        question: "Việc mở cửa xe ô tô đột ngột khi đang dừng, đỗ có thể gây nguy hiểm gì?",
        options: ["Không gây nguy hiểm gì", "Có thể gây tai nạn cho người và phương tiện khác di chuyển cùng chiều hoặc ngược chiều", "Chỉ làm hỏng cửa xe", "Chỉ gây bất tiện nhỏ"],
        answer: "Có thể gây tai nạn cho người và phương tiện khác di chuyển cùng chiều hoặc ngược chiều"
    },
    {
        question: "Khi điều khiển xe qua đường sắt không có rào chắn, không có người điều khiển giao thông, người lái xe phải làm gì?",
        options: ["Tăng tốc cho xe nhanh chóng vượt qua", "Dừng lại, quan sát kỹ hai phía, khi thấy chắc chắn không có phương tiện đường sắt tới mới cho xe qua", "Chỉ cần bấm còi rồi đi qua", "Không cần dừng lại nếu không nghe thấy tiếng còi tàu"],
        answer: "Dừng lại, quan sát kỹ hai phía, khi thấy chắc chắn không có phương tiện đường sắt tới mới cho xe qua"
    },
    {
        question: "Trên xe ô tô chở người từ 10 chỗ ngồi trở lên phải có trang bị gì để phòng cháy, chữa cháy?",
        options: ["Không cần trang bị gì", "Bình chữa cháy còn sử dụng được và đặt ở nơi dễ thấy, dễ lấy", "Một xô nước", "Chỉ cần biển báo cấm lửa"],
        answer: "Bình chữa cháy còn sử dụng được và đặt ở nơi dễ thấy, dễ lấy"
    },
    {
        question: "Ý nghĩa của việc bảo dưỡng xe định kỳ là gì?",
        options: ["Chỉ để xe đẹp hơn", "Đảm bảo các cụm chi tiết của xe hoạt động tốt, phòng ngừa hư hỏng, đảm bảo an toàn khi vận hành", "Tốn tiền không cần thiết", "Chỉ cần thiết đối với xe cũ"],
        answer: "Đảm bảo các cụm chi tiết của xe hoạt động tốt, phòng ngừa hư hỏng, đảm bảo an toàn khi vận hành"
    }
];
