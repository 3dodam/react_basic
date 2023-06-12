## ▶시작하기 

### 터미널에 JSON
![image](https://github.com/3dodam/react_basic/assets/129016953/d2c8bdff-3e98-460f-8200-7ecc8f777f3a)
![image](https://github.com/3dodam/react_basic/assets/129016953/72a778c4-57a6-433d-9811-4146e02ed46b)

### root에 db.json 파일 만들어 안에 내용 넣기 (bd 아니고 db!)
![image](https://github.com/3dodam/react_basic/assets/129016953/47cb6f8b-9439-4d2e-b6e6-72e7729b6f0d)
![image](https://github.com/3dodam/react_basic/assets/129016953/ea0f706b-e8bf-473a-b6b0-ca3a84cdc551)


### json 실행
![image](https://github.com/3dodam/react_basic/assets/129016953/e7d5a4ee-4fb4-4f50-9f34-a6aca3071206)

### 위와 같이 실행하면 port 3000번을 사용하기 때문에 React와 중복됨
#### 그래서 port를 변경해주어야함

      npx json-server --watch db.json --port 3004
   
## 서버와 통신하기

### 터미널에 npm axios
![image](https://github.com/3dodam/react_basic/assets/129016953/006b3215-336b-4286-967d-f3231565cf1e)

            npm i axios
            
### 내보내기
![image](https://github.com/3dodam/react_basic/assets/129016953/bdd2d990-636b-494c-bfc6-9385901197dd)
![image](https://github.com/3dodam/react_basic/assets/129016953/11ea01e9-3479-4061-a820-b654c41b8c7a)

            import axios from 'axios';
