---
title: Dữ liệu kiểm tra của Bạn có Ẩn một Bí mật?
date: 2021-06-21T09:46:57.569Z
description: Trong bài viết này chúng ta sẽ đi tìm hiểu về một trường hợp khá
  phổ biến "Cắt bớt dữ liệu", cách nhận biết và các xử lý khi gặp vấn đề này.
tags:
  - Pp
  - Ppk
---
Trước khi đi vào bài viết chi tiết, mời bạn xem biểu đồ bên dưới về dữ liệu kiểm tra đầu vào của một nhà cung cấp. Theo bạn biểu đồ này có bình thường và đủ để bạn nhận xét về quá trình của nhà cung cấp?

![Data Truncated](https://lh6.googleusercontent.com/9lTcgFZDbFfjlSxFU43wRr6N75h3Ft0EkmfM35Kkkbfe-ZYyYBcm31QBVIDd2FEXNy99DdzOzDsb796lLLDCon9u5vP49NoaBPbzF0HU5PolDJ1GDTrBM0dIxXUO8Tv5-lKCy9V9)

Dữ liệu kiểm tra đầu vào của một số lượng lớn các linh kiện

Đường cong cho thấy rằng mỗi linh kiện được sản xuất theo thông số kỹ thuật và cho thấy rằng nhà cung cấp không có vấn đề gì về chất lượng.

Nếu bạn nhìn kỹ thì đường cong chỉ hiển thị một nửa bức tranh vì nó bị thiếu giới hạn kỹ thuật trên và dưới. Khi các thông số kỹ thuật được thêm vào biểu đồ, rõ ràng là dữ liệu đã bị cắt bớt. Đây có thể là do nhà cung cấp đang kiểm tra từng linh kiện và chỉ giao cho bạn những sản phẩm đáp ứng thông số kỹ thuật. 

![Data Truncated with Specs](https://lh6.googleusercontent.com/XJ2IHis3bvcpSpdspYUBTy6L3dmVgrQ1XHrn1LGbjvv4tUhcxa7P2yArJyyF1sQxPOS6_RPiE5YwvZEqcTa6JGJSEpBGoEQ_qt0wbGWWy87bIBu1DjNR-rOLdl_AFCq0Bc1fAjtb)

Dữ liệu kiểm tra đầu vào với USL, LSL

Đây là một sự cố phổ biến đáng ngạc nhiên. Nếu bạn đang sử dụng kế hoạch lấy mẫu thuộc tính (Z1.4 hoặc C = 0) để lấy mẫu kiểm tra, dữ liệu của bạn cũng có thể đang ẩn những bí mật tương tự. Một cách nhanh chóng để kiểm tra Hiệu ứng Cắt bớt là sử dụng Phân tích hiệu suất quá trình (Pp, Ppk). Công thức tiêu chuẩn cho hiệu suất quá trình là Pp = (USL - LSL) / (6 \* sigma). Pp cho dữ liệu bị cắt ngắn = (108-92) / (6 \* 3,88) = 0,68 nhỏ hơn 1.

Giá trị Pp <1, cho chúng ta biết rằng chiều rộng thông số kỹ thuật nhỏ hơn chiều rộng biến thiên quá trình và rằng nhà cung cấp đang sản xuất cả các linh kiện không phù hợp.

### Tác động của hiệu ứng cắt bớt

Đường cong trong hình dưới được tạo bằng cách sử dụng tập hợp dữ liệu ngẫu nhiên có giá trị trung bình là 100 và độ lệch chuẩn là 5. Trong ví dụ lý thuyết này, tôi đã đặt giới hạn thông số kỹ thuật dưới là 92 và giới hạn thông số kỹ thuật trên là 108. Điều này cũng giống như loại bỏ khoảng 5,4% thấp hơn và 5,4% trên của đường cong. Nói cách khác, nhà cung cấp sẽ phải sản xuất 111 linh kiện để xuất xưởng 100 linh kiện. Điều này làm tăng thời gian và chi phí cho cả nhà cung cấp và người mua.

![Data Without Truncation](https://lh3.googleusercontent.com/c_b733_u3tzib3sDqxj__mLRESnjGaXieQk9w8r0P9-QWdhMfDtt9tokZPSy9hFGf-GkYwCf-H5fgdyVmJfwz48lTz-1noHyqiPYVUYtWxxG2xxbYmg9jkMrJnNXtfJ1yvDXlUtG)

Biểu đồ Histogram bao gồm các dữ liệu của linh kiện đã bị cắt bớt

Biểu đồ Histogram dưới đây là một dạng khác của cùng một tập dữ liệu, bổ sung lại các dữ liệu của linh kiện mà nhà cung cấp đã loại bỏ. Sử dụng một ứng dụng phần mềm thống kê (JMP), tôi đã thêm đường cong phân phối chuẩn lý thuyết. Trong trường hợp này, giá trị trung bình là 100 và độ lệch chuẩn được tính toán là 4,97. Lưu ý cách đường cong khớp chặt chẽ với tập dữ liệu trong ví dụ này.

Tiếp theo, tôi tính toán phân phối cho lần kiểm tra đến không bao gồm các điểm dữ liệu bị cắt ngắn. Phần mềm thống kê tính toán cùng một giá trị trung bình là 100 nhưng độ lệch chuẩn thấp hơn là 3,88. Dưới đây là đường cong phân phối chuẩn được tính toán được phủ trên dữ liệu kiểm tra đến.

![Normal Distribution Data](https://lh5.googleusercontent.com/F6LSeQxu-2BALS5uiR9EdCh88uqa9BA51Xy8PqpKnSZM2cwBmdE4km-bJ0pdz67X6sYIzzyA4KX99G6EwswcfJWys7NoW7aTZDDf95tcXQxlWOVHRfptSeyjr5a5-PDnPtwMjxCB)

Phân phối Chuẩn được Tính toán phủ trên dữ liệu với Hiệu ứng Cắt bớt

Chú ý rằng tâm của đường cong được tính toán cao hơn các điểm chính giữa và các cạnh của đường cong thấp hơn các điểm dữ liệu. Do đó, hiệu ứng cắt bớt có thể đánh lừa bạn bằng cách hiển thị độ lệch chuẩn thấp hơn đáng kể.

### Tại sao việc tìm kiếm Hiệu ứng Cắt bỏ lại quan trọng?

Nếu tất cả các linh kiện của bạn đều vượt qua kiểm tra đầu vào, bạn có thể tin rằng nhà cung cấp của bạn đang sản xuất các linh kiện chất lượng cao. Tuy nhiên, khi bạn sử dụng Phân tích hiệu suất quá trình trên dữ liệu hoặc chỉ đơn giản là xem biểu đồ histogram, bạn có thể thấy rằng dữ liệu của mình bị cắt bớt.

Nếu dữ liệu của bạn thực sự bị cắt ngắn, bạn nên liên hệ với nhà cung cấp của mình để xác định nguyên nhân gây ra việc cắt bớt. Có thể có những giới hạn tự nhiên đối với quá trình khiến dữ liệu có vẻ như bị cắt ngắn hoặc có thể có cơ hội đáng kể để cải thiện quy trình sản xuất của nhà cung cấp.

Bằng cách làm việc với nhà cung cấp của mình, bạn có thể hiểu lý do tại sao dữ liệu bị cắt ngắn và thực hiện bất kỳ hành động khắc phục nào cần thiết.