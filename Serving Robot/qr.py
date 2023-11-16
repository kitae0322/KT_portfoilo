# URL로 연결되는 QR_Code 생성 프로그램
# 생성된 "QR 코드"를 휴대폰 카메라로 스캔 하면, url(네이버)로 접속할 수 있어요.
# macOS 14.1, PyCharm 2023.2.3 (Community Edition), Python 3.10.9

import qrcode

# URL 주소
url = "http://10.10.13.182:8081/"
# url = "127.0.0.1:8080/menu"

# "QR 코드" 생성
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr.add_data(url)
qr.make(fit=True)

# "QR 코드" 이미지 생성
img = qr.make_image(fill_color="black", back_color="white")

# "QR 코드"를 이미지 파일로 저장
img.save("qr_code_url.png")

print("QR 코드가 생성되었고, qr_code_url.png 파일로 저장되었습니다.")
