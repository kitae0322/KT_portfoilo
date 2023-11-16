import cv2
import requests

cap = cv2.VideoCapture(0)

width = 640
height = 480
cap.set(3, width)
cap.set(4, height)

_, prev_frame = cap.read()

# 직사각형 영역의 크기 (예: width x height)
rect_width, rect_height = 100, 150

while True:
    ret, frame = cap.read()

    frame = cv2.resize(frame, (width, height))

    diff = cv2.absdiff(prev_frame, frame)
    gray_diff = cv2.cvtColor(diff, cv2.COLOR_BGR2GRAY)
    _, threshold = cv2.threshold(gray_diff, 30, 255, cv2.THRESH_BINARY)

    # 움직임이 있는지 확인
    if cv2.countNonZero(threshold) > 500:
        # 물체의 중점 좌표를 얻어오는 로직 (예시로 임의로 x, y 설정)
        object_x, object_y = 320, 240  # 중심 좌표로부터의 상대적인 좌표

        # 특정 구역에 물체가 있는지 확인
        x_min, y_min = int(width / 2 - rect_width / 2), int(height / 2 - rect_height / 2)
        x_max, y_max = int(width / 2 + rect_width / 2), int(height / 2 + rect_height / 2)

        if x_min <= object_x <= x_max and y_min <= object_y <= y_max:
            print("움직임 감지! 최종 사진을 찍고 서버에 전송합니다.")
            cv2.imwrite('final_captured_image.jpg', frame)

            # 서버에 최종 이미지 업로드
            server_url = 'http://localhost:8000/upload'
            files = {'image': open('final_captured_image.jpg', 'rb')}
            response = requests.post(server_url, files=files)
            print(response.text)

    cv2.imshow('Motion Detection', threshold)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

    prev_frame = frame

cap.release()
cv2.destroyAllWindows()
