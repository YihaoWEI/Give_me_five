# -*-coding:utf-8-*-
import requests
from json import JSONDecoder
import cv2
import time
import threading
import dlib
import time
import os
import json
import numpy as np


cascPath = "haarcascade_frontalface_default.xml"

projPath = "E:\\pycharms\\angelhack\\"

gamePath = "E:\\pycharms\\angelhack\\games\\"

detector = dlib.get_frontal_face_detector()  # 获取人脸分类器

faceCascade = cv2.CascadeClassifier(cascPath)

total_id = []


def compareIm(faceId1, faceId2):
    try:
        compare_url = "https://api-cn.faceplusplus.com/facepp/v3/compare"
        key = "6LDcuoDsE-dkUSCY1E3Yn7LeNb2lWVM1"
        secret = "kzlUxEX3-nsRpLioiJX8i18dtHBovATd"
        data = {"api_key": key, "api_secret": secret, "image_url1": faceId1}
        files = {"image_file2": open(faceId2, "rb")}
        response = requests.post(compare_url, data=data, files=files)

        req_con = response.content.decode('utf-8')
        req_dict = JSONDecoder().decode(req_con)
        confindence = req_dict['confidence']
        if confindence > 75:
            print("图片相似度：", confindence)
        return confindence
    except Exception:
        pass


def sbdg(input):
    while True:
        try:
            g = os.walk(projPath)
            for path, d, filelist in g:
                for filename in filelist:
                    if filename.endswith('jpg'):
                        tmp = os.path.join(path, filename)
                        # print(tmp)
                        tmp_url = "http://unibunny.party:8080/web/home/face/" + str(input["pic_path"])
                        print("URL： {}".format(tmp_url))
                        if compareIm(tmp_url, tmp) > 75:
                            print("身份确认是：", input["id"])
                            tmp_txt = tmp[:-3] + "txt"
                            f = open(tmp_txt, "w")
                            f.write(str(input["id"]))
                            f.close()

        except Exception:
            pass


def getimg():
    while True:
        ret, frame = cap.read()
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = faceCascade.detectMultiScale(
            gray,
            scaleFactor=1.3,  # scaleFactor upper means better
            minNeighbors=5,
            minSize=(30, 30),
            flags=cv2.cv2.CASCADE_SCALE_IMAGE
        )
        end = time.time()
        # Draw a rectangle around the faces

        dets = detector(frame, 1)

        total_id = [] # init []

        for index, face in enumerate(dets):

            left = face.left()
            top = face.top()
            right = face.right()
            bottom = face.bottom()
            cv2.rectangle(frame, (left, top), (right, bottom), (0, 200, 30 * index), 1)
            # cv2.putText(frame, str(index), (left, top), cv2.FONT_HERSHEY_SIMPLEX, 1.2, (0, 200, 30 * index), 5,
            #             cv2.LINE_AA)

            tmp_face = frame[top:bottom, left:right]
            tmp_face_name = "x_" + str(index) + ".jpg"
            cv2.imwrite(tmp_face_name, tmp_face)
            tmp_txt_ = tmp_face_name[:-3] + "txt"
            t_ = os.path.join(projPath, tmp_txt_)
            if os.path.exists(t_):

                f = open(tmp_txt_, "r")
                print("Read TXT")
                id = f.read()
                total_id.append(int(id))
                f.close()
                cv2.putText(frame, str(id), (right, 400), cv2.FONT_HERSHEY_SIMPLEX, 1.2, (0, 200, 30 * index), 5,
                            cv2.LINE_AA)
        # Display the resulting frame
        print("Total ID{}".format(total_id))
        cv2.imshow('WebCam', frame)

        end2 = "/api/angelhack/table/game/recommendation"
        ids = total_id
        data = {"ids": ids}
        # 2 得到推荐结果
        response2 = requests.post(url=base_url + end2, data=json.dumps(data), headers=headers)

        str2_ = str(response2.content, encoding="utf8")
        dict2_ = json.loads(str2_)

        reslist2 = dict2_["result"]
        if reslist2:
            for x in reslist2:
                pic_name = str(x["pic_url"])
                pic_name = os.path.join(gamePath, pic_name)
                print("Game url {}".format(pic_name))
                game_pic = cv2.imread(pic_name)
                cv2.imshow("Game Recommeded", game_pic)
                cv2.waitKey(1)

        print("List {}".format(str2_))



        if cv2.waitKey(1) & 0xFF == ord('q'):
            break


headers = {
    "Content-Type": "application/json"
}
base_url = "http://139.224.112.170:8081"
#  1 拉全量数据
end1 = "/api/angelhack/table/game/person"
print(base_url + end1)
response1 = requests.get(url=base_url + end1)

str_ = str( response1.content, encoding = "utf8")
dict_ = json.loads(str_)

reslist = dict_["result"]

# end2 = "/api/angelhack/table/game/recommendation"
# ids = [1, 2, 3]
# data = {"ids": ids}
# # 2 得到推荐结果
# response2 = requests.post(url=base_url + end2, data=json.dumps(data), headers=headers)



cap = cv2.VideoCapture(0)
threading.Thread(target=getimg).start()
for x in reslist:
    threading.Thread(target=sbdg, args=(x,)).start()
